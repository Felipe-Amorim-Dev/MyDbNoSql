let contador = 1;

document.getElementById("newCampo").addEventListener("click", function(event){
    event.preventDefault();
    let novoCampo = document.createElement("div");
    novoCampo.classList.add("campos", "mt-2");

    let = novoId = `campoTabela_${contador}`;

    let label = document.createElement("label");
    label.classList.add("form-label");
    label.setAttribute("for", novoId);
    label.textContent = `Informe o nome do campo ${contador}`;

    let input = document.createElement("input");
    input.classList.add("form-control");
    input.setAttribute("type", "text");
    input.setAttribute("id", novoId);
    input.setAttribute("name", "campoTabela");
    input.setAttribute("placeholder", `Nome do Campo ${contador}`);    

    novoCampo.appendChild(label);
    novoCampo.appendChild(input);    

    document.querySelector(".camposTabela").appendChild(novoCampo);

    contador++;
});