import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import {
  faGithub,
  faHashnode,
  faLinkedin,
  faMedium,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';

interface SocialAccount {
  icon: any;
  color: string;
  link: string;
}

@Component({
  selector: 'app-connect',
  standalone: true,
  imports: [CommonModule, MdbFormsModule, FontAwesomeModule],
  templateUrl: './connect.component.html',
  styleUrl: './connect.component.css',
})
export class ConnectComponent {
  socialAccounts: SocialAccount[] = [
    {
      icon: faLinkedin,
      color: '#0a66c2',
      link: 'https://www.linkedin.com/in/tirthya-kamal-dasgupta/',
    },
    {
      icon: faMedium,
      color: '#000000',
      link: 'https://medium.com/@tirthyakamaldasgupta12',
    },
    {
      icon: faHashnode,
      color: '#2962FF',
      link: 'https://tirthya-kamal-dasgupta.hashnode.dev/',
    },
    {
      icon: faGithub,
      color: '#000000',
      link: 'https://github.com/tirthyakamaldasgupta',
    },
    {
      icon: faYoutube,
      color: '#ff0000',
      link: 'https://www.youtube.com/channel/UCnESi7g2P7lhhJ1Jy36SuqA',
    },
  ];
}
