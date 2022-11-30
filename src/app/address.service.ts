import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddressService {
    // SERVER_ADDRESS: string = 'https://space-park.herokuapp.com';
    // SITE_ADDRESS: string = 'https://snlnigeria.org';

    // SERVER_ADDRESS: string = "https://space-park.herokuapp.com";
    // SITE_ADDRESS: string = "https://loquacious-buttercream-bac7ef.netlify.app";

    SERVER_ADDRESS: string = 'http://192.168.0.124:7022';
    SITE_ADDRESS: string = "http://192.168.0.124:9200";
    SUPPORT_EMAIL: string = "support@snlglobal.net";
	SECURE_KEY: string = "FLWSECK-";

    constructor() {
    }

    getApi() {
        return this.SERVER_ADDRESS;
    }

    getAddress() {
        return this.SITE_ADDRESS;
    }
}