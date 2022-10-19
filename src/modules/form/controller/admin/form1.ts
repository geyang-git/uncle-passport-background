import { BaseController, CoolController } from '@cool-midway/core';
import { Form1Entity } from '../../entity/form1';

/**
 * 测试
 */
@CoolController({
  api: ['add', 'delete', 'update', 'info', 'page', 'list'],
  entity: Form1Entity,
})
export class Form1Controller extends BaseController {}
