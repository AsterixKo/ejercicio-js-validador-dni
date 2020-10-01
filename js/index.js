

function validateDNI(dniValue){
    
}


function eventCheckDNI(){
    const dni = document.getElementById('id-input-dni');
    console.log('El dni es:', dni.value);
}

const button = document.getElementById('check-button').addEventListener('click', eventCheckDNI);