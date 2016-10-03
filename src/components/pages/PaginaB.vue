<template lang="haml">
  <div id="app">
    <h1>{{teste}}</h1>
    <a href="/a">teste</a>
    <comp></comp>
  </div>
</template>

<script type="Typescript">
import Comp from './PaginaA';
export default {
  replace: false,
  data() {
    return {
      teste: 'B'
    };
  },
  computed: {},
  ready() {},
  attached() {},
  methods: {},
  components: {
    Comp
  }
};
</script>

<style lang="sass">
</style>
