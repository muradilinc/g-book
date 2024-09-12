import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { BookController } from './book/book.controller';
import {DatabaseService} from "./database/database.service";
import {AuthModule} from "./authentication/auth.module";
import {UsersController} from "./users/users.controller";

@Module({
  imports: [DatabaseModule, AuthModule],
  controllers: [AppController, BookController, UsersController],
  providers: [AppService, DatabaseService],
})
export class AppModule {}
