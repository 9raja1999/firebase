import { db, set, ref, get, child } from '../../firebaseConfig.js'


export const createStudent = (data) => {
    set(ref(db, `Students/${data.cnic}`), data)
        .then(res => {
            alert('data added successfully')
        })
        .catch(err => {
            console.error("error", err)
        })
}

export const findStudent = (cnic) => {
    console.log("CNIC", cnic)

    get(child(ref(db), `Students/${cnic}`))
        .then((snapShot) => {
            if (snapShot.exists()) {
                console.log("cc", snapShot.val());
                return snapShot.val()
            } else {
                console.log("NOT EXISTS")
            }
        })
        .catch((error) => {
            console.error("error", error)
        })
}