/**
 * Switch Statements
 */

// When needing to do a lot of comparisons for a single value
// Instead of multiple "if..else" as seen below, we can use the switch statement instead
if (a === "5"){
    // ...
}
else if (a === "6"){
    // ...
}
else if (a === "7"){
    // ...
}
else {
    // ...
}

// much easier to read like this
switch(a){
    case "5":
        // ...
        break;
    case "6":
        // ...
        break;
    default:
        // ...
}

// The "default" case in a switch is like the last else statement..
//..in an "if..else" chain
// If you omit "break", switch will run all the following cases until it encounters "break"
