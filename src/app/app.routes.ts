import { Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { ExperienceComponent } from './experience/experience.component';

export const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    title: 'Tirthya Kamal Dasgupta',
  },
  {
    path: 'experience',
    component: ExperienceComponent,
    title: 'Experience',
  },
];
