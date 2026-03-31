function login(url, callback) {
    console.log("Login for " + url);
    callback();
}

function enterUsername(username, callback) {
    console.log("Username entered  " + username);
    callback();
}

function enterPassword(password, callback) {
    console.log("Password entered  " + password);
    callback();
}

function clickLogin(btnName, callback) {
    console.log("Button clicked  " + btnName);
    callback();
}

login("www.google.com", function () {
    enterUsername("john_doe", function () {
        enterPassword("password123", function () {
            clickLogin("Login", function () {
                console.log("Login process completed.");
            });
        });
    });
});
