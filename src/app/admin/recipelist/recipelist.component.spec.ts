import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule, HttpClient } from '@angular/common/http'; 

import { RecipelistComponent } from './recipelist.component';

describe('RecipelistComponent', () => {
  let component: RecipelistComponent;
  let fixture: ComponentFixture<RecipelistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipelistComponent ],
      imports: [
        HttpClientModule
      ],
      providers: [HttpClient]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  
});
