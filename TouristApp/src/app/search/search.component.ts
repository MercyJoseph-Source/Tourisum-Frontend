import { Component, OnInit } from '@angular/core';
import { CompanyDetails } from '../model/CompanyDetails';
import { CompanyService } from '../company.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  
  public branches?: CompanyDetails[]=[];
  criteria !: string;
  criteriaValue!: string;
constructor(private companyService:CompanyService) { }


/* SerachCompanies(criteria : string, criteriaValue :string )
{ 
 this.companyService.SearchCompanies(criteria, criteriaValue).subscribe(data => 
   {
     this.branches = data;
     console.log('companies'+JSON.stringify(data));
   }); 
} */

  ngOnInit(): void {
  }

}
