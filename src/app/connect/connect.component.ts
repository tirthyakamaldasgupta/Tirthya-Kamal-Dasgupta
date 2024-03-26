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
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { HttpClient } from '@angular/common/http';

interface SocialAccount {
  icon: any;
  color: string;
  link: string;
}

@Component({
  selector: 'app-connect',
  standalone: true,
  imports: [
    CommonModule,
    MdbFormsModule,
    ReactiveFormsModule,
    MdbValidationModule,
    FontAwesomeModule,
  ],
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

  enquiryFormSubmissionEndpoint = import.meta.env['NG_APP_ENQUIRY_FORM_SUBMISSION_ENDPOINT'];

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.enquiryForm = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      middleName: new FormControl(''),
      lastName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      company: new FormControl(''),
      message: new FormControl('', [Validators.required]),
    });

    console.log(this.enquiryFormSubmissionEndpoint);
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

  getFirstNameErrorMessage(): string {
    const control = this.enquiryForm.get('firstName');
    let errorMessage = '';

    if (control?.invalid && (control.dirty || control.touched)) {
      if (control.errors?.['required']) {
        errorMessage = 'First name is required';
      } else if (control.errors?.['minlength']) {
        errorMessage = `Minimum length should be ${control.errors['minlength'].requiredLength}`;
      }
    }

    return errorMessage;
  }

  getLastNameErrorMessage(): string {
    const control = this.enquiryForm.get('lastName');
    let errorMessage = '';

    if (control?.invalid && (control.dirty || control.touched)) {
      if (control.errors?.['required']) {
        errorMessage = 'Last name is required';
      } else if (control.errors?.['minlength']) {
        errorMessage = `Minimum length should be ${control.errors['minlength'].requiredLength}`;
      }
    }

    return errorMessage;
  }

  getEmailErrorMessage(): string {
    const control = this.enquiryForm.get('email');
    let errorMessage = '';

    if (control?.invalid && (control.dirty || control.touched)) {
      if (control.errors?.['required']) {
        errorMessage = 'Email is required';
      } else if (control.errors?.['email']) {
        errorMessage = 'Invalid email format';
      }
    }

    return errorMessage;
  }

  getCompanyErrorMessage(): string {
    const control = this.enquiryForm.get('company');
    let errorMessage = '';

    if (control?.invalid && (control.dirty || control.touched)) {
      if (control.errors?.['minlength']) {
        errorMessage = `Minimum length should be ${control.errors['minlength'].requiredLength}`;
      }
    }

    return errorMessage;
  }

  getMessageErrorMessage(): string {
    const control = this.enquiryForm.get('message');
    let errorMessage = '';

    if (control?.invalid && (control.dirty || control.touched)) {
      if (control.errors?.['required']) {
        errorMessage = 'Message is required';
      } else if (control.errors?.['minlength']) {
        errorMessage = `Minimum length should be ${control.errors['minlength'].requiredLength}`;
      }
    }

    return errorMessage;
  }

  onSubmit(): boolean {
    console.log(this.enquiryForm);

    const currentDate = new Date();
    const localTimestampInEpoch =
      currentDate.getTime() - currentDate.getTimezoneOffset() * 60000;

    this.enquiryForm.value.timeStamp = localTimestampInEpoch;

    const headers = {
      'Content-Type': 'application/json; charset=utf-8',
    };

    console.log(this.enquiryForm.value);

    this.httpClient.post(
      this.enquiryFormSubmissionEndpoint,
      this.enquiryForm.value,
      {
        headers: headers,
      }
    ).subscribe(response => {
      console.log(response);
    }, error => {
      console.error(error);
    });;

    return true;
  }
}
