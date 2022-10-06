import { EntityModel } from '@midwayjs/orm';
import { Column, OneToMany, PrimaryColumn } from 'typeorm';
import { PassportEntity } from './passport_index';

@EntityModel('country')
export class CountryEntity {
  @OneToMany(type => PassportEntity, passport => passport.Passport)
  @OneToMany(type => PassportEntity, passport => passport.Destination)
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
}
