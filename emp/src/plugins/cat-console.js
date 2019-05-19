
let nyanCat1 = 0;
const nyanCat2 = [
  [
    '+      o     +              o      ',
    '    +             o     +       +  ',
    'o          +                       ',
    '    o  +           +        +      ',
    '+        o     o       +        o  ',
    '-_-_-_-_-_-_-_,------,      o      ',
    '_-_-_-_-_-_-_-|   /\\_/\\            ',
    '-_-_-_-_-_-_-~|__( ^ .^)  +     +  ',
    '_-_-_-_-_-_-_-""  ""               ',
    '+      o         o   +       o     ',
    '    +         +                    ',
    'o        o         o      o     +  ',
    '    o           +                  ',
    '+      +     o        o      +     ',
  ],
  [
    '+      o     +              +      ',
    '    o             o     o       +  ',
    'o          +                       ',
    '    +  o           +        o      ',
    'o        o     o       +        o  ',
    '_-_-_-_-_-_-_-,------,      +      ',
    '-_-_-_-_-_-_-_|   /\\_/\\            ',
    '_-_-_-_-_-_-_-|__( ^ .^)  o     +  ',
    '-_-_-_-_-_-_-_ ""  ""              ',
    '+      +         o   +       o     ',
    '    o         +                    ',
    '+        +         +      +     o  ',
    '    +           o                  ',
    '+      o     o        o      +     ',
  ],
];

function nyan() {
  // console.clear();
  console.log(nyanCat2[nyanCat1].join('\n'));
  if (nyanCat1 === 0) {
    nyanCat1 = 1;
  } else {
    nyanCat1 = 0;
  }
}
// window.setInterval(nyan, 1000)
window.setTimeout(nyan, 100);
