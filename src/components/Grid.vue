<template>
  <div class="grid">
    <div class="grid__item" v-for="(p, i) in posts" :key="i">
      <img v-if="p.post_hint === 'image'" class="grid__item-image" :src="p.thumbnail">
      <img v-if="p.post_hint !== 'image'" class="grid__item-image" src="/placeholder.png">

      <div class="grid__item-details">
        <div class="grid__item-title">{{cropText(p.title, 100)}}</div>
        <div class="grid__item-meta">
          <div class="grid__item-author">{{`👤 u/${p.author_fullname}`}}</div>
          <div class="grid__item-date">{{`🗓️ ${formatDate(p.created)}`}}</div>
          <div class="grid__item-subreddit">{{`📣 r/${p.subreddit}`}}</div>
          <div class="grid__item-subreddit">{{`⬆ r/${p.score}`}}</div>
        </div>
        <div class="grid__item-footer">
          <a @onClick="toggleFavourite(p.id)">💙</a>
          <a @onClick="toggleFavourite(p.id)">❤️</a>
          <a target="_blank" :href="`http://www.reddit.com${p.permalink}`">Permalink</a>
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
      return this.$store.state.reddit.postList.map(p => p.data);
    }
  },
  methods: {
    cropText(text, maxLength) {
      return text.length > maxLength
        ? text.substring(0, maxLength) + "..."
        : text;
    },
    formatDate(dateInMs) {
      const d = new Date(new Date() - dateInMs);
      return `
        ${d.getFullYear()}${
        d.getMonth() > 9 ? d.getMonth() + 1 : "0" + d.getMonth()
      }${d.getDate() > 9 ? d.getDate() : "0" + d.getDate()} 
        ${d.getHours() > 9 ? d.getHours() : "0" + d.getHours()}:${
        d.getMinutes() > 9 ? d.getMinutes() : "0" + d.getMinutes()
      }
      `;
    },
    toggleFavourite(postId) {
      console.log(postId);
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
  font-size: 12px;
}

.grid__item {
  color: #222;
  max-width: 400px;
  width: 100%;
  margin: 10px;
  background-color: #efefef;
  border-radius: 3px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.15), 0 3px 6px rgba(0, 0, 0, 0.2);
  display: flex;
}

.grid__item-details {
  width: 100%;
  padding: 0 10px;
  display: flex;
  flex-direction: column;
}

.grid__item-meta {
  margin-top: auto;
  display: flex;
  flex-wrap: wrap;
}

.grid__item-meta > * {
  width: 50%;
}

.grid__item-image {
  border-radius: 3px 0 0 3px;
  width: 120px;
  box-shadow: 0 0px 6px rgba(0, 0, 0, 0.15);
}

.grid__item-title {
  margin: 0 auto;
  margin-top: 10px;
  font-size: 13px;
  font-weight: bold;
}

.grid__item-footer {
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
