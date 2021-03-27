<template>
  <div class="toast">{{message}}</div>
</template>

<script>
export default {
  props: {
    message: {
      type: String
    }
  },
  name: 'Toast'
}
</script>

<style lang="scss" scoped>
.toast {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  font-size: 16px;
  padding: 10px;
  border-radius: 5px;
  background: rgba($color: #000000, $alpha: .3);
}
</style>
