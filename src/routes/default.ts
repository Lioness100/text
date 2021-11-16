import type { PieceContext } from '@sapphire/framework';
import { ApiRequest, ApiResponse, methods, Route, RouteOptions } from '@sapphire/plugin-api';

export class UserRoute extends Route {
	public constructor(context: PieceContext, options?: RouteOptions) {
		super(context, {
			...options,
			route: '',
		});
	}

	public [methods.GET](_request: ApiRequest, response: ApiResponse) {
		response.json({ msg: 'Not A Valid Endpoint, Valid Enpoints Are [/api/hug, /api/pp, /api/kiss, /api/cuddle]' });
        
	}
}