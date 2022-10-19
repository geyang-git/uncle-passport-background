import { ALL, Inject, Post, Provide } from '@midwayjs/decorator';
import { BaseController, CoolController } from '@cool-midway/core';
import { FormService } from '../service/form';
import { Body } from '@midwayjs/decorator/dist/decorator/web/paramMapping';

@Provide()
@CoolController('/form')
export class FormController extends BaseController {
  @Inject()
  formService: FormService;

  @Post('/1')
  async insert(@Body(ALL) data: any) {
    return this.ok(await this.formService.insertForm1(data));
  }

  @Post('/2')
  async insert2(@Body(ALL) data: any) {
    return this.ok(await this.formService.insertForm2(data));
  }

  @Post('/3')
  async insert3(@Body(ALL) data: any) {
    return this.ok(await this.formService.insertForm3(data));
  }

  @Post('/4')
  async insert4(@Body(ALL) data: any) {
    return this.ok(await this.formService.insertForm4(data));
  }

  @Post('/5')
  async insert5(@Body(ALL) data: any) {
    return this.ok(await this.formService.insertForm5(data));
  }
}
