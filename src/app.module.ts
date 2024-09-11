import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { BookController } from './book/book.controller';
import {DatabaseService} from "./database/database.service";

@Module({
  imports: [DatabaseModule],
  controllers: [AppController, BookController],
  providers: [AppService, DatabaseService],
})
export class AppModule {}
