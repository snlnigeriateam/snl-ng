import { Component, OnInit } from '@angular/core';
import { CareersService } from '../careers.service';
import { AlertsComponent } from '../alerts/alerts.component';
import { Router } from '@angular/router';

@Component({
	selector: 'app-apply',
	templateUrl: './apply.component.html',
	styleUrls: ['./apply.component.scss']
})

export class ApplyComponent implements OnInit {
	r_id: string;
	p_id: string;

	applyLoading: boolean = false;
	fileSelected: boolean = false;
	fileName: string = "No Document Uploaded";

	f_name: string = '';
	l_name: string = '';
	o_name: string = '';
	email: string = '';
	phone: string = '';
	address: string = '';
	document!: File;

	constructor(
		private cService: CareersService,
		private alerts: AlertsComponent,
		private router: Router
	) {
		this.r_id = this.router.parseUrl(this.router.url).root.children['primary'].segments[1].path;
		this.p_id = this.router.parseUrl(this.router.url).root.children['primary'].segments[2].path;
	}

	ngOnInit(): void {
	}

	selFile(ev: any) {
		if (ev.target) {
			let fList: FileList = ev.target.files;
			if (fList.length > 0) {
				let size = fList[0].size;
				if (size > 5242880) {
					this.alerts.alert("Your file must be less than 5MB in size", true);
				}
				else {
					this.fileSelected = true;
					this.fileName = fList[0].name;
					this.document = fList[0];
				}
			}
			else {
				this.fileSelected = false;
				this.fileName = "No Document Uploaded";
			}
		}
		else {
			this.fileSelected = false;
			this.fileName = "No Document Uploaded";
		}
	}

	validate() {
		let wsp = /^\s*$/;

		if (!this.f_name || !this.l_name || !this.email || !this.phone || !this.address) {
			this.alerts.alert("All fields marked * are required", true);
		}
		else if (wsp.test(this.f_name) || wsp.test(this.l_name) || wsp.test(this.phone) || wsp.test(this.address)) {
			this.alerts.alert("All fields marked * are required", true);
		}
		else if (!this.fileSelected || !this.document) {
			this.alerts.alert("Please upload your Résumé or Curriculum Vitae", true);
		}
		else if (this.document?.size > 5242880) {
			this.alerts.alert("Your file must be less than 5MB in size", true);
		}
		else {
			this.apply();
		}
	}

	apply() {
		this.applyLoading = true;
		let fData = new FormData();
		fData.append('p_id', this.p_id);
		fData.append('r_id', this.r_id);
		fData.append('f_name', this.f_name);
		fData.append('l_name', this.l_name);
		fData.append('o_name', this.o_name);
		fData.append('email', this.email);
		fData.append('phone', this.phone);
		fData.append('address', this.address);
		fData.append('document', this.document);

		this.cService.apply(fData).subscribe({
			next: (data) => {
				this.applyLoading = false;
				if (data.success) {
					this.alerts.alert("Your Application has been received successfully. Please check your Inbox to ensure you received our confirmation Email", false);
					this.router.navigate(['/']);
				}
				else {
					this.alerts.alert(data.reason, true);
				}
			},
			error: () => {
				this.alerts.alert("Please check your connection", true);
				this.applyLoading = false;
			}
		});
	}
}
