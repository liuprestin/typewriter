const sentence_test = "hello there from lighthouse labs";


//given a string - animate as if it was being typed
//here we take advantage of timing delay.
function animatedTyping(sentence){

for (let i = 0; i<sentence.length; i++){
    
    setTimeout(() => {
    
        process.stdout.write(sentence.charAt(i));
    
  }, i*200); // <= 1s delay to make it noticeable. Can dial it down later.
}
}

//TEST

animatedTyping(sentence_test);
