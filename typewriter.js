const sentence = "hello there from lighthouse labs";

 for (const char in sentence) {
   
  setTimeout(() => {
    
    process.stdout.write(sentence[char]);
    console.log("");
  }, 50 * char) 
  
};

