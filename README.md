# Web Apps From Scratch

The course repository for 'Web App From Scratch'

The goal from this course is to make a web app from scratch, only using pure HTML/CSS/JS without any big framework or library.

The link to the live prototype is [https://rick712.github.io/wafs/app/dist/](https://rick712.github.io/wafs/app/dist/)

- **[About this project](#about-this-project)**
- **[Getting Started](#getting-started)**
- **[Technologies used](#technologies-used)**
- **[Object Method](#object-method)**
- **[Interaction](#interaction)**
- **[Wishlist](#wishlist)**

## About this project

On the website, you can choose a particular Pokémon, and you will get some information about that Pokémon. The website achieves this by using [PokéApi](https://www.pokeapi.co/). PokéApi is an API that consists of information from all Pokémon.

First it makes an API call to the root of the API where all the names and the URL of the Pokémon are stored. The web app puts all the names in a list. When a user clicks on a Pokémon, the URL of the Pokémon is given to another API call, that retrieves more information about that Pokemon, and shows it to the user.

## Getting started

To start the local server, run the following command in the terminal

`parcel index.html`

## Technologies used

The web app is purely made in HTML/CSS/JS.

We did need to use two micro libraries:

[Transparency JS](https://github.com/leonidas/transparency)

[Routie](https://github.com/jgallen23/routie)

Transparency let's you render certain parts of your website based on data in an object, and Routie makes it easy to toggle area's based on hash change.

## Object method

![flow of the app](https://i.imgur.com/O40wkgu.png)

## Interaction

![Interaction between user and web app](https://i.imgur.com/bSCkN7G.png)

## Wishlist

- Add Pokémon type
- Filter on type
- Navigate to next and previous evolution stage
