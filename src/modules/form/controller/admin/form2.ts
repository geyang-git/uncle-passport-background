import { BaseController, CoolController } from '@cool-midway/core';
import { Form2Entity } from '../../entity/Form2';

/**s
 * 测试
 */
@CoolController({
  api: ['add', 'delete', 'update', 'info', 'page', 'list'],
  entity: Form2Entity,
})
export class Form2Controller extends BaseController {}
