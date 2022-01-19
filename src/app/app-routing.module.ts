import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatenschutzComponent } from './datenschutz/datenschutz.component';
import { FirstSectionComponent } from './first-section/first-section.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { SuccessComponent } from './success/success.component';

const routes: Routes = [
  { path: '', component: FirstSectionComponent },
  { path: 'impressum', component: ImpressumComponent },
  { path: 'datenschutz', component: DatenschutzComponent },
  { path: 'thank-you', component: SuccessComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    // RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
