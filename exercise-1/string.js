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

  toRetrun = "";
  for (value of chaine.split(' ')) {
    reverse = '';
    for (char of value.split('')) {
      reverse = char + reverse;
    }
    toRetrun += ' ' + reverse;
  }

  return toRetrun.substring(1);
}

function yoda(chaine) {
  if (typeof chaine !== "string" || chaine === "") return "";

  toRetrun = "";
  for (value of chaine.split(' ')) {
    toRetrun = value + ' ' + toRetrun;
  }

  return toRetrun.slice(0, -1);
}

function prop_access (obj, path) {
  if(obj === null) obj = {};
  if (typeof path !== "string" || path === "") return obj;
  let res =  path.split('.').reduce((prev, curr) => prev && prev[curr] , obj);
  return res === undefined ? console.log(path + " not exist") : res ;

  
}

function vig() {

}