function asyncExample() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Async operation complete!");
        }, 2000);
    });
}

async function runAsyncExample() {
    console.log("Starting async operation...");
    const result = await asyncExample();
    console.log(result);
}

runAsyncExample();
