import {
    github,
    linkedin,
    resume,
    googleScholar,
    savifinance,
    linuxfound,
    utmist,
    uoft,
    uoftai,
} from "../assets/icons";

export const ResearchExperiences = [
    {
         title: "Machine Learning - Research Student",
        company_name: "University of Toronto",
        icon: uoft,
        iconBg: "#accbe1",
        date: "April 2025 - September 2025",
        points: [
            "Conducted structured analysis of introductory ML textbooks, mapping coverage of core algorithms (classification, regression, clustering) and their mathematical formulations.",
            "Designed and applied a hybrid coding framework integrating ML domain knowledge with qualitative methods, ensuring reproducibility across datasets.",
            "Investigated how ML textbooks frame discipline-wide challenges, emerging trends, interdisciplinary overlaps, and other motivational strategies, within a 14-code framework connecting findings to broader ML pedagogy and theory."],
    },
    {
         title: "Research Student",
        company_name: "University of Toronto",
        icon: uoft,
        iconBg: "#accbe1",
        date: "April 2024 - September 2025",
        points: [
            "Conducted advanced data analysis using Python (semopy) to build and test structural equation models (SEM) using path models.",
            "Designed multi-group path models and applied ANOVA and correlation analyses to compare effects across learner groups and track changes over time.",
            "Discovered that prior programming experience was the strongest predictor of self-efficacy, while gender effects were minimal; higher self-efficacy growth linked to stronger exam performance.",
            "Published in the International Computing Education Research (ICER) Conference, a leading venue in CS education, and presented findings to an international audience of researchers and educators"],
    },
    {
        title: "Quantitative Data Analyst",
        company_name: "University of Toronto",
        icon: uoft,
        iconBg: "#accbe1",
        date: "April 2024 - September 2024",
        points: [
            "Performed statistical analysis (Mann–Whitney tests, correlation analysis, group comparisons) to examine how gender, native language, and prior programming experience affect CS1/CS2 performance and retention.",
            "Executed data wrangling, cleaning, and transformation on large student datasets using Python (pandas, numpy) for reproducible workflows.",
            "Built data visualizations (matplotlib, seaborn) to communicate patterns and trends in student performance to faculty and researchers.",
            "Automated parts of the analysis pipeline in Jupyter Notebooks, ensuring clarity, replicability, and efficiency of results."],
    },
    {
        title: "Educational Content Developer- Research Student",
        company_name: "University of Toronto",
        icon: uoft,
        iconBg: "#accbe1",
        date: "April 2024 - September 2024",
        points: [
            "Designed storytelling-based instructional videos with physical analogies to make complex programming concepts more accessible, memorable, and engaging.",
            "Identified and addressed common student misconceptions in introductory programming, applying engagement theory to improve conceptual understanding and code literacy.",
            "Produced educational videos that were integrated into the University of Toronto’s Introductory Programming course curriculum."],
    },
    {
        title: "Research Student - Algorithmic Literacies in CS Education",
        company_name: "University of Toronto",
        icon: uoft,
        iconBg: "#accbe1",
        date: "April 2024 - September 2024",
        points: [
            "Conducted a systematic literature review of 60+ papers on K-12 algorithmic literacy education, analyzing pedagogical approaches, tools, and learning outcomes.",
            "Published findings in the Simon Fraser Educational Journal.",],
    },

];

export const WorkExperiences = [
    // {
    //     title: "React.js Developer",
    //     company_name: "Starbucks",
    //     // icon: starbucks,
    //     iconBg: "#accbe1",
    //     date: "March 2020 - April 2021",
    //     points: [
    //         "Developing and maintaining web applications using React.js and other related technologies.",
    //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //         "Implementing responsive design and ensuring cross-browser compatibility.",
    //         "Participating in code reviews and providing constructive feedback to other developers.",
    //     ],
    // }
    {
        title: "Software Engineering Intern",
        company_name: "Savi Finance",
        icon: savifinance,
        iconBg: "#accbe1",
        date: "September 2025 - December 2025",
        points: [
            "Developing and deploying AI-powered workflow automation systems enabling agent-to-human communication by implementing APIs, CRUD operations, and production-ready pipelines for task automations."
        ],
    },
    {
        title: "Teaching Assistant - CSC108",
        company_name: "University of Toronto",
        icon: uoft,
        iconBg: "#accbe1",
        date: "September 2025 - December 2025, September 2024 - December 2024",
        points: [
            "Assisted in teaching undergraduate intrductory course in Computer Science.",
            "Held office hours to support students with coursework and assignments.",
            "Graded assignments and provided feedback to help students improve their understanding of the material.",
            "Collaborated with professors to develop course materials and improve the learning experience."
        ],
    },
    {
        title: "ML Technical Lead",
        company_name: "University of Toronto Machine Intelligence Student Team (UTMIST)",
        icon: utmist,
        iconBg: "#accbe1",
        date: "September 2025 - present",
        points: [
            "Leading development of a custom chess engine using PyTorch, python-chess, and scikit-learn to evaluate board positions with pawn-based heuristics and ML-driven analysis.",
            "Fine-tuning HuggingFace models to generate natural language explanations of evaluations and answer user queries, integrating interpretability into gameplay AI",
        ],
    },
    {
        title: "AI/ML Student Researcher– Industry Project,",
        company_name: "The Linux Foundation",
        icon: linuxfound,
        iconBg: "#accbe1",
        date: "January 2025 - April 2025",
        points: [
            "This was in collaboration with University of Toronto and Human Feedback Foundation as part of a industry project.",
            "Developed an ML framework to fingerprint large language models (LLMs) using prompt engineering, evaluation harnesses, and custom algorithms.",
            "Achieved 87% accuracy in identifying models across providers and platforms, including OpenAI, Anthropic, Google, DeepSeek, as well as open-source models accessed through Ollama, HuggingFace, and DeepInfra.",
            "Researched and integrated benchmarks such as Promptfoo, MMLU Pro, and OpenAI Evals to validate performance.",
            "Generated persistent model IDs for robust identification, even under high-temperature sampling.",
            "Presented findings at AI Tinkerers (Mozilla) and contributed to the foundation’s research initiatives."
        ],
    },  
];

export const socialLinks = [
    // {
    //     name: 'Contact',
    //     iconUrl: contact,
    //     link: '/contact',
    // },
    {
        name: 'Resume',
        iconUrl: resume,
        link: 'https://drive.google.com/file/d/1kMLHD1mX1G5OIzuf_Ok6gdOD7OT80Ayf/view?usp=sharing',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/Khushi-Malik',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/khushi-malik19/',
    },
    {
        name: 'Google Scholar',
        iconUrl: googleScholar,
        link: 'https://scholar.google.com/citations?user=o8zvj34AAAAJ&hl=en',
    },

];

export const MyProjects = [
    {
        iconURL: null,
        name: 'FixMyElo',
        description: 'Chess engine that explains its moves in natural language, helping players understand and improve their game.',
        link: '',
        tags: ['AI/ML', 'Chess', 'NLP'],
        category: 'AI'
    },
    {
        iconURL: null,
        name: 'CurAItor',
        description: 'WINNER OF GENAI: A WebApp that uses AI to generate personalized art tours in a 3d museum based on user preferences.',
        link: 'https://github.com/Khushi-Malik',
        tags: ['AI', '3D', 'Web', 'Award Winner'],
        category: 'AI',
        isWinner: true
    },
    {
        iconURL: null,
        name: 'HabitBreaker.',
        description: 'An iOS app that helps users break bad habits through personalized strategies and progress tracking.',
        link: 'https://github.com/Khushi-Malik/HabitBreaker',
        tags: ['iOS', 'Mobile', 'Health'],
        category: 'Mobile'
    },
    {
        iconURL: null,
        name: 'Deerography',
        description: 'A WebApp that help users discover geography facts about countries around the world through interactive quizzes and games.',
        link: 'https://github.com/Khushi-Malik/deerography',
        tags: ['Web', 'Education', 'Games'],
        category: 'Web'
    },
    {
        iconURL: null,
        name: 'WellRise',
        description: 'A 3d printer touch sensor clock and web application that help users track their sleep patterns and provides personalized recommendations for improving sleep quality.',
        link: 'https://github.com/alebora/WellRise_Info',
        tags: ['IoT', '3D Printing', 'Health', 'Web'],
        category: 'Hardware'
    },
    {
        iconURL: null,
        name: 'Personal Website',
        description: 'A modern, responsive portfolio website showcasing my projects, experiences, achievements, and writing.',
        link: 'https://github.com/Khushi-Malik/KhushiPersonalWebsite',
        tags: ['Personal Portfolio', 'Blogging', '3D Graphics', 'Web'],
        category: 'Web'
    },
    {
        iconURL: null,
        name: 'Unhidden',
        description: 'A minimalist blogging platform built with MongoDB, Express, React, Node.js. Features a clean interface, rich text editing with TinyMCE, and secure admin panel.',
        link: 'https://github.com/Khushi-Malik/unhidden-website',
        tags: ['Authentication', 'MERN', 'Web', 'API'],
        category: 'Web'
    },
    {
        iconURL: null,
        name: 'Medicine Inventory Management System',
        description: 'A command-line based inventory management system for medical stores to manage medicine stock, track sales, handle returns, and monitor expiry dates.',
        link: 'https://github.com/Khushi-Malik/Good_Health_Medical_Records',
        tags: ['Python', 'Binary Files'],
        // category: ''
    },
    {
        iconURL: null,
        name: 'Medicine Inventory Management System',
        description: 'A command-line based inventory management system for medical stores to manage medicine stock, track sales, handle returns, and monitor expiry dates.',
        link: 'https://github.com/Khushi-Malik/Good_Health_Medical_Records',
        tags: ['Python', 'Binary Files'],
        // category: ''
    },
    {
        iconURL: null,
        name: 'Python-Automations',
        description: 'A collection of Python scripts for automating tedious file manipulation tasks, saving time and reducing manual effort.',
        link: 'https://github.com/Khushi-Malik/python-automations',
        tags: ['Python', 'Automation', ],
        category: 'Tools'
    },
];

export const SchoolProjects = [
    {
        iconURL: null,
        name: 'MyShell',
        description: 'A robust custom shell implemented in C that supports everyday commands, piping, I/O redirection, background processes, signal handling, and networking.',
        link: '',
        tags: ['C', 'Systems', 'Shell'],
        category: 'Systems'
    },
    {
        iconURL: null,
        name: 'Sokoban',
        description: 'A Sokoban game implemented in Assembly RISC-V language, featuring level loading, player movement, box pushing mechanics, win condition detection, and player leaderboard logic, all optimized for performance and memory usage.',
        link: '',
        tags: ['RISC-V', 'Systems', 'Assembly'],
        category: 'Systems'
    },
    {
        iconURL: null,
        name: 'ML Predictor',
        description: 'A machine learning model that predicts the likelihood of a a dish being sushi, pizza, or shwarma based on real data obtained from human surveys.',
        link: '',
        tags: ['ML', 'Python', 'Data Science'],
        category: 'AI'
    },
    {
        iconURL: null,
        name: 'MyPaint AI',
        description: 'A java-based paint application with features like brush selection, color palette, and image saving with AI integration for image generation.',
        link: 'https://github.com/Khushi-Malik/letsPaint',
        tags: ['Java', 'GUI', 'AI'],
        category: 'Desktop'
    },
    {
        iconURL: null,
        name: 'Othello',
        description: 'A fully functional Java Othello game with a GUI, allowing two players to compete, featuring move validation, score tracking, and game-over detection.',
        link: '',
        tags: ['Java', 'GUI', 'Game'],
        category: 'Games'
    },
    {
        iconURL: null,
        name: 'Directory- Memory Visualizer',
        description: 'A python program that visualizes the memory allocation of directories and files, providing insights into storage usage and organization.',
        link: '',
        tags: ['Python', 'Visualization', 'Systems'],
        category: 'Tools'
    },
];


export const VolunteeringExperiences = [
    {
        title: "ProjectX Lead",
        company_name: "UofT AI",
        icon: uoftai,
        iconBg: "#accbe1",
        date: "September 2024 - April 2025",
        points: [
            "Organise the AI Competition- ProjectX. Selected the theme and wrote problem statement, while coordinating with universities, mentors, and judges."],
    },
    {
        title: "Awareness Associate",
        company_name: "Mental Health Student Association - University of Toronto",
        // icon: twitter,
        iconBg: "#accbe1",
        date: "September 2024 - April 2025",
        points: [
            "Volunteered in various causes like fund-raising, panel events, etc to help raise awareness for mental well-being."],
    },
    {
        title: "Volunteer",
        company_name: "Sunrise Learning School for Special Children",
        // icon: twitter,
        iconBg: "#accbe1",
        date: "August 2021 - Novemeber 2022",
        points: [
            	"Fostered inclusivity by actively participating in creating an environment that respects and supports individual differences.",
                "Developed patience, adaptability, and effective communication skills by setting up classrooms"
        ],
    },
    {
        title: "Volunteer",
        company_name: "Care and Compassion Pet Shelter",
        // icon: twitter,
        iconBg: "#accbe1",
        date: "May 2021 - August 2021",
        points: [
            "Gained experience in responsibility and empathy by spreading awareness for animal welfare through poster creation and community outreach.",
            "Collaborated with a diverse team of volunteers, enhancing teamwork and interpersonal skills."
        ],
    },
];
export const Publications = [
    {
      title: "Analysis of Motivations in Machine Learning Textbooks",
      authors: "Khushi Malik, Amber Richardson, Tingting Zhu, Lisa Zhang",
      venue: "EAAI-26: The 16th Symposium on Educational Advances in Artificial Intelligence",
      year: "2026",
      link: "",
    //   doi: "https://doi.org/10.1145/3769994.3770054",
      type: "Journal Article"
    },
    {
      title: "Interests and Challenges in Machine Learning: Differences by Gender, Prior Experience, and First Generation Status",
      authors: "Amber Richardson, Khushi Malik, Saayna Halder, Fatima Ahmed, Lisa Zhang",
      venue: "Proceedings of the 25th Koli Calling International Conference on Computing Education Research (Koli)",
      year: "2025",
      link: "https://doi.org/10.1145/3769994.3770054",
    //   doi: "https://doi.org/10.1145/3769994.3770054",
      type: "Conference Poster"
    },
    {
      title: "Interactive Effects of Prior Experience and Gender on Self-Efficacy and Achievement in CS1",
      authors: "Khushi Malik, Amber Richardson, Michelle Craig, Andrew Petersen",
      venue: "International Computing Education Research Conference (ICER)",
      year: "2025",
      link: "https://dl.acm.org/doi/full/10.1145/3702652.3744216",
    //   doi: "https://doi.org/10.1145/3702652.3744216",
    //   abstract: "This replication study investigates how performance is influenced by self-efficacy, and argues that prior programming experience is more influential in CS1 students rather than gender alone. ",
      type: "Journal Article"
    },
    {
      title: "Reducing Isolation through Peer-Modeled Posts",
      authors: "Naaz Sibia, Angela Zavaleta Bernuy, Amber Richardson, Khushi Malik, Prajna Pendharkar, Carolina Nobre, Michael Liut, Andrew Petersen",
      venue: "Proceedings of the 56th ACM Technical Symposium on Computer Science Education (SIGCSE)",
      year: "2025",
      link: "https://doi.org/10.1145/3641555.3705238",
    //   doi: "10.1000/sample.doi.789012",
    //   abstract: "An investigation into how data science methodologies can be applied to address social challenges and create positive community impact.",
      type: "Conference Poster"
    },
    {
      title: "A Thematic Literature Review of Decolonization and Abolitionist Approaches in Computing Education",
      authors: "Khushi Malik, Lanz Angeles, Rutwa Engineer, Adelina Patlatii, Alisha Hasan, Sana Sarin",
      venue: "SFU Educational Review",
      year: "2024",
      link: "https://doi.org/10.21810/sfuer.v16i1.6689",
    //   doi: "10.1000/sample.doi.789012",
    //   abstract: "An investigation into how data science methodologies can be applied to address social challenges and create positive community impact.",
      type: "Literature Review"
    }
  ];

export const achievements = [
    {
      title: "Dean's List Scholar",
      institution: "University of Toronto",
      year: "Winter 2024",
      details: "Academic excellence recognition for maintaining CGPA > 3.50 at the end of session in which the fifth credit has been passed.",
      // category: "academic",
      // value: "Top 10%"
    },
    {
      title: "Dean's List Scholar",
      institution: "University of Toronto",
      year: "Winter 2025",
      details: "Academic excellence recognition for maintaining CGPA > 3.50 at the end of session in which the tenth credit has been passed.",
      // category: "academic",
      // value: "Top 10%"
    },
    {
      title: "Dean's List Scholar",
      institution: "University of Toronto",
      year: "Summer 2024",
      details: "Academic excellence recognition for maintaining CGPA > 3.50 at the end of session in which the fifteenth credit has been passed.",
      // category: "academic",
      // value: "Top 10%"
    },
    {
      title: "WINNER: Google Women Tech-makers & CGI Best Women Hack",
      institution: "GenAI Genesis- Canada's Largest AI Hackathon",
      year: "2025",
      details: "Awarded to the project that champions women in AI, fostering innovation that empowers and uplifts communities",
      // category: "Hackathon", 
      value: "Winner"
    },
    {
      title: "AWS Certified Cloud Practitioner",
      institution: "Amazon Web Services", 
      year: "September 2025",
      details: "Proficient in AWS Cloud services (EC2, S3, IAM, ELB, VPC) with foundational knowledge of cloud architecture, security, and deployment best practices.",
      // category: "certification",
      value: "Foundational"
    },
    {
      title: "Research Presentation",
      institution: "International Computing Education Research (ICER) Conference",
      year: "2025",
      details: "Published in the International Computing Education Research (ICER) Conference, a leading venue in CS education, and presented findings to an international audience of researchers and educators at University of Virginia",
      // category: "research",
      value: "Research"
    },
    {
      title: "Entrance Scholarship",
      institution: "University of Toronto",
      year: "2023", 
      details: "Merit-based financial award for academic performance",
      // category: "scholarship",
      value: "$3,000"
    },
    {
      title: "JEE Advanced Qualified",
      institution: "JEE India",
      year: "2022",
      details: "Engineering Entrance Examination - Advanced level; Top 1.1% Nationally",
      // category: "examination",
      // value: "AIR 17000"
    },
    {
      title: "JEE Main Qualified",
      institution: "JEE India",
      year: "2022",
      details: "Engineering Entrance Examination - Qualifier level",
      // category: "examination",
      value: "96.7 Percentile"
    },
  ];