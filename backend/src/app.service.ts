import { Injectable } from '@nestjs/common';
import { readFile } from 'fs/promises';
import { resolve } from 'path';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  async getCountries(query) {
    const searchField = query.q;

    const data = await readFile(
      resolve(__dirname, '../src/', 'data.json'),
      'utf-8',
    );

    if (searchField) {
      return JSON.parse(data).filter((element) => {
        return element.country
          .toLowerCase()
          .includes(searchField.toLowerCase());
      });
    }
    return [];
  }
}
