function listFilms(){
    let filmsContainer = document.getElementById("movieListContainer")

    let ulFilms = document.createElement("ul")
    ulFilms.setAttribute("class", "list")

    for(Element of filmsList){
        let itemFilm = document.createElement("li")
        itemFilm.setAttribute("class", "listItem")

        let divMainText = document.createElement("div")
        divMainText.setAttribute("class", "listItem-mainText")
        let filmTitle = document.createTextNode(`🎞️ ${Element.title}`)
        divMainText.appendChild(filmTitle)


        let divDetails = document.createElement("div")
        divDetails.setAttribute("class", "listItem-details")


        let spanReleaseDate = document.createElement("span")
        let itemReleaseDate = document.createTextNode(`${Element.releaseDate}`)

        spanReleaseDate.appendChild(itemReleaseDate)
        divDetails.appendChild(spanReleaseDate)

        let spanDirector = document.createElement("span")
        let itemDirector = document.createTextNode(`${Element.director}`)

        spanDirector.appendChild(itemDirector)
        divDetails.appendChild(spanDirector)

        itemFilm.appendChild(divMainText)
        itemFilm.appendChild(divDetails)
        ulFilms.appendChild(itemFilm)
    }

    filmsContainer.appendChild(ulFilms)
}

const filmsList= [
    {
        title: "A New Hope",
        releaseDate: "25/05/1977",
        director: "George Lucas",
        planets: ["🪐 Tatooine", "🌕 Alderaan", "🌏 Yavin IV"]
    },
    {
        title: "The Empire Strikes Back",
        releaseDate: "17/05/1980",
        director: "Irvin Kershner",
        planets:["🪐 Hoth","🌕 Dagobah", "🌏 Bespin", "🪐 Ord Mantell"]
    },
    {
        title: "Return of the Jedi",
        releaseDate: "25/05/1983",
        director: "Richard Marquand",
        planets:["🪐 Tatooine", "🌕 Dagobah", "🌏 Endor", "🪐 Naboo", "🌌 Coruscant"]
    },
    {
        title: "The Phantom Menace",
        releaseDate: "19/05/1999",
        director: "George Lucas",
        planets:["🪐 Tatooine", "🪐 Naboo", "🌌 Coruscant"]
    },
    {
        title: "Attack of the Clones",
        releaseDate: "16/05/2002",
        director: "George Lucas",
        planets:["🪐 Tatooine", "🪐 Naboo", "🌌 Coruscant", "🪐 Kamino", "🌌 Genosis"]
    },
    {
        title: "Revenge of the Sith",
        releaseDate: "18/05/2005",
        director: "George Lucas",
        planets:["🪐 Tatooine", "🌕 Dagobah", "🪐 Naboo", "🌌 Coruscant", "🌏 Utapau", "🪐 Mustafar", "🌕 Kashyyyk", "🌏 Polis Massa", "🪐 Mygeeto", "🌌 Felucia", "🌏 Cato Neimoidia", "🪐 Saleucami"]
    }
];