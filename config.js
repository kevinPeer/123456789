import firebase from 'firebase';
require('@firebase/firestore')

const firebaseConfig = {
  apiKey: "AIzaSyCXAvU0YeDh-2S3ImUHYuUCLusm5HcEdOY",
  authDomain: "the-discussion-table.firebaseapp.com",
  projectId: "the-discussion-table",
  storageBucket: "the-discussion-table.appspot.com",
  messagingSenderId: "589761197720",
  appId: "1:589761197720:web:143c983ae1daee5c8ec2ed",
  measurementId: "G-0EMC9Q74HY"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
