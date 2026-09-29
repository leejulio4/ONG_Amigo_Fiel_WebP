export function carregarHome() {
    return `
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
    `;
}

export function carregarProjetos() {
    return `
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
    `;
}

export function carregarCadastro() {
    return `
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
    `;
}