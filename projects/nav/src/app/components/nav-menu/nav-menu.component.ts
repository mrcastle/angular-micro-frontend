import { NgFor } from '@angular/common';
import { Component, Input, TemplateRef } from '@angular/core';
import { MatTabNavPanel, MatTabsModule } from '@angular/material/tabs';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav-menu',
  standalone: true,
  imports: [NgFor, MatTabsModule, RouterModule],
  templateUrl: './nav-menu.component.html',
  styleUrl: './nav-menu.component.scss',
})
export class NavMenuComponent {
  links = [
    { label: 'Home', path: '/' },
    { label: 'Remote One', path: '/mfe-one' },
    { label: 'Remote Two', path: '/mfe-two' },
  ];

  @Input() tabPanel!: MatTabNavPanel;
}
