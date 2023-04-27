//import {watchlistArr} from './index.js'
import {watchListMovieHtml} from './utils.js'

export const container =  document.querySelector('.container')

let newList = []
let listFromLS = JSON.parse(localStorage.getItem('watchlist'))
 //console.log(listFromLS)
 
if (listFromLS){
    newList = listFromLS
}
console.log(newList)

  function render(list){
    let movieFeed = ''
  list.forEach( async (id) => {
    
   const res = await fetch(`https://www.omdbapi.com/?apikey=a1f9db6c&i=${id}`)
   const data = await res.json()
       movieFeed += watchListMovieHtml(data) 
       container.innerHTML = movieFeed
   
  })
}
 
render(newList)


function removeFromWatchlist(movieId) {
 
    let currentList = newList
        for (let targetid of currentList) {
          console.log(targetid)
          let index =  currentList.findIndex(mId => mId === movieId);
            console.log(index)
          if (~index) {
              currentList.splice(index, 1);
              container.innerHTML = ''
              break;
            
          }
      }

   
    localStorage.setItem('watchlist', JSON.stringify(newList))
   
    render(currentList)
   
}
  
document.addEventListener('click', function(e){
    if(e.target.dataset.remove){
        console.log(e.target.dataset.remove)
        removeFromWatchlist(e.target.dataset.remove)
    }
})