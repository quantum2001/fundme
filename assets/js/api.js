// Student sign up

const submitButton = document.getElementById('submit-student-form')
const fullname = document.getElementById('fullname').value
const phoneno = document.getElementById('phoneno').value
const email = document.getElementById('email').value
const password = document.getElementById('password').value

submitButton.addEventListener('click', (e) => {
    e.preventDefault()

    let studentDetails = {
        fullname: fullname,
        phoneNumber: phoneno,
        email: email,
        password: password,
        confirmPassword: password,
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
        .then((data) => {
            if (data['newUser']) {
                location.assign('studentregistration2.html')
            }
        })
        .catch(err => console.log(err))
})
