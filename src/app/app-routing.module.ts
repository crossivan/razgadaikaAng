import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CrosswordComponent} from "./components/pages/crossword/crossword.component";
import {CrosswordListComponent} from "./components/pages/crossword-list/crossword-list.component";

const routes: Routes = [
  { path: 'crossword-list', component: CrosswordListComponent },
  { path: 'crossword', component: CrosswordComponent },
  { path: '**', redirectTo: 'crossword-list'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
