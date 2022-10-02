import { EntityModel } from '@midwayjs/orm';
import { BaseEntity } from '@cool-midway/core';
import { Column, Index } from 'typeorm';

/**
 * 商品
 */
@EntityModel('passport_index_tidy')
export class PassportEntity extends BaseEntity {
  @Index()
  @Column({ comment: 'Passport' })
  Passport: string;

  @Column({ comment: 'Destination' })
  Destination: string;

  @Column({ comment: 'Requirement' })
  Requirement: string;
}
