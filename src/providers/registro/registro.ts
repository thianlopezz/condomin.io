import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class RegistroProvider {

  constructor(public http: Http) { }

  registro(model: any) {

    return this.http.post('http://localhost:5000/api/condominio/registro', model).map((response: Response) => response.json());
  }

}
