import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  baseUrl:string="http://localhost:3000/posts";
  constructor(private http:HttpClient) { }

  addRecipe(recipe:Recipe){
    return this.http.post(this.baseUrl,recipe);
  }
  getAllRecipies():Observable<Recipe[]>{
    return this.http.get<Recipe[]>(this.baseUrl);
  }
  deleteById(id:number){
    return this.http.delete(this.baseUrl+"/"+id);
  }
  updateRecipe(recipe:Recipe,id:number){
    return this.http.put(this.baseUrl+"/"+id,recipe)
  }
  getRecipeById(id:number):Observable<Recipe>{
    return this.http.get<Recipe>(this.baseUrl+"/"+id);
  }

}
