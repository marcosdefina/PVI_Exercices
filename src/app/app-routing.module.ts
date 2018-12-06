import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent }      from './heroes/heroes.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';
import { ExercicesComponent}    from './exercices/exercices.component';
import { HTMLComponent }        from './exercices/HTML/html.component';
import { Ex1Component } from './exercices/HTML/Ex1/ex1.component';
import { Ex2Component } from './exercices/HTML/Ex2/ex2.component';
import { Ex3Component } from './exercices/HTML/Ex3/ex3.component';
import { CGIBINComponent } from './exercices/CGIBin/cgibin.component';
import { PhpComponent } from './exercices/PHP/php.component';
import { SqliteComponent } from './exercices/SQLite/sqlite.component';
import { ProcessingComponent } from './exercices/Processing/processing.component';
import { _1Component } from './exercices/HTML/Ex1/PagesComponents/_1.component';
import { _2Component } from './exercices/HTML/Ex1/PagesComponents/_2.component';
import { _3Component } from './exercices/HTML/Ex1/PagesComponents/_3.component';
import { _4Component } from './exercices/HTML/Ex1/PagesComponents/_4.component';
import { _5Component } from './exercices/HTML/Ex1/PagesComponents/_5.component';
import { _6Component } from './exercices/HTML/Ex1/PagesComponents/_6.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'heroes', component: HeroesComponent },
  { path: 'dashboard', component: DashboardComponent},
  { path: 'detail/:id', component: HeroDetailComponent},
  { path: 'exercices', component: ExercicesComponent},
  { path: 'exercices/html', component: HTMLComponent},
  { path: 'exercices/html/ex1', component: Ex1Component},
  { path: 'exercices/html/ex1/1', component: _1Component },
  { path: 'exercices/html/ex1/2', component: _2Component},
  { path: 'exercices/html/ex1/3', component: _3Component},
  { path: 'exercices/html/ex1/4', component: _4Component},
  { path: 'exercices/html/ex1/5', component: _5Component},
  { path: 'exercices/html/ex1/6', component: _6Component},
  { path: 'exercices/html/ex2', component: Ex2Component},
  { path: 'exercices/html/ex3', component: Ex3Component},
  { path: 'exercices/cgibin', component: CGIBINComponent},
  { path: 'exercices/php', component: PhpComponent},
  { path: 'exercices/sqlite', component: SqliteComponent},
  { path: 'exercices/processing', component: ProcessingComponent},
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}