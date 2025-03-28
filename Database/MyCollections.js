
document.addEventListener("DOMContentLoaded", function(){
    let showCollections = document.getElementById("showCollections");

    for (let i = 0; i < localStorage.length; i++){
        let key = localStorage.key(i);     
        let campoValue = localStorage.getItem(key);   
        
        try {
            campoValue = JSON.parse(value);
        } catch (error) {
            
        }

        let listCollection = document.createElement("div");        

        let keyCount = `${i}`;

        let divCollection = document.createElement("div");
        divCollection.classList.add("d-flex", "flex-col", "justify-content-between", "align-items-center", "mt-2");

        let pNumber = document.createElement("p");
        pNumber.classList.add("sd-4", "me-4", "text-uppercase");
        pNumber.setAttribute("id", keyCount);
        pNumber.textContent = keyCount;

        let p = document.createElement("p");
        p.classList.add("sd-4", "col-4", "text-uppercase");
        p.setAttribute("id", keyCount);
        p.textContent = key;

        let btnDelete = document.createElement("button");
        btnDelete.classList.add("btn", "btn-danger", "ms-4");
        btnDelete.setAttribute("id", keyCount);
        btnDelete.textContent = "Drop";

        let tableExpand = document.createElement("div");
        tableExpand.classList.add("collection", "col-4", "d-flex", "flex-col", "justify-content-between", "align-items-center", "mt-2");

        if(typeof campoValue === "object" && campoValue != null) {
            Object.entries(campoValue).forEach(([subKey, subValue]) => {
                let pValue = document.createElement("p");
                pValue.textContent = `${subKey}: ${Array.isArray(subValue) ? subValue.join(", ") : subValue}`;

                tableExpand.appendChild(pValue);
            });
        } else {
            let pUnique = document.createElement("p");
            pUnique.textContent = `${campoValue}`;
            tableExpand.appendChild(pUnique);
        }   
        
        divCollection.appendChild(pNumber);
        divCollection.appendChild(p);                
        divCollection.appendChild(btnDelete);

        listCollection.appendChild(divCollection);  
        listCollection.appendChild(tableExpand);  
        showCollections.appendChild(listCollection);
                
    }
});