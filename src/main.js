import Vue from 'vue';
import './style.scss';
import genres from './util/genres'

new Vue({
    el: '#app',
    components: {
        'movie-list': {
            template: 
                `<div id="movie-list"> 
                    <div v-for="movie in movies" class="movie">{{ movie.title }}</div>
                </div>`,
            data: function () {
                return {
                    movies: [
                        { title: 'Pulp Fiction'},
                        { title: 'Austin Powers'},
                        { title: 'Requiem for a dream'}
                    ]
                }
            }
        },
        'movie-filter': {
            data() {
                return {
                    genres
                }
            },
            template: 
                `<div id="movie-filter"> 
                    <h2>Filter Results</h2>
                    <div>
                        <check-filter v-for="genre in genres" v-bind:title="genre"></check-filter>
                    </div>
                </div>`,
            components: {
                'check-filter': {
                    data: function () {
                        return {
                            checked: false
                        }
                    },
                    props: [ 'title' ],
                    template: 
                    `<div class="check-filter" v-on:click="checked = !checked">
                        <span class="checkbox"></span>
                        <span class="check-filter-title">{{ title }}</span>
                    </div>`
                }
            }    
        }
    },
})