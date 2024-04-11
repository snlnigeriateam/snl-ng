import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
	providedIn: 'root'
})
export class ContactService {

	constructor(
		private request: ApiService
	) { }

	contact(name: string, email: string, nature: number, query: string, website: string, phone: string, referrer: string): Observable<any> {
		return this.request.request('contact', 'post', {
			name: name,
			email: email,
			nature: nature,
			query: query,
			website: website,
			phone: phone,
			referrer: referrer
		});
	}
}
