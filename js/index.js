let words = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B',
    'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'
];

function validateDNI(dniValue) {
    const dniOnlyNumber = dniValue.toUpperCase().substring(0, 8);
    const dniOnlyWord = dniValue.toUpperCase().substring(8, 9);
    console.log(dniOnlyNumber);
    console.log(dniOnlyWord);
    const module = dniOnlyNumber % 23;

    const displayMessages = document.getElementById('display-messages');
    if(words[module] === dniOnlyWord){
        console.log('El DNI es correcto');
        displayMessages.innerHTML = `<h2 class="correct-value">${dniOnlyNumber} es un DNI válido</h2>`;
    }else{
        console.log('El DNI es incorrecto');
        displayMessages.innerHTML = `<h2 class="incorrect-value">${dniOnlyNumber} es un DNI inválido</h2>`;
    }
}


function eventCheckDNI() {
    const dni = document.getElementById('id-input-dni');
    console.log('El dni es:', dni.value);
    validateDNI(dni.value);
}

const button = document.getElementById('check-button').addEventListener('click', eventCheckDNI);