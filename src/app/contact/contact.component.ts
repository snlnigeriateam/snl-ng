import { Component, OnInit } from '@angular/core';
import { AlertsComponent } from '../alerts/alerts.component';
import { ContactService } from '../contact.service';
import { Router } from '@angular/router';

interface Nature {
	text: string;
	code: number;
}

@Component({
	selector: 'app-contact',
	templateUrl: './contact.component.html',
	styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
	contactLoading: boolean = false;

	website: string = "";
	name: string = "";
	email: string = "";
	phone: string = "";
	query: string = "";
	referrer: string = "";
	nature: number = 1;

	natures: Array<Nature> = [];

	constructor(
		private alerts: AlertsComponent,
		private cService: ContactService,
		private router: Router
	) {
		this.natures = [
			{
				text: "General Inquiry",
				code: 1
			},
			{
				text: "Consultation",
				code: 2
			},
			{
				text: "Press Inquiry",
				code: 3
			}
		];
	}

	ngOnInit(): void {
	}

	validate() {
		let wsp = /^\s*$/;

		if (wsp.test(this.name) || wsp.test(this.email) || wsp.test(this.phone) || wsp.test(this.query)) {
			this.alerts.alert("All fields marked * are required", true);
		}
		else {
			this.contact();
		}
	}

	contact() {
		this.contactLoading = true;

		this.cService.contact(this.name, this.email, this.nature, this.query, this.website, this.phone, this.referrer).subscribe({
			next: (data) => {
				this.contactLoading = false;

				if(data.success){
					this.alerts.alert("Inquiry received. Please check your Inbox for a Confirmation Email", false);
					this.router.navigate(['/']);
				}
				else {
					this.alerts.alert(data.reason, true);
				}
			}, error: () => {
				this.contactLoading = false;
				this.alerts.alert("Please check your connection", true);
			}
		});
	}
}
