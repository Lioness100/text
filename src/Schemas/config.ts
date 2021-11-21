import type { Snowflake } from 'discord.js'
import { getModelForClass, prop } from '@typegoose/typegoose';

class Guild {
  @prop()
  _id!: Snowflake;

  @prop({default: 'i!'})
  prefix!: string;

  @prop({default: 0})
  mutedId!: Snowflake;

  @prop({default: 0})
  mainId!: Snowflake;
}

export const GuildModel = getModelForClass(Guild);

