<template>
  <grid />
</template>

<script>
import Grid from "../components/Grid";

export default {
  components: {
    Grid
  },
  mounted() {
    this.$store.dispatch("reddit/loadPosts", {});
  }
};
</script>
