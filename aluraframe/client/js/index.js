var campos = [
   document.querySelector("#data"),
   document.querySelector("#quantidade"),
   document.querySelector("#valor")

];

console.log(campos);

//incluindo tratamento de submit do formulario
document.querySelector(".form").addEventListener('submit', function(event){

    event.preventDefault();

    var tbody = document.querySelector("table tbody");
    var tr = document.createElement("tr");
     
    campos.forEach(function(item){
        td = document.createElement("td");
        td.textContent = item.value;
        tr.appendChild(td);

    }); 
    var tdVolume = document.createElement("td");
    tdVolume.textContent = campos[1].value * campos[2].value;
    tr.appendChild(tdVolume);
    tbody.appendChild(tr);   
    
    campos[0].value = "";
    campos[1].value = "";
    campos[2].value = "";

    campos[0].focus();

});