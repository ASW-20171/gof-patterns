// main.js
import { Cat } from './zoo/cat';
import { Singleton } from './gof/create/singleton';

var myCat = new Cat('Bugsy');
document.getElementById('content').innerHTML += `<br/>${myCat.meow()}`;

