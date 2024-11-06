let url;
const links = document.getElementsByClassName("links");
const signoutBtn = document.getElementById("signout");
function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
        c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
        }
    }
    return "";
}
let token = getCookie("tokens");
token = token.replace(/\\054/g, ",").replace(/"/g, '54s').replace(/'/g, '"').replace(/54s/g, "")
token = JSON.parse(token)
let user = getCookie("user");
user = user.replace(/\\054/g, ",").replace(/"/g, '54s').replace(/'/g, '"').replace(/54s/g, "")
user = JSON.parse(user)
for(let i=0; i<links.length; i++){
    links[i].addEventListener("click", (async () => {
    fetch(`${window.location.protocol + "//" + window.location.host}${url}`, {
            method: "GET",
            redirect: "follow",
            credentials: "include",
            headers: {"Authorization": `JWT ${token.access}`}, 
        })
        .then(response => {
            if(response.redirected){
                window.location.href = response.url
            }
        })
        .catch(error => alert(error.message))
    }))
}
signoutBtn.addEventListener("click", () => {
    fetch(`${window.location.protocol + "//" + window.location.host}/user/signout/`, {
        method: "POST",
        redirect: "follow",
        body: JSON.stringify({"refresh": token.refresh}),
        credentials: "include",
        headers: {"Content-Type": "application/json", "Authorization": `JWT ${token.access}`},
        })
    .then(response => {
        if(!response.ok){
            return response.json().then(err => { throw err; });
        }
        if(response.redirected){
            window.location.href = response.url
        }
    })
    .catch(error => alert(error.message))
})

function ViewClass(id){
    fetch(`${window.location.protocol + "//" + window.location.host}/class/view/?pk=${id}`, {
        method: "GET",
        redirect: "follow",
        credentials: "include",
        headers: {"Content-Type": "application/json", "Authorization": `JWT ${token.access}`},
        })
    .then(response => {
        if(!response.ok){
            return response.json().then(err => { throw err; });
        }
        if(response.redirected){
            window.location.href = response.url
        }
    })
    .catch(error => alert(error.message))
}
const join = document.getElementById("joinClass");
let search;
function SearchClass(e){
    e.preventDefault();
    fetch(`${window.location.protocol + "//" + window.location.host}/class/search/`, {
            method: "GET",
            credentials: "include",
            headers: {"Content-Type": "application/json", "Authorization": `JWT ${token.access_token}`}, 
        })
    .then(response => {
        if (!response.ok) {
            return response.json().then(err => { throw new Error(err); });
        }
        return response.json();
    })
    .then(search => {
            join.innerHTML = ""
            if(search.length > 0){
                search.forEach((item) => {
                    const div = document.createElement('div');
                    div.className = "class-card";
                    const h3 = document.createElement('h3');
                    h3.innerText = item.title
                    const p1 = document.createElement('p');
                    p1.innerText = "Instructor: " + item.instructor.user.fullName
                    const p2 = document.createElement('p');
                    p2.innerText = "Level: " + item.level
                    const p3 = document.createElement('p');
                    p3.innerText = `Class Size: ${item.students.length}/${item.attendTotal}`
                    const input = document.createElement('input');
                    input.type = "submit";
                    input.value = "Join Class"
                    input.onsubmit(JoinCode(item.code));

                    div.appendChild(h3);
                    div.appendChild(p1);
                    div.appendChild(p2);
                    div.appendChild(p3);
                    div.appendChild(input);
                    join.appendChild(div);
                })
            }else {
                const div = document.createElement('div');
                div.className = "class-card";
                const p = document.createElement('p');
                p.innerText = "No classes found"
                div.appendChild(h3);
                join.appendChild(div);
            }
        }
    ).catch(error => alert(error.message));
}   

let code = 0;
// const cForm = document.getElementById("join-code");
function addCode(e){
    e.preventDefault();
    code = e.target.value;
}

function joinCode(e){
    e.preventDefault();

    fetch(`${window.location.protocol + "//" + window.location.host}/class/join/code/${code}/`, {
            method: "PUT",
            credentials: "include",
            headers: {"Authorization": `JWT ${token.access}`}, 
        })
    .then(response => {
        if(!response.ok){
            return response.json().then(err => { throw err; });
        }else{
            return response.json();
        }
    })
    .then(message => alert(message))
    .catch(error => alert(error.message))
}

function JoinCode(cd){
    fetch(`${window.location.protocol + "//" + window.location.host}/class/join/code/${cd}/`, {
        method: "PUT",
        credentials: "include",
        headers: {"Content-Type":"application/json", "Authorization": `JWT ${token.access}`}, 
    })
    .then(response => {
        if(!response.ok){
            return response.json().then(err => { throw err; });
        }else{
            return response.json();
        }
    })
    .then(message => alert(JSON.stringify(message)))
    .catch(error => alert(error.message))
}

const createAmt = document.getElementById("createAmt");
createAmt.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("entered");
    let newForm = new FormData(createAmt);

    fetch(`${window.location.protocol + "//" + window.location.host}/class/create/assessment/${newForm.get("classID")}/`, {
            method: "POST",
            credentials: "include",
            body: newForm,
            headers: {"Authorization": `JWT ${token.access}`, "X-CSRFToken": getCookie("csrftoken")}, 
        })
    .then(response => {
        if(!response.ok){
            throw new Error(JSON.stringify(response.json()))
        }else{
            if(response.redirected){
                window.location.href = response.url;
            }
        }
    })
    .then(message => alert(JSON.stringify(message)))
    .catch(error => alert(error))
})


const subAmt = document.getElementById("submissions");
let amtID;
subAmt.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("entered");
    let newForm = new FormData(subAmt);

    fetch(`${window.location.protocol + "//" + window.location.host}/class/create/submissions/${amtID}/`, {
            method: "POST",
            credentials: "include",
            body: newForm,
            headers: {"Authorization": `JWT ${token.access}`, "X-CSRFToken": getCookie("csrftoken")}, 
        })
    .then(response => {
        if(!response.ok){
            return response.json().then(err => { throw err; });
        }else if(response.redirected){
            window.location.href = response.url;
        }else {
            return response.json()
        }
    })
    .then(message => alert(JSON.stringify(message)))
    .catch(error => {
        console.log(error.message)
        alert(error.message);
    })
})

const editAmt = document.getElementById("editAmt");
editAmt.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("entered");
    let newForm = new FormData(editAmt);

    fetch(`${window.location.protocol + "//" + window.location.host}/class/edit/assessment/${newForm.get("classID")}/`, {
            method: "PUT",
            credentials: "include",
            body: newForm,
            headers: {"Authorization": `JWT ${token.access}`, "X-CSRFToken": getCookie("csrftoken")}, 
        })
    .then(response => {
        if(!response.ok){
            return response.json().then(err => { throw err; });
        }else{
            return response.json();
        }
    })
    .then(message => alert(JSON.stringify(message)))
    .catch(error => alert(error.message))
})

function delAmt(id){
    fetch(`${window.location.protocol + "//" + window.location.host}/class/delete/assessment/${id}/`, {
        method: "DELETE",
        redirect: "follow",
        credentials: "include",
        headers: {"Authorization": `JWT ${token.access}`}, 
    })
    .then(response => {
        if(!response.ok){
            return response.json().then(err => { throw err; });
        }else{
            if(response.redirected){
                window.location.href = response.url;
            }
        }
    })
    .catch(error => alert(error.message))
}

document.getElementById("file").addEventListener("change", () => {
    const p = document.createElement("p");
    p.innerText = "file attached";
    document.getElementById("subform").appendChild(p);
})

function upload(e){
    console.log('here'); 
    document.getElementById('file').click();
}

function notify(){
    // e.preventDefault();
    const file = document.getElementById('file').files[0]
    if(file){
        document.getElementById('fileadded').innerText = `${file.name} file added`;
    }
}