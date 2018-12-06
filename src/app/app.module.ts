import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppRoutingModule }     from './app-routing.module';

import { AppComponent }         from './app.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';
import { HeroesComponent }      from './heroes/heroes.component';
import { HeroSearchComponent }  from './hero-search/hero-search.component';
import { MessagesComponent }    from './messages/messages.component';
import { FooterComponent }      from './footer/footer.component'
import { HeaderComponent }      from './header/header.component';
import { ExercicesComponent }   from './exercices/exercices.component';
import { HTMLComponent }   from './exercices/HTML/html.component';
import { CGIBINComponent } from './exercices/CGIBin/cgibin.component';
import { Ex3Component } from './exercices/HTML/Ex3/ex3.component';
import { Ex2Component } from './exercices/HTML/Ex2/ex2.component';
import { PhpComponent } from './exercices/PHP/php.component';
import { ProcessingComponent } from './exercices/Processing/processing.component';
import { SqliteComponent } from './exercices/SQLite/sqlite.component';
import { Ex1Component } from './exercices/HTML/Ex1/ex1.component';
import { _1Component } from './exercices/HTML/Ex1/PagesComponents/_1.component';
import { _2Component } from './exercices/HTML/Ex1/PagesComponents/_2.component';
import { _3Component } from './exercices/HTML/Ex1/PagesComponents/_3.component';
import { _4Component } from './exercices/HTML/Ex1/PagesComponents/_4.component';
import { _5Component } from './exercices/HTML/Ex1/PagesComponents/_5.component';
import { _6Component } from './exercices/HTML/Ex1/PagesComponents/_6.component';
import { Ex3_table1Component } from './exercices/HTML/Ex3/tables/Ex3_table1.component';
import { Ex3_table2Component } from './exercices/HTML/Ex3/tables/Ex3_table2.component';
import { Ex3_table3Component } from './exercices/HTML/Ex3/tables/Ex3_table3.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    FooterComponent,
    HeaderComponent,
    HeroSearchComponent,
    ExercicesComponent,
    HTMLComponent,
    CGIBINComponent,
    Ex3Component,
    Ex2Component,
    PhpComponent,
    ProcessingComponent,
    SqliteComponent,
    Ex1Component,
    _1Component,
    _2Component,
    _3Component,
    _4Component,
    _5Component,
    _6Component,
    Ex3_table1Component,
    Ex3_table2Component,
    Ex3_table3Component
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }