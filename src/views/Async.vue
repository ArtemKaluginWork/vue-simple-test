<template>
    <div class="home">
        <p v-if="loading">Loading....</p>
        <template v-if="!loading">
            <p>PLAYERS</p>
            <img class="head" v-for="item in list" :src="item.imgUrl">
        </template>
    </div>
</template>

<script>

export default {
  name: 'A',
  data() {
    return {
      loading: true,
      list: [],
    };
  },
  mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 3000);


    this.list = [
      {
        imgUrl: 'https://www.easports.com/fifa/ultimate-team/web-app/content/7D49A6B1-760B-4491-B10C-167FBC81D58A/2019/fut/items/images/mobile/portraits/237067.png',
      },
      {
        imgUrl: 'https://www.easports.com/fifa/ultimate-team/web-app/content/7D49A6B1-760B-4491-B10C-167FBC81D58A/2019/fut/items/images/mobile/portraits/190042.png',
      },
      {
        imgUrl: 'https://www.easports.com/fifa/ultimate-team/web-app/content/7D49A6B1-760B-4491-B10C-167FBC81D58A/2019/fut/items/images/mobile/portraits/37576.png',
      },
      {
        imgUrl: 'https://www.easports.com/fifa/ultimate-team/web-app/content/7D49A6B1-760B-4491-B10C-167FBC81D58A/2019/fut/items/images/mobile/portraits/237067.png',
      },
      {
        imgUrl: 'https://www.easports.com/fifa/ultimate-team/web-app/content/7D49A6B1-760B-4491-B10C-167FBC81D58A/2019/fut/items/images/mobile/portraits/190042.png',
      },
      {
        imgUrl: 'https://www.easports.com/fifa/ultimate-team/web-app/content/7D49A6B1-760B-4491-B10C-167FBC81D58A/2019/fut/items/images/mobile/portraits/242519.png',
      },
    ];
  },
};
</script>

<style scoped>
    .head {
        width: 160px;
        height: 160px;
    }
</style>
