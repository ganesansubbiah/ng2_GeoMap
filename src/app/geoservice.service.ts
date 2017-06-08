import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GeoserviceService {

  constructor(private http:Http) { }
  GetNearData(){
    return this.http.get('http://localhost:8100/api').map(res=>res.json());
  }
}
