  <template>
  <div class="home">
    <h1>STATE</h1>
    <p>{{count}}</p>
    <button id="increment" @click="count = count + 1">+</button>
    <button id="decrement" @click="count = count - 1">-</button>
    <props msg="Test"></props>
  </div>
</template>

<script>
import Props from '../components/Props.vue';

export default {
  name: 'home',
  data() {
    return {
      count: 0,
    };
  },
  components: { Props },
};
</script>
