import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  /** Делаем искусственную задержку на 2 секунд */
  @Get('/countries')
  getCountries(@Query() query) {
    return new Promise((resolve, reject) => {
      setTimeout(resolve, 2000);
    }).then(() => this.appService.getCountries(query));
  }
}
