import { ApplyOptions } from '@sapphire/decorators';
import { ApiRequest, ApiResponse, methods, Route, RouteOptions } from '@sapphire/plugin-api';
import { check } from '../scripts/check'
import fs from 'fs'
import { removeSpaces } from '../scripts/remove-spaces'

@ApplyOptions<RouteOptions>({ route: '/api/joke' })
export class UserRoute extends Route {
	public async [methods.GET](_request: ApiRequest, response: ApiResponse) {
        const headers = _request.headers['x-key']?.toString();

        if(headers == null){
            return response.json({msg: "No Valid Headers We're Provided."})
        }

        const res = await check(headers)

        
        if(res){
            const file  = fs.readFileSync('../API/jokes.json', 'utf-8')
            const res = await file.split(":")
            var i = await removeSpaces(res)

            return response.json({msg: res.join(":").substring(0, i)});
        }

        else return response.json({msg: "Nah, Nice try Jit."});
	}

    public async [methods.POST](_request: ApiRequest, response: ApiResponse){
        const headers = _request.headers['owner-key-only']?.toString();
        const req = _request.headers['joke-title']?.toString();
        const req2 = _request.headers['joke-desc']?.toString();

        if(headers == null){
            return response.json({msg: "No Valid Headers We're Provided."});
        }

        if(headers == '5578a43e-98a1-43f1-a667-b455886830c9'){
            if(req == null){
                return response.json({msg: "Please Provide A Valid Title For The Joke."});
            }
            if(req2 == null){
                return response.json({msg: "Please Provide A Valid Description For The Joke"})
            }

            

            return response.json({msg: "Uploaded New Gif. Can Now Be Used!"})
        }
        else return response.json({msg: "Jit, This Is The Owner Only, Good Luck Getting This Yk ;)"});
    }
}