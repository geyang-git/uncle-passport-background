import { BaseController, CoolController } from '@cool-midway/core';
import { Form4Entity } from '../../entity/Form4';

/**
 * 测试
 */
@CoolController({
  api: ['add', 'delete', 'update', 'info', 'page', 'list'],
  entity: Form4Entity,
})
export class Form4Controller extends BaseController {}
