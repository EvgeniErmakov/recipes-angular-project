import {Injectable, OnInit} from "@angular/core";
import {HttpClientModule} from "@angular/common/http";

@Injectable({providedIn:'root'})
export class DataStorageService implements OnInit {

  constructor(private http: HttpClientModule) {

  }

  ngOnInit() {

  }
}
