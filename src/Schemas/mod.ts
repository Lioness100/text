import type { Snowflake } from 'discord.js'
import { getModelForClass, prop } from '@typegoose/typegoose';

class Mod {
  @prop()
  _id!: Snowflake;
  
  @prop()
  _modid!: Snowflake;

  @prop()
  _adminid!: Snowflake;
}

export const ModModel = getModelForClass(Mod);

