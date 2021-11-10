import { getModelForClass, prop } from '@typegoose/typegoose';

class Key {
  @prop({unique: true})
  _key!: string;

}

export const KeyModel = getModelForClass(Key);

