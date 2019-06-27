<template>
  <div class="grid">
    <div class="grid__item" v-for="(p, i) in posts" :key="i">
      <img v-if="p.post_hint === 'image'" class="grid__item-image" :src="p.thumbnail">
      <img v-if="p.post_hint !== 'image'" class="grid__item-image" src="/placeholder.png">

      <div class="grid__item-details">
        <div class="grid__item-title">{{cropText(p.title, 120)}}</div>
        <div class="grid__item-permalink">Subreddit: r/{{p.subreddit}}</div>
        <div class="grid__item-actions">
          <a :href="p.url">Read post</a>
          <a :href="p.url">Read post</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Grid",
  computed: {
    posts() {
      return this.$store.state.posts.postList.map(p => p.data);
    }
  },
  methods: {
    cropText(text, maxLength) {
      return text.length > maxLength
        ? text.substring(0, maxLength) + "..."
        : text;
    }
  }
};
</script>

<style scoped>
.grid {
  display: flex;
  margin: 0 auto;
  max-width: 1080px;
  flex-wrap: wrap;
  justify-content: center;
  font-size: 13px;
}

.grid__item {
  color: #222;
  max-width: 400px;
  width: 100%;
  margin: 10px;
  background-color: #efefef;
  border-radius: 3px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.15), 0 3px 6px rgba(0, 0, 0, 0.20);
  display: flex;
}

.grid__item-details {
  width: 100%;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
}

.grid__item-details > * {
  margin-top: 3px;
}

.grid__item-image {
  border-radius: 3px 0 0 3px;
  width: 140px;
  box-shadow: 0 0px 6px rgba(0, 0, 0, 0.15);
}

.grid__item-title {
  margin: 0 auto;
  margin-top: 10px;
  font-size: 14px;
  font-weight: bold;
}

.grid__item-actions {
  padding: 10px 0;
  display: flex;
  margin-left: auto;
  margin-top: auto;

}

.grid__item-actions a {
  width: 50%;
  margin: 0 0 0 10px;
}

</style>
