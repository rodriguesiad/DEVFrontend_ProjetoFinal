const urlEstados = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados';
const estado = document.getElementById('estado');
const cidade = document.getElementById('cidade');

estado.addEventListener('change', async ()=> {
    const urlCidades = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados/'+estado.value+'/municipios';
    const request = await fetch(urlCidades);
    const response = await request.json(); 

    let option = '';

    response.forEach(function(cidade){
        option += '<option>'+cidade.nome+'</option>';
    })
    cidade.innerHTML = option;
})

window.addEventListener('load', async ()=> {
    const request = await fetch(urlEstados);
    const response = await request.json();  

    const option = document.createElement('optgroup');

    response.forEach(function(estado){
        option.innerHTML += '<option>'+estado.sigla+'</option>';
    })

    estado.append(option);
} )

