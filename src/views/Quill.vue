<template>
  <div class="container-editor">
    <quill-editor
      class="editor"
      ref="myQuillEditor"
      v-model="content"
      :options="editorOption"
      @blur="onEditorBlur($event)"
      @focus="onEditorFocus($event)"
      @ready="onEditorReady($event)"
    />
    <div class="content" v-if="mode == 'html'" @click="mode = 'text'">
      {{content}}
    </div>
    <div class="content ql-container ql-editor" style="font-family: Helvetica, Arial, sans-serif;" v-else @click="mode = 'html'" v-html="content"></div>
  </div>
</template>

<script>
  import 'quill/dist/quill.core.css'
  import 'quill/dist/quill.snow.css'
  import 'quill/dist/quill.bubble.css'

  import { quillEditor } from 'vue-quill-editor'

  export default {
    components: {
      quillEditor
    },
    data () {
      return {
        mode: 'text',
        content: '<h2>I am Example</h2>',
        editorOption: {
          // Some Quill options...
        }
      }
    },
    methods: {
      onEditorBlur(quill) {
        console.log('editor blur!', quill)
      },
      onEditorFocus(quill) {
        console.log('editor focus!', quill)
      },
      onEditorReady(quill) {
        console.log('editor ready!', quill)
      },
      onEditorChange({ quill, html, text }) {
        console.log('editor change!', quill, html, text)
        this.content = html
      }
    },
    computed: {
      editor() {
        return this.$refs.myQuillEditor.quill
      }
    },
    mounted() {
      console.log('this is current quill instance object', this.editor)
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