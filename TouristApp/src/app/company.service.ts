import { Injectable } from '@angular/core';
import { Observable } from "rxjs";  
import {HttpHeaders, HttpClient } from "@angular/common/http";
import { CompanyDetails } from './model/CompanyDetails';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  
  Url="http://localhost:9552/"; 
  AzureURL = "https://adminapiservice20221026181952.azurewebsites.net/";

  constructor(private http:HttpClient) { }

  SearchCompanies( criteria: string, criteriaValue: string):Observable<CompanyDetails[]>
  {  
    var url = this.AzureURL+"api/v1/admin/"+ criteria +"/" + criteriaValue;
   var result = this.http.get<CompanyDetails[]>(url);   
   return result;
  } 
}
