import { Provide } from '@midwayjs/decorator';
import { BaseService } from '@cool-midway/core';
import { In, Repository } from 'typeorm';
import { InjectEntityModel } from '@midwayjs/orm';
import { PassportIndexEntity } from '../entity/passport_index';
import { CountryEntity } from '../entity/country';
import { PassportEntity } from '../entity/passport';

@Provide()
export class PassportService extends BaseService {
  @InjectEntityModel(PassportIndexEntity)
  public passportIndexEntityRepository: Repository<PassportIndexEntity>;

  @InjectEntityModel(CountryEntity)
  public countryEntityRepository: Repository<CountryEntity>;

  @InjectEntityModel(PassportEntity)
  public passportEntityRepository: Repository<PassportEntity>;

  /**
   * 根据筛选条件获取数据
   */
  async getData(data: {
    passport: string[];
    destination: string[];
    color: string[];
  }) {
    const { passport, destination, color } = data;
    const where = {};
    if (passport && passport.length > 0) {
      // CountryEntity
      const country = await this.countryEntityRepository
        .createQueryBuilder('country')
        .where('country.iso IN (:...iso)', { iso: passport })
        .getMany();
      where['Passport'] = In(country.map(item => item.iso));
    } else {
      where['Passport'] = In([]);
    }
    if (destination && destination.length > 0) {
      // CountryEntity
      const country = await this.countryEntityRepository
        .createQueryBuilder('country')
        .where('country.iso IN (:...iso)', { iso: destination })
        .getMany();
      where['Destination'] = In(country.map(item => item.iso));
    } else {
      where['Destination'] = In([]);
    }
    if (color && color.length > 0) {
      // PassportEntity
      const passport = await this.passportEntityRepository
        .createQueryBuilder('passport')
        .where('passport.color IN (:...color)', { color })
        .getMany();
      where['Requirement'] = In(passport.map(item => item.Requirement));
    }
    return await this.passportIndexEntityRepository.find({
      where,
      select: ['id'],
      relations: ['Passport', 'Destination', 'Requirement'],
    });
  }

  /**
   * 获取所有Passport列表
   */
  async getAllPassportList() {
    // passport 表的 passportIso 对应 country 的 iso 字段
    // 在 country 获取对应的 nicename 并去重
    return (
      await this.passportIndexEntityRepository
        .createQueryBuilder('passport')
        .leftJoinAndSelect('passport.Passport', 'country')
        .select('country.nicename', 'name')
        .addSelect('country.iso', 'iso')
        .distinct(true)
        .getRawMany()
    ).filter(item => item.name);
  }
}
