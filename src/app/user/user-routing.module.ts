import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipielistComponent } from './recipielist/recipielist.component';
import { UserComponent } from './user.component';

const routes: Routes = [
  {
    path:'user',
    component:UserComponent,
    children:[
      {
        path:'list',component: RecipielistComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
