import type { Snowflake } from 'discord.js'
import { getModelForClass, prop } from '@typegoose/typegoose';

class Guild {
  @prop()
  _id!: Snowflake;

  @prop({default: 'i!'})
  prefix!: string;
}

export const GuildModel = getModelForClass(Guild);

