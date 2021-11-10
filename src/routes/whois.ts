import { ApplyOptions } from '@sapphire/decorators';
import { ApiRequest, ApiResponse, methods, Route, RouteOptions } from '@sapphire/plugin-api';

@ApplyOptions<RouteOptions>({ route: '/api/bot/guilds/:guild/members/:member' })
export class UserRoute extends Route {
	public async [methods.GET](_request: ApiRequest, response: ApiResponse) {
        
		_request.params == {guild: '...', member: '...'}

        const params = _request.params
        
        if(params.guild == ':guild'){
            return response.json({msg: "Please Provide A Valid Guild ID."});
        }

        if(params.member == ':member'){
            return response.json({msg: "Please Enter A Valid Member"});
        }

        const guild = await this.container.client.guilds.cache.get(`${params.guild}`)
        
        if(guild == undefined){
            return response.json({msg: "This Guild Cannot Be Found. Ensure The Bot Is Within That Guild."})
        }

        const member = await guild.members.fetch(params.member).catch(async () => {
            return response.json({msg: "That Member Cannot Be Found. Ensure The Bot Is Within That Guild."});
        })

        return response.json({msg: `Simply, That member is ${member?.user.tag}`});
	}
}