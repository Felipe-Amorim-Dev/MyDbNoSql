class CreateCollection {

    NewCollection() {

        document.getElementById("collection").addEventListener("submit", function (event) {
            event.preventDefault();

            let nomeCollection = document.getElementById("campoNomeCollection").value.trim();
            let nomeTabela = document.getElementById("campoNomeTabela").value.trim();

            if (!nomeCollection) {
                alert("Informe um nome para a collection");
                return
            }

            if (!nomeTabela) {
                alert("Informe um nome para a tabela");
                return
            }

            let campos = [];
            document.querySelectorAll("input[name='campoTabela']").forEach(input => {
                let valor = input.value.trim();
                if (valor) {
                    campos.push(valor);
                }
            });

            if (campos.length === 0) {
                alert("Adicione pelo menos um campo na tabela");
                return
            }

            let data = {
                nomeTabela: nomeTabela,
                campos: campos
            };

            localStorage.setItem(nomeCollection, JSON.stringify(data));

            alert("Collection salva com sucesso!");

            location.reload();
        })
    }
}

let newCollection = new CreateCollection();
newCollection.NewCollection();


