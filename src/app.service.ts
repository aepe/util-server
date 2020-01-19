/*
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2020-01-19 14:10:42
 * @LastEditors: bhabgs
 * @LastEditTime: 2020-01-19 16:10:07
 */
import { Injectable, Post } from '@nestjs/common';

@Injectable()
export class AppService {
  @Post('/getHellow')
  getHello(): string {
    return 'Hello World!';
  }
}
