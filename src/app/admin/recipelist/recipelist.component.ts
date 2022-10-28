import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/recipe.model';
import { RecipeService } from 'src/app/recipe.service';

@Component({
  selector: 'app-recipelist',
  templateUrl: './recipelist.component.html',
  styleUrls: ['./recipelist.component.css']
})
export class RecipelistComponent implements OnInit {

  constructor(private service:RecipeService) { }
  recipes:Recipe[]
  ngOnInit(): void {
    this.service.getAllRecipies().subscribe(x=>this.recipes=x);
  }

  delete(id:number){
    this.recipes= this.recipes.filter(x=> Number(x.id) !== Number(id));
    this.service.deleteById(Number(id)).subscribe(x=>console.log(x));
  }

}
