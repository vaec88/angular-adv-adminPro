import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: []
})
export class PromesasComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    // const promesa = new Promise( (resolve, reject) => {
    //   false ? resolve('Hola mundo') : reject('Algo salió mal');
    // });

    // promesa
    //   .then( (mensaje) => {
    //     console.log('La promesa se resolvió');
    //     console.log(mensaje);
    //   })
    //   .catch( error => console.log('Error en la promesa. ', error));
    // console.log('Fin del init');

    this.getUsuarios().then(usuarios => {
      console.log(usuarios);
    });

  }

  getUsuarios() {

    return new Promise(resolve => {
      fetch('https://reqres.in/api/users')
        .then(resp => resp.json())
        .then(body => resolve(body.data));
    });

  }

}
