// alert('hi');

let form = document.querySelector('#form');

var firebaseConfig = {
    apiKey: "AIzaSyDpCywgaXPSQ1e2WmBu_sWbFfUgIVfcrgE",
    authDomain: "petitionwritingweb.firebaseapp.com",
    projectId: "petitionwritingweb",
    storageBucket: "petitionwritingweb.firebasestorage.app",
    messagingSenderId: "775038277107",
    appId: "1:775038277107:web:46c51a00ed92bafb13ae86",
    measurementId: "G-CEESZLSKLF"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const auth = firebase.auth();

form.addEventListener('submit', function (e) {
    e.preventDefault();
    let email = form.elements.email.value;
    let password = form.elements.password.value;
    // console.log(email);
    // console.log(password);

    auth.createUserWithEmailAndPassword(email, password)
        .then(cred => {
            form.reset();
            window.location.href = "index.html";
        })
        .catch(err => {
            alert(err.message);
        })
});