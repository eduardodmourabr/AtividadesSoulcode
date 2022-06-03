const btnToggle = document.getElementById('btn')

btnToggle.addEventListener('click', function(){
    
    let alertHTML = document.querySelector('.lamp')

    if (alertHTML.classList.contains('acender')){
        alertHTML.classList.remove('acender')
    }else{
        alertHTML.classList.add('acender')
    }

}) 