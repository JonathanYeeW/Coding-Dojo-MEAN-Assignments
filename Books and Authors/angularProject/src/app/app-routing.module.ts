import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditComponent } from './edit/edit.component';
import { MainComponent } from './main/main.component';
import { CreateComponent } from './create/create.component';

const routes: Routes = [
  { path: 'edit', component: EditComponent },
  { path: 'main', component: MainComponent },
  { path: 'create', component: CreateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
