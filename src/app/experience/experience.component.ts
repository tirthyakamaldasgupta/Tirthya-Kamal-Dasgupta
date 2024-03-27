import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import moment from 'moment';

interface Achievement {
  achievement: string;
}

interface Title {
  title: string;
  startDate: moment.Moment;
  endDate?: moment.Moment;
  location: string;
  locationType: 'On-site' | 'Hybrid' | 'Remote';
  achievements: Achievement[];
}

interface Company {
  name: string;
  website: string;
  employmentType: 'Full-time' | 'Contract';
  startDate: moment.Moment;
  endDate?: moment.Moment;
  titles: Title[];
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css',
})
export class ExperienceComponent {
  pageHeading: String = 'Experience';
  resumeDownloaderButtonText: String = 'Download resume';
  companies: Company[] = [
    {
      name: 'BAAR Technologies',
      website: 'https://baar.ai/',
      employmentType: 'Full-time',
      startDate: moment({ year: 2021, month: 4, day: 6 }),
      titles: [
        {
          title: 'Senior Automation Engineer',
          startDate: moment({ year: 2022, month: 3, day: 1 }),
          location: 'Kolkata, West Bengal, India',
          locationType: 'Hybrid',
          achievements: [
            {
              achievement:
                'I am leading the end-to-end development of the backend for a data visualisation platform, constructing it from scratch. My ongoing responsibilities encompass both the development and support of this application, serving two distinct clients. The backend has been developed using Express.js, featuring PostgreSQL as the database, and leveraging Sequelize ORM for data querying and manipulation.',
            },
            {
              achievement:
                'I contributed to the development of ULM (User Lifecycle Management) workflows in BAAR, facilitating seamless integration with BAARIGA (automated identity management platform). I successfully integrated HR platforms, including Zoho People and SAP SuccessFactors, along with proprietary HRMS platforms used by financial institutions. I also orchestrated integrations with applications like DocuSign, Jira Service Management, and Okta, along with proprietary applications used by financial institutions, for automated user provisioning through BAARIGA. I developed Python scripts using public APIs and employed Web Automation with Selenium and Playwright for systems lacking public APIs.',
            },
            {
              achievement:
                'I have developed a web service using Django and Django REST Framework, functioning as a proxy for interacting with various REST or SOAP APIs. This service hits these APIs and unifies the response obtained from those APIs into a structured JSON format. Additionally, it offers the flexibility to customize the response further by renaming fields and flattening nested structures as needed. I also integrated this web service into several workflows developed in BAAR.',
            },
            {
              achievement:
                'I devised and implemented automated workflows in BAAR for streamlined component inspection report generation at Tata Steel. Authored Python code to parse dynamically generated YAML configurations, defining document structure and data, and leveraged the python-docx library to generate precise Word documents.',
            },
          ],
        },
        {
          title: 'Automation Engineer',
          startDate: moment({ year: 2021, month: 4, day: 6 }),
          endDate: moment({ year: 2022, month: 2, day: 28 }),
          location: 'Kolkata, West Bengal, India',
          locationType: 'Remote',
          achievements: [
            {
              achievement:
                'For PwC Middle East (outsourced through TASC Outsourcing), I developed and deployed a 3rd party web application for an original application called Vincere, a recruitment agency software for staffing firms. The client required a simpler interface for posting jobs and viewing the status of the posted jobs. To achieve this, I used HTML, CSS, and jQuery in the frontend, which interacted with the REST APIs of the backend built using Django, Django REST Framework, and MySQL as a database. I leveraged the public APIs provided by Vincere and integrated my application with their public APIs. I deployed the application on an AWS EC2 instance.',
            },
            {
              achievement:
                'I developed an RPA Workflow within BAAR for a client, specialised in developing defence electronic products, optimizing the quotation process with the suppliers. I also automated the updation of the quotations of the final products on the company website in accordance with pricing agreements. The workflow included monitoring emails, extracting quotations, conducting calculations with Python scripts, and maintaining continuous communication between the client and vendors until a final agreement was reached. I also employed Web Automation using Robot Framework for updating product quotations on the company website.',
            },
            {
              achievement:
                'I played a key role in developing Python scripts for web automation tasks, including form-fill operations, file uploads, general interactions, data extraction, API automations, and data reconciliation. Additionally, I contributed to the creation of plugins for email communication and integration with Microsoft Office desktop applications. My responsibilities also involved handling data extraction from Mainframe computers and PDFs, as well as generating HTML email bodies and charts using Python for various projects, both as part of PoCs and client projects.',
            },
          ],
        },
      ],
    },
  ];

  calculateTenure(startDate: moment.Moment, endDate?: moment.Moment): string {
    endDate = endDate || moment();

    const duration = moment.duration(endDate.diff(startDate));

    const years = duration.asYears();

    if (years < 1) {
      return years.toFixed(1) + ' year';
    } else {
      return years.toFixed(1) + ' years';
    }
  }

  downloadResume = () => {
    const fileUrl = '/assets/resumes/Tirthya-Kamal-Dasgupta-Resume.pdf';
    const fileName = 'Tirthya-Kamal-Dasgupta-Resume.pdf';

    const link = document.createElement('a');

    link.href = fileUrl;
    link.download = fileName;

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);
  };
}
