import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {
  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Capitan America']

  /* borrarHeroe(){
    console.log('Borrando...');
    this.heroes.shift();
  } */

  heroeBorrado: string = '';

  borrarHeroe(){
    // const heroeBorrado = this.heroes.shift();
    // console.log(heroeBorrado);
    this.heroeBorrado = this.heroes.shift() || '';
  }

  

}
