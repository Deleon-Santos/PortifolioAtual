function oculta(containerId, projectList) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = ""; 

  projectList.forEach(p => {
    container.innerHTML += `
      <div class="portifolio">
        <div>
          <div class="img_port" style="background-image: url('${p.image}');">
            <div class="over">
              <a href="${p.deploy}" target="_blank">Ver Deploy</a>
            </div>
          </div>
          <h3>${p.title}</h3>
        </div>
        <div class="desc-repositorio">
          <p>${p.description}</p>
          <div class="used-skill">
            ${p.skills.map(skill => `<i class="${skill}"></i>`).join("")}
          </div>
          <span>
            <a href="${p.repo}" target="_blank" class="repositorio">Repositório</a>
          </span>
        </div>
      </div>
    `;
  });
}

async function initProjects() {
  try {
    const response = await fetch('./src/data/portifolio.json')
    if (!response.ok) throw new Error("Erro ao carregar JSON");
    
    const projects = await response.json();

    oculta("deploy-projects", projects.deploy);
    oculta("descktop-projects", projects.descktop);
    oculta("console-projects", projects.console);

  } catch (error) {
    console.error("Falha na requisição:", error);
  }
}

document.addEventListener("DOMContentLoaded", initProjects);