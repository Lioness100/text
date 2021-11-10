import type { Snowflake } from 'discord.js'
import { getModelForClass, prop } from '@typegoose/typegoose';

class MoonGate {
  @prop({unique: true})
  _guildId!: Snowflake;

  @prop()
  _enabled!: boolean

  @prop({default: true})
  _DM!: boolean;

  @prop({default: true})
  _BAF!: boolean;

  @prop({default: true})
  _sus!: boolean;

  @prop({default: true})
  _advert!: boolean;

  @prop({default: true})
  _UBF!: boolean;
  
  @prop({default: true})
  _noAv!: boolean;

  @prop({default: true})
  _reqAge!: boolean;
  
  @prop({unique: false})
  _age!: number;
}

export const JoinGateModel = getModelForClass(MoonGate);

