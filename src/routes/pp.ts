import { ApplyOptions } from '@sapphire/decorators';
import { ApiRequest, ApiResponse, methods, Route, RouteOptions } from '@sapphire/plugin-api';
import { check } from '../scripts/check'

@ApplyOptions<RouteOptions>({ route: '/api/pp' })
export class UserRoute extends Route {
	public async [methods.GET](_request: ApiRequest, response: ApiResponse) {
		const headers = _request.headers['x-key']?.toString();

        if(headers == null){
            return response.json({msg: "No Valid Headers We're Provided."})
        }

        const res = await check(headers)

        
        if(res){
            const sizes = ['8==>', '8=>', '8====>', '8==========>', '8===>', '8=====================>']
            
            function random() {
                const res = sizes[Math.floor(Math.random() * sizes.length)];
                return res
            }


            return response.json({msg: random()});
        }

        else return response.json({msg: "Nah, Nice try Jit."});
	}

	public [methods.POST](_request: ApiRequest, response: ApiResponse) {
		response.json({ message: 'Hello World' });
	}
}