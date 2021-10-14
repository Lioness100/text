import { Listener } from '@sapphire/framework';
import type { Message } from 'discord.js';
export declare class UserEvent extends Listener<'mentionPrefixOnly'> {
    run(message: Message): Promise<Message>;
}
//# sourceMappingURL=mentionOnlyPrefix.d.ts.map