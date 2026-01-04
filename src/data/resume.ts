// ========================================
// UPDATE THIS FILE WITH YOUR ACTUAL RESUME DATA
// ========================================

export const personalInfo = {
  name: "Malek Garrach",
  title: "AI Engineer", // Update with your actual title
  email: "garramal@mail.gvsu.edu", // Update with your email
  location: "United States", // Update with your location
  phone: "+1 616 290 7017", // Update with your phone
  linkedin: "https://www.linkedin.com/in/malekgr-tic/", // Update with your LinkedIn
  github: "https://github.com/malekgr", // Update with your GitHub
  summary: `AI Engineer with a software engineering mindset, experienced in building and optimizing solutions using LLMs and computer vision. Skilled in designing, deploying, and scaling AI-powered web applications.`, // Update with your summary
};

export const experiences = [
  {
    id: 1,
    title: "Research Graduate Assistant",
    company: "College of Computing - GVSU",
    location: "Grand Rapids, United States of America",
    period: "August - Present, 2025",
    description: [
      "Designed and implemented an end-to-end continuous learning architecture, including automated teacher model retraining, student model distillation, and deployment to Raspberry Pi devices for real-time plant health monitoring with robust and scalable computer vision pipelines."
    ],
  },
  {
    id: 2,
    title: "Intern - Computer Vision Developer",
    company: "College of Computing - GVSU",
    location: "Grand Rapids, United States of America",
    period: "March - July, 2025",
    description: [
      "Developed a computer vision classification model to assess the health status of lettuce plants, effectively distinguishing between healthy and diseased samples. Applied transfer learning and model distillation techniques to enhance performance with limited data."
    ],
  },
  {
    id: 3,
    title: "Generative AI Intern",
    company: "EY (Ernst & Young)",
    location: "Tunis, Tunisia",
    period: "September - December, 2024",
    description: [
      "Developing a solution that leverages generative AI to automate and optimize code testing. The project aims to enhance the accuracy of testing processes, identify anomalies, and predict potential errors."
    ],
  },
];

export const education = [
  {
    id: 1,
    degree: "Master's in Computer Science",
    school: "Grand Valley State University - College of Computing",
    location: "Grand Rapids, Michigan, USA",
    period: "2025 - 2026",
    description: "Advanced studies in Computer Science with focus on applied research and development.",
  },
  {
    id: 2,
    degree: "Engineering Diploma in Telecommunications",
    school: "SUP'COM - Higher School of Communication",
    location: "Tunis, Tunisia",
    period: "2022 - 2025",
    description: "Equivalent to Master's degree (US) / Engineering diploma (European system). Specialized in telecommunications and information technology.",
  },
  {
    id: 3,
    degree: "Preparatory Classes for Engineering Schools",
    school: "IPEIN - Preparatory Institute for Engineering Studies of Nabeul",
    location: "Nabeul, Tunisia",
    period: "2020 - 2022",
    description: "Intensive 2-year program in Mathematics and Physics. Ranked 27th out of 830 students in the national competitive examination.",
  },
];

export const skills = {
  languages: ["JavaScript", "TypeScript", "Python", "Java", "SQL"],
  frontend: ["React", "Next.js", "Vue.js", "HTML5", "CSS3", "Tailwind CSS"],
  backend: ["Node.js", "Express", "Django", "REST APIs", "GraphQL"],
  databases: ["PostgreSQL", "MongoDB", "MySQL", "Redis"],
  tools: ["Git", "Docker", "Kubernetes", "AWS", "GCP", "CI/CD"],
  other: ["Agile/Scrum", "Unit Testing", "System Design"],
};

export const projects = [
  {
    id: 1,
    title: "Semantic segmentation using deep learning for wildlife detection",
    period: "February 2024 - May 2024",
    technologies: ["PyTorch", "TensorFlow", "CVAT.ai"],
    description: [
      "The transition of visual perception systems from controlled laboratory settings into open-world environments necessitates models capable of robust generalization under extreme distribution shifts, varying adverse lighting, natural occlusions, motion blur, and complex backgrounds.",
      "To address this gap, we introduce WildAnimal650+, a large-scale, high-resolution semantic segmentation dataset comprising 10,032 carefully annotated images covering 658 animal species, hierarchically organized into six ecologically meaningful supercategories: mammals, birds, reptiles, amphibians, fish, and insects.",
      "WildAnimal650+ uniquely captures biologically grounded complexity, varying day-night cycles, weather conditions, camouflage, cluttered natural scenes, and fine-grained inter-species variability, offering a level of ecological and visual diversity unmatched by existing segmentation benchmarks.",
      "We benchmark three state-of-the-art segmentation models SAM, SegFormer, and UNet++ under these complex conditions. Results reveal significant performance drops in open-world settings, highlighting the need for more robust architectures and strategies to handle class imbalance and fine-grained species differentiation."
    ],
    image: "/projects/wildlife-segmentation.png",
    github: null,
    live: null,
  },
  {
    id: 2,
    title: "Distilled Intelligence at the Edge: An IoT-Driven Deep Learning Architecture for Plant Health Assessment",
    period: "2025",
    technologies: ["PyTorch", "Raspberry Pi", "Deep Learning", "IoT", "Knowledge Distillation"],
    description: [
      "Accurate plant disease classification is critical for maintaining crop health and yield. However, limited datasets and the high cost of cloud-based solutions make it challenging to process continuous image streams from field-deployed cameras efficiently.",
      "This paper proposes a lightweight IoT-driven architecture using Raspberry Pi devices for on-site image analysis, reducing dependence on expensive cloud services.",
      "The framework leverages knowledge distillation (KD) to transfer learning capacity from large teacher models to compact edge models, enabling continuous learning and adaptability in resource-constrained environments.",
      "A centralized IoT node aggregates camera inputs, performs classification of plant health status, and updates the system to preserve long-term accuracy.",
      "Experimental results show that the integration of the continuous learning workflow improves the accuracy of the student model hosted on the edge device by 4% initially, with further gains achievable through retraining the teacher model.",
      "These findings demonstrate the practicality, scalability, and cost-effectiveness of integrating deep learning with edge computing for real-world plant monitoring scenarios."
    ],
    image: "/projects/plant-health-monitoring.png",
    github: null,
    live: null,
  },
];

export const certifications = [
  {
    id: 1,
    name: "Google Cloud Professional",
    issuer: "Google",
    date: "2023",
  },
  {
    id: 2,
    name: "AWS Solutions Architect",
    issuer: "Amazon Web Services",
    date: "2022",
  },
  // Add more certifications as needed
];
