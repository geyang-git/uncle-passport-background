import { Provide } from '@midwayjs/decorator';
import { BaseService } from '@cool-midway/core';
import { Repository } from 'typeorm';
import { PassportEntity } from '../entity/goods';
import { InjectEntityModel } from '@midwayjs/orm';

@Provide()
export class PassportService extends BaseService {
  @InjectEntityModel(PassportEntity)
  public passportEntityRepository: Repository<PassportEntity>;

  /**
   * 根据Passport获得列表
   */
  async getPassportList(data: { Passport: string }) {
    return await this.passportEntityRepository.find({
      where: {
        Passport: data.Passport,
      },
    });
  }

  /**
   * 获取所有Passport列表
   */
  async getAllPassportList() {
    const list = await this.passportEntityRepository.find();
    return list.map(item => item.Passport);
  }
}
