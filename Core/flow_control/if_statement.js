/**
 * The If Statement
 */

// standard if
let isJavaScriptCoder = true;

if (isJavaScriptCoder) {
    // This will execute if above check is equal to true
    console.log("The if Statement Executed");
}
let coding = "fun";

if (coding === "fun"){
    // This will execute if above check is equal to true
    console.log("Having a great time");
}

// If ... Else
const codingSkill = "learning";
if (codingSkill === "beginner"){
    console.log("Keep going!  You can do it!");
}
else if(codingSkill === "ninja"){
    console.log("Hello Sensei")
}
else{
    console.log("still figuring it out") 
}
//expecting "still figuring it out"