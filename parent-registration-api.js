const nextButton = document.getElementById('nextbtn');
const fullname = document.getElementById('fullName').value;
const email = document.getElementById('emailAddress').value;
const phoneNo = document.getElementById('phoneNumber').value;
const password = document.getElementById('password').value;

nextButton.addEventListener('click', (e) => {
    e.preventDefault()
    let parentDetails = {
        "fullname": fullname,
        "phoneNumber": phoneNo,
        "email": email,
        "password": password,
        "confirmPassword": password,
        "role": "parent"
    }
    fetch('https://fundme-backend.herokuapp.com/auth/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Origin': 'https://fundme-backend.herokuapp.com/',
            'Access-Control-Allow-Origin': 'https://fundme-backend.herokuapp.com/'
        },
        redirect: 'follow',
        body: JSON.stringify(parentDetails)
    })
        .then(response => response.json())
        .then((data) => {
            if (data['newUser']) {
                location.assign('parentregistrationpage2.html')
            }
        })
        .catch(err => console.log(err))
})