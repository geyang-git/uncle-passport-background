import { Provide } from '@midwayjs/decorator';
import { BaseService } from '@cool-midway/core';
import { Repository } from 'typeorm';
import { InjectEntityModel } from '@midwayjs/orm';
import { PassportEntity } from '../entity/passport_index';
import { CountryEntity } from '../entity/country';

@Provide()
export class PassportService extends BaseService {
  @InjectEntityModel(PassportEntity)
  public passportEntityRepository: Repository<PassportEntity>;

  @InjectEntityModel(CountryEntity)
  public countryEntityRepository: Repository<CountryEntity>;

  /**
   * 根据Passport获得列表
   */
  async getPassportList(data: { Passport: string }) {
    const passport = await this.countryEntityRepository.findOne({
      where: { iso: data.Passport },
    });
    if (!passport) {
      return [];
    }
    const list = await this.passportEntityRepository.find({
      where: {
        Passport: passport,
      },
      relations: ['Destination'],
      select: ['Destination', 'Requirement'],
    });
    // 以Requirement分组统计
    const result = {};
    list.forEach(item => {
      const Requirement = item.Requirement;
      if (!result[Requirement]) {
        result[Requirement] = [];
      }
      result[Requirement].push(item);
    });
    return {
      list,
      result,
    };
  }

  /**
   * 获取所有Passport列表
   */
  async getAllPassportList() {
    // passport 表的 passportIso 对应 country 的 iso 字段
    // 在 country 获取对应的 nicename 并去重
    return (
      await this.passportEntityRepository
        .createQueryBuilder('passport')
        .leftJoinAndSelect('passport.Passport', 'country')
        .select('country.nicename', 'name')
        .addSelect('country.iso', 'iso')
        .distinct(true)
        .getRawMany()
    ).filter(item => item.name);
  }
}
