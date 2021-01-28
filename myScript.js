
//http://www.omdbapi.com/?i=tt3896198&apikey=c6bcf5ce
//http://www.omdbapi.com/?i=tt3896198&apikey=c6bcf5ce

const filmInput = document.getElementById('filmInput');
const filmButton = document.getElementById('submitButton');

const filmImage = document.getElementById('poster-result');
const filmtitle = document.getElementById('titleResult');
const filmDescription = document.getElementById('filmdescription');

const filmInfo = {
}

//Input for the film 

filmButton.addEventListener('click',searchFilm);

function searchFilm(){
    let input = filmInput.value;
    getFilm(input);

}
//end of film input

function getFilm(pFilmName){
    const searchTitle = titleSearch(pFilmName);    

    const url  ="http://www.omdbapi.com/?t="+searchTitle+"&apikey=c6bcf5ce";
    //const url = "https://aws.random.cat/meow"
    
    axios.get(url)
    .then(function(response){
        filmInfo['poster'] = response.data.Poster;
        filmInfo['title'] =response.data.Title;
        filmInfo['decrp'] = response.data.Plot;
    })
    
    .catch(function(error){
        
        console.log(error);
    })
    .then(function(){
        showFilm();
    });
}

//getFilm('the wailing');

function showFilm(){
    filmImage.innerHTML = `<img src="${filmInfo.poster}"/>`
    filmtitle.innerHTML = filmInfo.title;
    filmDescription.innerHTML = filmInfo.decrp;
}

function showError(){
    filmtitle.innerHTML = "Not found";
}


function titleSearch(pFilmTitle){
    let result;
    result = pFilmTitle.split(' ').join('+');

    return result;
}

