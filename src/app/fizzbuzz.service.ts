import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class FizzBuzzService {
  constructor(private http: HttpClient) {
  }

  getString(number: number) {
    const url = "https://oneiofizzbuzz.herokuapp.com/api/fizzbuzz";

    let queryParams = new HttpParams();
    queryParams = queryParams.append("number", number);
    return this.http.get(url, { params: queryParams, responseType: 'text' });
  }
}
