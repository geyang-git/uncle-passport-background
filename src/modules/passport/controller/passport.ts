import { Get, Inject, Provide, Query } from '@midwayjs/decorator';
import { BaseController, CoolController } from '@cool-midway/core';
import { PassportService } from '../service/goods';

@Provide()
@CoolController('/passport')
export class PassportController extends BaseController {
  @Inject()
  passportService: PassportService;

  @Get()
  async passport(@Query('passport') passport: string) {
    const data = await this.passportService.getPassportList({
      Passport: passport,
    });
    return this.ok(data);
  }

  // getAllPassportList
  @Get('/all')
  async getAllPassportList() {
    const data = await this.passportService.getAllPassportList();
    return this.ok(data);
  }
}
