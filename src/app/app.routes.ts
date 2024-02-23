import { Routes } from '@angular/router';
import { DesarrolloComponent } from './desarrollo/desarrollo.component'; // Add missing import
import { IndexComponent } from './index/index.component'; // Add missing import
import { EdicionComponent } from './edicion/edicion.component';
import { MarketingComponent } from './marketing/marketing.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ContactoComponent } from './contacto/contacto.component';

export const routes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'index', component: IndexComponent},
  {path: 'desarrollo', component: DesarrolloComponent},
  {path: 'edicion', component: EdicionComponent },
  {path: 'marketing', component: MarketingComponent},
  {path: 'nosotros', component: NosotrosComponent},
  {path: 'contacto', component: ContactoComponent},
];
