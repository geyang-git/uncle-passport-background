import { Body, Get, Inject, Post, Provide } from '@midwayjs/decorator';
import { BaseController, CoolController } from '@cool-midway/core';
import { PassportService } from '../service/passpport';

@Provide()
@CoolController('/passport')
export class PassportController extends BaseController {
  @Inject()
  passportService: PassportService;

  @Post()
  async passport(
    @Body('passport') passport: string[],
    @Body('destination') destination: string[],
    @Body('color') color: string[]
  ) {
    const data = await this.passportService.getData({
      passport,
      destination,
      color,
    });
    return this.ok(data);
  }

  @Get('/all')
  async getAllPassportList() {
    const data = await this.passportService.getAllPassportList();
    return this.ok(data);
  }
}
