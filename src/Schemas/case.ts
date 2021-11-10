import type { Snowflake } from 'discord.js'
import { getModelForClass, prop } from '@typegoose/typegoose';

class Case {
  @prop({unique: false})
  _guildId!: Snowflake;
  
  @prop({unique: true})
  _caseid!: string;
  
  @prop({unique: false})
  _modid!: string;

  @prop({unique: false})
  _targetId!: string;

  @prop({unique: false})
  _reason!: string;

  @prop({unique: false})
  _type!: string;
}

export const CaseModel = getModelForClass(Case);

