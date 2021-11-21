export async function removeSpaces(str: Array<string>) {
    // To keep track of non-space
    // character count
    var count = 0;

    // Traverse the given string. If current
    // character is not space, then place
    // it at index 'count++'
    for (var i = 0; i < str.length; i++)
      if (str[i] !== " ") str[count++] = str[i];
     // here count is
    // incremented

    return count;
  }