import * as mongoose from 'mongoose';

import { User } from './User.model';

export type ChatDocument = Chat & mongoose.Document;

class Message {
	createdAt: Date;

	editedAt: Date;

	message: string;

	authorId: string;
}

class Chat {
	users: User[];
	messages: Message[];
}

const MessageSchema = new mongoose.Schema({
	createdAt: Date,

	editedAt: Date,

	message: String,

	authorId: {
		type: mongoose.Schema.Types.ObjectId,
	},
});

const ChatSchema = new mongoose.Schema<Chat>({
	createdAt: {
		type: Date,
		default: new Date(),
	},

	editedAt: Date,

	message: {
		type: [MessageSchema],
	},

	users: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
});

export { ChatSchema, Chat };
