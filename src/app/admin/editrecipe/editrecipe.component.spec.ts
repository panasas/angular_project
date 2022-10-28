import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http'; 
import { EditrecipeComponent } from './editrecipe.component';
import {ActivatedRoute} from'@angular/router';
import { of } from 'rxjs/internal/observable/of';
describe('EditrecipeComponent', () => {
  let component: EditrecipeComponent;
  let fixture: ComponentFixture<EditrecipeComponent>;
  const mockActivatedRoute = { 
    snapshot: {
      paramMap: {
        get(){
          return {id:'2'}
        }
       
      },
  }
  };
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule,
         FormsModule,
         HttpClientModule],
      declarations: [ EditrecipeComponent ],
      providers: [HttpClient,{provide: ActivatedRoute, useValue: mockActivatedRoute}]

    })
    .compileComponents();

    fixture = TestBed.createComponent(EditrecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

 xit('should create', () => {
    expect(component).toBeTruthy();
  });

});
