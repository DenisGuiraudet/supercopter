import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChopperService {

  uri = 'http://localhost:4000/chopper';

  constructor(private http: HttpClient) { }

  getChopperes() {
    return this
           .http
           .get(`${this.uri}`);
  }

  addChopper(chopper_name, chopper_brand, chopper_place) {
    const obj = {
      chopper_name: chopper_name,
      chopper_brand: chopper_brand,
      chopper_place: chopper_place
    };
    console.log(obj);
    this.http.post(`${this.uri}/add`, obj)
        .subscribe(res => console.log('Done'));
  }

  editChopper(id) {
    return this
            .http
            .get(`${this.uri}/edit/${id}`);
  }

  updateChopper(chopper_name, chopper_brand, chopper_place, id) {

    const obj = {
        chopper_name: chopper_name,
        chopper_brand: chopper_brand,
        chopper_place: chopper_place
      };
    this
    return this.http.post(`${this.uri}/update/${id}`, obj);
  }

  deleteChopper(id) {
    return this
              .http
              .get(`${this.uri}/delete/${id}`);
  }
}