function isAnagram(str1, str2) {
  let alphanumeric = "";
  let spcl = "";
  
  let alphanumeric2 = "";
  let spcl2 = "";


  for (let i = 0; i < str1.length; i++) {
    if (/^[a-zA-Z0-9\s]+$/.test(str1[i])) {
      alphanumeric += str1[i];
    } else {
      spcl += str1[i];
    }
  }


  for (let j = 0; j < str2.length; j++) {
    if (/^[a-zA-Z0-9\s]+$/.test(str2[j])) {
      alphanumeric2 += str2[j];
    } else {
      spcl2 += str2[j];
    }
  }


  let string1 = alphanumeric.toLowerCase().split('').sort().join('');
  let string2 = alphanumeric2.toLowerCase().split('').sort().join('');


  let final1 = spcl + string1;
  let final2 = spcl2 + string2;

  if(final1===final2){
    return true
  }
  else{
    return false
  }
}

module.exports = isAnagram; 
