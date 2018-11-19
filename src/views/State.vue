  <template>
  <div class="home">
    <h1>STATE</h1>
    <p>{{count}}</p>
    <button @click="count = count + 1">+</button>
    <button @click="count = count - 1">-</button>
  </div>
</template>

<script>

export default {
  name: 'home',
  data() {
    return {
      count: 0,
    };
  },
};
</script>
