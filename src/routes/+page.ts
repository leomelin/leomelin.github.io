import type { PageLoad } from "../../.svelte-kit/types/src/routes/$types";
import type { ResumeModel } from "../models/resume.model";

export const load: PageLoad<ResumeModel> = async () => {
  return {
    title: "Resume",
    subtitles: ["Over 12 years in IT", "Bachelor of engineering"],
    introText: [
      "I specialize in cutting-edge web technologies, with a robust portfolio spanning startups to industry giants. My expertise lies in delivering functional software solutions, fueled by a passion for learning and innovation. Working collaboratively, I craft exceptional solutions that exceed expectations and drive business success.",
      "Primarily focused on web development, I've built internal toolchains to streamline workflows and enhance efficiency. Additionally, I excel in crafting engaging public-facing web applications and possess valuable experience in mobile development, enabling me to deliver comprehensive solutions across platforms.",
    ],
    workExperience: [
      {
        timeStart: "2021",
        timeEnd: "Present",
        company: "Melin Systems Oy",
        title: "Independent contractor",
        description:
          "As an independent contractor, I've worked closely with large businesses to develop web-based applications tailored to their needs. My focus has been on implementing complex business logic, provisioning infrastructure and handling sizeable datasets, ensuring the reliability and scalability of each solution. I collaborate closely with clients, utilizing modern web development tools like Node.js, Java, Kotlin, React, PostgreSQL, Terraform, Azure Cloud, AWS, Snowflake, and other up-to-date technologies. I ensure that every project meets and exceeds client expectations.",
      },
      {
        timeStart: "2019",
        timeEnd: "2021",
        company: "Mylab Oy",
        title: "Software Architect",
        description:
          "I specialized in fullstack development and software architecture design, utilizing a versatile toolkit including Kotlin, Spring Boot, Node.js, TypeScript, React, ActiveMQ, and Kubernetes microservices deployed on-site. A significant achievement involved spearheading a greenfield project within a 7-person team, operating within a SAFe (Scaled Agile Framework) environment. In this role, I had the autonomy to select and implement cutting-edge technologies that best suited project requirements. Additionally, I served as the SCRUM master, leading our agile team while also shouldering responsibilities as the technical lead. This multifaceted role enabled me to orchestrate seamless collaboration, ensuring the successful delivery of high-quality software solutions.",
      },
      {
        timeStart: "2015",
        timeEnd: "2019",
        company: "Gofore Oyj",
        title: "Senior Developer",
        description:
          'Fullstack developer in several customer projects. I was also a leader of our communality crew for 1,5 years being responsible of making Gofore a better workplace. My expertise was used in customer projects utilizing AWS services, where I developed Java Spring Boot and Node.js backends. I worked with various UI Frameworks like Angular, Vue.js, and React, tailoring solutions to project needs. Databases such as Mongo, ElasticSearch, and PostgreSQL was an integral part of my projects. Notable endeavors include crafting an "Industrial Electric Distribution Asset Management and Tariff Calculation System," an "Internal Reporting Tool for a Giant Global Furniture Manufacturer," a "Remake of a Well-Known Leasing Provider\'s Asset Management System," and a "New Mobile-First Version of a Real Estate Platform"',
      },
      {
        timeStart: "2013",
        timeEnd: "2015",
        company: "Eeedo Oy",
        title: "Lead Developer",
        description:
          "I led the development, maintenance, and design of a cloud-based SaaS product, making crucial technological decisions. This included building a mobile application using Cordova/Phonegap, which was successfully launched across Windows Phone, Android, and IOS platforms. Technologies utilized in this project encompassed Ubuntu/Linux, Microsoft Azure, Nginx, MariaDB, PHP-fpm, Amazon S3, Amazon SES, HTML5, JavaScript, Node.js, Cordova/PhoneGap, PHP Zend Framework, RequireJS, Backbone, Can.js, Bower, Gulp, and jQuery.",
      },
      {
        timeStart: "2012",
        timeEnd: "2013",
        company: "Tietotemput Oy",
        title: "Web Developer",
        description:
          "During my time at Tietotemput Oy, I tackled diverse web development projects, showcasing my ability to create dynamic websites using WordPress, HTML, CSS, JavaScript, jQuery, and PHP. From sleek designs to robust platforms, each project demonstrated my skill in crafting captivating online experiences. Whether customizing themes, optimizing performance, or implementing complex functionalities, I consistently delivered tailored, high-quality results. With a keen eye for design and a passion for coding, I thrived on turning ideas into polished, user-friendly websites.",
      },
      {
        timeStart: "...",
        timeEnd: "2012",
        company: "Other experience",
        title: "",
        description:
          "I engaged in occasional freelance website projects alongside founding and subsequently selling my share in a recording studio. Additionally, I represented Finland for a Norwegian digital music distribution agency and served as an audio engineer at Cosmic Studios Tampere. Further, I founded a record label and pursued freelance audio engineering across various projects. Prior to transitioning to web development, I gained experience through summer jobs in retail stores and cafes, as well as a one-year role in IT helpdesk support. While these experiences are now part of my history, I've since moved on to focus on web development.",
      },
    ],
    basicInfo: {
      name: "Leo Melin",
      title: "Senior Fullstack Web Developer",
      links: [
        {
          name: "Linkedin",
          href: "https://www.linkedin.com/in/leo-melin-70991a20/",
          icon: "linkedin.webp",
        },
        {
          name: "Github",
          href: "https://github.com/leomelin",
          icon: "github.webp",
        },
        {
          name: "Email",
          href: "bWFpbHRvOmxlb0BsZW9tZWxpbi5jb20=",
          icon: "email.webp",
        },
        {
          name: "Phone",
          href: "dGVsOiszNTg0NDUxNzY5MjM=",
          icon: "phone.webp",
        },
      ],
    },
    techExperience: [
      {
        title: "React",
        level: 5,
        description: "Used in multiple customer projects. Very experienced.",
      },
      {
        title: "Angular",
        level: 4.5,
        description: "Used in multiple customer projects. Experienced.",
      },
      {
        title: "Vue",
        level: 4.5,
        description: "Used in multiple customer projects. Experienced.",
      },
      {
        title: "Svelte",
        level: 3,
        description:
          "Used in hobby projects. This portfolio was made in Svelte.",
      },
      {
        title: "ActionScript",
        level: 2,
        description: "Used in one customer project.",
      },
      {
        title: "ActiveMQ",
        level: 4,
        description: "Used in a couple of customer projects.",
      },
      {
        title: "Adobe Illustrator",
        level: 3,
        description:
          "Used in hobby projects. Prepared also some printing materials for CD's, hoodies, mugs etc.",
      },
      {
        title: "Adobe Photoshop",
        level: 3,
        description: "Used in hobby projects and for personal fun.",
      },
      {
        title: "Amazon AWS",
        level: 4,
        description:
          "Used different AWS services in multiple customer projects.",
      },
      {
        title: "AngularJS",
        level: 4,
        description: "Used in hobby projects. Obsolete tech now.",
      },
      {
        title: "Ansible",
        level: 5,
        description:
          "Used in devops pipelines in customer projects + hobby projects",
      },
      {
        title: "Apache",
        level: 3,
        description: "Used in PHP projects mainly. It's been a while.",
      },
      {
        title: "Babel",
        level: 4,
        description:
          "The transpiler from back in the day. Used it in customer projects. Starting to be pretty obsolete now.",
      },
      {
        title: "Webpack",
        level: 3,
        description:
          "Used in many projects as the build tool. Mainly configured it for project needs.",
      },
      {
        title: "Rollup",
        level: 3,
        description:
          "Used it mainly for creating builds for internal NPM modules.",
      },
      {
        title: "Vite",
        level: 2,
        description:
          "Haven't got the opportunity to use this much yet, but I used it when creating this resume website.",
      },
      {
        title: "Backbone.js",
        level: 2,
        description: "Used in one customer project. It's been a while.",
      },
      {
        title: "Bash",
        level: 5,
        description: "All day, every day, command line yay!",
      },
      {
        title: "Bitbucket",
        level: 4,
        description: "Used in some hobby projects.",
      },
      {
        title: "Bootstrap",
        level: 4,
        description:
          "Used in multiple customer projects. Starting to be old school.",
      },
      {
        title: "Bower",
        level: 2,
        description:
          "Used in one customer project. Starting to be pretty obsolete now.",
      },
      {
        title: "Browserify",
        level: 2,
        description: "Used in one customer project for their specific needs.",
      },
      {
        title: "C",
        level: 2,
        description:
          "Done hobby projects with it in my early years and used it during IT studies.",
      },
      {
        title: "C++",
        level: 2,
        description:
          "Done hobby projects with it in my early years and used it during IT studies.",
      },
      {
        title: "Can.js",
        level: 2,
        description: "Used in one customer project for their specific needs.",
      },
      {
        title: "CSS",
        level: 5,
        description:
          "Very strong knowledge on CSS stuff. Used in all customer projects.",
      },
      {
        title: "D3",
        level: 3,
        description: "Made some graph stuff with it in a customer project.",
      },
      {
        title: "Docker",
        level: 5,
        description:
          "The standard in container tech in almost all projects. Used it a lot.",
      },
      {
        title: "Eclipse",
        level: 4,
        description:
          "IDE I've used to some extent in a couple of customer projects. Not my IDE of choice ATM.",
      },
      {
        title: "ElasticSearch",
        level: 4,
        description:
          "Used it in few customer projects. I have a pretty good grasp on where it suits well.",
      },
      {
        title: "Element UI",
        level: 2,
        description: "Used it in one customer project. It's been a while.",
      },
      {
        title: "Elm",
        level: 1,
        description:
          "Fiddled with an early version of it in a hobby project. Don't remember much about it. Very nice error messages!",
      },
      {
        title: "Express",
        level: 5,
        description: "Used this Node.js framework in many customer projects.",
      },
      {
        title: "Flash",
        level: 3,
        description:
          "Built some customer projects with it back in the day. Starting to be obsolete now.",
      },
      {
        title: "Flow",
        level: 3.5,
        description:
          "Used it in a couple of customer projects. Haven't seen this for a while now.",
      },
      {
        title: "Flyway",
        level: 5,
        description:
          "Used it in many customer projects as the db migration tool.",
      },
      {
        title: "Git",
        level: 5,
        description:
          "I've been mainly using Git for version control during my career.",
      },
      {
        title: "Gradle",
        level: 4,
        description:
          "Used gradle in many hobby projects and customer projects. Mostly with Spring Boot.",
      },
      {
        title: "GraphQL",
        level: 4,
        description:
          "I have used it a few times in both customer and hobby projects.",
      },
      {
        title: "Groovy",
        level: 3,
        description:
          "I've used it to configure gradle mainly in customer projects and hobby projects.",
      },
      {
        title: "Grunt",
        level: 2,
        description: "I used it a lot back in the day. Not in years anymore.",
      },
      {
        title: "Gulp",
        level: 2,
        description: "I used it a lot back in the day. Not in years anymore.",
      },
      {
        title: "Handlebars",
        level: 4,
        description:
          "Used it in multiple customer projects and hobby projects for templating.",
      },
      {
        title: "HTML",
        level: 5,
        description: "As a web developer, I'm pretty familiar with it.",
      },
      {
        title: "IntelliJ IDEA",
        level: 5,
        description: "My IDE of choice at the moment.",
      },
      {
        title: "Java",
        level: 5,
        description:
          "Used it in many customer projects. Mainly Spring Boot stuff.",
      },
      {
        title: "JavaScript",
        level: 5,
        description: "As a web developer, I'm pretty familiar with it.",
      },
      {
        title: "Jenkins",
        level: 4,
        description: "Used it as a CI tool in multiple customer projects.",
      },
      {
        title: "jOOQ",
        level: 5,
        description:
          "Used it as a DB DSL tool in multiple customer and hobby projects.",
      },
      {
        title: "jQuery",
        level: 3,
        description:
          "Have used it a lot back in the day for many projects. Not so much nowadays.",
      },
      {
        title: "Karma",
        level: 2,
        description: "Used it in one customer project. It's been a while.",
      },
      {
        title: "Kotlin",
        level: 5,
        description:
          "I've done many customer projects and hobby projects in Kotlin. I like it very much.",
      },
      {
        title: "Kubernetes",
        level: 4,
        description:
          "I've built a standalone cluster with it for a specific customer need. I've used it also in other projects a bit.",
      },
      {
        title: "LESS",
        level: 4,
        description: "Used it in some customer projects.",
      },
      {
        title: "Lodash",
        level: 5,
        description: "Used it in many customer projects.",
      },
      {
        title: "MariaDB",
        level: 5,
        description: "Used it in many customer projects.",
      },
      {
        title: "Maven",
        level: 4,
        description:
          "Used it in a couple of customer projects. Mainly been using Gradle though.",
      },
      {
        title: "Memcached",
        level: 4,
        description:
          "I've used it a couple of times in a few customer projects.",
      },
      {
        title: "Meteor.js",
        level: 4,
        description: "I've used it in one pretty large customer project.",
      },
      {
        title: "Microservices",
        level: 5,
        description:
          "I have lots of experience in creating and deploying microservices.",
      },
      {
        title: "Azure",
        level: 4,
        description:
          "I have used multiple Azure cloud services in some customer projects and I have a pretty good understanding how stuff works there.",
      },
      {
        title: "Mocha",
        level: 2,
        description: "Used it for testing at some point. It's been a while.",
      },
      {
        title: "ModX",
        level: 3,
        description:
          "Did a couple of customer projects with it back in the day. Not so much nowadays.",
      },
      {
        title: "Moment.js",
        level: 3,
        description: "I've used it a lot but now it's deprecated.",
      },

      {
        title: "Date-fns",
        level: 5,
        description: "I've used it a lot in multiple customer projects.",
      },
      {
        title: "MongoDB",
        level: 3,
        description:
          "Used it in a couple of customer projects. Usually I use relational database instead.",
      },
      {
        title: "MySQL",
        level: 5,
        description:
          "Used it in many customer projects. Nowadays PostgreSQL or MariaDB instead.",
      },
      {
        title: "Nginx",
        level: 5,
        description:
          "I've used it in many customer projects for serving applications.",
      },
      {
        title: "Node.js",
        level: 5,
        description:
          "I've used it in many customer projects for backend services.",
      },
      {
        title: "OAuth2.0",
        level: 3,
        description:
          "I've implemented OAuth 2.0 authentication a couple of times for customer projects.",
      },
      {
        title: "Apache Cordova",
        level: 4,
        description:
          "I've built a cross platform mobile application with PhoneGap/Apache Cordova.",
      },
      {
        title: "Phonegap",
        level: 4,
        description:
          "I've built a cross platform mobile application with Phonegap/Apache Cordova.",
      },
      {
        title: "PHP",
        level: 4,
        description:
          "I started my web developer jobs with PHP. Nowadays I've been using mostly other technologies.",
      },
      {
        title: "PostCSS",
        level: 4,
        description: "Used it in multiple customer projects.",
      },
      {
        title: "PostgreSQL",
        level: 5,
        description:
          "Nowadays it seems that almost all projects have PostgreSQL. I've used it a lot.",
      },
      {
        title: "Jade",
        level: 2,
        description:
          "Used this templating engine in some hobby projects back in the day.",
      },
      {
        title: "Qt",
        level: 2,
        description:
          "I've done some hobby projects and school projects with it. It's been a while.",
      },
      {
        title: "Redis",
        level: 5,
        description: "Used it in multiple projects as a cache solution.",
      },
      {
        title: "Redux",
        level: 5,
        description: "Used it in many React projects.",
      },
      {
        title: "RequireJS",
        level: 2,
        description:
          "Used it in one customer project back in the day. Pretty much obsolete now.",
      },
      {
        title: "Sass",
        level: 5,
        description: "Used it as a css tool in many customer projects.",
      },
      {
        title: "Sketch",
        level: 3,
        description: "Before Figma I used it to sketch some website designs.",
      },
      {
        title: "Figma",
        level: 3,
        description:
          "Used it to design some hobby websites and other stuff. I'm not an UI designer but I know the basics.",
      },
      {
        title: "Spring Boot",
        level: 5,
        description:
          "Used it in many customer projects with both Java and Kotlin.",
      },
      {
        title: "Stylus",
        level: 1,
        description:
          "Used it in some hobby project back in the day. Not seen this in a long time anymore.",
      },
      {
        title: "Subversion",
        level: 3,
        description:
          "Used it in a couple of customer projects. I've been mainly using Git.",
      },
      {
        title: "TestCafe",
        level: 5,
        description:
          "Used it in a few customer projects as the frontend testing framework.",
      },
      {
        title: "Trello",
        level: 4,
        description:
          "Used it as development planning platform in some customer projects.",
      },
      {
        title: "Jira",
        level: 4,
        description:
          "Used it for sprint planning and kanban stuff in many projects.",
      },
      {
        title: "TypeScript",
        level: 5,
        description:
          "Almost all projects I do nowadays contain some typescript. Very strong understanding of it. I prefer it over plain javascript.",
      },
      {
        title: "UI Design",
        level: 3,
        description:
          "I'm not a designer but I like to draw things and I know the basics.",
      },
      {
        title: "Underscore.js",
        level: 2,
        description:
          "Predecessor of Lodash. Not seen it around very much anymore. Used it a lot back in the day.",
      },
      {
        title: "VirtualBox",
        level: 3,
        description: "Used it for virtualization many times during my career.",
      },
      {
        title: "Wordpress",
        level: 4,
        description:
          "I've done a lot of Wordpress projects during my early career years. Not so much anymore.",
      },
      {
        title: "Zend Framework",
        level: 3,
        description:
          "I used Zend framework for some PHP based customer projects. Not in long time though.",
      },
      {
        title: "Terraform",
        level: 5,
        description:
          "I've used it in some customer projects for provisioning and managing infra.",
      },
      {
        title: "Snowflake",
        level: 3.5,
        description:
          "I used it a bit in one customer project to get more speed for large database queries.",
      },
      {
        title: "Hashicorp Vault",
        level: 2,
        description: "I used it in one customer project to store secrets.",
      },
      {
        title: "MSSQL",
        level: 5,
        description:
          "I've used MSSQL in some customer projects as the main database.",
      },
      {
        title: "MobX",
        level: 4,
        description:
          "It has been the state storage solution in some React projects I have worked in.",
      },
      {
        title: "Playwright",
        level: 5,
        description: "I've used it for UI testing and I know it pretty well.",
      },
      {
        title: "Cypress",
        level: 4,
        description: "I've used it for UI testing in a customer project.",
      },
      {
        title: "TanStack query",
        level: 4,
        description: "I've used it as the http request handler with React.",
      },
      {
        title: "C#",
        level: 1,
        description:
          "I've fiddled around with C# in a .NET Maui hobby project but I've never used it professionally.",
      },
      {
        title: ".NET Maui",
        level: 1,
        description:
          "I've fiddled around with it in a hobby project but I've never used it professionally.",
      },
      {
        title: "Flutter",
        level: 2,
        description:
          "I've fiddled around with it in a hobby project but I've never used it professionally.",
      },
      {
        title: "Dart",
        level: 2,
        description:
          "I've fiddled around with it in a Flutter hobby project but I've never used it professionally.",
      },
      {
        title: "Go",
        level: 1,
        description: "I've tried it a bit in a hobby project.",
      },
      {
        title: "Python",
        level: 3,
        description:
          "I've used it professionally in multiple projects. Not my main language but I can definitely use it when needed.",
      },
    ],
  };
};
