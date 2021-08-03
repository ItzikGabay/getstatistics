<template>
        <q-timeline-entry
        :title="data.title"
        subtitle="February 22, 1986"
        style="width: 700px;"
      >
        <div>

          {{data.content[0]}}
        </div>
            <q-badge rounded color="red" label="ins" class="socialBadge" />
            <q-badge rounded color="primary" label="fb" class="socialBadge"/>
            <q-badge rounded color="orange" label="rav-meser" class="socialBadge" />


    <div class="q-gutter-sm">
      <q-chip class="publisherChip">
        <q-avatar>
          <img src="https://cdn.quasar.dev/img/boy-avatar.png">
        </q-avatar>
        Published By Itzik
      </q-chip>
    </div>  
      </q-timeline-entry>
</template>

<script>
export default {
    name: 'PostViewer',
    props: ['data'],
    data() {
        return {
        }
    },


}
</script>

<style scoped> 
.socialBadge {
    margin-right: 10px
}

.publisherChip {
    margin-top: 15px;
}

</style>