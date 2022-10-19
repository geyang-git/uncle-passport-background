import { BaseController, CoolController } from '@cool-midway/core';
import { Form3Entity } from '../../entity/Form3';

/**
 * 测试
 */
@CoolController({
  api: ['add', 'delete', 'update', 'info', 'page', 'list'],
  entity: Form3Entity,
})
export class Form3Controller extends BaseController {}
