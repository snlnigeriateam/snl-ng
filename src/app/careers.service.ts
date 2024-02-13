import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
	providedIn: 'root'
})
export class CareersService {

	constructor(
		private request: ApiService
	) { }

	loadHiringRounds(): Observable<any> {
		return this.request.request('hiring-rounds', 'get');
	}

	loadHiringRound(r_id: string): Observable<any> {
		return this.request.request('hiring-round', 'post', {
			r_id: r_id
		});
	}

	apply(formData: FormData): Observable<any> {
		return this.request.fileRequest('apply', 'post', formData);
	}
}
