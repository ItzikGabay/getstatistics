<template>
  <div class="q-px-lg q-pb-md">
    <q-editor v-model="editor" min-height="5rem" />

<q-btn color="white" text-color="black" label="Save" @click="test"/>
<br>
HTML Preview:
    <q-card flat bordered>
      <q-card-section>
        <pre style="white-space: pre-line">{{ editor }}</pre>
      </q-card-section>
    </q-card>

Hardcoded Preview:
    <q-card flat bordered>
      <q-card-section v-html="editor" />
    </q-card>
  </div>
</template>

<script>
import { ref } from 'vue'
import PostViewer from '../components/PostViewer.vue'

export default {
    name: 'CreatePost',
    components: {
        PostViewer
    },
    data() {
        return {
            editor: '',
            userPost: {
                title: 'This is title of post',
                content: {
                    0: 'This is a test for a post. It should to be a lot long...'
                }
            }
        }
    },
    methods: {
        test() {
            alert(this.editor)
        }
    },
}
</script>

<style>

</style>