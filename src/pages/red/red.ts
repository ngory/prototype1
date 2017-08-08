import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http'; //https://stackoverflow.com/questions/43609853/angular-4-and-ionic-3-no-provider-for-http

@Component({
 	selector: 'page-red',
  	templateUrl: 'red.html'
})

export class RedPage {
    data:any = {};
    link:any = {};
    constructor(public navCtrl: NavController, public http: Http) {
        this.data.username = '';
        this.data.password = '';
        this.link.ip = '';
        this.http = http;
 	}
//10.201.27.42
//http://172.20.10.7:8888
	 submit() {
        var link = (this.link.ip);
        var myData = JSON.stringify({username: this.data.username, password: this.data.password});
        
        this.http.post(link, myData)
        .subscribe(data => {
        	this.data.response = data["_body"]; //https://stackoverflow.com/questions/39574305/property-body-does-not-exist-on-type-response
        }, error => {
            console.log("Oooops!");
        });
  }
}


//var link = JSON.stringify(this.data.username);
//var link = 'http://10.201.25.102:8888';