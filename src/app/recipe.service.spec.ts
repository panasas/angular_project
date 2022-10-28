import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

describe('RecipeService', () => {
  let service: RecipeService;
 let id = 9876
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [RecipeService]
    });
    service = TestBed.inject(RecipeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  //Test case 1
  it('should add the recipe', () => {
    const newRecipe: Recipe = {
      "id": id,
      "cookTime": 12,
      "course": "chicken",
      "cuisine": "chicken",
      "ingrdients": "chicken",
      "instructions": "chicken",
      "prepTime": 123,
      "serves": "4",
      "type": "Non-Veg"
    };

    service.addRecipe(newRecipe).subscribe(
      data => expect(data).toEqual(newRecipe)
    );


});
  it('retrieve recipe by Id via GET', () => {
    let dummyRecipes:Recipe={
      "id": id,
      "cookTime": 12,
      "course": "chicken",
      "cuisine": "chicken",
      "ingrdients": "chicken",
      "instructions": "chicken",
      "prepTime": 123,
      "serves": "4",
      "type": "Non-Veg"
    };

    service.getRecipeById(id).subscribe(recipe=>{
      expect(recipe).toEqual(dummyRecipes);
    })
  })

  it('Update the recipe', () => {
    let dummyRecipe:Recipe={
      "id": id,
      "cookTime": 12,
      "course": "chicken",
      "cuisine": "chicken",
      "ingrdients": "chicken",
      "instructions": "chicken",
      "prepTime": 123,
      "serves": "4",
      "type": "Non-Veg"
    };

    service.updateRecipe(dummyRecipe,id).subscribe(recipe=>{
      expect(recipe).toEqual(dummyRecipe);
    })
  })

});
