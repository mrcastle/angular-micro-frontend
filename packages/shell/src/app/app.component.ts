import { loadRemoteModule } from '@angular-architects/native-federation';
import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'shell';

  @ViewChild('navMenu', { read: ViewContainerRef })
  navMenuContainer!: ViewContainerRef;

  ngOnInit(): void {
    this.loadComponent();
  }

  async loadComponent() {
    const NavMenuComponent = await loadRemoteModule('nav', './NavMenu').then(
      (m) => m.NavMenuComponent
    );
    this.navMenuContainer.createComponent(NavMenuComponent);
  }
}
