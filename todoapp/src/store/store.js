import { auth, db } from 'boot/firebase';

const state = {};
const mutations = {};
const actions = {
  registerUser({}, data) {
		firebaseAuth.createUserWithEmailAndPassword(data.email, data.password)
			.then(response => {
				let userId = firebaseAuth.currentUser.uid
				firebaseDb.ref('users/' + userId).set({
					name: data.name,
					email: data.email,
					online: true
				})
			})
			.catch(error => {
				console.log(error.message)
			})
	},
	loginUser({}, data) {
		firebaseAuth.signInWithEmailAndPassword(data.email, data.password)
			.then(response => {
				console.log(response)
			})
			.catch(error => {
				console.log(error.message)
			})		
	} 
};
const getters = {};
export default{
  state,
  mutations,
  actions,
  getters
};