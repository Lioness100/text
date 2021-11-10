import type { Snowflake } from 'discord.js'
import { getModelForClass, prop } from '@typegoose/typegoose';

class MoonRaid {
  @prop({unique: true})
  _guildId!: Snowflake;

  @prop({default: true})
  _enabled!: Boolean


  @prop({default: 1})
  _action!: Number;


  @prop({default: true})
    _create!: Boolean;

    @prop({default: true})
    _pfp!: Boolean;

    @prop({default: 5})
    _trigger!: Number;

    @prop({default: 5})
    _under!: Number;

    @prop({default: 5})
    _duration!: Number;
}


export const MoonRaidModel = getModelForClass(MoonRaid);

