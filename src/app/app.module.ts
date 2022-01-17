import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {FirstSectionComponent} from './first-section/first-section.component'
import { MySkillsComponent } from './my-skills/my-skills.component';
import { MyProjectsComponent } from './my-projects/my-projects.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { FooterComponent } from './footer/footer.component';
import { DatenschutzComponent } from './datenschutz/datenschutz.component';
import { ImpressumComponent } from './impressum/impressum.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FirstSectionComponent,
    MySkillsComponent,
    MyProjectsComponent,
    AboutMeComponent,
    ContactMeComponent,
    FooterComponent,
    DatenschutzComponent,
    ImpressumComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
