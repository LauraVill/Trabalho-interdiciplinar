
function carregando(){
    var vetNome = ['Ana','Paulo','Carlos'];
    var vetNumero = [23,14,18];
    var corpoTabela = document.querySelector('.corpoTabela');
    
    for(let i=0;i<vetNome.length;i++){
        var tr = document.createElement('tr');
        var tdNome= document.createElement('td');
        var tdNumero= document.createElement('td');
            
        tdNome.textContent = vetNome[i];
        tdNumero.textContent = vetNumero[i];
            
        tr.appendChild(tdNome);
        tr.appendChild(tdNumero);
        corpoTabela.appendChild(tr);
    }  
}