var database = [
    {
        username: 'Anthony',
        password: '1234'
    }
]

var newsFeed = [
    {
        username: 'Bobby',
        timeline: 'So tired from all that learning'
    },
    {
        username: 'Jeniffer',
        timeline: 'going to the gym'
    }
]

var userPrompt = prompt('Enter your username')
var pwdPrompt = prompt('Enter your password')

function signIn(user, pwd){
    if(user === database[0].username && 
        pwd === database[0].password){
        console.log(newsFeed)
    } else {
        alert('Sorry incorrect details')
    }
}
signIn(userPrompt, pwdPrompt)