import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Recipe } from 'src/app/recipe.model';
import { RecipeService } from 'src/app/recipe.service';

@Component({
  selector: 'app-addrecipies',
  templateUrl: './addrecipies.component.html',
  styleUrls: ['./addrecipies.component.css']
})
export class AddrecipiesComponent implements OnInit {

  constructor(private builder:FormBuilder,
              private service:RecipeService,
              private router:Router) { }
  submitted:boolean=false;
  addRecipe:FormGroup
  recipe = new Recipe();
  ngOnInit(): void {
    this.addRecipe= this.builder.group({
        id: ["",Validators.required],
        cookTime:["",Validators.required],
        course:["",Validators.required],
        cuisine:["",Validators.required],
        ingrdients:["",Validators.required],
        instructions:["",Validators.required],
        prepTime:["",Validators.required],
        serves:["",Validators.required],
        type:["",Validators.required]
    })
  }

  get form(){
    return this.addRecipe.controls;
  }

  onSubmit(){
    this.submitted=true;
    if(this.addRecipe.invalid){
      return
    }else{
      console.log("this.recipe-----",this.recipe)
      this.service.addRecipe(this.recipe).subscribe(x=>console.log(x));
      alert("Recipe added successfully")
      this.router.navigate(['admin/list'])
    }
  }

}
