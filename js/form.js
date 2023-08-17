// FORMLARLA CALİSMAK: Bolum sonu egzersizi

/*
1: Formu sec
2: Input bilgisini UL içerisine ekle
3: Form içindeki bilgiyi sıfırla
4: Eger forma bilgi girilmezse kullanıcıyı uyar
*/

let userFormDOM = document.querySelector("#userform")
userFormDOM.addEventListener("submit", formHandler)
const alertDOM = document.querySelector("#alert")

const alertFunction = (title, message, className = "warning") => `
<div class="alert alert-${className} alert-dismissible fade show" role="alert">
<strong>${title}</strong>${message}
<button type="button" class="btn-close" data-bs-dismiss="alert"           aria-label="Close"></button>
</div>  
` 
function formHandler(event) {
    event.preventDefault()
    const USER_NAME = document.querySelector("#username")
    const SCORE = document.querySelector("#score")

    if (USER_NAME.value && SCORE.value) { // burada eğer ki username ve score değerleri varsa işlem açacağımızı belirtiyoruz
        addItem(USER_NAME.value,SCORE.value) // gonderdikten sonra sıfırladık
        USER_NAME.value=""
        SCORE.value=""
    } else {
        alertDOM.innerHTML = alertFunction(
            "Baslik Bilgisi",
            " Eksik Bilgi Girdiniz",
            "danger"
        )
    }
}

let userListDOM = document.querySelector("#userlist")

function addItem(userName, score){
    let liDOM = document.createElement("li") // burada li elementi oluşturuyorz
    liDOM.innerHTML = `
        ${userName}
        <span class="badge bg-primary rounded-pill">${score}</span>
    `
    liDOM.classList.add('list-group-item','d-flex','justify-content-between','align-items-start')
    userListDOM.append(liDOM)
}