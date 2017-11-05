import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponentComponent } from './home-component/home-component.component';
import { AboutComponentComponent } from './about-component/about-component.component';
import { ProjectComponentComponent } from './project-component/project-component.component';
import { ContactComponentComponent } from './contact-component/contact-component.component';
import { ExpComponentComponent } from './exp-component/exp-component.component';

const appRoutes: Routes = [
{path: '', component: HomeComponentComponent},
{path: 'About', component: AboutComponentComponent},
{path: 'Project', component: ProjectComponentComponent},
{path: 'Contact', component: ContactComponentComponent},
{path: 'Exp', component: ExpComponentComponent},
];



@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    AboutComponentComponent,
    ProjectComponentComponent,
    ContactComponentComponent,
    ExpComponentComponent],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
