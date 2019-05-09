import { Injectable } from '@angular/core';
import{HttpClient,HttpHeaders} from '@angular/common/http'
import{Observable,of} from 'rxjs'
import {register} from '../model/task'

@Injectable({
  providedIn: 'root'
})
export class trasferService {
  url : string = "http://localhost:4600/register/"
  constructor( private htc : HttpClient ) { 

  }

  GetDetails(u,p) : Observable <any>{
    return this.htc.get(this.url+ u + '/' + p , {responseType:'json'})
  }
  SubmitClick1(password: string, a: any): Observable<any> {
    return this.htc.get(this.url + a + '/' + password, { responseType: 'json' });
  }

  UpdatePassword(a:any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'content-type': 'application/json' })
    }
    return this.htc.put(this.url + '/' , JSON.stringify(a), httpOptions)
  }

}
  