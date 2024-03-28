import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  IconDefinition,
  faGithub,
  faHashnode,
  faLinkedin,
  faMedium,
  faYoutube,
  faAngular,
  faMdb,
} from '@fortawesome/free-brands-svg-icons';
import moment from 'moment';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

interface Icon {
  icon: IconDefinition;
  color: string;
  link: string;
}

interface StackIcons {
  [key: string]: Icon;
}

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent implements OnInit {
  year = moment().year();

  socialAccounts: Icon[] = [
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

  stackIcons: StackIcons = {
    angularIcon: {
      icon: faAngular,
      color: '#DD0031',
      link: '',
    },
    mdbIcon: {
      icon: faMdb,
      color: '',
      link: '',
    },
  };

  angularIcon: IconDefinition = faLinkedin;
  mdbIcon: IconDefinition = faMdb;

  isMobileOrTablet: boolean = false;

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit() {
    this.breakpointObserver
      .observe([Breakpoints.Handset, Breakpoints.Tablet])
      .subscribe((result) => {
        this.isMobileOrTablet = result.matches;
      });
  }
}
