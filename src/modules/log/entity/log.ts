import { EntityModel } from '@midwayjs/orm';
import { BaseEntity } from '@cool-midway/core';
import { Column } from 'typeorm';

/**
 * log
 */
@EntityModel('log')
export class LogEntity extends BaseEntity {
  @Column({ comment: 'IP' })
  ip: string;

  @Column({ comment: 'url', nullable: true })
  url: string;
}
