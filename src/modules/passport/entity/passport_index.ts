import { EntityModel } from '@midwayjs/orm';
import { BaseEntity } from '@cool-midway/core';
import { Column, ManyToOne } from 'typeorm';
import { CountryEntity } from './country';

/**
 * 商品
 */
@EntityModel('passport_index_tidy_iso2')
export class PassportEntity extends BaseEntity {
  @ManyToOne(type => CountryEntity, country => country.iso)
  // @Column({ comment: 'Passport' })
  Passport: string;

  @ManyToOne(type => CountryEntity, country => country.iso)
  // @Column({ comment: 'Destination' })
  Destination: string;

  @Column({ comment: 'Requirement' })
  Requirement: string;
}
