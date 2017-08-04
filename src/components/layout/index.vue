<template>
  <div class="Layout">
    <ul>
      <li><router-link to="/">/</router-link></li>
      <li><router-link to="/foo">/foo</router-link></li>
      <li><router-link to="/bar">/bar</router-link></li>
      <router-link tag="li" to="/bar" :event="['mousedown', 'touchstart']">
        <a>/bar</a>
      </router-link>
    </ul>
     <router-view class="view"></router-view>
  </div>
</template>

<script>
export default {
  name: 'Layout',
  data() {
    return {
      msg: 'this is layout',
    };
  },
};
</script>

<style scoped>

</style>
