import type { Snowflake } from 'discord.js'
import { getModelForClass, prop } from '@typegoose/typegoose';

class VM {
  @prop()
  guildId!: Snowflake;

  @prop()
  vcid!: Snowflake;
}

export const VoiceMaster = getModelForClass(VM);

