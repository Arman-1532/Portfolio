/**
 * Page content — edit portfolio copy and listings here.
 */
const CONTENT = {
  about: {
    headline: 'Md Abdullah Arman',
    subtitle: 'Software Engineering Undergraduate — University of Dhaka',
    description:
      'Passionate about building innovative software solutions and constantly learning new technologies. Currently pursuing my B.Sc in Software Engineering with a focus on full-stack development and machine learning.',
  },

  education: [
    {
      degree: 'B.Sc in Software Engineering',
      institution: 'University of Dhaka',
      detail: 'CGPA: 3.75 (till date)',
      period: '2023 - 2027 (expected)',
    },
    {
      degree: 'Higher Secondary Certificate (H.S.C)',
      institution: 'Milestone College',
      detail: 'GPA: 5.00',
      period: '2022',
    },
    {
      degree: 'Secondary School Certificate (S.S.C)',
      institution: 'Safiuddin Sarker Academy and College',
      detail: 'GPA: 5.00',
      period: '2020',
    },
  ],

  projects: [
    {
      title: 'TripNetwork',
      repo: 'https://github.com/Arman-1532/TripNetwork',
      description:
        'A full-stack travel and tour management platform where users can register, log in, search and book flights, hotels, and tour packages, and create group tours with a designated group leader. Includes custom travel requests, profile and booking management, and time-limited offers from hotel agents and travel agencies.',
      features: [
        'Flight, hotel, and tour package search with end-to-end booking flows',
        'Group tour creation and management with a designated group leader',
        'Custom travel requests, user profiles, and booking history',
        'Dedicated dashboards for users, hotel managers, and travel agencies',
        'Admin panel for approvals, monitoring, and system integrity',
      ],
      tech: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Node.js', 'MySQL'],
    },
    {
      title: 'CivicLens',
      repo: 'https://github.com/Arman-1532/CivicLens',
      description:
        'An AI-powered e-governance platform where citizens submit complaints in plain language and the system automatically sorts them into categories (e.g. corruption, utilities, harassment, etc.), assigns priority (high/medium/low), and routes each case to the right government department - with a confidence score on each prediction.',
      features: [
        'Plain-language complaint filing with automatic category and priority assignment',
        'Department routing with confidence scores on each AI prediction',
        'React web app for submitting complaints and viewing history and stats',
        'FastAPI backend with SQLite storage and JWT-secured access',
        'TF-IDF text features with a CatBoost gradient-boosting classifier',
        'NLTK-based text cleanup pipeline during model training',
      ],
      tech: ['Python', 'FastAPI', 'React.js', 'Tailwind CSS', 'SQLite'],
    },
    {
      title: 'POS-App',
      repo: 'https://github.com/Arman-1532/POS-App',
      description:
        'A comprehensive point-of-sale system built with JavaFX featuring role-based access control for administrators and employees. The system includes complete inventory management, order processing, customer relationship management, and implements multiple design patterns for maintainable and scalable code architecture.',
      features: [
        'Admin and Employee role management with secure authentication',
        'Real-time inventory tracking and stock management',
        'Order processing with receipt generation',
        'Customer database and purchase history',
        'Design patterns: Singleton, Bridge, Command, Memento, Observer',
        'Intuitive JavaFX user interface',
      ],
      tech: ['Java', 'JavaFX', 'MySQL', 'OOP Design Patterns'],
    },
    {
      title: 'ProbStat Prodigy (SPL-1)',
      repo: 'https://github.com/Arman-1532/SPL-1',
      description:
        'A powerful C++ library that provides Pandas-like functionality for probability and statistics calculations. This project serves as my Software Project Lab - 1 (SPL-1) coursework, implementing advanced data structures and algorithms for efficient statistical computing and data analysis.',
      features: [
        'DataFrame and Series data structures similar to Pandas',
        'Statistical functions for descriptive and inferential statistics',
        'Probability distribution calculations',
        'Data manipulation and transformation operations',
        'Memory-efficient algorithms for large datasets',
        'Command-line interface for interactive analysis',
      ],
      tech: ['C', 'C++'],
    },
    {
      title: 'Automated Greenhouse (IoT)',
      repo: 'https://github.com/effazrayhan/IOT_project',
      description:
        'An intelligent IoT-based automated greenhouse system developed during my first year that monitors and controls environmental parameters to optimize plant growth. The system uses various sensors and actuators to maintain ideal conditions automatically.',
      features: [
        'Real-time monitoring of temperature, humidity, and soil moisture',
        'Automated watering system based on soil conditions',
        'Climate control with fans and heating elements',
        'Light intensity monitoring and supplemental LED lighting',
        'Mobile app for remote monitoring and control',
        'Data logging and analysis for growth optimization',
      ],
      tech: ['Arduino', 'IoT Sensors'],
    },
    {
      title: 'NEXUS — Voice Assistant',
      repo: 'https://github.com/Arman-1532/NEXUS-voice-assistant',
      description:
        'NEXUS is a modular voice assistant prototype for desktop environments. It provides speech-to-text and text-to-speech capabilities, command handling for local tasks and web queries, and an extensible skill/plugin system so new actions can be added easily.',
      features: [
        'Speech recognition and TTS responses for natural interaction',
        'Command execution: open apps, search the web, play media, and control system settings',
        'Extensible skills/plugins to add custom behaviors',
        'Configurable activation (hotkey or wake-word) and conversation flow',
        'Designed as a personal assistant prototype to experiment with AI-driven workflows',
      ],
      tech: ['Python', 'SpeechRecognition', 'pyttsx3 / TTS', 'GitHub AI Models API'],
    },
  ],

  skills: [
    {
      title: 'Programming Languages',
      items: [
        { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
        { name: 'Python', icon: 'https://cdn.simpleicons.org/python/3776AB' },
        { name: 'C++', icon: 'https://cdn.simpleicons.org/cplusplus/00599C' },
        { name: 'PHP', icon: 'https://cdn.simpleicons.org/php/777BB4' },
        { name: 'C', icon: 'https://cdn.simpleicons.org/c/A8B9CC' },
      ],
    },
    {
      title: 'Web Technologies',
      items: [
        { name: 'HTML', icon: 'https://cdn.simpleicons.org/html5/E34F26' },
        { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
        { name: 'Javascript', icon: 'https://cdn.simpleicons.org/javascript/F7DF1E' },
      ],
    },
    {
      title: 'Libraries and Frameworks',
      items: [
        { name: 'Pandas', icon: 'https://cdn.simpleicons.org/pandas/150458' },
        { name: 'NumPy', icon: 'https://cdn.simpleicons.org/numpy/013243' },
        { name: 'React', icon: 'https://cdn.simpleicons.org/react/61DAFB' },
        { name: 'Node.js', icon: 'https://cdn.simpleicons.org/nodedotjs/339933' },
        { name: 'Express.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
      ],
    },
    {
      title: 'Databases',
      items: [
        { name: 'MySQL', icon: 'https://cdn.simpleicons.org/mysql/4479A1' },
        { name: 'SQLite', icon: 'https://cdn.simpleicons.org/sqlite/003B57' },
        { name: 'OracleDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg' },
      ],
    },
    {
      title: 'Development Tools',
      items: [
        { name: 'Git', icon: 'https://cdn.simpleicons.org/git/F05032' },
        { name: 'Github', icon: 'https://cdn.simpleicons.org/github/181717' },
        { name: 'Linux', icon: 'https://cdn.simpleicons.org/linux/FCC624' },
        { name: 'Jupyter Notebook', icon: 'https://cdn.simpleicons.org/jupyter/F37626' },
        { name: 'Postman', icon: 'https://cdn.simpleicons.org/postman/FF6C37' },
      ],
    },
  ],

  activities: [
    {
      title: 'Certifications',
      items: [
        'AI+ Prompt Engineer Level 1™ Certified (2025)',
        'Microsoft 365 Copilot Training Certified — Microsoft Learn (2025)',
      ],
    },
    {
      title: 'Volunteer Experience',
      items: ['Volunteer in ITVerse, 2023'],
    },
    {
      title: 'Competitive Programming',
      items: ['Codeforces Contest Rating: 985'],
    },
  ],
};
