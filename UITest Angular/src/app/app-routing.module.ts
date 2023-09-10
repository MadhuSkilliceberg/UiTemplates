import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import { AboutComponent } from './Components/about/about.component';
import { CategoryComponent } from './Components/category/category.component';

const routes: Routes = [
{path:  "", pathMatch:  "full",redirectTo:"page-not-found"},
{path:"page-not-found", component:PageNotFoundComponent},
{path:"about", component:AboutComponent},
{path:"category1", component:CategoryComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
