import { Provide } from '@midwayjs/decorator';
import { BaseService } from '@cool-midway/core';
import { InjectEntityModel } from '@midwayjs/orm';
import { LogEntity } from '../entity/log';
import { Repository } from 'typeorm';

/**
 * 缓存
 */
@Provide()
export class LogService extends BaseService {
  @InjectEntityModel(LogEntity)
  logEntityRepository: Repository<LogEntity>;

  async addItem(ip: string, url: string, headers: any) {
    const log = new LogEntity();
    log.ip = ip;
    log.url = url;
    log.headers = JSON.stringify(headers);
    await this.logEntityRepository.save(log);
  }
}
