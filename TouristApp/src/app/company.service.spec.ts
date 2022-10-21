import { TestBed } from '@angular/core/testing';
import { CompanyDetails } from './model/CompanyDetails';
import { CompanyService } from './company.service';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Inject } from '@angular/core';
import { of } from 'rxjs';

describe('CompanyService', () => {
  let service: CompanyService;
  let httpTestingController  : HttpTestingController;  
  let http: HttpClient;
  let httpController: HttpTestingController;
  let baseUrl : "";
  let company : CompanyDetails;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CompanyService],
    });
    service = TestBed.inject(CompanyService);
    http = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return a collection of company details', () => {
   

    let searchresponse : CompanyDetails[] = [
      {
        "id": "63430cc034454b123bcd57bd",
        "branchId": 4,
        "branchName": "Zinc",
        "place": "MALAYSIA",
        "website": "www.zinc.com",
        "contact": "7854328760",
        "email": "zinc@gmail.com",
        "tariff": 75000,
        "lastUpdated": new Date("2022-07-18"),
        "createAt": new Date("2022-07-18")
    },
    {
        "id": "6345815f0c202112ef450fff",
        "branchId": 6,
        "branchName": "Beats2",
        "place": "MALAYSIA",
        "website": "www.Beats2.com",
        "contact": "7654398762",
        "email": "Beats2@google.com",
        "tariff": 60000,
        "lastUpdated": new Date("2022-07-19"),
        "createAt": new Date("2022-07-19")
    }
    ];
  
      let companyResponse: CompanyDetails[];
      let criteria: string = "place";
      let criteriaValue: string = "malaysia";
      spyOn(http, 'get').and.returnValue(of(searchresponse));
  
      service.SearchCompanies(criteria, criteriaValue ).subscribe(res => {
        companyResponse = res;
      });
      
    console.log(searchresponse.length)

    expect(searchresponse.length).not.toEqual(2);
    expect(searchresponse.length).toEqual(3);
  }
});



