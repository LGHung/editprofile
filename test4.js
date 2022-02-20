import {
  ref,
  update,
  getDatabase,
} from "https://www.gstatic.com/firebasejs/9.5.0/firebase-database.js";

const db = getDatabase();

var profilename = document.getElementById("change-profilename")
var rollbox = document.getElementById("change-id")
var phone = document.getElementById("change-sdt")
var cccd = document.getElementById("change-cccd")

var finishchange = document.getElementById("finishchange")

function updateData() {
  update(ref(db, "TheStudents/" + rollbox.value), {
    NameOfStd: profilename.value,
    Section: phone.value,
    cccd : cccd.value,
  })
    .then(() => {
      alert("data stored successfully");
    })
    .catch((error) => {
      alert("unsuccessful, error: " + error);
    });
}

finishchange.addEventListener("click", updateData);

function cancele(){
  location.reload()
}
document.getElementById("cancel").addEventListener("click" , cancele)