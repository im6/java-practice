<template>
  <div>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data() {
    return {
      msg: 'Hello, Welcome!',
    };
  },
};
</script>

<style scoped>
h1 {
    font-weight: normal;
}
</style>
