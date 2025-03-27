document.getElementById("nomeDb").addEventListener("submit", function(event){
    event.preventDefault();
    const collectionName = document.getElementById("campoNomeDb").value;
    localStorage.setItem('Collection', JSON.stringify(collectionName));
}); 

