import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule, Routes } from '@angular/router';
import { Observable, of } from 'rxjs';
import { CompanyService } from '../company.service';
import { CompanyDetails } from '../model/CompanyDetails';
import { SearchComponent } from './search.component';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
   let componenetStub : Partial<CompanyService>={
    SearchCompanies(): Observable<CompanyDetails[]> {
      return of([
          {            
          id: "63430cc034454b123bcd57bd",
          branchId: 4,
          branchName: "Zinc",
          place: "MALAYSIA",
          website: "www.zinc.com",
          contact: "7854328760",
          email: "zinc@gmail.com",
          tariff: 75000,
          lastUpdated: new Date("2022-07-18"),
          createAt: new Date("2022-07-18")
          }  ,
       {
          id: "6345815f0c202112ef450fff",
          branchId: 6,
          branchName: "Beats2",
          place: "MALAYSIA",
          website: "www.Beats2.com",
          contact: "7654398762",
          email: "Beats2@google.com",
          tariff: 60000,
          lastUpdated: new Date("2022-07-19"),
          createAt: new Date("2022-07-19")
      }  
      ]);    
    }
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchComponent ],
      imports: [HttpClientTestingModule, RouterModule.forRoot([])],
      providers: [{provide: CompanyService, useValue: componenetStub }],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should return a collection of Companies', () => {
    //component.criteria ="ProductId";                                           
   // component.criteriaValue = "3";
    component.onSubmit();
    expect(component.branches.length).toEqual(2);
});


});
