import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetService {

  private apiServer = "https://randomuser.me/api/?results=20";

  constructor(private httpClient: HttpClient) { }
  
  get(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.apiServer);
  }
}
