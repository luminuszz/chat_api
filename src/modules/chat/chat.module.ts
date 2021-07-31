/* eslint-disable @typescript-eslint/no-var-requires */
import { Module } from '@nestjs/common';
import { ChatService } from './chat.service';
import { ChatGateway } from './chat.gateway';
import { MongooseModule } from '@nestjs/mongoose';
import { Chat, ChatSchema } from './models/Chat.model';
import { User, UserSchema } from './models/User.model';

@Module({
	imports: [
		MongooseModule.forFeatureAsync([
			{
				name: User.name,
				useFactory: async () => {
					const sh = UserSchema.plugin(require('mongoose-autopopulate'));

					return sh;
				},
			},
			{
				name: Chat.name,
				useFactory: async () => {
					const sh = ChatSchema.plugin(require('mongoose-autopopulate'));

					return sh;
				},
			},
		]),
	],
	providers: [ChatService, ChatGateway],
})
export class ChatModule {}
