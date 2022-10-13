import { BaseController, CoolController } from '@cool-midway/core';
import { LogEntity } from '../../entity/log';

/**
 * 测试
 */
@CoolController({
  api: ['add', 'delete', 'update', 'info', 'page', 'list'],
  entity: LogEntity,
})
export class LogController extends BaseController {}
