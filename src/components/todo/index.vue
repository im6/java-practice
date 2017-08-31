
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ul>
        <li v-for="todo in todos">
          <div>
            {{ todo.text }}
          </div>
          <button v-on:click="sayHello(todo)">
            click me
          </button>
        </li>
      </ul>
  </div>
</template>

<script>
/* eslint func-names: 0, no-console: 0, object-shorthand: 0 */
export default {
  name: 'todo',
  data() {
    return {
      msg: 'This is a todo list!',
      todos: [
        { text: 'running' },
        { text: 'eating' },
        { text: 'sleeping' },
      ],
    };
  },
  methods: {
    sayHello: function (c) {
      this.msg = c.text;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 6px 10px;
}

li div{
  display: inline-block;
  width: 100px;
}

a {
  color: #42b983;
}

</style>
