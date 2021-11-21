import { ApplyOptions } from '@sapphire/decorators';
import { ApiRequest, ApiResponse, methods, Route, RouteOptions } from '@sapphire/plugin-api';
import { check } from '../scripts/check'

@ApplyOptions<RouteOptions>({ route: '/api' })
export class UserRoute extends Route {
	public async [methods.GET](_request: ApiRequest, response: ApiResponse) {
        const headers = _request.headers['x-key']?.toString();

        if(headers == null){
            return response.json({msg: "No Valid Headers We're Provided."})
        }

        const res = await check(headers)

        
        if(res){
            return response.json({msg: "Not A Valid Endpoint. The Current Valid Endpoints Are [/api/hug, /api/pp, /api/kiss, /api/cuddle]"})
        }

        else return response.json({msg: "Nah, Nice try Jit."});
	}
}