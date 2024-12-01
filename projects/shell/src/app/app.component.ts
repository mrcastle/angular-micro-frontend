import { loadRemoteModule } from '@angular-architects/native-federation';
import {
  Component,
  OnInit,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { MatTabNavPanel } from '@angular/material/tabs';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatTabNavPanel],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  @ViewChild('navMenu', { read: ViewContainerRef })
  navContainer!: ViewContainerRef;
  title = 'shell';

  @ViewChild('tabPanel') tabPanel!: MatTabNavPanel;

  ngOnInit() {
    this.loadNavMenu();
  }

  async loadNavMenu() {
    const { NavMenuComponent } = await loadRemoteModule(
      'nav',
      './NavMenuComponent'
    );

    const navMenu = this.navContainer.createComponent(
      NavMenuComponent
    ) as typeof NavMenuComponent;
    navMenu.instance.tabPanel = this.tabPanel;
  }
}
