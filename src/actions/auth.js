import {firebase, googleAuthProvider} from '../firebase/firebase'


export const Login = (uid)=>({
    type: 'LOGIN',
    uid
});
export const startLogin = ()=>{
    return ()=>{
        return firebase.auth().signInWithPopup(googleAuthProvider);
    }
};

export const Logout = ()=>({
    type : 'LOGOUT' 
})
 export const StartLogout = ()=>{
     return ()=>{
         return firebase.auth().signOut();
     }
 };