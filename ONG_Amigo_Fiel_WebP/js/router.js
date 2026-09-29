import {
    carregarHome,
    carregarProjetos,
    carregarCadastro
} from "./templates.js";

import { configurarFormulario } from "./validation.js";

const rotas = {
    home: carregarHome,
    projetos: carregarProjetos,
    cadastro: carregarCadastro
};

export function iniciarRoteamento() {

    document.querySelectorAll("nav a").forEach(link => {

        link.addEventListener("click", evento => {

            evento.preventDefault();

            const rota = link.getAttribute("data-route");

            navegar(rota);
        });
    });

    window.addEventListener("popstate", () => {

        const rota = location.hash.replace("#", "") || "home";

        navegar(rota, false);
    });

    const rotaInicial =
        location.hash.replace("#", "") || "home";

    navegar(rotaInicial, false);
}

function navegar(rota, atualizarHistorico = true) {

    const appContent = document.getElementById("app-content");

    if (!appContent) {
        return;
    }

    const pagina = rotas[rota];

    if (!pagina) {
        appContent.innerHTML = `
            <h2>Página não encontrada</h2>
            <p>A página solicitada não existe.</p>
        `;

        return;
    }

    appContent.innerHTML = pagina();

    document.querySelectorAll("nav a[data-route]").forEach(link => {
        if (link.dataset.route === rota) link.setAttribute("aria-current", "page");
        else link.removeAttribute("aria-current");
    });
    const aviso = document.getElementById("aviso-navegacao");
    if (aviso) aviso.textContent = `Página ${rota} carregada`;


    if (atualizarHistorico) {
        history.pushState(
            { rota: rota },
            "",
            `#${rota}`
        );
    }

    if (rota === "cadastro") {
        configurarFormulario();
    }
}