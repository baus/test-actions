<template>
    <h1>YieldCount: {{ yieldCount }}</h1>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  name: 'YieldCount',
  props: {
    msg: String,
  },
  computed: {
    ...mapState({
      yieldCount: state => state.yieldCount,
    }),
  },
  methods: {
    ...mapActions(['getYieldCount']),
  },
  async mounted() {
    await this.getYieldCount();
    console.log('this.yieldCount', this.yieldCount);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
