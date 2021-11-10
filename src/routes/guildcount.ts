import { ApplyOptions } from '@sapphire/decorators';
import { ApiRequest, ApiResponse, methods, Route, RouteOptions } from '@sapphire/plugin-api';

@ApplyOptions<RouteOptions>({ route: '/api/bot/guilds' })
export class UserRoute extends Route {
	public async [methods.GET](_request: ApiRequest, response: ApiResponse) {
        const amount = await this.container.client.guilds.cache.size
        
		response.json({ message: `Ah, You've Found This Mysterious Page Eh? Well The Server Count Is ${amount}` });
	}
}