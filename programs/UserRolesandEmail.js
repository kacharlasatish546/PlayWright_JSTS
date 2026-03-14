//Write a JavaScript function that receives two arrays: one with names and one with roles. 
// Return a new array of user objects in the format `{ username, email, role }`. 
// The username should be lowercase with spaces replaced by underscores, 
// and the email should use the domain `@playwrightbatch.com`.

names = ["Amit Kumar", "Neha Singh"];
roles = ["admin", "viewer"];

function getUserDetails(names, roles) {
    let userDetails = names.map((name, index) => {
        const formattedName = name.replace(/ /g, "_").toLowerCase();
        const formattedEmail = roles.map(role => role + "@playwrightbatch.com");
        return {
            name: formattedName,
            email: formattedEmail
        }
    });
    console.log(userDetails);
    return userDetails;
}

getUserDetails(names, roles);