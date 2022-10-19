import { Provide } from '@midwayjs/decorator';
import { BaseService } from '@cool-midway/core';
import { Repository } from 'typeorm';
import { InjectEntityModel } from '@midwayjs/orm';
import { Form1Entity } from '../entity/form1';
import { Form4Entity } from '../entity/form4';
import { Form5Entity } from '../entity/form5';
import { Form2Entity } from '../entity/form2';
import { Form3Entity } from '../entity/form3';

@Provide()
export class FormService extends BaseService {
  @InjectEntityModel(Form1Entity)
  public form1EntityRepository: Repository<Form1Entity>;
  @InjectEntityModel(Form2Entity)
  public form2EntityRepository: Repository<Form2Entity>;
  @InjectEntityModel(Form3Entity)
  public form3EntityRepository: Repository<Form3Entity>;
  @InjectEntityModel(Form4Entity)
  public form4EntityRepository: Repository<Form4Entity>;
  @InjectEntityModel(Form5Entity)
  public form5EntityRepository: Repository<Form5Entity>;

  // 插入数据
  async insertForm1(data) {
    return await this.form1EntityRepository.save(data);
  }

  async insertForm2(data) {
    return await this.form2EntityRepository.save(data);
  }

  async insertForm3(data) {
    return await this.form3EntityRepository.save(data);
  }

  async insertForm4(data) {
    return await this.form4EntityRepository.save(data);
  }

  async insertForm5(data) {
    return await this.form5EntityRepository.save(data);
  }
}
