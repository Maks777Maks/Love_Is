import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../MODELS/user';

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { }
  baseUrl = 'https://localhost:44350/api/users-portal/users';

  getUsers() {
    return this.http.get<User[]>(this.baseUrl);
  }

  getUserById(id: string) {
    return this.http.get<User>(this.baseUrl + '/' + id);
  }

  createUser(user: User) {
    return this.http.post(this.baseUrl, user);
  }

  updateUser(user: User) {
    return this.http.put(this.baseUrl + '/' + user.id, user);
  }

  deleteUser(id: string) {
    return this.http.delete(this.baseUrl + '/' + id);
  }
}