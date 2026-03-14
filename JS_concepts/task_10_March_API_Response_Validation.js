
let responses = [200, 201, 404, 500, 404, 200, 503];

// Check if ALL responses are successful (200–299)
let successResponse = responses.every(code => code >=200 && code < 300);
console.log("All responses successful:", successResponse);

//Find the FIRST non-success code
let firstNonSuccessCode = responses.find(code => code < 200 || code >=300);
console.log("First non-success code:", firstNonSuccessCode);

//Return all unique error codes
let errorCodes = responses.filter(code => code < 200 || code >= 300);
console.log("Unique error codes:", errorCodes);
let uniqueErrorCodesSet = new Set(errorCodes);
console.log("Unique error codes:", Array.from(uniqueErrorCodesSet));