const tod = document.getElementById('button-skills') as HTMLButtonElement
const skills = document.getElementById('skills') as HTMLElement

tod.addEventListener('click',() => {
    if(skills.style.display ==='none'){
        skills.style.display = 'block'
    }
    else{
        skills.style.display ='none'

    }
});

