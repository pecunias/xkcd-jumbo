<template>
  <section class="container">
    <section class="favorites">
      <h1>Your favorites</h1>
      <section v-if="!favorites.length">
        <p>Add comics by double clicking!</p>
        
      </section>
      <section v-if="favorites.length">
        <ul>
          <li v-for="favorite in favorites" :key="favorite.id">
            <img :src="favorite.path">
          </li>
        </ul>
      </section>
    </section>
    <section class="all-comics">
      <h1>All comics</h1>
      <ul>
        <li v-for="comic in comics" :key="comic.id">
          <img :src="comic.path" @dblclick="addToFavorites(comic)">
          <p>
            <b-icon icon="heart-fill" style="color: red" @click="removeFromFavorites(comic)" v-if="isComicInFavorites(comic)"></b-icon>
            <b-icon icon="heart" style="color: red" v-else></b-icon>
          </p>
        </li>
      </ul>
    </section>
  </section>
</template>

<script>
export default {
  name: 'ContainerComics',
  data: function() {
    return {
      comics: [{id: '1', path: '/comics/1.png'}, {id: '2', path: '/comics/2.png'}, {id: '3', path: '/comics/3.png'}, {id: '4', path: '/comics/4.png'}, {id: '5', path: '/comics/5.png'}],
      favorites: []
    }
  },
  methods: {
    addToFavorites: function(comic) {
      if (!this.isComicInFavorites(comic)) {
        this.favorites.push(comic)
      }
    },
    removeFromFavorites: function(comic) {
      if (this.isComicInFavorites(comic)) {
        const index = this.favorites.indexOf(comic);
        this.favorites.splice(index, 1);
      }
    },
    isComicInFavorites: function(comic) {
      return this.favorites.includes(comic);
    }
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-family: sans-serif;
}

ul {
  list-style: none;
}
</style>