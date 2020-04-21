import * as firebase from 'firebase'

const settings = { timestampsInSnapshots: true }
var config = {
  apiKey: 'AIzaSyBIEMYxKHl1Ht3yetmk4n9Fq4IazQDGq7I',
  authDomain: 'qrcade.firebaseapp.com',
  databaseURL: 'https://qrcade.firebaseio.com',
  projectId: 'qrcade',
  storageBucket: 'qrcade.appspot.com',
  messagingSenderId: '416126815522',
  appId: '1:416126815522:web:64082ef59259ce1ba1a97b',
  measurementId: 'G-CPFG21HV4T'
}

firebase.initializeApp(config)

firebase.firestore().settings(settings)

export default firebase
