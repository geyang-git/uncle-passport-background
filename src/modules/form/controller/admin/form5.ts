import { BaseController, CoolController } from '@cool-midway/core';
import { Form5Entity } from '../../entity/Form5';

/**
 * 测试
 */
@CoolController({
  api: ['add', 'delete', 'update', 'info', 'page', 'list'],
  entity: Form5Entity,
})
export class Form5Controller extends BaseController {}
