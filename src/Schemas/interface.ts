import type { Snowflake } from 'discord.js'
import { getModelForClass, prop } from '@typegoose/typegoose';

class Interface {
  @prop()
  _id!: Snowflake;

}

export const InterfaceModel = getModelForClass(Interface);

