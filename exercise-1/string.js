function ucfirst(chaine) {
  if (typeof chaine !== "string" || chaine === "") return "";

  return chaine.charAt(0).toUpperCase() + chaine.slice(1);
}

function capitalize(chaine) {
  if (typeof chaine !== "string" || chaine === "") return "";

  return chaine.split(' ').map((word) => ucfirst(word.toLocaleLowerCase())).join(' ');
}

function camelCase(chaine) {
  if (typeof chaine !== "string" || chaine === "") return "";

  return capitalize(chaine).replace(/\W/g, '');
}

function snake_case(chaine) {
  if (typeof chaine !== "string" || chaine === "") return "";

  return chaine.toLocaleLowerCase().replace(/\W/g, '_')
}

function leet(chaine) {
  if (typeof chaine !== "string" || chaine === "") return "";
  
  return chaine.replace(/[aeiouy]/gi, function(e) {
    switch(e.toLowerCase) {
      case 'a':
        return '4';
      case 'e':
        return '3';
      case 'i':
        return '1';
      case 'o':
        return '0';
      case 'u':
        return '(_)';
      case 'y':
        return '7'
    }
  });
}

function verlan (chaine) {
  if (typeof chaine !== "string" || chaine === "") return "";

  return chaine.split(' ').map((word) => word.split('').reverse().join('')).join(' '); 
}

function yoda(chaine) {
  if (typeof chaine !== "string" || chaine === "") return "";
  
  return str.split(' ').reverse().join(' ');
}

function prop_access (obj, path) {
  if(obj === null) obj = {};
  if (typeof path !== "string" || path === "") return obj;
  let res =  path.split('.').reduce((prev, curr) => prev && prev[curr] , obj);
  return res === undefined ? console.log(path + " not exist") : res ;
}

function vig() {

}