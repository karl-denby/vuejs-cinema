<template>
    <div id="movie-list"> 
        <movie-item v-bind:movie=movie.movie v-for="movie in filteredMovies" class="movie"></movie-item>
    </div>
</template>

<script>
    import genres from '../util/genres'
    import MovieItem from './MovieItem.vue'

    export default { 
        props: [ 'movies','genre', 'time'],
        methods: { 
            moviePassesGenreFilter(movie) {
                if (!this.genre.length) {
                    return true
                } else {
                    let movieGenres = movie.movie.Genre.split(", ")
                    let matched = true
                    this.genre.forEach(genre => {
                        if (movieGenres.indexOf(genre) === -1) {
                            matched = false
                        }
                    })
                    return matched
                }
            }
        },
        computed: {
            filteredMovies() {
                    return this.movies.filter(this.moviePassesGenreFilter)
            } 
        },
        components: {
            MovieItem
        }
    }
</script>