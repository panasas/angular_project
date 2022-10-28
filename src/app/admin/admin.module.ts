import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AddrecipiesComponent } from './addrecipies/addrecipies.component';
import { RecipelistComponent } from './recipelist/recipelist.component';
import { EditrecipeComponent } from './editrecipe/editrecipe.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddrecipiesComponent,
    RecipelistComponent,
    EditrecipeComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
