import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { DesarrolloComponent } from './desarrollo/desarrollo.component';
import { IndexComponent } from './index/index.component';
import { MarketingComponent } from './marketing/marketing.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ContactoComponent } from './contacto/contacto.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, IndexComponent, DesarrolloComponent, CommonModule, MarketingComponent, NosotrosComponent, ContactoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Web_Portafolio';
}
