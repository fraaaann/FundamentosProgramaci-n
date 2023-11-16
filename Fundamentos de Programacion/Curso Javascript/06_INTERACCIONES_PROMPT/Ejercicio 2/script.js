function medirTemperatura(){
    let temp = promt("Ingrese temperatura por favor: ");

    if (temp < 0){
        alert("Hace mucho frio: " + temp + "ºC");
    } else if (temp > 0 && temp < 25){
        alert("La temperatura es agradable: "+ temp + "ºC");
    } else{
            alert("Hace calor: " + temp + "ºC");
        }
}


