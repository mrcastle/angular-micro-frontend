import { loadRemoteModule } from '@angular-architects/native-federation';
import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  @ViewChild('navContainer', { read: ViewContainerRef })
  navContainer!: ViewContainerRef;
  title = 'shell';

  async ngOnInit() {
    this.loadNavMenu();
  }

  async loadNavMenu() {
    const { NavMenuComponent } = await loadRemoteModule(
      'nav',
      './NavMenuComponent'
    );

    this.navContainer.createComponent(NavMenuComponent);
  }
}
