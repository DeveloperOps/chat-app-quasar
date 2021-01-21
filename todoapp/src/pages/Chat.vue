<template>
  <q-page class="flex column">
  	<div class="q-pa-md column col justify-end">
  		<q-chat-message
  			v-for="message in messages"
  			:key="message.text"
  		  :text="[message.text]"
  		  :sent="message.from == 'me' ? true : false"
  		/>
  	</div>
  	<q-footer elevated>
  	  <q-toolbar>
  	  	<q-form 
  	  		@submit="sendMessage"
  	  		class="full-width">
	  	    <q-input
	  	    	v-model="newMessage"
	  	    	bg-color="white"
	  	    	outlined
	  	    	rounded
	  	    	label="Message"
	  	    	dense>
	  	      <template v-slot:after>
	  	        <q-btn
	  	        	round
	  	        	dense
	  	        	flat
	  	        	type="submit"
								@click="sendMessage"
	  	        	color="white"
	  	        	icon="send" />
	  	      </template>
	  	    </q-input>
  	  	</q-form>
  	  </q-toolbar>
  	</q-footer>
  </q-page>
</template>
<script>
	import { mapState, mapActions } from 'vuex'
	export default {
	  data() {
	  	return {
	  		newMessage: ''
	  	}
	  },
	  computed: {
	  	...mapState('store', ['messages', 'userDetails'])
	  },
	  methods: {
	  	...mapActions('store', ['firebaseGetMessages', 'firebaseStopGettingMessages', 'firebaseSendMessage']),
	  	sendMessage() {
				console.log("called")
			this.firebaseSendMessage({
	  			message: {
		  			text: this.newMessage,
		  			from: 'me'
	  			},
	  			otherUserId: this.$route.params.otherUserId
	  		})
	  	}
	  },
	  mounted() {
	  	this.firebaseGetMessages(this.$route.params.otherUserId)
	  },
	  destroyed() {
	  	this.firebaseStopGettingMessages()
	  }
	}
</script>
<style>
</style>
