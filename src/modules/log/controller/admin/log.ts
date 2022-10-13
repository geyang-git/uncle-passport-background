import { BaseController, CoolController } from '@cool-midway/core';
import { LogEntity } from '../../entity/log';

/**
 * 测试
 */
@CoolController({
  api: ['delete', 'info', 'page', 'list'],
  entity: LogEntity,
})
export class LogController extends BaseController {}
