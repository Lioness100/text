import { KeyModel } from '../Schemas/key'


export async function check(key: string){
    const dub = await KeyModel.findOne({_key: `${key}`}).lean();

    if(dub?._key == undefined){
        return false
    }

    return true;
}