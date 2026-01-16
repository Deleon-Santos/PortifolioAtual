const skillsContainer = document.getElementById("skills-container");
async function loadSkills() {
  try {
    const response = await fetch('./src/data/skills.json');
    
    const skills = await response.json();
    skills.forEach(skill => {
      const card = document.createElement("div");
      card.classList.add("card-projetos");

      card.innerHTML = `
        <i class="${skill.icon}"></i>
        <h3>${skill.name}</h3>
      `;

      skillsContainer.appendChild(card);
    });
  } catch (error) {
    console.error("Erro ao carregar o arquivo JSON:", error);
  }
}

loadSkills();