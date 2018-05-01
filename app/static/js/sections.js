import script from './script'

const elStart = document.querySelector('#start'),
    elPokemon = document.querySelector('#pokemon'),
    template = document.querySelector('.template'),
    form = document.querySelector('.form'),
    pokemonList = document.querySelector('.pokemon-list')

const sections = {
    
    start: function() {
        elStart.classList.remove('no-display')
        elPokemon.classList.add('no-display')
    },

    pokemon: function() {
        elPokemon.classList.remove('no-display')
        elStart.classList.add('no-display')
    },

    back: function() {
        template.classList.add('gone')
        form.classList.remove('gone')
        pokemonList.classList.remove('gone')
    }
}

export default sections