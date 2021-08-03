<template>
        <q-timeline-entry
        title="Event Title"
        subtitle="February 22, 1986"
        style="width: 700px;"
      >
        <div>
            {{this.test}}
          "How to win in a world of blah blah"
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