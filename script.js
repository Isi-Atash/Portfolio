document.addEventListener("DOMContentLoaded", () => {
  const projectsSection = document.getElementById("projects");
  const projects = [
    {
      title: "Image to ASCII Converter",
      description:
        "Developed a tool to convert images into ASCII art, demonstrating creativity and proficiency in Python programming.",
      technologies: ["Python", "Image Processing", "ASCII"],
    },
    {
      title: "Money Transfers",
      description:
        "Created a C# application for handling money transfers between different branches of the bank, showcasing skills in financial software development.",
      technologies: ["C#", "SQL", "Oracle", "Financial Technology"],
    },
    {
      title:
        "Research on the Application of Big Data Technologies in the Transport Sector",
      description:
        "Conducted research on the implementation and challenges of big data technologies in transportation, addressing privacy and data security concerns.",
      technologies: ["Big Data", "Transport Industury"],
    },
    {
      title: "NLP with Disaster Tweets",
      description:
        "Utilized NLP techniques to analyze tweets for disaster response, participating in a Kaggle competition.",
      technologies: [
        "Python",
        "Machine Learning",
        "Natural Language Processing",
        "Transformers",
      ],
    },
    {
      title:
        "Pre-trained Speaker Recognition Embedding Models for Disorder Speech Classifications",
      description:
        "Focused on classifying voice disorders using speaker verification models, contributing to advancements in medical technology.",
      technologies: [
        "Machine Learning",
        "X-vector",
        "ECAPA",
        "Ensemble Learning",
        "Boosting",
        "Bagging",
      ],
    },
    {
      title: "Security of Machine Learning-based Malware Detection",
      description:
        "Explored the security aspects of machine learning in malware detection, enhancing the reliability of automated systems against cyber threats.",
      technologies: [
        "Python",
        "Machine Learning",
        "Cybersecurity",
        "CNN models",
        "IoT",
      ],
    },
    {
      title: "Backdoor Attacks against ML-based Malware Detection",
      description:
        "Investigated the vulnerability of machine learning systems to backdoor attacks, focusing on malware detection algorithms in IoT devices, and the defending against said backdoor atacks.",
      technologies: [
        "Python",
        "Machine Learning",
        "Cybersecurity",
        "CNN models",
        "IoT",
      ],
    },
    // Add other projects here
  ];

  projects.forEach((proj) => {
    let techList = proj.technologies
      .map((tech) => `<span class="tech-tag">${tech}</span>`)
      .join(" "); // Create techList for each project

    const projElement = document.createElement("article");
    projElement.innerHTML = `
    <h3>${proj.title}</h3>
    <p>${proj.description}</p>
    <div class="project-tech">${techList}</div>
    `;
    projElement.querySelector("h3").addEventListener("click", () => {
      projElement.querySelector(".description").classList.toggle("expanded");
    });
    projectsSection.appendChild(projElement);
  });
});


document.addEventListener('mousemove', (e) => {
  const x = e.pageX;
  const y = e.pageY;
  document.querySelector('.content').style.backgroundImage = `radial-gradient(circle at ${x}px ${y}px, rgba(255, 255, 255, 1) 200px, black 250px)`;
});

