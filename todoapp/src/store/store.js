import { auth, db } from 'boot/firebase';
const state = {
	userDetails: {},
	users: {}
}
const mutations = {
	setUserDetails(state, data) {
		state.userDetails = data
	},
	updateUser(state, data) {
		Object.assign(state.users[data.userId], data.userDetails)
	},
}
const actions = {
  registerUser({}, data) {
		auth.createUserWithEmailAndPassword(data.email, data.password)
			.then(response => {
				let userId = auth.currentUser.uid
				db.ref('users/' + userId).set({
					name: data.name,
					email: data.email,
					online: true
				})
			})
			.catch(error => {
				console.log(error.message)
			});
	},
	loginUser({}, data) {
		auth.signInWithEmailAndPassword(data.email, data.password)
			.then(response => {
				console.log(response)
			})
			.catch(error => {
				console.log(error.message)
			});		
	},
	handleAuthStateChanged({ commit, dispatch, state }) {
		auth.onAuthStateChanged(user => {
		  if (user) {
		    let userId = auth.currentUser.uid
		    db.ref('users/' + userId).once('value', snapshot => {
		    	let userDetails = snapshot.val()
		    	commit('setUserDetails', {
		    		name: userDetails.name,
		    		email: userDetails.email,
		    		userId: userId
		    	})
		    })
		    dispatch('firebaseUpdateUser', {
		    	userId: userId,
		    	updates: {
		    		online: true
		    	}
				})
				dispatch('firebaseGetUsers')
		    this.$router.push('/')
		  } else {
		  	dispatch('firebaseUpdateUser', {
		  		userId: state.userDetails.userId,
		  		updates: {
		  			online: false
		  		}
		  	})
		  	commit('setUserDetails', {})
		  	this.$router.replace('/auth')
		  }
		})
	},
	firebaseGetUsers({ commit }) {
		db.ref('users').on('child_added', snapshot => {
			let userDetails = snapshot.val()
			let userId = snapshot.key
			commit('addUser', {
				userId,
				userDetails
			})
		});
		db.ref('users').on('child_changed', snapshot => {
			let userDetails = snapshot.val()
			let userId = snapshot.key
			commit('updateUser', {
				userId,
				userDetails
			})
		});
	},
	firebaseUpdateUser({}, data) {
		if (data.userId) {
			db.ref('users/' + data.userId).update(data.updates)
		}
	},
	logoutUser() {
		auth.signOut()
	},
};
const getters = {};
export default{
	namespaced: true,
  state,
  mutations,
  actions,
  getters
};