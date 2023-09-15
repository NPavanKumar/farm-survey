import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, retry } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FarmService {

  apiURL: string = environment.baseURL;

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      // eslint-disable-next-line @typescript-eslint/naming-convention
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) { }

   // HttpClient API get() method => Fetch employees list
   getFarmers(searchText: string, pageNumber: number, pageSize: number, sortColumn: string, sortOrder: string): Observable<any> {
    console.log(this.apiURL + 'SearchFarmers');
    return this.http.get(this.apiURL + 'SearchFarmers?searchText=' + searchText +
    '&pageNumber='+ pageNumber + '&pageSize=' + pageSize + '&sortColumn=' + sortColumn + '&sortOrder=' + sortOrder);
  }


}
