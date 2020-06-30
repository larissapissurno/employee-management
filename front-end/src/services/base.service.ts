/* eslint-disable */

import { AxiosResponse } from 'axios';
import api from './api';

export abstract class BaseService<T> {
  abstract API_URL: string;

  get = (filter?: any): Promise<any> =>
    api.get<any>(this.API_URL + this.prepareParams(filter));

  getById = (id: number): Promise<AxiosResponse<T>> =>
    api.get<T>(`${this.API_URL}/${id}`);

  create = (model: any): Promise<AxiosResponse<T>> =>
    api.post<T>(this.API_URL, model);

  delete = (id: number): Promise<void> => api.delete(`${this.API_URL}/${id}`);

  update = (model: T): Promise<any> => api.put<any>(this.API_URL, model);

  private prepareParams(filter: any): string {
    const quote = '?';

    if (!filter) {
      return quote;
    }

    const paramsList = Object.keys(filter)
      .map((param) => this.returnArrayParams(param.toString(), filter[param]))
      .join('&');

    return quote + paramsList;
  }

  private returnArrayParams(name: string, fields: any): string {
    let textArray = '';
    let caracterLigacao = '';

    if (Array.isArray(fields)) {
      fields.forEach((valor) => {
        textArray += caracterLigacao + name + '=' + valor;
        caracterLigacao = '&';
      });
      return textArray;
    }
    return name + '=' + encodeURIComponent(fields);
  }
}
