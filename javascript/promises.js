let login = new Promise(function (resolve, reject) {
    console.log("Login for www.google.com");
    resolve();
});

let enterUsername = new Promise(function (resolve, reject) {
    console.log("Username entered  john_doe");
    resolve();
}); 

let enterPassword = new Promise(function (resolve, reject) {
    console.log("Password entered  password123");
    resolve();
});

let clickLogin = new Promise(function (resolve, reject) {
    console.log("Button clicked  Login");
    resolve();
});

login.then(function(){
    return enterUsername;
}).then(function(){
    return enterPassword;
}).then(function(){
    return clickLogin;
}).finally(function(){
    console.log("Login process completed.");
});