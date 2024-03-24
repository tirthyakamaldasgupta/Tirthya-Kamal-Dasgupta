import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';

interface Items {
  label: string;
  routerLink: string;
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule, MdbCollapseModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  items: Items[] = [
    {
      label: 'Experience',
      routerLink: 'experience',
    },
    {
      label: 'Projects',
      routerLink: 'projects',
    },
    {
      label: 'Education',
      routerLink: 'education',
    },
    {
      label: 'Blogs',
      routerLink: 'blogs',
    },
    {
      label: 'Connect',
      routerLink: 'connect',
    },
  ];
}
