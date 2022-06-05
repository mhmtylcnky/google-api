<template>
  <div class="container justify-content-center">
    <div class="row justify-content-center">
      <div class="col col-md-6">
        <form class="mb-3">
          <div class="form-group">
            <label>Mini Google Searcher ! </label>
            <input
              v-model="searchWord"
              class="form-control"
              placeholder="Search!"
            />
          </div>
          <button @click.prevent="search" type="submit" class="btn btn-primary">
            Ara
          </button>
        </form>
        <ul class="list-group">
          <h3>{{title}}</h3>
          <a 
            v-for="items in result"
            :key="items"
            :href="link"
            @click="link = items.link" 
            class="
                  animate__animated 
                  animate__backInDown
                  list-group-item mt-2
                  list-group-item-action 
                  list-group-item-info">{{ items.title }}
            </a>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "App",
  data() {
    return {
      searchWord: "",
      result: null,
      link: '#',
      title:'',
     
    };
  },
  methods: {
    search() {
      axios
        .get(
          "https://google-search3.p.rapidapi.com/api/v1/search/q=" +
            this.searchWord
        )
        .then((response) => {
          this.result = response.data.results;
          console.log(this.result);
        })
        .catch((e) => console.log(e));
    },
  },
     watch:{
      result(){
        this.title='Sonuçlar'
      }
    }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  
}
ul {
  list-style: none;
}
</style>
