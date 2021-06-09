<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
  html, body {
    margin: 0;
    padding: 0;
    text-align: center;
  }

  #app {
    display: inline-block;
    text-align: left;
    width: 100vw;
    height: 100vh;
    padding: 15px;
    box-sizing: border-box;
  }

  .quill-editor {
    margin-bottom: 0;
    display: flex;
    flex-flow: column;
  }

  .ql-container {
    flex: 1;
  }
</style>
