import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class QuejasProvider {

  constructor(public http: Http) { }

  matenimiento(model: any) {

    return this.http.post('http://localhost:5000/api/condominio/login', model).map((response: Response) => response.json());
  }

}
