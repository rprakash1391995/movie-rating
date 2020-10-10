
document.querySelector('#movieForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const movie = document.querySelector('#movieName').value;
    document.querySelector('#scroll').innerHTML='';
    const markup1 = `
    <h3 class="mt-3 text-white text-warning " style="padding: 10px;"><strong>[Scroll Down Get Search Results]</strong></h3>
                      <img src="./image/down.png" class="arrow__down" alt="">
    `;
    document.querySelector('#scroll').insertAdjacentHTML('beforeend',markup1);

    try {
       fetch(`https://github.com/Rob--W/cors-anywhere/http://www.omdbapi.com/?s=${movie}&apikey=47a0db19`)
            .then(result =>{
                return result.json();
            })
            .then(data =>{
                console.log(data);
                document.querySelector('#movieName').value='';

                document.querySelector('#movieResults').innerHTML='';
                document.querySelector('#resNa').innerHTML='';

                if(data.Response === 'False'){
                    
                    const mark = `
                    <div class="col my-3">
                    <p class="display-4 text-light">No result found</p>
                    <br>
                    <img src="./image/sorry.jpg" width="300px" height="300px" alt="">
                   </div>
                    `;
                    document.querySelector('#resNa').insertAdjacentHTML('beforeend',mark);

                }else{

                    data.Search.forEach(res => {
                        const markup = `
                        <div class="col-xs-12  col-md-6 col-lg-4  mx-auto d-flex align-items-center justify-content-center my-3">
                        <div class="card bg-dark" style="width: 18rem;">
                          <img src ="${res.Poster}" class="card-img-top" width = "220" height="400" alt="...">
                          <div class="card-body">
                            <h5 class="card-title text-white">${res.Title}</h5>
                            <h5 class="card-text text-white">${res.Year}</h5>
                            <h5 class="card-text text-white">${res.imdbID}</h5>
                            <h5 class="card-text text-white">${res.Type}</h5>
    
                            
                          </div>
                        </div>
                       </div>
                        `;
                        document.querySelector('#movieResults').insertAdjacentHTML('beforeend',markup);
                        
                    })
                }
            })


        
    } catch (error) {
        console.log(error);
    }

})






