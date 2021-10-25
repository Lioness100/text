"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
require('./lib/setup');
const manager = new discord_js_1.ShardingManager('./bot.js');
manager.on('shardCreate', shard => console.log(`Launched shard ${shard.id}`));
manager.spawn();
//# sourceMappingURL=index.js.map