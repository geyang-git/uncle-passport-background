import { EntityModel } from '@midwayjs/orm';
import { BaseEntity } from '@cool-midway/core';
import { Column } from 'typeorm';

/**
 * 商品
 */
@EntityModel('form3')
export class Form3Entity extends BaseEntity {
  @Column({ comment: '姓名' })
  name: string;

  @Column({ comment: '电话' })
  phone: string;

  @Column({ comment: '邮箱' })
  email: string;

  @Column({ comment: '活动国家' })
  country: string;

  //目标市场
  @Column({ comment: '目标市场' })
  market: string;

  // 对哪国的移民计划感兴趣？
  @Column({ comment: '对哪国的移民计划感兴趣？' })
  interest: string;

  // 您的职业
  @Column({ comment: '您的职业 0-律师 1-会计 2-移民顾问 3-金融机构 4-其他' })
  occupation: number;

  // 您希望我们如何联系您？
  @Column({ comment: '您希望我们如何联系 0-电话 1-邮件 2-传真' })
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
