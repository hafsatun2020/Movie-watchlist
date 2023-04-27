 export function getMovieHtml(movie){
    let movieHtml = ``
    return movieHtml =    ` <div class="movie">
                    <img src="${movie.Poster}">
                    <div class="movie-inner">
                        
                        
                        <div class="top">
                            <h2 class="title">${movie.Title}</h2>
                            <div class="rating">
                                <p>⭐</p>
                                <p>${movie.imdbRating}</p>
                            </div>
                        </div>
                        
                        
                        <div class="middle">
                            <p class="time">${movie.Runtime}</p>
                            <p class="genre">${movie.Genre}</p>
                            <div class="add-watchlist">
                                <p class="add-btn" data-add="${movie.imdbID}">+</p>
                                <p class="add-watch">Watchlist</p>
                            </div>
                        </div>
                        
                    <div class="bottom">
                         <p class="info">${movie.Plot}</p>
                    </div>
                    
                    </div>
                </div>`
        } 
        
        
    export    function watchListMovieHtml(movie){
        let movieHtml = ``
              movieHtml = ` <div class="movie">
                       <img src="${movie.Poster}">
                       <div class="movie-inner">
                           
                           
                           <div class="top">
                               <h2 class="title">${movie.Title}</h2>
                               <div class="rating">
                                   <p>⭐</p>
                                   <p>${movie.imdbRating}</p>
                               </div>
                           </div>
                           
                           
                           <div class="middle">
                               <p class="time">${movie.Runtime}</p>
                               <p class="genre">${movie.Genre}</p>
                               <div class="add-watchlist">
                                   <p class="add-btn" data-remove="${movie.imdbID}">-</p>
                                   <p class="add-watch">Watchlist</p>
                               </div>
                           </div>
                           
                       <div class="bottom">
                            <p class="info">${movie.Plot}</p>
                       </div>
                       
                       </div>
                   </div>`

                   return movieHtml
           } 