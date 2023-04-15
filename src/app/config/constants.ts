import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Constants {
  public readonly apiEndpoint: string = 'http://preprod.kinomap.com:3333/';
  public readonly apiGetPostEndpoint: string = 'http://preprod.kinomap.com:3333/';
}


