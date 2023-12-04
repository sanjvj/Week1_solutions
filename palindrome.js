function isPalindrome(str) {
    
    let spcl = "";
    let alphanumeric = ""

    for(i=0;i<str.length;i++){
        if(/^[a-zA-Z0-9\s]+$/.test(str[i])){
            alphanumeric+=str[i];
        }
        else{
            spcl+=str[i]
        }
    }
    
    let final1 = alphanumeric.toLowerCase().replace(/\s/g, '');
    rev=final1.split('').reverse().join('');
    
    
    if(final1===rev){
        return true
    }
    else{
        return false
    }


}
module.exports = isPalindrome;