<template>
<div id="movie-filter"> 
            <h2>Filter Results</h2>
            <div class="filter-group">
            <div>
                <check-filter v-for="genre in genres" v-bind:title="genre" v-on:check-filter="checkFilter"></check-filter>
            </div>
        </div>
</template>

<script>
import genres from '../util/genres' 
export default {
    data: function () {
        return {
            genres
        }   
    },
    methods: {
        checkFilter (category, title, checked) {
            this.$emit('check-filter', category, title, checked)
        }
    },
    components: {
        'check-filter': {
            data: function () {
                return {
                    checked: false
                }
            },
            props: [ 'title' ],
            template: 
                `<div v-bind:class="{ 'check-filter': true, active: checked }" v-on:click="checkFilter">
                    <span class="checkbox"></span>
                    <span class="check-filter-title">{{ title }}</span>
                </div>`,
            methods: {
                checkFilter () {
                    this.checked = !this.checked
                    this.$emit('check-filter', 'genre', this.title, this.checked);
                }
            }
        }
    }
}
</script>

