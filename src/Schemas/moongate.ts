import type { Snowflake } from 'discord.js'
import { getModelForClass, prop } from '@typegoose/typegoose';

class MoonGate {
  @prop({unique: true})
  _guildId!: Snowflake;

  @prop()
  _enabled!: Boolean

  @prop()
  _DM!: Boolean;

  @prop()
  _BAF!: Boolean;

  @prop()
  _sus!: Boolean;

  @prop()
  _advert!: Boolean;

  @prop()
  _UBF!: Boolean;
  
  @prop()
  _noAv!: Boolean;

  @prop()
  _reqAge!: Boolean;
  
  @prop({unique: false})
  _age!: Number;
}

export const JoinGateModel = getModelForClass(MoonGate);

