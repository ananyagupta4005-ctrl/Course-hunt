// ============================================
//   CourseCompare India — script.js
//   Fixed: Category mismatch, added W3Schools,
//   freeCodeCamp, Khan Academy, NPTEL, MIT OCW,
//   YouTube Hindi courses & more
// ============================================

const courses = [

  // ===================== PYTHON =====================
  {
    id: 1,
    title: "Complete Python Bootcamp: From Zero to Hero",
    platform: "Udemy", category: "Python",
    price: 499, originalPrice: 3499, rating: 4.7,
    students: "1.8M", duration: "22 hrs", level: "Beginner",
    bestFor: "Absolute beginners",
    affiliate: "https://www.udemy.com/course/complete-python-bootcamp/",
    bestValue: true,
  },
  {
    id: 2,
    title: "Python for Everybody Specialization",
    platform: "Coursera", category: "Python",
    price: 2999, originalPrice: 3999, rating: 4.8,
    students: "2.1M", duration: "8 weeks", level: "Beginner",
    bestFor: "Certificate seekers",
    affiliate: "https://www.coursera.org/specializations/python",
  },
  {
    id: 3,
    title: "Python Programming Masterclass",
    platform: "GeeksforGeeks", category: "Python",
    price: 999, originalPrice: 2999, rating: 4.5,
    students: "200K", duration: "40 hrs", level: "Beginner–Intermediate",
    bestFor: "Interview prep",
    affiliate: "https://practice.geeksforgeeks.org/courses/Python-Foundation",
  },
  {
    id: 4,
    title: "Python Full Stack with Projects",
    platform: "PW Skills", category: "Python",
    price: 2499, originalPrice: 4999, rating: 4.4,
    students: "80K", duration: "6 months", level: "Beginner–Advanced",
    bestFor: "Job-ready skills",
    affiliate: "https://pwskills.com/course/python",
  },
  {
    id: 5,
    title: "Python Tutorial — Learn Python from Scratch",
    platform: "W3Schools", category: "Python",
    price: 0, originalPrice: 0, rating: 4.5,
    students: "10M+", duration: "Self-paced", level: "Beginner",
    bestFor: "Quick reference & free practice",
    affiliate: "https://www.w3schools.com/python/",
    bestValue: true,
  },
  {
    id: 6,
    title: "Intro to Computer Science (Python)",
    platform: "Khan Academy", category: "Python",
    price: 0, originalPrice: 0, rating: 4.5,
    students: "5M+", duration: "Self-paced", level: "Beginner",
    bestFor: "Absolute free beginners",
    affiliate: "https://www.khanacademy.org/computing/intro-to-python-fundamentals",
  },
  {
    id: 7,
    title: "Programming in Python (IIT — NPTEL)",
    platform: "NPTEL", category: "Python",
    price: 0, originalPrice: 0, rating: 4.6,
    students: "300K+", duration: "12 weeks", level: "Beginner–Intermediate",
    bestFor: "IIT-certified free course",
    affiliate: "https://nptel.ac.in/courses/106106145",
    bestValue: true,
  },
  {
    id: 8,
    title: "Introduction to CS & Programming (MIT 6.0001)",
    platform: "MIT OpenCourseWare", category: "Python",
    price: 0, originalPrice: 0, rating: 4.9,
    students: "2M+", duration: "Self-paced", level: "Beginner–Intermediate",
    bestFor: "World-class MIT content, free",
    affiliate: "https://ocw.mit.edu/courses/6-0001-introduction-to-computer-science-and-programming-in-python-fall-2016/",
    bestValue: true,
  },
  {
    id: 9,
    title: "Python Full Course for Beginners (Hindi)",
    platform: "YouTube", category: "Python",
    price: 0, originalPrice: 0, rating: 4.7,
    students: "5M+ views", duration: "11 hrs", level: "Beginner",
    bestFor: "Best free Hindi Python course",
    affiliate: "https://www.youtube.com/watch?v=gfDE2a7MKjA",
    bestValue: true,
  },
  {
    id: 10,
    title: "Python Essential Training",
    platform: "LinkedIn Learning", category: "Python",
    price: 1499, originalPrice: 2999, rating: 4.5,
    students: "500K+", duration: "5 hrs", level: "Beginner",
    bestFor: "LinkedIn Certificate",
    affiliate: "https://www.linkedin.com/learning/python-essential-training",
  },
  {
    id: 11,
    title: "Python for Beginners — Free Course",
    platform: "Simplilearn", category: "Python",
    price: 0, originalPrice: 0, rating: 4.3,
    students: "800K+", duration: "9 hrs", level: "Beginner",
    bestFor: "Free quick Python intro",
    affiliate: "https://www.simplilearn.com/learn-python-basics-free-course-skillup",
  },
  {
    id: 12,
    title: "Python Programming Certification",
    platform: "Edureka", category: "Python",
    price: 4999, originalPrice: 9999, rating: 4.4,
    students: "200K+", duration: "40 hrs", level: "Beginner–Intermediate",
    bestFor: "Live instructor-led training",
    affiliate: "https://www.edureka.co/python",
  },
  {
    id: 13,
    title: "Complete Python for BTech Students",
    platform: "Unacademy", category: "Python",
    price: 999, originalPrice: 2499, rating: 4.3,
    students: "200K+", duration: "40 hrs", level: "Beginner",
    bestFor: "Hindi medium students",
    affiliate: "https://unacademy.com/course/python",
  },
  {
    id: 14,
    title: "Python Tutorial — Java, C++, PHP & More",
    platform: "W3Schools", category: "Python",
    price: 0, originalPrice: 0, rating: 4.4,
    students: "8M+", duration: "Self-paced", level: "Beginner",
    bestFor: "Free interactive exercises",
    affiliate: "https://www.w3schools.com/python/default.asp",
  },

  // ===================== DATA SCIENCE =====================
  {
    id: 20,
    title: "Data Science A-Z: Real-Life Data Science Exercises",
    platform: "Udemy", category: "Data Science",
    price: 499, originalPrice: 3499, rating: 4.6,
    students: "400K", duration: "21 hrs", level: "Beginner",
    bestFor: "Practical projects",
    affiliate: "https://www.udemy.com/course/datascience/",
    bestValue: true,
  },
  {
    id: 21,
    title: "IBM Data Science Professional Certificate",
    platform: "Coursera", category: "Data Science",
    price: 2999, originalPrice: 5000, rating: 4.7,
    students: "900K", duration: "11 months", level: "Beginner–Intermediate",
    bestFor: "IBM Certificate",
    affiliate: "https://www.coursera.org/professional-certificates/ibm-data-science",
  },
  {
    id: 22,
    title: "Data Science & ML Bootcamp",
    platform: "Scaler", category: "Data Science",
    price: 24999, originalPrice: 49999, rating: 4.7,
    students: "50K", duration: "9 months", level: "Beginner–Advanced",
    bestFor: "Placement guarantee",
    affiliate: "https://www.scaler.com/data-science/",
  },
  {
    id: 23,
    title: "SQL Tutorial — Complete Database Guide",
    platform: "W3Schools", category: "Data Science",
    price: 0, originalPrice: 0, rating: 4.4,
    students: "20M+", duration: "Self-paced", level: "Beginner",
    bestFor: "Free SQL learning",
    affiliate: "https://www.w3schools.com/sql/",
    bestValue: true,
  },
  {
    id: 24,
    title: "Statistics & Probability for Data Science",
    platform: "Khan Academy", category: "Data Science",
    price: 0, originalPrice: 0, rating: 4.6,
    students: "3M+", duration: "Self-paced", level: "Beginner",
    bestFor: "Math foundation for ML/DS",
    affiliate: "https://www.khanacademy.org/math/statistics-probability",
  },
  {
    id: 25,
    title: "Data Analysis with Python",
    platform: "freeCodeCamp", category: "Data Science",
    price: 0, originalPrice: 0, rating: 4.5,
    students: "5M+", duration: "300 hrs", level: "Intermediate",
    bestFor: "Free data analysis certification",
    affiliate: "https://www.freecodecamp.org/learn/data-analysis-with-python/",
  },
  {
    id: 26,
    title: "Data Science for Engineers (IIT Madras)",
    platform: "NPTEL", category: "Data Science",
    price: 0, originalPrice: 0, rating: 4.5,
    students: "180K+", duration: "12 weeks", level: "Intermediate",
    bestFor: "Free govt-certified course",
    affiliate: "https://nptel.ac.in/courses/106106205",
  },
  {
    id: 27,
    title: "Data Science with Python",
    platform: "Simplilearn", category: "Data Science",
    price: 3999, originalPrice: 7999, rating: 4.4,
    students: "500K+", duration: "6 months", level: "Beginner–Advanced",
    bestFor: "Industry certificate",
    affiliate: "https://www.simplilearn.com/big-data-and-analytics/data-scientist-master-program-training",
  },
  {
    id: 28,
    title: "Become a Data Scientist Learning Path",
    platform: "LinkedIn Learning", category: "Data Science",
    price: 1499, originalPrice: 2999, rating: 4.6,
    students: "400K+", duration: "30 hrs", level: "Beginner–Intermediate",
    bestFor: "LinkedIn Profile boost",
    affiliate: "https://www.linkedin.com/learning/paths/become-a-data-scientist",
  },
  {
    id: 29,
    title: "Data Science & ML Bootcamp",
    platform: "PW Skills", category: "Data Science",
    price: 4999, originalPrice: 9999, rating: 4.5,
    students: "120K", duration: "12 months", level: "Beginner–Advanced",
    bestFor: "Affordable + job-focused",
    affiliate: "https://pwskills.com/course/data-science-master/",
  },

  // ===================== MACHINE LEARNING =====================
  {
    id: 40,
    title: "Machine Learning A-Z: AI, Python & R",
    platform: "Udemy", category: "Machine Learning",
    price: 499, originalPrice: 3499, rating: 4.5,
    students: "950K", duration: "44 hrs", level: "Intermediate",
    bestFor: "Hands-on ML",
    affiliate: "https://www.udemy.com/course/machinelearning/",
    bestValue: true,
  },
  {
    id: 41,
    title: "Machine Learning Specialization (Andrew Ng)",
    platform: "Coursera", category: "Machine Learning",
    price: 0, originalPrice: 0, rating: 4.9,
    students: "4.5M", duration: "3 months", level: "Intermediate",
    bestFor: "Best ML course in the world",
    affiliate: "https://www.coursera.org/specializations/machine-learning-introduction",
    bestValue: true,
  },
  {
    id: 42,
    title: "Deep Learning Specialization (Andrew Ng)",
    platform: "Coursera", category: "Machine Learning",
    price: 2999, originalPrice: 4000, rating: 4.9,
    students: "3M+", duration: "5 months", level: "Intermediate–Advanced",
    bestFor: "Deep Learning mastery",
    affiliate: "https://www.coursera.org/specializations/deep-learning",
  },
  {
    id: 43,
    title: "Introduction to Machine Learning (IIT Madras)",
    platform: "NPTEL", category: "Machine Learning",
    price: 0, originalPrice: 0, rating: 4.7,
    students: "200K+", duration: "12 weeks", level: "Intermediate",
    bestFor: "Free IIT-level ML course",
    affiliate: "https://nptel.ac.in/courses/106106139",
    bestValue: true,
  },
  {
    id: 44,
    title: "Machine Learning with Python",
    platform: "freeCodeCamp", category: "Machine Learning",
    price: 0, originalPrice: 0, rating: 4.5,
    students: "4M+", duration: "300 hrs", level: "Intermediate",
    bestFor: "Free ML certification",
    affiliate: "https://www.freecodecamp.org/learn/machine-learning-with-python/",
  },
  {
    id: 45,
    title: "Introduction to Machine Learning (MIT 6.036)",
    platform: "MIT OpenCourseWare", category: "Machine Learning",
    price: 0, originalPrice: 0, rating: 4.9,
    students: "1M+", duration: "Self-paced", level: "Advanced",
    bestFor: "MIT-level ML theory",
    affiliate: "https://ocw.mit.edu/courses/6-036-introduction-to-machine-learning-fall-2020/",
  },
  {
    id: 46,
    title: "Linear Algebra for Machine Learning",
    platform: "Khan Academy", category: "Machine Learning",
    price: 0, originalPrice: 0, rating: 4.5,
    students: "2M+", duration: "Self-paced", level: "Beginner",
    bestFor: "ML math foundation",
    affiliate: "https://www.khanacademy.org/math/linear-algebra",
  },
  {
    id: 47,
    title: "Machine Learning Full Course — CampusX (Hindi)",
    platform: "YouTube", category: "Machine Learning",
    price: 0, originalPrice: 0, rating: 4.8,
    students: "3M+ views", duration: "60 hrs", level: "Beginner–Advanced",
    bestFor: "Best free Hindi ML course",
    affiliate: "https://www.youtube.com/@campusx-official",
    bestValue: true,
  },
  {
    id: 48,
    title: "Machine Learning & Deep Learning",
    platform: "GeeksforGeeks", category: "Machine Learning",
    price: 2999, originalPrice: 5999, rating: 4.5,
    students: "150K", duration: "Self-paced", level: "Intermediate",
    bestFor: "Interview + project focused",
    affiliate: "https://www.geeksforgeeks.org/courses/machine-learning",
  },

  // ===================== WEB DEVELOPMENT =====================
  {
    id: 60,
    title: "The Complete Web Developer Bootcamp",
    platform: "Udemy", category: "Web Development",
    price: 499, originalPrice: 3499, rating: 4.7,
    students: "900K", duration: "65 hrs", level: "Beginner",
    bestFor: "Full-stack beginners",
    affiliate: "https://www.udemy.com/course/the-complete-web-development-bootcamp/",
    bestValue: true,
  },
  {
    id: 61,
    title: "Full Stack Web Development",
    platform: "Scaler", category: "Web Development",
    price: 19999, originalPrice: 39999, rating: 4.6,
    students: "60K", duration: "8 months", level: "Beginner–Advanced",
    bestFor: "Job-ready with placement",
    affiliate: "https://www.scaler.com/courses/full-stack-developer/",
  },
  {
    id: 62,
    title: "HTML, CSS & JavaScript Full Tutorial",
    platform: "W3Schools", category: "Web Development",
    price: 0, originalPrice: 0, rating: 4.6,
    students: "50M+", duration: "Self-paced", level: "Beginner",
    bestFor: "Best free web dev reference ever",
    affiliate: "https://www.w3schools.com/",
    bestValue: true,
  },
  {
    id: 63,
    title: "JavaScript Full Tutorial",
    platform: "W3Schools", category: "Web Development",
    price: 0, originalPrice: 0, rating: 4.5,
    students: "30M+", duration: "Self-paced", level: "Beginner",
    bestFor: "Free JS reference + tryit editor",
    affiliate: "https://www.w3schools.com/js/",
  },
  {
    id: 64,
    title: "React Tutorial",
    platform: "W3Schools", category: "Web Development",
    price: 0, originalPrice: 0, rating: 4.4,
    students: "10M+", duration: "Self-paced", level: "Intermediate",
    bestFor: "Free React learning",
    affiliate: "https://www.w3schools.com/react/",
  },
  {
    id: 65,
    title: "Computer Programming — HTML/CSS/JS",
    platform: "Khan Academy", category: "Web Development",
    price: 0, originalPrice: 0, rating: 4.5,
    students: "8M+", duration: "Self-paced", level: "Beginner",
    bestFor: "100% free, no signup needed",
    affiliate: "https://www.khanacademy.org/computing/computer-programming",
    bestValue: true,
  },
  {
    id: 66,
    title: "Responsive Web Design Certification",
    platform: "freeCodeCamp", category: "Web Development",
    price: 0, originalPrice: 0, rating: 4.7,
    students: "15M+", duration: "300 hrs", level: "Beginner",
    bestFor: "100% free with real certificate",
    affiliate: "https://www.freecodecamp.org/learn/2022/responsive-web-design/",
    bestValue: true,
  },
  {
    id: 67,
    title: "Front End Development Libraries (React, Redux)",
    platform: "freeCodeCamp", category: "Web Development",
    price: 0, originalPrice: 0, rating: 4.6,
    students: "8M+", duration: "300 hrs", level: "Intermediate",
    bestFor: "Free React + Redux cert",
    affiliate: "https://www.freecodecamp.org/learn/front-end-development-libraries/",
  },
  {
    id: 68,
    title: "Full Stack Web Dev with DSA",
    platform: "PW Skills", category: "Web Development",
    price: 4999, originalPrice: 9999, rating: 4.6,
    students: "200K", duration: "12 months", level: "Beginner–Advanced",
    bestFor: "Affordable full-stack program",
    affiliate: "https://pwskills.com/course/Full-Stack-Web-Development-Course/",
  },
  {
    id: 69,
    title: "Web Dev Full Course — Code With Harry (Hindi)",
    platform: "YouTube", category: "Web Development",
    price: 0, originalPrice: 0, rating: 4.7,
    students: "6M+ views", duration: "30 hrs", level: "Beginner",
    bestFor: "Best free Hindi web dev",
    affiliate: "https://www.youtube.com/c/CodeWithHarry",
    bestValue: true,
  },
  {
    id: 70,
    title: "Full Stack Dev — Sheryians Coding School (Hindi)",
    platform: "YouTube", category: "Web Development",
    price: 0, originalPrice: 0, rating: 4.8,
    students: "4M+ views", duration: "100+ hrs", level: "Beginner–Advanced",
    bestFor: "Modern UI/UX + full stack in Hindi",
    affiliate: "https://www.youtube.com/@sheryians",
    bestValue: true,
  },
  {
    id: 71,
    title: "Become a Full-Stack Web Developer",
    platform: "LinkedIn Learning", category: "Web Development",
    price: 1499, originalPrice: 2999, rating: 4.5,
    students: "600K+", duration: "40 hrs", level: "Beginner–Advanced",
    bestFor: "Professional LinkedIn certificate",
    affiliate: "https://www.linkedin.com/learning/paths/become-a-full-stack-web-developer",
  },
  {
    id: 72,
    title: "Web Development Bootcamp in Hindi",
    platform: "Unacademy", category: "Web Development",
    price: 1499, originalPrice: 2999, rating: 4.2,
    students: "100K+", duration: "50 hrs", level: "Beginner",
    bestFor: "Hindi language learners",
    affiliate: "https://unacademy.com/course/web-development",
  },
  {
    id: 73,
    title: "IBM Full Stack Developer Certificate",
    platform: "Coursera", category: "Web Development",
    price: 0, originalPrice: 0, rating: 4.6,
    students: "400K+", duration: "4 months", level: "Beginner–Advanced",
    bestFor: "IBM certificate, audit free",
    affiliate: "https://www.coursera.org/professional-certificates/ibm-full-stack-cloud-developer",
  },

  // ===================== DSA & CP =====================
  {
    id: 80,
    title: "Master the Coding Interview: DSA + Algorithms",
    platform: "Udemy", category: "DSA",
    price: 499, originalPrice: 3499, rating: 4.6,
    students: "440K", duration: "19 hrs", level: "Intermediate",
    bestFor: "FAANG prep",
    affiliate: "https://www.udemy.com/course/master-the-coding-interview-data-structures-algorithms/",
    bestValue: true,
  },
  {
    id: 81,
    title: "DSA Cracker Course",
    platform: "GeeksforGeeks", category: "DSA",
    price: 1499, originalPrice: 4999, rating: 4.5,
    students: "300K", duration: "120 hrs", level: "Beginner–Advanced",
    bestFor: "Interview prep in India",
    affiliate: "https://practice.geeksforgeeks.org/courses/dsa-cracker",
  },
  {
    id: 82,
    title: "DSA with Java / C++",
    platform: "PW Skills", category: "DSA",
    price: 1999, originalPrice: 3999, rating: 4.5,
    students: "150K", duration: "5 months", level: "Beginner–Advanced",
    bestFor: "Competitive programming",
    affiliate: "https://pwskills.com/course/dsa",
  },
  {
    id: 83,
    title: "JavaScript Algorithms & Data Structures",
    platform: "freeCodeCamp", category: "DSA",
    price: 0, originalPrice: 0, rating: 4.6,
    students: "10M+", duration: "300 hrs", level: "Beginner–Intermediate",
    bestFor: "Free DSA with JS",
    affiliate: "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/",
    bestValue: true,
  },
  {
    id: 84,
    title: "Design & Analysis of Algorithms (IIT Bombay)",
    platform: "NPTEL", category: "DSA",
    price: 0, originalPrice: 0, rating: 4.6,
    students: "150K+", duration: "12 weeks", level: "Intermediate–Advanced",
    bestFor: "Deep DSA theory from IIT",
    affiliate: "https://nptel.ac.in/courses/106101060",
  },
  {
    id: 85,
    title: "Introduction to Algorithms (MIT 6.006)",
    platform: "MIT OpenCourseWare", category: "DSA",
    price: 0, originalPrice: 0, rating: 4.9,
    students: "2M+", duration: "Self-paced", level: "Intermediate–Advanced",
    bestFor: "World-class algorithm theory",
    affiliate: "https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/",
    bestValue: true,
  },
  {
    id: 86,
    title: "DSA Full Course in Hindi — Apna College",
    platform: "YouTube", category: "DSA",
    price: 0, originalPrice: 0, rating: 4.9,
    students: "8M+ views", duration: "50 hrs", level: "Beginner–Advanced",
    bestFor: "Best free DSA in Hindi",
    affiliate: "https://www.youtube.com/c/ApnaCollegeOfficial",
    bestValue: true,
  },
  {
    id: 87,
    title: "DSA in Java for Placements",
    platform: "Unacademy", category: "DSA",
    price: 1999, originalPrice: 3999, rating: 4.4,
    students: "150K+", duration: "80 hrs", level: "Beginner–Advanced",
    bestFor: "Hindi + placement focus",
    affiliate: "https://unacademy.com/course/dsa",
  },
  {
    id: 88,
    title: "Data Structures & Algorithms (Scaler)",
    platform: "Scaler", category: "DSA",
    price: 9999, originalPrice: 19999, rating: 4.8,
    students: "80K", duration: "6 months", level: "Beginner–Advanced",
    bestFor: "Placement-ready DSA",
    affiliate: "https://www.scaler.com/courses/data-structures-and-algorithms/",
  },

  // ===================== GENERATIVE AI =====================
  {
    id: 100,
    title: "ChatGPT & AI Tools: Complete Masterclass",
    platform: "Udemy", category: "AI",
    price: 499, originalPrice: 3499, rating: 4.5,
    students: "180K", duration: "10 hrs", level: "Beginner",
    bestFor: "AI productivity tools",
    affiliate: "https://www.udemy.com/course/chatgpt-masterclass/",
    bestValue: true,
  },
  {
    id: 101,
    title: "Generative AI for Everyone (Andrew Ng)",
    platform: "Coursera", category: "AI",
    price: 0, originalPrice: 0, rating: 4.8,
    students: "500K", duration: "6 hrs", level: "Beginner",
    bestFor: "Free GenAI intro by Andrew Ng",
    affiliate: "https://www.coursera.org/learn/generative-ai-for-everyone",
    bestValue: true,
  },
  {
    id: 102,
    title: "Generative AI Full Course — Free",
    platform: "YouTube", category: "AI",
    price: 0, originalPrice: 0, rating: 4.6,
    students: "2M+ views", duration: "8 hrs", level: "Beginner",
    bestFor: "Free GenAI crash course",
    affiliate: "https://www.youtube.com/watch?v=d4yCWBGFCEs",
  },
  {
    id: 103,
    title: "Prompt Engineering for Developers",
    platform: "Coursera", category: "AI",
    price: 0, originalPrice: 0, rating: 4.7,
    students: "300K+", duration: "2 hrs", level: "Beginner",
    bestFor: "Practical LLM prompting",
    affiliate: "https://www.coursera.org/learn/prompt-engineering",
  },
  {
    id: 104,
    title: "ChatGPT & Generative AI Masterclass",
    platform: "Udemy", category: "AI",
    price: 499, originalPrice: 2999, rating: 4.6,
    students: "120K", duration: "15 hrs", level: "Beginner–Intermediate",
    bestFor: "Build AI-powered apps",
    affiliate: "https://www.udemy.com/course/chatgpt-generative-ai-masterclass/",
  },

  // ===================== CLOUD & DEVOPS =====================
  {
    id: 110,
    title: "AWS Certified Solutions Architect — Associate",
    platform: "Udemy", category: "Cloud",
    price: 499, originalPrice: 3499, rating: 4.7,
    students: "650K", duration: "27 hrs", level: "Intermediate",
    bestFor: "AWS Certification",
    affiliate: "https://www.udemy.com/course/aws-certified-solutions-architect-associate-saa-c03/",
    bestValue: true,
  },
  {
    id: 111,
    title: "Google Cloud Professional Certificate",
    platform: "Coursera", category: "Cloud",
    price: 0, originalPrice: 0, rating: 4.6,
    students: "300K", duration: "5 months", level: "Beginner–Intermediate",
    bestFor: "Google Cloud jobs",
    affiliate: "https://www.coursera.org/professional-certificates/cloud-engineering-gcp",
  },
  {
    id: 112,
    title: "Cloud Computing (IIT Kharagpur)",
    platform: "NPTEL", category: "Cloud",
    price: 0, originalPrice: 0, rating: 4.4,
    students: "100K+", duration: "8 weeks", level: "Intermediate",
    bestFor: "Free IIT cloud course",
    affiliate: "https://nptel.ac.in/courses/106105167",
  },
  {
    id: 113,
    title: "AWS Solutions Architect Certification",
    platform: "Edureka", category: "Cloud",
    price: 5999, originalPrice: 11999, rating: 4.5,
    students: "150K+", duration: "30 hrs", level: "Intermediate",
    bestFor: "Live AWS training",
    affiliate: "https://www.edureka.co/aws-certification-training",
  },
  {
    id: 114,
    title: "DevOps Engineer — Learn by Doing",
    platform: "Udemy", category: "Cloud",
    price: 499, originalPrice: 3499, rating: 4.6,
    students: "300K", duration: "20 hrs", level: "Intermediate",
    bestFor: "Docker, K8s, CI/CD",
    affiliate: "https://www.udemy.com/course/learn-devops-ci-cd-with-jenkins-using-pipelines-and-docker/",
  },

  // ===================== CYBERSECURITY =====================
  {
    id: 120,
    title: "The Complete Cyber Security Course",
    platform: "Udemy", category: "Cybersecurity",
    price: 499, originalPrice: 3499, rating: 4.6,
    students: "340K", duration: "17 hrs", level: "Beginner",
    bestFor: "Security fundamentals",
    affiliate: "https://www.udemy.com/course/the-complete-internet-security-privacy-course-volume-1/",
    bestValue: true,
  },
  {
    id: 121,
    title: "Google Cybersecurity Certificate",
    platform: "Coursera", category: "Cybersecurity",
    price: 0, originalPrice: 0, rating: 4.8,
    students: "600K+", duration: "6 months", level: "Beginner",
    bestFor: "Google-certified, audit free",
    affiliate: "https://www.coursera.org/professional-certificates/google-cybersecurity",
    bestValue: true,
  },
  {
    id: 122,
    title: "Cyber Security Expert Master's Program",
    platform: "Simplilearn", category: "Cybersecurity",
    price: 4999, originalPrice: 9999, rating: 4.5,
    students: "300K+", duration: "6 months", level: "Intermediate–Advanced",
    bestFor: "Security job-ready",
    affiliate: "https://www.simplilearn.com/cyber-security/cyber-security-expert-master-program-training",
  },
  {
    id: 123,
    title: "Information Security Certification",
    platform: "freeCodeCamp", category: "Cybersecurity",
    price: 0, originalPrice: 0, rating: 4.5,
    students: "3M+", duration: "300 hrs", level: "Intermediate",
    bestFor: "Free security cert",
    affiliate: "https://www.freecodecamp.org/learn/information-security/",
  },
  {
    id: 124,
    title: "Cybersecurity Full Course for Beginners",
    platform: "YouTube", category: "Cybersecurity",
    price: 0, originalPrice: 0, rating: 4.5,
    students: "1M+ views", duration: "12 hrs", level: "Beginner",
    bestFor: "Free security fundamentals",
    affiliate: "https://www.youtube.com/watch?v=U_P23SqJaDc",
  },
];

// ---- STATE ----
let activeSearch = "";
let activePlatform = "all";
let activeSort = "rating";
let activeCompareCategory = "Python";

// ---- PLATFORM → CSS CLASS ----
function getPlatformClass(platform) {
  const map = {
    "Udemy": "platform-udemy",
    "Coursera": "platform-coursera",
    "Scaler": "platform-scaler",
    "PW Skills": "platform-pwskills",
    "GeeksforGeeks": "platform-geeksforgeeks",
    "Skillshare": "platform-skillshare",
    "W3Schools": "platform-w3schools",
    "Khan Academy": "platform-khanacademy",
    "LinkedIn Learning": "platform-linkedinlearning",
    "NPTEL": "platform-nptel",
    "Unacademy": "platform-unacademy",
    "freeCodeCamp": "platform-freecodecamp",
    "MIT OpenCourseWare": "platform-mitopencourseware",
    "Simplilearn": "platform-simplilearn",
    "Edureka": "platform-edureka",
    "YouTube": "platform-youtube",
  };
  return map[platform] || "platform-default";
}

function formatPrice(price) {
  if (price === 0) return "FREE";
  return "₹" + price.toLocaleString("en-IN");
}

// ---- RENDER COURSE CARDS ----
function renderCourses(list) {
  const grid = document.getElementById("courses-grid");
  const noResults = document.getElementById("no-results");

  if (list.length === 0) {
    grid.innerHTML = "";
    noResults.style.display = "block";
    return;
  }

  noResults.style.display = "none";

  grid.innerHTML = list.map((c, i) => `
    <div class="course-card" style="animation-delay:${i * 0.04}s">
      ${c.bestValue ? '<span class="best-value-tag">🏆 Best Value</span>' : ''}
      <div class="card-top">
        <span class="platform-badge ${getPlatformClass(c.platform)}">${c.platform}</span>
        <div class="card-rating">⭐ ${c.rating}</div>
      </div>
      <div class="card-title">${c.title}</div>
      <div class="card-meta">
        <span class="meta-pill">📚 ${c.level}</span>
        <span class="meta-pill">⏱ ${c.duration}</span>
        <span class="meta-pill">👥 ${c.students} students</span>
        <span class="meta-pill">🎯 ${c.bestFor}</span>
      </div>
      <div class="card-bottom">
        <div class="card-price">
          <span class="price-current">${formatPrice(c.price)}</span>
          ${c.originalPrice && c.originalPrice !== c.price
            ? `<span class="price-original">₹${c.originalPrice.toLocaleString("en-IN")}</span>`
            : ""}
        </div>
        <a href="${c.affiliate}" target="_blank" rel="noopener" class="card-btn">View Course →</a>
      </div>
    </div>
  `).join("");
}

// ---- APPLY FILTERS ----
function applyFilters() {
  activePlatform = document.getElementById("platform-filter").value;
  activeSort     = document.getElementById("sort-filter").value;

  let filtered = [...courses];

  // Search filter
  if (activeSearch) {
    const q = activeSearch.toLowerCase();
    filtered = filtered.filter(c =>
      c.title.toLowerCase().includes(q) ||
      c.category.toLowerCase().includes(q) ||
      c.platform.toLowerCase().includes(q) ||
      c.bestFor.toLowerCase().includes(q)
    );
  }

  // Platform filter
  if (activePlatform !== "all") {
    filtered = filtered.filter(c => c.platform === activePlatform);
  }

  // Sort
  if (activeSort === "rating") {
    filtered.sort((a, b) => b.rating - a.rating);
  } else if (activeSort === "price-low") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (activeSort === "price-high") {
    filtered.sort((a, b) => b.price - a.price);
  }

  renderCourses(filtered);
}

// ---- CATEGORY FILTER ----
// NOTE: category cards use keywords that match course categories
const categoryKeywordMap = {
  "Python": "Python",
  "Data Science": "Data Science",
  "Machine Learning": "Machine Learning",
  "Web Development": "Web Development",
  "DSA": "DSA",
  "Cybersecurity": "Cybersecurity",
  "Cloud": "Cloud",
  "AI": "AI",
};

function filterCategory(keyword) {
  activeSearch = keyword;
  activeCompareCategory = categoryKeywordMap[keyword] || keyword;
  document.getElementById("search-input").value = keyword;
  document.getElementById("courses-title").textContent = `Best ${keyword} Courses`;
  document.getElementById("courses").scrollIntoView({ behavior: "smooth" });
  applyFilters();
  renderCompareTable();
}

function handleSearch() {
  activeSearch = document.getElementById("search-input").value.trim();
  if (activeSearch) {
    document.getElementById("courses-title").textContent = `Results for "${activeSearch}"`;
  } else {
    document.getElementById("courses-title").textContent = "Top Picks for Students";
  }
  document.getElementById("courses").scrollIntoView({ behavior: "smooth" });
  applyFilters();
}

function quickSearch(q) {
  document.getElementById("search-input").value = q;
  filterCategory(q);
}

function resetSearch() {
  activeSearch = "";
  document.getElementById("search-input").value = "";
  document.getElementById("courses-title").textContent = "Top Picks for Students";
  activePlatform = "all";
  document.getElementById("platform-filter").value = "all";
  applyFilters();
}

// ---- RENDER COMPARE TABLE ----
function renderCompareTable() {
  const tbody = document.getElementById("compare-tbody");
  const heading = document.getElementById("compare-heading");
  const subheading = document.getElementById("compare-subheading");

  const catCourses = courses
    .filter(c => c.category === activeCompareCategory)
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 6);

  if (heading) heading.textContent = `${activeCompareCategory} Courses — Compared`;
  if (subheading) subheading.textContent = `Top ${catCourses.length} ${activeCompareCategory} courses ranked by rating.`;

  if (catCourses.length === 0) {
    tbody.innerHTML = `<tr><td colspan="7" style="text-align:center;color:var(--text3);padding:40px;">No courses found for this category yet.</td></tr>`;
    return;
  }

  tbody.innerHTML = catCourses.map((c, i) => {
    const isBest = i === 0;
    return `
      <tr class="${isBest ? "best-row" : ""}">
        <td>
          ${isBest ? "🏆 " : ""}<strong>${c.title}</strong>
          ${isBest ? "<br><small style='color:var(--green);font-size:0.75rem;'>Best Value Pick</small>" : ""}
        </td>
        <td><span class="platform-badge ${getPlatformClass(c.platform)}">${c.platform}</span></td>
        <td class="price-cell">${formatPrice(c.price)}</td>
        <td class="rating-cell">⭐ ${c.rating}</td>
        <td>${c.duration}</td>
        <td style="color:var(--text2)">${c.bestFor}</td>
        <td><a href="${c.affiliate}" target="_blank" rel="noopener" class="table-btn">Visit →</a></td>
      </tr>
    `;
  }).join("");
}

// ---- INIT ----
document.addEventListener("DOMContentLoaded", () => {
  // Enter key search
  document.getElementById("search-input").addEventListener("keydown", (e) => {
    if (e.key === "Enter") handleSearch();
  });

  // Initial render — show all courses sorted by rating
  applyFilters();
  renderCompareTable();
});
