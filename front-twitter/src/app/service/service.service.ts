import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, finalize } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  url = 'https://t55lxmhfp7.execute-api.us-east-2.amazonaws.com/users'
  urlTwitter = 'http://localhost:3001/tweets-by-id?id=85909338'

  constructor(private http: HttpClient) { }

  getTweetAllAws() {
    return this.http.get(this.url);
  }

  getTweetAll() {
    return this.http.get(this.urlTwitter);
  }
}
