import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseMessage } from 'src/models/res-message';
import { User } from 'src/models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  authenticateUser(user: User): Observable<ResponseMessage>{
    return this.http.post<ResponseMessage>('http://localhost:3000/user', user)
  }

  createUser(user: User): Observable<ResponseMessage>{
    return this.http.post<ResponseMessage>('http://localhost:3000/user/new', user)
  }
}
