import client from './utils';


const getMovies = () => {
    return client.get('/user?ID=12345')
        .then(function (response) {
            // handle success
            console.log(response);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
}


const movies = { getMovies };

export default movies;

