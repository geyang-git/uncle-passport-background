import { EntityModel } from '@midwayjs/orm';
import { Column, OneToMany, PrimaryColumn } from 'typeorm';
import { PassportIndexEntity } from './passport_index';

@EntityModel('country')
export class CountryEntity {
  @OneToMany(type => PassportIndexEntity, passport => passport.Passport)
  @OneToMany(type => PassportIndexEntity, passport => passport.Destination)
  @Column({ comment: 'iso' })
  @PrimaryColumn()
  iso: string;

  @Column({ comment: 'name' })
  name: string;

  @Column({ comment: 'nicename' })
  nicename: string;

  @Column({ comment: 'iso3', default: '' })
  iso3: string;

  @Column({ comment: 'numcode', default: 0 })
  numcode: number;

  @Column({ comment: 'phonecode' })
  phonecode: number;

  @Column({ comment: 'ms', nullable: true })
  ms: number;

  @Column({ comment: 'cname', nullable: true })
  cname: string;

  @Column({ comment: 'rank', nullable: true })
  rank: number;

  @Column({ comment: 'irank', nullable: true })
  irank: number;
}
