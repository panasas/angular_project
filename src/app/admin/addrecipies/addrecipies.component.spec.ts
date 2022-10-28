import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http'; 

import { AddrecipiesComponent } from './addrecipies.component';
import { Recipe } from 'src/app/recipe.model';
import { RecipeService } from 'src/app/recipe.service';

describe('AddrecipiesComponent', () => {
  let component: AddrecipiesComponent;
  let fixture: ComponentFixture<AddrecipiesComponent>;
  let service:RecipeService
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule,HttpClientModule],    
      providers: [HttpClient],
      declarations: [ AddrecipiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddrecipiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
