import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { userClass } from './userClass';
import { appConfiguration } from './../app.configuration';

import 'rxjs/add/operator/toPromise';

const config: appConfiguration = new appConfiguration();

@Injectable()
export class UserService {

  private headers = new Headers({ 'Content-Type': 'application/json', 'username': 'william', 'password': '123456' });

  constructor(private http: Http) {
  }

  addUser(user: userClass): Promise<userClass> {
    console.log('Url = ' + config.apiUrl + '/' + 'users/create/06111212450406899421')
    return this.http.post(`${config.apiUrl}/users/create/06111212450406899421`, JSON.stringify(user), { headers: this.headers })
      .toPromise()
      .then(result => {
        result.json().data as userClass;
        console.log(result.json());
      })
      .catch(this.handleError);

  }

  getUsers(): Promise<userClass[]> {

    return this.http.get(`${config.apiUrl}/user/list`)
      .toPromise()
      .then(result => result.json().data as userClass[])
      .catch(this.handleError);

  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
