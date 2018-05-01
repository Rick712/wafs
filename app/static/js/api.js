import sections from './sections'
import routie from './routie'
import order from './order'

const template = document.querySelector('.template'),
    data = {},
    newData = {},
    elPokemonList = document.querySelector('.pokemon-list')
let obj = {},
	newObj = {} // JS declared de variables boven aan de scope

const api = { // object met .call, .orderPokemon, .makeList en .pokemonDetail method,
    
    call: function() {
        const request = new XMLHttpRequest()
        request.open('GET', 'https://www.pokeapi.co/api/v2/pokemon/?limit=151', true)

        request.onload = function() {

            if (request.status >= 200 && request.status < 400) {	

                this.data = JSON.parse(request.responseText)
                const pokemon = this.data.results
                order.makeList(pokemon);
                order.pokemon(pokemon)

                // closure is een functie in een functie waar de child functie nog steeds bij de parent functie kan

                const loading = document.querySelector('.loading')
                loading.classList.add('gone')
            }	
        }
        request.onerror = function() {
            const elError = document.querySelector('.error')
                elError.classList.remove('gone')
        }

        request.timeout = function() {
            const elTimeOut = document.querySelector('.timeOut')
                elTimeOut.classList.remove('gone')
        }

        request.send()
    },

    pokemonDetail: function(obj) {
        const newRequest = new XMLHttpRequest()
        newRequest.open('GET', 'https://www.pokeapi.co/api/v2/pokemon/' + obj, true)

        newRequest.onload = function() {

            if (newRequest.status >= 200 && newRequest.status < 400) {

                const list = document.querySelector('.pokemon-list'),
                    elTemplate = document.querySelector('.template'),
                    form = document.querySelector('.form')
                list.classList.add('gone')
                elTemplate.classList.remove('gone')
                form.classList.add('gone')
                        
                this.newData = JSON.parse(newRequest.responseText)

                const pokemonImages = this.newData.sprites,
                    pokemonInfo = this.newData,
                    pokeInfo = {
                        name: pokemonInfo.name,
                        height: 'Height: ' + pokemonInfo.height / 10 + ' meter',
                        weight: 'Weight: ' + pokemonInfo.weight / 10 + ' kilogram',
                        statsHP: 'HP: ' + pokemonInfo.stats[5].base_stat,
                        statsDef: 'Defense: ' + pokemonInfo.stats[3].base_stat,
                        statsAtt: 'Attack: ' + pokemonInfo.stats[4].base_stat,
                        statsSpeed: 'Speed: ' + pokemonInfo.stats[0].base_stat,
                        statsSpDef: 'Special Defense: ' + pokemonInfo.stats[1].base_stat,
                        statsSpAtt: 'Special Attack: ' + pokemonInfo.stats[2].base_stat,
                    },	

                sprites = {
                    front_default: {
                        src: function src() {
                            return '' + pokemonInfo.sprites.front_default
                        }
                    },
                    back_default: {
                        src: function src() {
                            return '' + pokemonInfo.sprites.back_default
                        }
                    },
                    front_shiny: {
                        src: function src() {
                            return '' + pokemonInfo.sprites.front_shiny
                        }
                    },
                    back_shiny: {
                        src: function src() {
                            return '' + pokemonInfo.sprites.back_shiny
                        }
                    }
                }
           
                setTimeout(function(){
                    template.classList.add('showPokemon')
                }, 1)

                Transparency.render(template, pokeInfo, sprites)
                    
            }

            const back = document.querySelector('.template a')

            back.addEventListener('click', function () {
                sections.back()
            })

        }
                
        newRequest.onerror = function() {
            const loading = document.querySelector('.error')
                loading.classList.add('gone')
        }

        newRequest.timeout = function () {
            const elTimeOut = document.querySelector('.timeOut')
            loading.classList.add('gone')
        }
                
        newRequest.send()
    }
}

export default api