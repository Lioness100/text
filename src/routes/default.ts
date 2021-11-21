import { ApplyOptions } from '@sapphire/decorators';
import { ApiRequest, ApiResponse, methods, Route, RouteOptions } from '@sapphire/plugin-api';

@ApplyOptions<RouteOptions>({ route: '/api' })
export class UserRoute extends Route {

	public [methods.GET](_request: ApiRequest, response: ApiResponse) {
		response.json({ msg: 'Not A Valid Endpoint, Valid Endpoints Are [/api/hug, /api/pp, /api/kiss, /api/cuddle]' });
        
	}
}