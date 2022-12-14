function PalandromeOrNot(str:string) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i]; 
    }
    if(newString === str){
        console.log('Given string is palindrome')
        
    }else
    {
        console.log('given string is not a palindrome');
    }
}
PalandromeOrNot('level');