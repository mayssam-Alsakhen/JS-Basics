
const stringSize = (text) => {
return text.length;
}
const replaceCharacterE = (text) => {
    
   return  text.replace( "e"," ");
    
}
const concatString = (text1, text2) => {
 return text1 + text2 ;
}
const showChar5 = (text) => {
return text[4];
}
const showChar9 = (text) => {
 return text.substring(0, 9);
}
const toCapitals = (text) => {
 return text.toLocaleUpperCase();
}
const toLowerCase = (text) => {
return text.toLowerCase();
}
const removeSpaces = (text) => {
return  text.trim(); 
}
const IsString = (text) => {
  var test =  typeof text  ;
  if(test.value='string'){
      return true ;
  }
  else {
      return false;
  }
}

const getExtension = (text) => {
 return text.split('.').pop();
}
const countSpaces = (text) => {
return (text.match(/ /g) || []).length
}
const InverseString = (text) => {
 return text.split("").reverse().join("");
}

const power = (x, y) => {
   return Math.pow(x, y);
}
const absoluteValue = (num) => {
    return Math.abs(num);
}

const absoluteValueArray = (array) => {
    return array.map(Math.abs);
}
const circleSurface = (radius) => {
    return Math.round(Math.PI * radius * radius)
}
const hypothenuse = (ab, ac) => {
return Math.hypot(ab, ac);
}
const BMI = (weight, height) => {
    return Number  ((weight /(height *  height)).toFixed(2));
    
}
const createLanguagesArray = () => {
  return ["Html", "CSS", "Java", "PHP"]
}

const createNumbersArray = () => {
return [0,1,2,3,4,5];


}
const replaceElement = (languages) => {
    languages.splice(2, 1, "Javascript");
    return  languages;
}

const addElement = (languages) => {
    languages.splice(languages.length, 0, "Ruby", "Python");
   return languages;
}

function addNumberElement(numbers) {
    numbers.splice(0, 0, -2, -1);
    return numbers ;
}

const removeFirst = (languages) => {
   languages.shift();
  return  languages ;
}

const removeLast = (languages) => {
 languages.pop();
 return languages ;
}

const convertStrToArr = (social_arr) => {

    return social_arr.split(",");
   
}

const convertArrToStr = (languages) => {
    return languages.toString();
}

const sortArr = (social_arr) => {
    social_arr.sort();
    return social_arr;

}

const invertArr = (social_arr) => {
    social_arr.reverse();
    return social_arr;
}