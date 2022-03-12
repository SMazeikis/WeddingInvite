<template>
  <div class="hello">
    <div class="top">
      <h1> Salvijus & Cristina </h1>
      <h2>Please join us in Ensenada, Baja California</h2>

      
      <router-link to="/form">RSVP</router-link>
    </div>
    
  <div class="information">
    <h1> Time & Location </h1>
    <h2> 15 Jul, 17:00
      San Cosme Vinedos, Carretera transpeninsular Km. 29.5, 22790 B.C., Mexico
    </h2>

    <router-link to="/form">RSVP</router-link>

  </div>

  <div class="map">

  </div>
  </div>

</template>

<script>
export default {
  name: 'Home',
  props: {
    msg: String
  },
  methods: {
    onClick() {
      console.log('clicked')
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
