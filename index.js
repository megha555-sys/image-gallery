// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCFJ3tnNQLA9xJCAaj3vULFGItTNxfzNP4",
  authDomain: "imagegallery-f2cd6.firebaseapp.com",
  projectId: "imagegallery-f2cd6",
  storageBucket: "imagegallery-f2cd6.appspot.com",
  messagingSenderId: "1097860489001",
  appId: "1:1097860489001:web:2735b222266bfce67ae138",
  measurementId: "G-CV9MKS3DF9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

(()=>{
    firebase.initializeApp(config);
    const storage = firebase.storage(),
    bucket = storage.ref(),
    img = bucket.child("img"),
    form = document.getElementById("upload"),
    uploader = document.getElementById("uploader"),
    output = document.getElementById("output")

    output.innerHTML = "";

    uploader.addEventListener("change",e=>{
        Array.from(e.target.files).forEach(file=>{
            let uploadTask = img.child(file.name).put(file)
            uploadTask.on("state_changes",data=>{},err=>{},()=>{
                let fileIMG = img.child(file.name)
                fileIMG.getDownloadURL()
                .then(url =>{
                    if(file.type.match('image.*')){
                        output.innerHTML += 
                        <div class = "col-3">
                            <div class = "card">
                                <img src = "${url}" class="card-img-top"></img>
                            </div>
                        </div>
            
                    }
                 })
            })
        })
    })
})();