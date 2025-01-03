<template>
  <div class="editor" ref="container"></div>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { monaco } from './customMonaco'

let editor: monaco.editor.IStandaloneCodeEditor

const container = ref<HTMLDivElement | null>(null)

onMounted(() => {
  editor = monaco.editor.create(container.value, {
    value: ['function x() {', '\tconsole.log("Hello world!");', '}'].join('\n'),
    language: 'typescript',
  })

  // editor = monaco.editor.create(container.value, {
  //   value: '{ "key": "value", "number": 123 }',
  //   language: 'json',
  // })

  editor.onDidChangeModelContent(() => {
    console.log(editor.getValue())
  })
})
</script>
<style>
.editor {
  width: 100vw;
  height: 100vh;
}
</style>
