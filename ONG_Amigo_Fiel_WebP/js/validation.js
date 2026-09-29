import { salvarVoluntario } from "./storage.js";

export function configurarFormulario() {
    const formulario = document.getElementById("form-voluntario");

    if (!formulario) {
        return;
    }

    formulario.addEventListener("submit", (evento) => {
        evento.preventDefault();

        const nome = document.getElementById("nome");
        const cpf = document.getElementById("cpf");
        const email = document.getElementById("email");
        const telefone = document.getElementById("telefone");
        const area = document.getElementById("area");
        const consentimento = document.getElementById("consentimento");
        const experiencia = document.getElementById("experiencia");

        let formularioValido = true;

        limparMensagens();

        if (nome.value.trim() === "") {
            marcarErro(nome, "Informe seu nome.");
            formularioValido = false;
        } else {
            marcarSucesso(nome);
        }

        const regexCpf = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;

        if (!regexCpf.test(cpf.value)) {
            marcarErro(cpf, "Digite um CPF válido.");
            formularioValido = false;
        } else {
            marcarSucesso(cpf);
        }

        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!regexEmail.test(email.value)) {
            marcarErro(email, "Digite um e-mail válido.");
            formularioValido = false;
        } else {
            marcarSucesso(email);
        }

        if (telefone.value.trim() === "") {
            marcarErro(telefone, "Informe seu telefone.");
            formularioValido = false;
        } else {
            marcarSucesso(telefone);
        }

        if (area.value === "") {
            marcarErro(area, "Selecione uma área de interesse.");
            formularioValido = false;
        } else {
            marcarSucesso(area);
        }

        if (!consentimento.checked) {
            marcarErro(
                consentimento,
                "É necessário aceitar o termo de participação."
            );
            formularioValido = false;
        }

        if (!formularioValido) {
            return;
        }

        const dadosVoluntario = {
            nome: nome.value.trim(),
            cpf: cpf.value.trim(),
            email: email.value.trim(),
            telefone: telefone.value.trim(),
            area: area.value,
            experiencia: experiencia.value.trim()
        };

        salvarVoluntario(dadosVoluntario);

        alert("Cadastro realizado com sucesso!");

        formulario.reset();

        limparMensagens();
    });
}

function marcarErro(campo, mensagem) {
    campo.classList.add("input-erro");
    campo.classList.remove("input-sucesso");

    const mensagemErro = document.createElement("span");

    mensagemErro.classList.add("texto-erro");
    mensagemErro.textContent = mensagem;

    campo.parentNode.insertBefore(
        mensagemErro,
        campo.nextSibling
    );
}

function marcarSucesso(campo) {
    campo.classList.add("input-sucesso");
    campo.classList.remove("input-erro");
}

function limparMensagens() {
    document.querySelectorAll(".texto-erro").forEach(mensagem => {
        mensagem.remove();
    });

    document.querySelectorAll(".input-erro").forEach(campo => {
        campo.classList.remove("input-erro");
    });

    document.querySelectorAll(".input-sucesso").forEach(campo => {
        campo.classList.remove("input-sucesso");
    });
}