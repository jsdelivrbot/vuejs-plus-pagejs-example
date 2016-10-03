<template lang="html">
  <div id="app">
    <h1>{{teste}}</h1>
    <a href="/b">teste</a>
    <input type="button" name="name">
  </div>
</template>

<script>
import page from 'page';

export default {
  replace: false,
  data() {
    return {
      teste: 'A'
    };
  },
  computed: {},
  ready() {
    page('')
    page.start();
  },
  attached() {},
  methods: {},
  components: {}
};
</script>

<style lang="css">
</style>
