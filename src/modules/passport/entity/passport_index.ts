import { EntityModel } from '@midwayjs/orm';
import { BaseEntity } from '@cool-midway/core';
import { ManyToOne } from 'typeorm';
import { CountryEntity } from './country';
import { PassportEntity } from './passport';

/**
 * 商品
 */
@EntityModel('passport_index_tidy_iso2')
export class PassportIndexEntity extends BaseEntity {
  @ManyToOne(type => CountryEntity, country => country.iso)
  Passport: CountryEntity;

  @ManyToOne(type => CountryEntity, country => country.iso)
  Destination: CountryEntity;

  @ManyToOne(type => PassportEntity, passport => passport.Requirement)
  Requirement: PassportEntity;
}
