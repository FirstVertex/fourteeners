import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IMountain } from '../interfaces/mountain';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MountainService {
  models: IMountain[];
  activeModel$: Subject<IMountain> = new Subject<IMountain>();

  constructor(private httpClient: HttpClient) { }

  async getAll(): Promise<IMountain[]> {
    return await this.httpClient.get<IMountain[]>('/assets/data/14ers.json').toPromise().then(m => this.models = m);
  }

  // async getByPage(page: number = 1) {
  //   let all = await this.getAll();
  //   const pageSize = 10;
  //   const startIndex = (page - 1) * pageSize;
  //   return all.slice(startIndex, startIndex + pageSize);
  // }
}
