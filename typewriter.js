const sentence = "hello there from lighthouse labs";

setTimeout(() => {
    for (const char of sentence) {
        process.stdout.write(char);
    }
  }, 1000) // <= 1s delay to make it noticeable. Can dial it down later.