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

  public branches : CompanyDetails[]=[];
  
isSubmitted = false;
CriteriaType: any = ['Branch Id', 'Branch Name', 'Place'];
constructor(public fb: FormBuilder, private companyService: CompanyService) {}
searchForm = this.fb.group({
  criteria: ['', [Validators.required]],
  criteriaValue : ['', [Validators.required]]
});
changeCriteria(e: any) {
  this.criteria?.setValue(e.target.value, {
    onlySelf: true,
  });
}
public get criteriaValue() {
  return this.searchForm.get('criteriaValue');
}
// Access formcontrols getter
public get criteria() {
  return this.searchForm.get('criteria');
}
onSubmit(): void {
  console.log("welcome to submit method ");
  this.isSubmitted = true;
  if (!this.searchForm.valid) 
  {
    false;
    console.log("Not valid");
  } 
  else 
  {
    console.log(JSON.stringify(this.searchForm.value));
    var searchOption = this.criteria?.value;
    var option = (searchOption as string).split(":");
     
    if (option.length >0)
    {
      searchOption = option[1].replace(/\s/g, '');
    }
    console.log('Selected option '+ searchOption);
    

    this.companyService.SearchCompanies(searchOption , this.criteriaValue?.value).subscribe(data => 
      {
        if( data == null)
        {
          console.log('Not Found');
        }
        this.branches = data;
        console.log('companies'+JSON.stringify(data));

      }); 

    console.warn('Your searc has been submitted', this.searchForm.value);
    //this.searchForm.reset();
  }
}

  ngOnInit(): void {
  }

}
