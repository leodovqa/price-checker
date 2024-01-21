<!-- Add Firebase SDK -->
<script src="https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js"></script>


<!-- Your Firebase Config -->
const firebaseConfig = {
    apiKey: "AIzaSyCBqHJeK9xiGZEdq1g-hFaMqHUr91PfEVI",
    authDomain: "dgun-fb.firebaseapp.com",
    projectId: "dgun-fb",
    storageBucket: "dgun-fb.appspot.com",
    messagingSenderId: "768341492663",
    appId: "1:768341492663:web:1db0235e4ca61acd105e32",
    measurementId: "G-QMJD5X8FYJ"
};

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // Initialize Firestore
  const db = firebase.firestore();

getDocs(colRef)
    .then((snapshot) => {
        let price = []
        snapshot.docs.forEach((doc) => {
            price.push({...doc.data(), id: doc.id})
        })
        console.log(price)
    })
    .catch(err => {
        console.log(err.message)
    });