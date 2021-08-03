<template>
  <div class="q-px-lg q-pb-md">

<h3>Title of your post</h3>
<q-input standout="bg-teal text-white" v-model="text" label="Custom standout" />
<h6>Content</h6>
    <q-editor v-model="editor" min-height="5rem" />

<q-btn color="white" text-color="black" label="Save" @click="insertPost"/>
{{this.text}}
<h4>HTML Preview:</h4>
    <q-card flat bordered>
      <q-card-section>
        <pre style="white-space: pre-line">{{ editor }}</pre>
      </q-card-section>
    </q-card>

<h4>Hardcoded Preview:</h4>
    <q-card flat bordered>
      <q-card-section v-html="editor" />
    </q-card>
  </div>
</template>

<script>
import { ref } from 'vue'
import localStorageDriver from '../middleware/local-storage/index'
import PostViewer from '../components/PostViewer.vue'

export default {
    name: 'CreatePost',
    components: {
        PostViewer
    },
    data() {
        return {
            text: '',
            title: '',
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
        insertPost() {
            let newPost = {
                id: Math.floor(Math.random() * (500 - 30 + 1)) + 30,
                title: "working",
                content: this.editor
                }
                localStorageDriver.insert('posts', newPost)
            }
        }
    }

</script>

<style>

</style>