// cat.js
export class Cat {
  constructor(name) {
  	this.name = name;
  }

  meow() {
    return `${this.name}: Tienes que estar bromeando que te obedeceré, ¿verdad?`;
  }
}

////////////////////////////////////////////////
function loadUser() {
    console.log('Leyendo nuevo usuario');
    let min = 12345;
    let max = 23456;
    return Math.floor(Math.random() * (max - min)) + min;
}

function sendNotify(id) {
    console.log(`Usuario ${id} notificado`);
}

/*
let usuario_list = [];

setInterval(() => {

usuario_list.push(loadUser());
usuario_list.push(loadUser());

for (var i = usuario_list.length-1; i < usuario_list.length; i++) {
  sendNotify(usuario_list[i]);
};

  }, 2000);

*/
let usuarios = Rx.Observable.create((usuario) => {
  setInterval(() => {
    usuario.next(loadUser());
    usuario.next(loadUser());
  }, 2000);
});

usuarios.subscribe((id) => {
  sendNotify((id));
});


