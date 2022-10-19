import { EntityModel } from '@midwayjs/orm';
import { BaseEntity } from '@cool-midway/core';
import { Column } from 'typeorm';

/**
 * 商品
 */
@EntityModel('form2')
export class Form2Entity extends BaseEntity {
  @Column({ comment: '姓名' })
  name: string;

  @Column({ comment: '电话' })
  phone: string;

  @Column({ comment: '邮箱' })
  email: string;

  @Column({ comment: '性别 0-男 1-女' })
  gender: number;

  //婚姻状况
  @Column({ comment: '婚姻状况 0-未婚 1-已婚 2-离异' })
  marriage: number;

  //有无管理经验
  @Column({ comment: '有无管理经验 0-无 1-有' })
  experience: number;

  @Column({ comment: '资产总值' })
  assets: number;

  @Column({ comment: '国籍' })
  country: string;

  @Column({ comment: '居住地' })
  residence: string;

  @Column({ comment: '提供证明2年管理经验 0-愿意提供 1-不愿意' })
  proof: number;

  // 有无移民律师
  @Column({ comment: '有无移民律师 0-无 1-有' })
  lawyer: number;

  //您希望我们如何联系您？
  @Column({ comment: '您希望我们如何联系您？ 0-电话 1-邮件 2-传真' })
  contact: number;

  // 您是如何知道我们的
  @Column({ comment: '您是如何知道我们的 0-谷歌 1-个人推荐 2-顾问推荐' })
  know: number;

  @Column({ comment: '问题或意见' })
  message: string;

  // 状态
  @Column({ comment: '状态 0-未处理 1-正在处理 2-已处理', default: 0 })
  status: number;

  // 备注
  @Column({ comment: '备注', nullable: true })
  remark: string;
}
