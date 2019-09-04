import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { CapitalizePipe } from '../../pipes/capitalize.pipe';

@Component({
  selector: 'app-animals-game',
  templateUrl: './animals-game.page.html',
  styleUrls: ['./animals-game.page.scss'],
})
export class AnimalsGamePage implements OnInit {

  public animals = [
    {
      'title': 'Vache',
      'image': 'img/animals/cow-icon.png',
      'desc': 'Meugle',
      'file': '/sounds/cow.mp3',
      'playing': false
    },
    {
      'title': 'Dauphin',
      'image': 'img/animals/dolphin-icon.png',
      'desc': 'Siffle',
      'file': '/sounds/dolphin.mp3',
      'playing': false
    },
    {
      'title': 'Grenouille',
      'image': 'img/animals/frog-icon.png',
      'desc': 'Coasse',
      'file': '/sounds/frog.mp3',
      'playing': false
    },
    {
      'title': 'Oiseau',
      'image': 'img/animals/bird-icon.png',
      'desc': 'Chante',
      'file': '/sounds/bird.mp3',
      'playing': false
    },
    {
      'title': 'Cochon',
      'image': 'img/animals/pig-icon.png',
      'desc': 'Grogne',
      'file': '/sounds/pig.mp3',
      'playing': false
    },
    {
      'title': 'Chien',
      'image': 'img/animals/puppy-icon.png',
      'desc': 'Aboie',
      'file': '/sounds/dog.mp3',
      'playing': false
    },
    {
      'title': 'Chat',
      'image': 'img/animals/black-cat-icon.png',
      'desc': 'Miaule',
      'file': '/sounds/cat.mp3',
      'playing': false
    },
    {
      'title': 'Cheval',
      'image': 'img/animals/horse-icon.png',
      'desc': 'Hennit',
      'file': '/sounds/horse.wav',
      'playing': false
    },
    {
      'title': 'Ane',
      'image': 'img/animals/donkey-icon.png',
      'desc': 'Brait',
      'file': '/sounds/donkey.wav',
      'playing': false
    }
  ];

  private chosenAnimal;

  private media;

  public isReorderDisabled = true;

  constructor(private toastCtrl:ToastController) { }

  ngOnInit() {
  }

  play(){

    //Choisir un animal au hasard si aucun n'a encore été choisit
    if(! this.chosenAnimal){
      let randomPosition = Math.floor(Math.random()* this.animals.length);
      this.chosenAnimal = this.animals[randomPosition];
    }

    //Stopper le son en cours
    if(this.media && (this.media.currentTime != this.media.duration)){
      this.media.pause();
    }
    
    //Lecture du son
    this.media = new Audio("assets" + this.chosenAnimal.file);
    this.media.load();
    this.media.play();
    this.chosenAnimal.playing = true;

    //Masquer la note de musique quand le son est terminé
    var that = this;
    this.media.ontimeupdate = function(){
      if(this.ended && that.chosenAnimal){
        that.chosenAnimal.playing = false;
      }
    }

  }

  async guess(animal){
    var message;
    if(! this.chosenAnimal){
      message = "Il faut d'abord cliquer sur JOUER avant de deviner un animal... Cabron";
    } else if(animal.title != this.chosenAnimal.title){
      message = "Perdu mais tu peux essayer encore petit scarabé";
    } else {
      message = "Gagné !!! Bravo tu peux rejouer si tu veux";
      this.chosenAnimal.playing = false;
      this.chosenAnimal = null;
    }

    const toast = await this.toastCtrl.create({
      message: message,
      duration: 1000,
      position: "bottom"
    });

    toast.present();

  }

  doReorder(even){
    even.detail.complete(this.animals);
    console.log(this.animals);
  }

}
