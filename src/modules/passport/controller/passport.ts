import { Get, Inject, Provide, Query } from '@midwayjs/decorator';
import { BaseController, CoolController } from '@cool-midway/core';
import { PassportService } from '../service/passpport';

@Provide()
@CoolController('/passport')
export class PassportController extends BaseController {
  @Inject()
  passportService: PassportService;

  @Get()
  async passport(@Query('passport') passport: string) {
    const data = await this.passportService.getPassportList({
      passport,
    });
    return this.ok(data);
  }

  @Get('/all')
  async getAllPassportList() {
    const data = await this.passportService.getAllPassportList();
    return this.ok(data);
  }
}
