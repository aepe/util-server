/*
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2020-01-19 14:10:42
 * @LastEditors  : bhabgs
 * @LastEditTime : 2020-01-19 15:08:15
 */
import { Module } from '@nestjs/common';
import { join } from 'path';
import { ServeStaticModule } from '@nestjs/serve-static';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ToolListController } from './tool-list/tool-list.controller';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'client'),
    }),
  ],
  controllers: [AppController, ToolListController],
  providers: [AppService],
})
export class AppModule {}
