import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddrecipiesComponent } from './addrecipies/addrecipies.component';
import { AdminComponent } from './admin.component';
import { EditrecipeComponent } from './editrecipe/editrecipe.component';
import { RecipelistComponent } from './recipelist/recipelist.component';

const routes: Routes = [{
  path: 'admin',
  component: AdminComponent,
  children:[
    {path:"add",component:AddrecipiesComponent},
    {path:'list',component:RecipelistComponent},
    {path:'edit/:id',component:EditrecipeComponent},
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
