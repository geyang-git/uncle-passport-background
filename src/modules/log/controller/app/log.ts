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

  @Post('')
  async add() {
    await this.logService.addItem(this.ctx.ip, this.ctx.headers.from);
    return this.ok();
  }
}
