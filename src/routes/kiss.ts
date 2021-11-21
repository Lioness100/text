import { ApplyOptions } from '@sapphire/decorators';
import { ApiRequest, ApiResponse, methods, Route, RouteOptions } from '@sapphire/plugin-api';
import { check } from '../scripts/check'
import { GifsModel } from '../Schemas/gifs';
import uuid4 from 'uuid4'

@ApplyOptions<RouteOptions>({ route: '/api/kiss' })
export class UserRoute extends Route {
	public async [methods.GET](_request: ApiRequest, response: ApiResponse) {
        const headers = _request.headers['x-key']?.toString();

        if(headers == null){
            return response.json({msg: "No Valid Headers We're Provided."})
        }

        const res = await check(headers)

        
        if(res){
            const giff = await GifsModel.aggregate([
                { $match: { type: "kiss"}},
                { $sample: { size: 1}}
              ]) 

            return response.json({msg: giff[0].url})
        }

        else return response.json({msg: "Nah, Nice try Jit."});
	}

    public async [methods.POST](_request: ApiRequest, response: ApiResponse){
        const headers = _request.headers['owner-key-only']?.toString();
        const req = _request.headers['file-url']?.toString();

        if(headers == null){
            return response.json({msg: "No Valid Headers We're Provided."});
        }

        if(headers == '5578a43e-98a1-43f1-a667-b455886830c9'){
            if(req == null){
                return response.json({msg: "Please Provide A URL For The GIF."});
            }
            await GifsModel.create({
                number: uuid4(),
                type: 'kiss',
                url: req
            })

            return response.json({msg: "Uploaded New Gif. Can Now Be Used!"})
        }
        else return response.json({msg: "Jit, This Is The Owner Only, Good Luck Getting This Yk ;)"});
    }
}