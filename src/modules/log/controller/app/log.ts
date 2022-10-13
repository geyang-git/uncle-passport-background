import { Inject, Post, Provide } from '@midwayjs/decorator';
import { BaseController, CoolController } from '@cool-midway/core';
import { LogService } from '../../service/log';
import { Context } from '@midwayjs/koa';

/**
 * 缓存
 */
@Provide()
@CoolController('/log')
export class LogController extends BaseController {
  @Inject()
  logService: LogService;

  @Inject()
  ctx: Context;

  @Post()
  async add() {
    console.log(this.ctx);
    await this.logService.addItem(
      <string>this.ctx.headers['x-real-ip'],
      this.ctx.headers.referer,
      this.ctx.headers
    );
    return this.ok();
  }
}
