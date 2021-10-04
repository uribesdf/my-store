import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = 'Diego';
  age = 18;
  img = 'https://img2.freepng.es/20180402/plq/kisspng-apple-color-emoji-apple-color-emoji-ios-11-crazy-5ac28c6786beb9.3604817715226993675519.jpg'
  btnSDisabled = true;
  names : String[] = ['Diego', 'Edna', 'Teodoro']

  person = {
    name:'Diego',
    age: 18,
    avatar : 'https://img2.freepng.es/20180402/plq/kisspng-apple-color-emoji-apple-color-emoji-ios-11-crazy-5ac28c6786beb9.3604817715226993675519.jpg'
  }

  newName:String = "";
  products = [
    {
      name: 'EL mejor juguete',
      price: 565,
      image: './assets/images/toy.jpg',
      category: 'all',
    },
    {
      name: 'Bicicleta casi nueva',
      price: 356,
      image: './assets/images/bike.jpg'
    },
    {
      name: 'Colleción de albumnes',
      price: 34,
      image: './assets/images/album.jpg'
    },
    {
      name: 'Mis libros',
      price: 23,
      image: './assets/images/books.jpg'
    },
    {
      name: 'Casa para perro',
      price: 34,
      image: './assets/images/house.jpg'
    },
    {
      name: 'Gafas',
      price: 3434,
      image: './assets/images/glasses.jpg'
    }
  ]

  toggleButton(){
    this.btnSDisabled = !this.btnSDisabled;
  }

  increaseAge(){
    this.person.age ++
  }

  onScroll(event:Event){
    const element = event.target as HTMLElement;
    console.log(element.scrollTop)
  }

  changeEvent(event:Event){
    const element = event.target as HTMLInputElement;
    element.value;
    this.person.name = element.value;

  }

  addName(){
    this.names.push(this.newName)
    this.newName ='';
  }

  deleteName(index:number){
    this.names.splice(index,1)
  }

}
