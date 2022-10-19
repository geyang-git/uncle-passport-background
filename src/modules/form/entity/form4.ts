import { EntityModel } from '@midwayjs/orm';
import { BaseEntity } from '@cool-midway/core';
import { Column } from 'typeorm';

/**
 * 商品
 */
@EntityModel('form4')
export class Form4Entity extends BaseEntity {
  @Column({ comment: '姓名' })
  name: string;

  @Column({ comment: '电话' })
  phone: string;

  @Column({ comment: '邮箱' })
  email: string;

  @Column({ comment: '国籍' })
  country: string;

  // 工作部门
  @Column({ comment: '工作部门' })
  department: string;

  //职位
  @Column({ comment: '职位' })
  position: string;

  // 您希望我们如何联系您？
  @Column({ comment: '您希望我们如何联系 0-电话 1-邮件 2-传真' })
  contact: number;

  @Column({ comment: '问题或意见' })
  message: string;

  // 状态
  @Column({ comment: '状态 0-未处理 1-正在处理 2-已处理', default: 0 })
  status: number;

  // 备注
  @Column({ comment: '备注', nullable: true })
  remark: string;
}
