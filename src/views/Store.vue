<template>
  <div class="about">
    <h1>STORE</h1>
    <p>{{count}}</p>
    <button @click="changeCount(1)">+</button>
    <button @click="changeCount(-1)">-</button>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex';
import { ACT_CHANGE_COUNT } from '../store';

export default {
  name: 'about',
  data() {
    return {
    };
  },
  computed: {
    ...mapState({
      count: state => state.count,
    }),
  },
  methods: {
    ...mapActions({
      changeCount: ACT_CHANGE_COUNT,
    }),
  },

};
</script>

