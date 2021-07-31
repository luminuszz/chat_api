import * as mongoose from 'mongoose';

export type UserDocument = User & mongoose.Document;

class User {
	name: string;
	email: string;
}

const UserSchema = new mongoose.Schema<User>({
	name: {
		type: String,
		required: true,
	},

	email: {
		type: String,
		required: true,
	},
});

export { User, UserSchema };
