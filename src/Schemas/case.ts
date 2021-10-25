import type { Snowflake } from 'discord.js'
import { getModelForClass, prop } from '@typegoose/typegoose';

class Case {
  @prop({unique: false})
  _guildId!: Snowflake;
  
  @prop({unique: true})
  _caseid!: String;
  
  @prop({unique: false})
  _modid!: String;

  @prop({unique: false})
  _targetId!: String;

  @prop({unique: false})
  _reason!: String;

  @prop({unique: false})
  _type!: String;
}

export const CaseModel = getModelForClass(Case);

