import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import moment from 'moment';

interface Degree {
  name: string;
  fieldOfStudy: string;
  startDate: moment.Moment;
  endDate: moment.Moment;
  grade?: number;
  certificateName: string;
  certificatePath: string;
}

interface Institution {
  name: string;
  website: string;
  degrees: Degree[];
}

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css',
})
export class EducationComponent {
  institutions: Institution[] = [
    {
      name: 'Maulana Abul Kalam Azad University of Technology, West Bengal formerly WBUT',
      website: 'https://makautexam.net/',
      degrees: [
        {
          name: "Master's degree",
          fieldOfStudy: 'Computer Applications',
          startDate: moment({ year: 2020, month: 11 }),
          endDate: moment({ year: 2022, month: 1 }),
          grade: 9.59,
          certificateName: 'Tirthya-Kamal-Dasgupta-MCA-Certificate',
          certificatePath:
            'assets/certificates/Tirthya-Kamal-Dasgupta-MCA-Certificate.pdf',
        },
        {
          name: "Bachelor's degree",
          fieldOfStudy: 'Computer Applications',
          startDate: moment({ year: 2017, month: 8 }),
          endDate: moment({ year: 2020, month: 7 }),
          grade: 8.26,
          certificateName: 'Tirthya-Kamal-Dasgupta-BCA-Certificate',
          certificatePath:
            'assets/certificates/Tirthya-Kamal-Dasgupta-BCA-Certificate.pdf',
        },
      ],
    },
    {
      name: 'Calcutta University',
      website: 'https://www.caluniv.ac.in/',
      degrees: [
        {
          name: "Bachelor's degree",
          fieldOfStudy: 'Business/Commerce, General',
          startDate: moment({ year: 2015, month: 8 }),
          endDate: moment({ year: 2017, month: 7 }),
          certificateName: 'Tirthya-Kamal-Dasgupta-BCOM-Certificate',
          certificatePath:
            'assets/certificates/Tirthya-Kamal-Dasgupta-BCOM-Certificate.pdf',
        },
      ],
    },
  ];

  downloadCertificate(institutionName: string, degreeName: string) {
    const degree = this.institutions
      .find((institution) => institution.name === institutionName)
      ?.degrees.find((degree) => degree.name === degreeName);

    if (degree) {
      const certificateName = degree.certificateName;
      const certificatePath = degree.certificatePath;

      const link = document.createElement('a');

      link.href = certificatePath;
      link.download = certificateName;

      document.body.appendChild(link);

      link.click();

      document.body.removeChild(link);
    }
  }
}
