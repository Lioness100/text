import type { Snowflake } from 'discord.js'
import { getModelForClass, prop } from '@typegoose/typegoose';

class Mod {
  @prop({default: 0})
  _id!: Snowflake;
  
  @prop({default: 0})
  _modid!: Snowflake;

  @prop({default: 0})
  _adminid!: Snowflake;
}

export const ModModel = getModelForClass(Mod);

