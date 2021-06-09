<template>
  <div class="container-editor">
    <div class="editor">
      <editor @change="getHTML" ref="editor" initialEditType="wysiwyg" previewStyle="vertical" height="100%"/>
    </div>
    <!-- <viewer :initialValue="content"/> -->
    <div class="content" v-if="mode == 'html'" @click="mode = 'text'">
      {{content}}
    </div>
    <div class="content tui-editor-contents" v-else @click="mode = 'html'" v-html="content"></div>
  </div>
</template>

<script>
  import 'codemirror/lib/codemirror.css';
  import '@toast-ui/editor/dist/toastui-editor.css';
  // import '@toast-ui/editor/dist/toastui-editor-viewer.css';

  import { Editor } from '@toast-ui/vue-editor';

  import { Viewer } from '@toast-ui/vue-editor';

  export default {
    components: {
      Editor, Viewer,
    },
    data () {
      return {
        mode: 'text',
        content: '# This is Viewer.\n Hello World.',
      }
    },
    methods: {
      getHTML() {
        this.content = this.$refs.editor.invoke('getHtml')
      }
    }
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