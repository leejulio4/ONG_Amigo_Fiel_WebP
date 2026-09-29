export function salvarVoluntario(dados) {
    localStorage.setItem(
        "voluntarioCadastrado",
        JSON.stringify(dados)
    );
}

export function obterVoluntario() {
    const dados = localStorage.getItem("voluntarioCadastrado");

    if (!dados) {
        return null;
    }

    return JSON.parse(dados);
}