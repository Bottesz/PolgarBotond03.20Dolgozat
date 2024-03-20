import autok from ".adatok.js";

import { index.innerHTML } from './fuggvenyek.js';

const data = [
    { Gyarto: 'Honda', Szin: 'piros', Ar: '10.000.000'},
    { Gyarto: 'BMW', Szin: 'fehér', Ar: '17.500.000'  },
    { Gyarto: 'Audi', Szin: 'fekete', Ar: '14.000.000' },
    { Gyarto: 'Mercedes', Szin: 'szürke', Ar: '32.000.000', },
    { Gyarto: 'Volkswagen', Szin: 'sárga', Ar: '5.000.000', }
];

const content = generateHTML(data);
document.getElementById('tartalom').innerHTML = content;