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
   let result = this.http.get<CompanyDetails[]>(this.Url+"http://localhost:9552/api/v1/admin/"+ criteria +"/" + criteriaValue);   
   return result;
  } 
}
