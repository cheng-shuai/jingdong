<template>
  <div class="home">
    <static-part />
    <Nearby />
  </div>
  <Docker />
</template>

<script>
import Docker from './components/Docker.vue'
import Nearby from './components/Nearby.vue'
import StaticPart from './components/StaticPart.vue'
export default {
  name: 'Home',
  components: {
    StaticPart,
    Nearby,
    Docker
  }
}
</script>
<style lang="scss" scoped>
.home {
  position: absolute;
  overflow-y: auto;
  overflow-x: hidden;
  top: 0;
  left: 0;
  right: 0;
  bottom: 50px;
  margin: 0 18px;
}
</style>
