import {getMovieHtml} from './utils.js'
import { container } from './watchlist.js'
const searchBox = document.getElementById('search-box')
const searchBtn = document.getElementById('search-btn')
const watchlist =  document.querySelector('.add-watchlist')


function getfocus(item) {
    item.focus();
  }
//console.log(watchlist)
let watchlistArr = []

async function  getApi(){
    let searchItem = searchBox.value
 
    //fetch seaarch data using item name
    const res = await fetch(`https://www.omdbapi.com/?apikey=a1f9db6c&s=${searchItem}`)
    const data  =  await  res.json()
         console.log(data)
         container.style.backgroundColor = 'black'
         container.innerHTML = `<img src="./images/Spinner-1s-176px.gif" id="loader">`
        
          function displayMovieSearch(){
            let movieData = data.Search
            let movieHtml = ''
            //loop through search data to get id 
             movieData.forEach(movie => {
             //console.log(movie.imdbID)
             //get all search data full info by fetching with ID
                fetch(`https://www.omdbapi.com/?apikey=a1f9db6c&i=${movie.imdbID}&plot=short`)
                 .then(response => response.json())
                 .then(data =>{
     
                        //console.log(data)
                        movieHtml += getMovieHtml(data)
                        return container.innerHTML = movieHtml
                 })
     
                 
             })

            
          }

          setTimeout(() => {
            container.style.backgroundColor = 'white'
            displayMovieSearch()
        }, 3000)
         
        
}

searchBtn.addEventListener('click', ()=> { getfocus(searchBox), getfocus(searchBtn),   getApi()})

function placeholderHtml(){
          //placeholder
 fetch(`https://www.omdbapi.com/?apikey=a1f9db6c&t=batman`)
 .then(response => response.json())
 .then(data =>{
     container.innerHTML = getMovieHtml(data)   
 })
}

placeholderHtml()
  
    
function addToWatchlist(movieId) {
    watchlistArr.push(movieId)
    localStorage.setItem('watchlist', JSON.stringify(watchlistArr))
    console.log(watchlistArr)
}

document.addEventListener('click', function(e){
      if(e.target.dataset.add){
          console.log(e.target.dataset.add)
          addToWatchlist(e.target.dataset.add)
      }
  })

