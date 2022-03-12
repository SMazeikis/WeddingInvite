<template>
  <div class="form">
      
    <router-link to="/">Return</router-link>

    <h1>Your details</h1>

    <input type="radio" id="going" value="Going" v-model="selected">
    <label for="going">going</label>
    <br>
    <input type="radio" id="not" value="Not Going" v-model="selected">
    <label for="not">Sad :(</label>
    <br>
    <span>selected: {{ selected }}</span>

    <p>Full Name* </p>
    <input v-model="name" placeholder="Full Name" />

    <p>Email </p>
    <input v-model="email" placeholder="Email" /> 

    <br>
    <br>
    <div>Extra guests</div>
    <select v-model="guests">
    <option>0</option>
    <option>1</option>
    <option>2</option>
    <option>3</option>
    </select>

    <br>
    <br>
    <span>Anything else we missed?</span>
    <p style="white-space: pre-line;">{{ message }}</p>
    <textarea v-model="message" placeholder="add it here!"></textarea>
    
    <br>
    <br>

    <button @click="submit()"> Submit!</button>
  </div>
</template>

<script>
export default {
  name: 'Form',
  props: {
    msg: String
  },
  data() {
      return {
      selected: "",
      name: "",
      email: "",
      guests: 0,
      message: "",
  }
  },
  methods: {
    submit() {
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
