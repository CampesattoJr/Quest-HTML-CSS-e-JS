const inputs = document.querySelectorAll(".input");
const enviar = document.querySelector(".botao");
const aviso = document.querySelector(".aviso");


enviar.addEventListener("click", (event) => {
    event.preventDefault();

    inputs.forEach((inputs) => {
        if(inputs.value !== "") {
            inputs.classList.remove("invalido");
            inputs.nextElementSibling.classList.remove("ativo");
            enviar.classList.remove("ativo");
            aviso.classList.remove("ativo");
        } else {
            inputs.classList.add("invalido");
            inputs.nextElementSibling.classList.add("ativo");
            enviar.classList.add("ativo");
            aviso.classList.add("ativo");
        }
    });
});

inputs.forEach(input => {
    input.addEventListener("change", () => {
        let ehValido = input.value;

        if (ehValido !== "") {
            input.classList.add("valido")
        } else {
            input.classList.remove("valido")
        }
    });
});