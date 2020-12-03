<template>
  <div>
    <form id="app"
      @submit="login"
      action="/login"
      method="POST">
      <p>
        <label for="username">Username </label>
        <input type="text" id="username" required>
      </p>
      <p>
        <label for="password">Password </label>
        <input type="password" id="password" required>
      </p>
      <input type="submit" value="Submit">
    </form>
  </div>
</template>

<script>
export default {
  name: 'LoginUser',
  methods: {
    login: function (e) {
      e.preventDefault();

      this.$router.push({
          path: '/comics'
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
