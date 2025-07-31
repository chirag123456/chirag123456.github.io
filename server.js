const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Set EJS as template engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// CV data structure - replace with your actual information
const cvData = {
  personalInfo: {
    name: "Chirag Kakkad",
    title: "Team Lead",
    email: "chirag.kakkad@email.com",
    phone: "+91 XXXXX XXXXX",
    location: "India",
    linkedin: "linkedin.com/in/chiragkakkad",
    github: "github.com/chiragkakkad",
    website: "www.chiragkakkad.com"
  },
  summary: "Experienced Team Lead with expertise in software development, team management, and project delivery. Passionate about leading high-performing teams and delivering innovative solutions using cutting-edge technologies.",
  
  skills: {
    technical: [
      "JavaScript", "TypeScript", "Node.js", "React", "Vue.js",
      "Python", "Java", "C++", "SQL", "MongoDB",
      "AWS", "Docker", "Kubernetes", "Git", "CI/CD"
    ],
    management: [
      "Team Leadership", "Project Management", "Agile/Scrum",
      "Code Review", "Mentoring", "Strategic Planning"
    ]
  },
  
  experience: [
    {
      title: "Team Lead",
      company: "Tech Solutions Inc.",
      period: "2022 - Present",
      location: "Mumbai, India",
      responsibilities: [
        "Lead a team of 8+ developers in full-stack web development projects",
        "Implement agile methodologies resulting in 30% faster project delivery",
        "Mentor junior developers and conduct technical training sessions",
        "Collaborate with stakeholders to define project requirements and timelines"
      ]
    },
    {
      title: "Senior Software Developer",
      company: "Digital Innovations Ltd.",
      period: "2020 - 2022",
      location: "Mumbai, India",
      responsibilities: [
        "Developed and maintained scalable web applications using React and Node.js",
        "Improved application performance by 40% through optimization techniques",
        "Participated in code reviews and established best practices",
        "Worked closely with UI/UX teams to implement responsive designs"
      ]
    },
    {
      title: "Software Developer",
      company: "StartUp Solutions",
      period: "2018 - 2020",
      location: "Mumbai, India",
      responsibilities: [
        "Built RESTful APIs and microservices using Node.js and Express",
        "Implemented automated testing resulting in 95% code coverage",
        "Collaborated with cross-functional teams in agile environment",
        "Contributed to architecture decisions for new product features"
      ]
    }
  ],
  
  projects: [
    {
      name: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React frontend and Node.js backend",
      technologies: ["React", "Node.js", "MongoDB", "Redis", "AWS"],
      highlights: [
        "Handles 10,000+ concurrent users",
        "Integrated payment gateway with 99.9% uptime",
        "Real-time inventory management system"
      ]
    },
    {
      name: "Task Management System",
      description: "Collaborative project management tool for distributed teams",
      technologies: ["Vue.js", "Express", "PostgreSQL", "Docker"],
      highlights: [
        "Real-time collaboration features",
        "Advanced reporting and analytics",
        "Mobile-responsive design"
      ]
    }
  ],
  
  education: [
    {
      degree: "B.E (Computer Science)",
      institution: "University of Mumbai",
      year: "2018",
      grade: "First Class"
    },
    {
      degree: "Diploma (Computer Engineering)",
      institution: "Polytechnic Institute",
      year: "2015",
      grade: "Distinction"
    }
  ],
  
  certifications: [
    "AWS Certified Solutions Architect",
    "Certified Scrum Master (CSM)",
    "Google Cloud Professional Developer",
    "MongoDB Certified Developer"
  ],
  
  languages: [
    { name: "English", level: "Fluent" },
    { name: "Hindi", level: "Native" },
    { name: "Gujarati", level: "Native" }
  ]
};

// Routes
app.get('/', (req, res) => {
  res.render('index', { cv: cvData });
});

app.get('/api/cv', (req, res) => {
  res.json(cvData);
});

app.listen(PORT, () => {
  console.log(`CV website running on http://localhost:${PORT}`);
});