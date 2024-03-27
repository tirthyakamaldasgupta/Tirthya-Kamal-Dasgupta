import { Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { ExperienceComponent } from './experience/experience.component';
import { ConnectComponent } from './connect/connect.component';
import { BlogsComponent } from './blogs/blogs.component';
import { EducationComponent } from './education/education.component';

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
  {
    path: 'education',
    component: EducationComponent,
    title: 'Education',
  },
  {
    path: 'blogs',
    component: BlogsComponent,
    title: 'Blogs',
  },
  {
    path: 'connect',
    component: ConnectComponent,
    title: 'Connect',
  },
];
