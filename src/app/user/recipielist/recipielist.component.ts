import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/recipe.model';
import { RecipeService } from 'src/app/recipe.service';

@Component({
  selector: 'app-recipielist',
  templateUrl: './recipielist.component.html',
  styleUrls: ['./recipielist.component.css']
})
export class RecipielistComponent implements OnInit {

  constructor(private service:RecipeService) { }
  recipes:Recipe[]
  ngOnInit(): void {
    this.service.getAllRecipies().subscribe(x=>this.recipes=x);
  }
}
