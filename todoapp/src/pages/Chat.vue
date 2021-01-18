<template>
  <q-page>

    <div class="q-pa-md column col justify-end">
       <div style="width: 100%; max-width: 400px">
      <q-chat-message
        name="me"
        :text="['hey, how are you?']"
        sent
      />
      <q-chat-message
        name="Jane"
        :text="['doing fine, how r you?']"
      />
    </div>
    </div>
    
      <q-footer elevated>
        <q-toolbar>
          <q-input bg-color="white" class="full-width" rounded v-model="message" label="Message" dense>
        <template v-slot:after>
          <q-btn round dense flat icon="send" />
        </template>
      </q-input>
        </q-toolbar>
      </q-footer>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      message: ''
    }
  }
};
</script>
