import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule, HttpClient } from '@angular/common/http'; 
import { RecipielistComponent } from './recipielist.component';

describe('RecipielistComponent', () => {
  let component: RecipielistComponent;
  let fixture: ComponentFixture<RecipielistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipielistComponent ],
      imports: [
        HttpClientModule
      ],
      providers: [HttpClient]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipielistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
