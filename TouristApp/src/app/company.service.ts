import { Injectable } from '@angular/core';
import { Observable } from "rxjs";  
import {HttpHeaders, HttpClient } from "@angular/common/http";
import { CompanyDetails } from './model/CompanyDetails';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  
  Url="http://localhost:9552/"; 
  constructor(private http:HttpClient) { }

  SearchCompanies( criteria: string, criteriaValue: string):Observable<CompanyDetails[]>
  {  
    var url = this.Url+"api/v1/admin/"+ criteria +"/" + criteriaValue;
   var result = this.http.get<CompanyDetails[]>(url);   
   return result;
  } 
}
