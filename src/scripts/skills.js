const skills = [
  { icon: "fa-brands fa-html5", name: "HTML" },
  { icon: "fa-brands fa-css3-alt", name: "CSS" },
  { icon: "fa-brands fa-js", name: "JavaScript" },
  { icon: "fa-brands fa-python", name: "Python" },
  { icon: "fa-brands fa-java", name: "Java" },
  { icon: "fa-solid fa-database", name: "SQL" },
  { icon: "fa-brands fa-figma", name: "Figma" },
  { icon: "fa-solid fa-diagram-project", name: "UML" },
  { icon: "fa-brands fa-git-alt", name: "Git" },
  { icon: "fa-brands fa-github", name: "GitHub" }
];

const skillsContainer = document.getElementById("skills-container");

skills.forEach(skill => {
  const card = document.createElement("div");
  card.classList.add("card-projetos");

  card.innerHTML = `
    <i class="${skill.icon}"></i>
    <h3>${skill.name}</h3>
  `;

  skillsContainer.appendChild(card);
});
