import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {
	SubscribeMessage,
	WebSocketGateway,
	OnGatewayConnection,
} from '@nestjs/websockets';
import { Model } from 'mongoose';
import { User, UserDocument } from './models/User.model';

@Injectable()
@WebSocketGateway({ transports: ['websocket'] })
export class ChatGateway implements OnGatewayConnection {
	constructor(
		@InjectModel(User.name)
		private readonly userModel: Model<UserDocument>,
	) {}

	public handleConnection(client: any, ...args: any[]) {
		console.log('client', client);
	}

	@SubscribeMessage('message')
	public handleMessage(client: any, payload: any): string {
		return 'Hello world!';
	}
}
