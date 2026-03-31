function youtubeLikes() {
    count = 0;
    return {
         increment() {
            count++
        },
        decrement() {
            count--
        },
        getlikes() {
            return count;
        }
    }
}

let likes = youtubeLikes();
likes.increment();
likes.increment();
likes.increment();
likes.increment();
likes.increment();
likes.increment();
likes.increment();
likes.increment();
likes.increment();
likes.increment();
console.log(likes.getlikes());
likes.decrement();
likes.decrement();
likes.decrement();
likes.decrement();
likes.decrement();
likes.decrement();
likes.decrement();
likes.decrement();
likes.decrement();
likes.decrement();
console.log(likes.getlikes());