import { Component } from '@angular/core';
import { NavBarComponent } from './shared/components/nav-bar/nav-bar.component';
import {FooterComponent} from './shared/components/footer/footer.component';
import {RouterOutlet} from '@angular/router';
import {HomepageComponent} from './features/homepage/homepage.component';
@Component({
  selector: 'app-root',
  imports: [NavBarComponent, FooterComponent, RouterOutlet, HomepageComponent],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'gusto-flow';
  isSidebarVisible = true;

  toggleSidebar() {
    this.isSidebarVisible = !this.isSidebarVisible;
  }
}

