import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { MdbValidationModule } from 'mdb-angular-ui-kit/validation';
import {
  faGithub,
  faHashnode,
  faLinkedin,
  faMedium,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

interface SocialAccount {
  icon: any;
  color: string;
  link: string;
}

@Component({
  selector: 'app-connect',
  standalone: true,
  imports: [CommonModule, MdbFormsModule, ReactiveFormsModule, MdbValidationModule, FontAwesomeModule],
  templateUrl: './connect.component.html',
  styleUrl: './connect.component.css',
})
export class ConnectComponent implements OnInit {
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

  enquiryForm!: FormGroup;

  ngOnInit(): void {
    this.enquiryForm = new FormGroup({
      firstName: new FormControl('', [
        Validators.required,
        Validators.minLength(1),
      ]),
      middleName: new FormControl('', [Validators.minLength(1)]),
      lastName: new FormControl('', [
        Validators.required,
        Validators.minLength(1),
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      company: new FormControl('', [Validators.minLength(1)]),
      message: new FormControl('', [
        Validators.required,
        Validators.minLength(1),
      ]),
    });
  }

  get firstName(): AbstractControl {
    return this.enquiryForm.get('firstName')!;
  }

  get middleName(): AbstractControl {
    return this.enquiryForm.get('middleName')!;
  }

  get lastName(): AbstractControl {
    return this.enquiryForm.get('lastName')!;
  }

  get email(): AbstractControl {
    return this.enquiryForm.get('email')!;
  }

  get company(): AbstractControl {
    return this.enquiryForm.get('company')!;
  }

  get message(): AbstractControl {
    return this.enquiryForm.get('message')!;
  }

  onSubmit(): void {}
}
