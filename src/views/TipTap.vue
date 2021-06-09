<template>
  <div class="container-editor">
    <div class="content" v-if="mode == 'html'" @click="mode = 'text'">
      {{content}}
    </div>
    <div class="content" v-else @click="mode = 'html'" v-html="content"></div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        mode: 'text',
        content: '',
      }
    },
  }
</script>

<style lang="scss" scoped>
  .container-editor {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: cetner;
    justify-content: center;
    flex-flow: column;
    & > div {
      width: 100%;
      height: 50%;
      box-sizing: border-box;
    }
    & .content {
      border: 1px solid #ccc;
      padding: 15px;
    }
  }
</style>