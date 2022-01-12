import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: [
  ]
})
export class PromesasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    // const promesa = new Promise((resolve, reject) => {

    //   if (false) {
    //     resolve('Hola mundo')

    //   } else {
    //     reject('Algo salio mal')
    //   }

    // });

    // promesa.then((mensaje) => {
    //   console.log('Hey termine', mensaje);

    // })
    //   .catch(err => {
    //     console.log('Error en la promesa', err);

    //   })

    // console.log('fin del init');

    this.getUsuario().then(usuarios => {
      console.log(usuarios);

    })


  }

  getUsuario() {

    return new Promise(resolve => {
      fetch('https://reqres.in/api/users')
        .then(resp => resp.json())
        .then(body => resolve(body.data))

    });



  }
}
