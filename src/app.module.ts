import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import { ChatModule } from './modules/chat/chat.module';

@Module({
	imports: [
		ConfigModule.forRoot({
			isGlobal: true,
		}),
		ChatModule,
		MongooseModule.forRootAsync({
			useFactory: async (config: ConfigService<Env.Vars>, ...args) => ({
				uri: `mongodb://${config.get('MONGO_HOST')}:${config.get(
					'MONGO_PORT',
				)}/chat_api`,
				useNewUrlParser: true,
			}),
			inject: [ConfigService],
		}),
	],
})
export class AppModule {}
