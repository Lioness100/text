import { getModelForClass, prop } from '@typegoose/typegoose';


  
class Joke {
  
    @prop({ type: () => Jokes })
    public jokes!: Jokes[];
  }
  
  
class Jokes {
  @prop({default: '00-00-0000'})
  public createdAt = Date

  @prop({default: 'template'})
  public joketitle!: string;

  @prop({default: 'template'})
  public jokedescription!: string;
}
  

export const JokesModel = getModelForClass(Joke);

