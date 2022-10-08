import { EntityModel } from '@midwayjs/orm';
import { Column, OneToMany, PrimaryColumn } from 'typeorm';
import { PassportIndexEntity } from './passport_index';

/**
 * 商品
 */
@EntityModel('passport')
export class PassportEntity {
  @OneToMany(
    type => PassportIndexEntity,
    passportIndex => passportIndex.Requirement
  )
  @PrimaryColumn()
  Requirement: string;

  @Column({ comment: 'color' })
  color: string;
}
