// Student sign up

const submitButton = document.getElementById('submit-student-form')
let fullname = document.getElementById('fullname').value
let phoneno = document.getElementById('phoneno').value
let email = document.getElementById('email').value

submitButton.addEventListener('click', (e) => {
    e.preventDefault()

    let studentDetails = {
        fullname: fullname,
        phoneNumber: phoneno,
        email: email,
        password: "zenith",
        confirmPassword: "zenith",
        role: "student"
    }
    fetch('https://fundme-backend.herokuapp.com/auth/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Origin': 'https://fundme-backend.herokuapp.com/',
            'Access-Control-Allow-Origin': 'https://fundme-backend.herokuapp.com/'
        },

        redirect: 'follow',
        body: JSON.stringify(studentDetails)
    })
        .then(response => response.json())
        .then(data => location.assign('login.html'))
        .catch(err => console.log(err))
})
