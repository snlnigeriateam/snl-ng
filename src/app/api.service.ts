import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AddressService } from './address.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
	api: string;
    token: any = '';

    constructor(
        private http: HttpClient,
        private address: AddressService
    ) {
        this.api = this.address.getApi();
    }

    request(path: string, method: string, body?: any): Observable<any> {
        this.token = localStorage.getItem('token');
        if (this.token) {
            if (method === 'post') {
                return this.http.post(`${this.api}/spacepark/${path}`, body, { headers: { Authorization: `Bearer ${this.token}` } });
            }
            else {
                return this.http.get(`${this.api}/spacepark/${path}`, { headers: { Authorization: `Bearer ${this.token}` } });
            }
        }
        else {
            if (method === 'post') {
                return this.http.post(`${this.api}/spacepark/${path}`, body);
            }
            else {
                return this.http.get(`${this.api}/spacepark/${path}`);
            }
        }
    }

    adminFileRequest(path: string, method: string, body?: any): Observable<any> {
        this.token = localStorage.getItem('token');
        if (this.token) {
            if (method === 'post') {
                return this.http.post(`${this.api}/spacepark/${path}`, body, { headers: { Authorization: `Bearer ${this.token}` }, responseType: 'blob' as 'json' });
            }
            else {
                return this.http.get(`${this.api}/spacepark/${path}`, { headers: { Authorization: `Bearer ${this.token}` }, responseType: 'blob' as 'json' });
            }
        }
        else {
            if (method === 'post') {
                return this.http.post(`${this.api}/spacepark/${path}`, body);
            }
            else {
                return this.http.get(`${this.api}/spacepark/${path}`);
            }
        }
    }
}