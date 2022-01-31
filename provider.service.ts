import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {

  constructor(private http : HttpClient) { }
  public headlines_url : string ="<<Enter new api url with api id>>";
  public real_busi_url : string="<<Enter new api url with api id>>";
  public sports_url : string="<<Enter new api url with api id>>";
  public health_url : string="<<Enter new api url with api id>>";
  public technology_url : string="<<Enter new api url with api id>>";
  business():Observable<any>
  {
    return this.http.get<any>(this.headlines_url);
  }
  real_busi():Observable<any>
  {
    return this.http.get<any>(this.real_busi_url);
  }
  sports():Observable<any>
  {
    return this.http.get<any>(this.sports_url);
  }
  health():Observable<any>
  {
    return this.http.get<any>(this.health_url);
  }
  technology():Observable<any>
  {
    return this.http.get<any>(this.technology_url);
  }
}
