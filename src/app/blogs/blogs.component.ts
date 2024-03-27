import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  IconDefinition,
  faHashnode,
  faMedium,
} from '@fortawesome/free-brands-svg-icons';
import moment from 'moment';

interface Platform {
  icon: IconDefinition;
  color: string;
  link: string;
}

interface Blog {
  title: string;
  datePublished: moment.Moment;
  readingTime: moment.Duration;
  preview: string;
  platforms: Platform[];
}

@Component({
  selector: 'app-blogs',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.css',
})
export class BlogsComponent {
  blogs: Blog[] = [
    {
      title:
        'Effortlessly collect enquiries: How you can use Vercel Serverless Functions and FastAPI to send enquiry submissions to Google Sheets, for portfolio!',
      datePublished: moment({ year: 2023, month: 4, day: 2 }),
      readingTime: moment.duration(17, 'minutes'),
      preview:
        'To facilitate user queries on my portfolio site, which is currently being developed, I am offering two options for submitting inquiries: emailing me directly or filling out a simple form. To ensure the best user experience for the latter option, I have two constraints: Data Storage and Scalability. Explore the solution that involves developing a FastAPI server and deploying it on Vercel Serverless Functions, to efficiently store enquiry data in a Google Sheet and address the challenges at hand.',
      platforms: [
        {
          icon: faMedium,
          color: '#000000',
          link: 'https://medium.com/@tirthyakamaldasgupta12/effortlessly-collect-enquiries-how-i-used-vercel-serverless-functions-and-fastapi-to-send-enquiry-ef3416a2662d',
        },
        {
          icon: faHashnode,
          color: '#2962FF',
          link: 'https://tirthya-kamal-dasgupta.hashnode.dev/effortlessly-collect-enquiries-how-you-can-use-vercel-serverless-functions-and-fastapi-to-send-enquiry-submissions-to-google-sheets-for-portfolio',
        },
      ],
    },
    {
      title:
        'Effortlessly document your code with Mintlify Doc Writer',
      datePublished: moment({ year: 2023, month: 2, day: 12 }),
      readingTime: moment.duration(17, 'minutes'),
      preview:
        'Continuously documenting your code base is important during the development process. If you seek to streamline documentation efforts and prioritize development, you can use the Mintlify Doc Writer extension to effortlessly generate high-quality documentation for your code directly within VS Code.',
      platforms: [
        {
          icon: faMedium,
          color: '#000000',
          link: 'https://medium.com/@tirthyakamaldasgupta12/effortlessly-document-your-code-with-mintlify-doc-writer-1c6dc5b32a15',
        },
        {
          icon: faHashnode,
          color: '#2962FF',
          link: 'https://tirthya-kamal-dasgupta.hashnode.dev/effortlessly-document-your-code-with-mintlify-doc-writer',
        },
      ],
    },
    {
      title:
        'Visualize the flow of your application right within VS Code with Mermaid',
      datePublished: moment({ year: 2023, month: 2, day: 6 }),
      readingTime: moment.duration(7, 'minutes'),
      preview:
        'It is common for individuals to have a strong desire to swiftly implement a process or solution during its development, without first taking the time to visualize its flow. Discover how you can visualize the flow of your application using Mermaid, a tool that can be integrated into VS Code.',
      platforms: [
        {
          icon: faMedium,
          color: '#000000',
          link: 'https://medium.com/@tirthyakamaldasgupta12/visualize-the-flow-of-your-application-right-within-vs-code-with-mermaid-55e234ba4be0',
        },
      ],
    },
    {
      title:
        'Simple python script to fetch the equivalent price of 1 Dogecoin in the local currency',
      datePublished: moment({ year: 2021, month: 4, day: 18 }),
      readingTime: moment.duration(3, 'minutes'),
      preview:
        'See how I have developed a basic Python script designed to retrieve the current exchange rate of 1 Dogecoin in the user\'s local currency.',
      platforms: [
        {
          icon: faMedium,
          color: '#000000',
          link: 'https://medium.com/@tirthyakamaldasgupta12/simple-python-script-to-fetch-the-equivalent-price-of-1-dogecoin-in-the-local-currency-5d88e09dcd46',
        },
      ],
    }
  ];
}
