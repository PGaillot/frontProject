import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constants } from 'src/app/config/constants';

@Injectable({
  providedIn: 'root'
})
export class DataServicesService {

  constructor(
    private httpClient:HttpClient,
    private constants:Constants
  ) { }

  getScore(){
    const url = this.constants.apiGetPostEndpoint + 'score';
    return this.httpClient.get(url)
  }

  getTrial(){
    const url = this.constants.apiGetPostEndpoint + 'free-period';
    return this.httpClient.get(url)
  }


  getFaq(){
    const url = this.constants.apiGetPostEndpoint + 'faq';
    return this.httpClient.get(url)
  }

  getSubscriptions(){
    const url = this.constants.apiGetPostEndpoint + 'subscriptions';
    return this.httpClient.get(url)
  }
  
}
