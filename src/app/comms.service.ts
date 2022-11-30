import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
	providedIn: 'root'
})
export class CommsService {

	constructor(
		private request: ApiService
	) { }

	loadTickets(): Observable<any> {
		return this.request.request('tickets', 'get');
	}
}
