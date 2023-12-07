import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Observable, catchError, throwError } from 'rxjs';
import { LoginResponse, UserLoginRequest } from '../auth.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl= 'http://localhost:8080'

  constructor(private http: HttpClient) { }

  login(loginData: UserLoginRequest): Observable<LoginResponse> {
    const loginUrl = `${this.baseUrl}/GeeksChat/users/login`;
    return this.http.post<any>(loginUrl, loginData);
  }

  registerUser(userData: any): Observable<any> {
    const regUrl = `${this.baseUrl}/GeeksChat/users/register`;
    return this.http.post<any>(regUrl, userData);
  }

 
}
