import { db, ref, get, child, set, onChildAdded, push } from '../firebase/firebaseConfig.js'

var inputField = document.getElementById('msgInput')
var sendBtn = document.getElementById('sendBtn')
var messageHolder = document.getElementById('message-holder')

sendBtn.addEventListener('click', () => {
    if (inputField.value.length === 0) {
        alert('please type a msg')
        return
    }


    var data = {
        message: inputField.value,
        name: localStorage.getItem('user')
    }
    // console.log("DATA", data);
    // set(ref to the db , record)
    var chatRef = ref(db, 'chats/')
    var unique = push(chatRef).key
    set(ref(db, `chats/${unique}`), data)
        .then(() => {
            console.log("Successsful")
        })
        .catch((error) => {
            console.error('error', error);
        })
})

// onChildAdded(ref, callback)
onChildAdded(ref(db, 'chats/'), (snapshot) => {
    var { message, name } = snapshot.val() // message , name
    var currentUser = localStorage.getItem('user') // raja || ijaz || any
    var html;

    if (currentUser === name) {
        html = `
        <p class='right'>${message} <span>By : ${name}</span></p>
        `
    } else {
        html = `
        <p class='left'>${message} <span>By : ${name}</span></p>
        `
    }
    messageHolder.innerHTML += html
})

var person = {
    name : 'raja',
    fname : 'razzak',
    ph : '0000000000'
}


// person.name //raja
// person["name"] //raja
// var {name, fname, ph} = person
// var {name, ...rest} = person

// console.log("name" , name);
// console.log("rest" , rest);

// var person1 = ["raja", "razzzak" , 25 ,"000000000000"]
// // var [name, fname , age , ph] = person1
// var [name, ...rest] = person1

// console.log('datra' , name, rest);



