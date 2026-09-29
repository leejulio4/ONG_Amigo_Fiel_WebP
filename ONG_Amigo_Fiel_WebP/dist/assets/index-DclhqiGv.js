(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function t(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(a){if(a.ep)return;a.ep=!0;const o=t(a);fetch(a.href,o)}})();function v(){return`
        <section>
            <h2>Quem Somos</h2>

            <p>
                Conheça o Amigo Fiel, uma ONG dedicada a transformar a
                realidade de cães e gatos em situação de abandono.
                Fundada com o propósito de dar voz a quem não pode falar,
                nossa missão é resgatar, reabilitar e encontrar lares
                amorosos e definitivos para animais que sofreram maus-tratos
                ou viviam nas ruas.
            </p>

            <p>
                Trabalhamos incansavelmente na manutenção de um santuário
                seguro, onde cada resgatado recebe atendimento veterinário
                completo, alimentação adequada, vacinação, castração e
                muito carinho. Acreditamos que a reabilitação vai além do
                corpo, por isso investimos na socialização e no cuidado
                emocional de cada um deles.
            </p>
        </section>

        <section>
            <h2>Trabalho Social</h2>

            <p>
                Mas nosso trabalho não para por aí. Promovemos campanhas
                de conscientização sobre a importância da posse responsável
                e do controle populacional através da castração, combatendo
                a raiz do abandono.
            </p>
        </section>

        <section>
            <h2>Contato</h2>

            <p>E-mail: contato@amigofiel.com</p>
            <p>Telefone: (00) 00000-0000</p>
        </section>

        <article>
            <h2>Amigo Fiel realiza mega evento de adoção neste sábado</h2>

            <p>
                A ONG Amigo Fiel promove neste fim de semana sua maior
                feira de adoção do ano, com o objetivo de encontrar lares
                para mais de 40 cães e gatos resgatados. Todos os animais
                entregues já estão castrados, vacinados e microchipados.
                O evento também contará com arrecadação de ração e feira
                de artesanato beneficente. A iniciativa busca zerar a fila
                do abrigo e conscientizar a população sobre a importância
                da adoção consciente. Participe e adote um amigo!
            </p>
        </article>
    `}function g(){return`
        <!-- Bloco 1: Introdução -->
        <section>
            <h2>Projetos da ONG</h2>
            <p>
                A ONG Amigo Fiel desenvolve diferentes projetos com o
                objetivo de ajudar animais abandonados e conscientizar
                a população sobre a importância da proteção e da posse
                responsável. Entre nossas principais ações estão as
                campanhas de doação, o resgate de animais e o trabalho
                de voluntários.
            </p>
        </section>

        <!-- Bloco 2: Doações -->
        <section>
            <h2>Doações</h2>
            <p>
                As doações são muito importantes para manter o trabalho
                da ONG. Os recursos arrecadados são utilizados para
                comprar ração, medicamentos, materiais de higiene e
                também para ajudar nos custos de atendimento veterinário
                dos animais resgatados.
            </p>
            <p>
                Quem deseja contribuir pode realizar uma doação financeira
                ou ajudar com produtos, como ração, cobertores e materiais
                de limpeza. Toda contribuição é importante e ajuda a
                oferecer melhores condições para os animais que estão
                sob os cuidados da ONG.
            </p>
            
            <h3>Como contribuir</h3>
            <p>
                Para realizar uma contribuição financeira, o interessado
                pode entrar em contato com a ONG através dos canais
                disponíveis ou realizar uma doação através da chave PIX
                abaixo. Também é possível contribuir com ração,
                medicamentos e outros produtos necessários para os animais.
            </p>
            <p><strong>PIX:</strong> contato@amigofiel.com</p>
        </section>

        <!-- Bloco 3: Voluntariado -->
        <section>
            <h2>Voluntariado</h2>
            <p>
                O trabalho dos voluntários é essencial para que a ONG
                consiga realizar suas atividades. Os voluntários podem
                ajudar na alimentação e nos cuidados com os animais,
                na organização do espaço, em eventos de adoção e também
                na divulgação das campanhas nas redes sociais.
            </p>

            <h3>Como participar</h3>
            <p>
                Para ser voluntário, o interessado deve realizar seu
                cadastro na página de
                <a href="#cadastro" data-route="cadastro">cadastro</a>
                e entrar em contato com a ONG para verificar as
                atividades disponíveis.
            </p>
        </section>

        <!-- Bloco 4: Campanhas -->
        <section>
            <h2>Campanhas de Doação</h2>
            <p>
                A ONG Amigo Fiel também realiza campanhas para arrecadar
                produtos e recursos destinados aos animais resgatados.
                Durante essas campanhas são arrecadados itens como ração,
                medicamentos, produtos de higiene e cobertores.
            </p>
            <p>
                As campanhas são divulgadas para que mais pessoas possam
                participar e contribuir. Além de ajudar diretamente os
                animais, essas ações também ajudam a conscientizar a
                comunidade sobre o abandono e a importância da adoção
                responsável.
            </p>
        </section>
    `}function h(){return`
        <section>
            <h2>Seja um Voluntário</h2>

            <p>Faça parte da nossa ONG e ajude os animais.</p>

            <form id="form-voluntario">

                <label for="nome">Nome completo:</label>
                <input type="text" id="nome" required>

                <label for="cpf">CPF:</label>
                <input 
                    type="text"
                    id="cpf"
                    placeholder="000.000.000-00"
                    maxlength="14"
                    required
                >

                <label for="email">E-mail:</label>
                <input
                    type="email"
                    id="email"
                    required
                >

                <label for="telefone">Telefone:</label>
                <input
                    type="tel"
                    id="telefone"
                    placeholder="(48) 99999-9999"
                    required
                >

                <label for="area">Interesse em voluntariado:</label>

                <select id="area" required>
                    <option value="">Selecione uma opção</option>
                    <option value="resgate">Resgate de animais</option>
                    <option value="adocao">Adoção</option>
                    <option value="eventos">Eventos</option>
                    <option value="divulgacao">Divulgação</option>
                </select>

                <label for="experiencia">
                    Experiência e habilidades:
                </label>

                <textarea id="experiencia"></textarea>

                <label>
                    <input type="checkbox" id="consentimento" required>
                    Aceito participar do programa de voluntariado da ONG.
                </label>

                <button type="submit">Cadastrar</button>

            </form>
        </section>
    `}function b(e){localStorage.setItem("voluntarioCadastrado",JSON.stringify(e))}function y(){const e=document.getElementById("form-voluntario");e&&e.addEventListener("submit",r=>{r.preventDefault();const t=document.getElementById("nome"),i=document.getElementById("cpf"),a=document.getElementById("email"),o=document.getElementById("telefone"),s=document.getElementById("area"),m=document.getElementById("consentimento"),p=document.getElementById("experiencia");let n=!0;if(u(),t.value.trim()===""?(c(t,"Informe seu nome."),n=!1):d(t),/^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(i.value)?d(i):(c(i,"Digite um CPF válido."),n=!1),/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(a.value)?d(a):(c(a,"Digite um e-mail válido."),n=!1),o.value.trim()===""?(c(o,"Informe seu telefone."),n=!1):d(o),s.value===""?(c(s,"Selecione uma área de interesse."),n=!1):d(s),m.checked||(c(m,"É necessário aceitar o termo de participação."),n=!1),!n)return;const f={nome:t.value.trim(),cpf:i.value.trim(),email:a.value.trim(),telefone:o.value.trim(),area:s.value,experiencia:p.value.trim()};b(f),alert("Cadastro realizado com sucesso!"),e.reset(),u()})}function c(e,r){e.classList.add("input-erro"),e.classList.remove("input-sucesso");const t=document.createElement("span");t.classList.add("texto-erro"),t.textContent=r,e.parentNode.insertBefore(t,e.nextSibling)}function d(e){e.classList.add("input-sucesso"),e.classList.remove("input-erro")}function u(){document.querySelectorAll(".texto-erro").forEach(e=>{e.remove()}),document.querySelectorAll(".input-erro").forEach(e=>{e.classList.remove("input-erro")}),document.querySelectorAll(".input-sucesso").forEach(e=>{e.classList.remove("input-sucesso")})}const E={home:v,projetos:g,cadastro:h};function A(){document.querySelectorAll("nav a").forEach(r=>{r.addEventListener("click",t=>{t.preventDefault();const i=r.getAttribute("data-route");l(i)})}),window.addEventListener("popstate",()=>{const r=location.hash.replace("#","")||"home";l(r,!1)});const e=location.hash.replace("#","")||"home";l(e,!1)}function l(e,r=!0){const t=document.getElementById("app-content");if(!t)return;const i=E[e];if(!i){t.innerHTML=`
            <h2>Página não encontrada</h2>
            <p>A página solicitada não existe.</p>
        `;return}t.innerHTML=i(),document.querySelectorAll("nav a[data-route]").forEach(o=>{o.dataset.route===e?o.setAttribute("aria-current","page"):o.removeAttribute("aria-current")});const a=document.getElementById("aviso-navegacao");a&&(a.textContent=`Página ${e} carregada`),r&&history.pushState({rota:e},"",`#${e}`),e==="cadastro"&&y()}document.addEventListener("DOMContentLoaded",()=>{A()});
