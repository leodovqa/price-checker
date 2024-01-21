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


// Reference to the collection
const collectionRef = db.collection('price'); // Replace with your actual collection name

// Reference to the HTML list
const dataList = document.getElementById('dataList');

// Fetch data from Firestore and display it in HTML
collectionRef.get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        const data = doc.data();
        const listItem = document.createElement('li');
        listItem.textContent = JSON.stringify(data);
        dataList.appendChild(listItem);
    });
}).catch((error) => {
    console.error('Error getting documents: ', error);
});