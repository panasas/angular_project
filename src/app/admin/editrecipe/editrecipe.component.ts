import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from 'src/app/recipe.model';
import { RecipeService } from 'src/app/recipe.service';

@Component({
  selector: 'app-editrecipe',
  templateUrl: './editrecipe.component.html',
  styleUrls: ['./editrecipe.component.css']
})
export class EditrecipeComponent implements OnInit {

  constructor(private builder:FormBuilder,
    private route:ActivatedRoute,
    private service:RecipeService,
    private router:Router) { }
    submitted:boolean=false;
    addRecipe:FormGroup
    recipe:Recipe;
    id:string|null;
    ngOnInit(): void {
      this.id= this.route.snapshot.paramMap.get('id');
      this.service.getRecipeById(Number(this.id)).subscribe(x=>this.recipe=x)
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
        this.service.updateRecipe(this.recipe,Number(this.id)).subscribe(x=>console.log(x));
        alert("Recipe updated successfully")
        this.router.navigate(['admin/list'])
      }
    }
}
