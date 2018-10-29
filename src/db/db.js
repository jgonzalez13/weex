import Firebase from 'firebase'


let config = {
  apiKey: "AIzaSyBMvckhtLGl_910oCbxltC3m-wP9j7KYo4",
  authDomain: "weex-bb2ea.firebaseapp.com",
  databaseURL: "https://weex-bb2ea.firebaseio.com",
  projectId: "weex-bb2ea",
  storageBucket: "weex-bb2ea.appspot.com",
  messagingSenderId: "387306263425"
}

let app = Firebase.initializeApp(config);

export default app