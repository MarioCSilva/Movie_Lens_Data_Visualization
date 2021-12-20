export function loadData() {
    let movies = {}
    d3.csv("../dataset/ml-latest-small/movies.csv", function(data, error) {
        for (let i=0; i<data.length;i++) {
            console.log(data[i].genres)
            genres = data[i].genres.split('|')
            console.log(genres)
            movies[movieId] = {'title': data[i].title, 'genres': genres}
            break
        }
    })

    return movies
}