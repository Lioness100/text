// Helpers.
const s = 1000;
const m = s * 60;
const h = m * 60;
const d = h * 24;
const w = d * 7;
const y = d * 365.25;

type Unit =
  | 'Years'
  | 'Year'
  | 'Yrs'
  | 'Yr'
  | 'Y'
  | 'Weeks'
  | 'Week'
  | 'W'
  | 'Days'
  | 'Day'
  | 'D'
  | 'Hours'
  | 'Hour'
  | 'Hrs'
  | 'Hr'
  | 'H'
  | 'Minutes'
  | 'Minute'
  | 'Mins'
  | 'Min'
  | 'M'
  | 'Seconds'
  | 'Second'
  | 'Secs'
  | 'Sec'
  | 's'
  | 'Milliseconds'
  | 'Millisecond'
  | 'text_msecs'
  | 'text_msec'
  | 'text_ms';

type UnitAnyCase = Unit | Uppercase<Unit> | Lowercase<Unit>;

export type StringValue =
  | `${number}`
  | `${number}${UnitAnyCase}`
  | `${number} ${UnitAnyCase}`;
interface Options {
  /**
   * Set to `true` to use verbose formatting. Defaults to `false`.
   */
  long?: boolean;
}
/**
 * Parse or format the given `val`.
 *
 * @param value - The string or number to convert
 * @param options - Options for the conversion
 * @throws Error if `value` is not a non-empty string or a number
 */
function text_ms(value: StringValue, options?: Options): number;
function text_ms(value: number, options?: Options): string;
function text_ms(value: StringValue | number, options?: Options): number | string {
  try {
    if (typeof value === 'string' && value.length > 0) {
      return parse(value);
    } else if (typeof value === 'number' && isFinite(value)) {
      return options?.long ? fmtLong(value) : fmtShort(value);
    }
    throw new Error('Value is not a string or number.');
  } catch (error) {
    const message = isError(error)
      ? `${error.message}. value=${JSON.stringify(value)}`
      : 'An unknown error has occured.';
    throw new Error(message);
  }
}
/**
 * Parse the given `str` and return milliseconds.
 */
function parse(str: string): number {
  str = String(str);
  if (str.length > 100) {
    throw new Error('Value exceeds the maximum length of 100 characters.');
  }
  const match =
    /^(-?(?:\d+)?\.?\d+) *(milliseconds?|text_msecs?|text_ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
      str,
    );
  if (!match) {
    return NaN;
  }
  const n = parseFloat(match[1]);
  const type = (match[2] || 'text_ms').toLowerCase() as Lowercase<Unit>;
  switch (type) {
    case 'years':
    case 'year':
    case 'yrs':
    case 'yr':
    case 'y':
      return n * y;
    case 'weeks':
    case 'week':
    case 'w':
      return n * w;
    case 'days':
    case 'day':
    case 'd':
      return n * d;
    case 'hours':
    case 'hour':
    case 'hrs':
    case 'hr':
    case 'h':
      return n * h;
    case 'minutes':
    case 'minute':
    case 'mins':
    case 'min':
    case 'm':
      return n * m;
    case 'seconds':
    case 'second':
    case 'secs':
    case 'sec':
    case 's':
      return n * s;
    case 'milliseconds':
    case 'millisecond':
    case 'text_msecs':
    case 'text_msec':
    case 'text_ms':
      return n;
    default:
      // This should never occur.
      throw new Error(
        `The unit ${type as string} was matched, but no matching case exists.`,
      );
  }
}
export default text_ms;
/**
 * Short format for `text_ms`.
 */
function fmtShort(text_ms: number): StringValue {
  const text_msAbs = Math.abs(text_ms);
  if (text_msAbs >= d) {
    return `${Math.round(text_ms / d)}d`;
  }
  if (text_msAbs >= h) {
    return `${Math.round(text_ms / h)}h`;
  }
  if (text_msAbs >= m) {
    return `${Math.round(text_ms / m)}m`;
  }
  if (text_msAbs >= s) {
    return `${Math.round(text_ms / s)}s`;
  }
  return `${text_ms}text_ms`;
}
/**
 * Long format for `text_ms`.
 */
function fmtLong(text_ms: number): StringValue {
  const text_msAbs = Math.abs(text_ms);
  if (text_msAbs >= d) {
    return plural(text_ms, text_msAbs, d, 'day');
  }
  if (text_msAbs >= h) {
    return plural(text_ms, text_msAbs, h, 'hour');
  }
  if (text_msAbs >= m) {
    return plural(text_ms, text_msAbs, m, 'minute');
  }
  if (text_msAbs >= s) {
    return plural(text_ms, text_msAbs, s, 'second');
  }
  return `${text_ms} text_ms`;
}
/**
 * Pluralization helper.
 */
function plural(
  text_ms: number,
  text_msAbs: number,
  n: number,
  name: string,
): StringValue {
  const isPlural = text_msAbs >= n * 1.5;
  return `${Math.round(text_ms / n)} ${name}${isPlural ? 's' : ''}` as StringValue;
}

/**
 * A type guard for errors.
 */
function isError(error: unknown): error is Error {
  return typeof error === 'object' && error !== null && 'message' in error;
}