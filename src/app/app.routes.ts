import { Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { ExperienceComponent } from './experience/experience.component';
import { ConnectComponent } from './connect/connect.component';
import { BlogsComponent } from './blogs/blogs.component';
import { EducationComponent } from './education/education.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';

export const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    title: 'Tirthya Kamal Dasgupta',
  },
  {
    path: 'skills',
    component: SkillsComponent,
    title: 'Skills',
  },
  {
    path: 'experience',
    component: ExperienceComponent,
    title: 'Experience',
  },
  {
    path: 'projects',
    component: ProjectsComponent,
    title: 'Projects',
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
