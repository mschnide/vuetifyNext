<script setup lang="ts">
import markdown from "vue3-markdown-it";
import markdownItAttrs from "markdown-it-attrs";

const plugins = [
  {
    plugin: markdownItAttrs,
  },
];

const content: string = `# test
## test 2
\`\`\`json
{
  test: {
    "test": 1,
    "test2": "blabla",
    "test3": null,
    "test4": [ 1, 2, 3, 4, 5 ]
  }
}
\`\`\`
content
<br/><br/>
<pre>pre pri pro pru pra</pre>

[test](https://www.test.org){target=_blank}`;
</script>

<template>
  <markdown breaks html highlight :source="content" :plugins="plugins">
  </markdown>
</template>

<style type="scss">
@import "highlight.js/styles/base16/github.css";
</style>
