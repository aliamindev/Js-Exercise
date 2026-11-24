const nameList = document.getElementById("names");

function insertName(){
    const newName = document.createElement('li');
    newName.textContent = 'newName';
    nameList.appendChild(newName);
}

function removeName(){


    if(nameList.lastChild){
        nameList.removeChild(nameList.lastChild);
    }else{
        alert('Last name removed');
    }
    
    
}