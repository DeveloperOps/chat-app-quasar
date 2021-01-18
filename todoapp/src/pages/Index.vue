<template>
  <q-page>
   
    <q-list bordered>
      <q-item v-for="user in users" :key="user.id" class="q-my-sm" clickable v-ripple>
        <q-item-section avatar>
          <q-avatar color="primary" text-color="white">
            {{ user.letter }}
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label>{{ user.name }}</q-item-label>
        </q-item-section>

        <q-item-section side>
          <q-icon name="chat_bubble" :color="user.online ? 'blue' : 'black'" />
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script>
const users = [{
  id: 1,
  name: 'Ruddy Jedrzej',
  online: false
}, {
  id: 2,
  name: 'Mallorie Alessandrini',
  online: true
},{
  id: 3,
  name: 'Elisabetta Wicklen',
  online: false
},{
  id: 4,
  name: 'Seka Fawdrey',
  online: true
}];

export default {
    data () {
    return {
      users,
    }
  }
};
</script>
