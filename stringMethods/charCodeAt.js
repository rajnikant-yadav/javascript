// charCodeAt()
// Syntax: str.charCodeAt(index)
// The charCodeAt() method returns the unicode of the character at a specified index in a string:
// The method returns a UTF-16 code (an integer between 0 and 65535)

let text = "HELLO WORLD";
let char = text.charCodeAt(3);
console.log(char)