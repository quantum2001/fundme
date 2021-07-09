if (!sessionStorage['user']) {
    location.replace('index.html')
} else {
    let fullName = document.getElementById('fullname')
    let user = JSON.parse(sessionStorage['user'])
    fullName.innerText = user.fullname
}