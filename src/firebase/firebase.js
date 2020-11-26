import firebase from 'firebase/app';
import 'firebase/database'
import 'firebase/auth'
import  'firebase/analytics'

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID,
  };

  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  const dataBase = firebase.database()
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

  export {firebase ,googleAuthProvider, dataBase as default };

//   dataBase.ref('expense').push({
//     note: 'me myself and i',
//     createdAt: 'the great gatsby ',
//     amount: 1000,
//     description:''
//    })

// dataBase.ref('expense')
// .on('value', (snapshot)=>{
//     const expense = []
//     snapshot.forEach((childSnapshot)=>{
//       expense.push({
//           id: childSnapshot.key,
//           ...childSnapshot.val()
//       })
//     })

//     console.log(expense)
// })

// //child_removed
// dataBase.ref().on('child_removed', (snapshot)=>{
//     console.log(snapshot.key, snapshot.val())
// })

// //child_changed
// dataBase.ref().on('child_changed', (snapshot)=>{
//     console.log(snapshot.key, snapshot.val())
// })  

// //child_added
// dataBase.ref().on('child_added', (snapshot)=>{
//     console.log(snapshot.key, snapshot.val())
// })

// dataBase.ref().once('value')
// .then((snapshot)=>{
//     const expense = []
//     snapshot.forEach((childSnapshot)=>{
//       expense.push({
//           id: childSnapshot.key,
//           ...childSnapshot.val()
//       })
//     })

//     console.log(expense)
// })


//   dataBase.ref().on('value', (snapshot)=>{
//       console.log(snapshot.val());
//   }, (e)=>{
//       console.log('error msg', e)
//   })

// dataBase.ref().once('value')
// .then((snapshot)=>{
//     const val = snapshot.val();
//     console.log(val);
// })
// .catch((e)=>{
//     console.log('error from data fetch', e)
// });

//   dataBase.ref().set({
//       name: 'ezema emmanuel',
//       age: 23,
//       isSingle: false,
//       stressLevel: 6,
//       job:{
//           title: 'software developer',
//           company : 'google'
//       },
//       location: {
//           city: 'lagos',
//           counrtry: 'nigeria'
//       }

//   }).then(()=>{
//       console.log('data is saved')
//   }).catch((e)=>{
//       console.log('this failed',e)
//   });

// dataBase.ref().update({
//     'location/city': 'seattle',
//     isSingle: null ,
//     destination : 'turkey then heaven',
//     stressLevel: 9,
//     'job/company':'amazon'
// })

  