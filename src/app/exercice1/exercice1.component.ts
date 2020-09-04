import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.css']
})
export class Exercice1Component implements OnInit {

  public lien: string;
  public nom: string;
  constructor() {
    this.lien = "https://dyma.fr/";
    this.nom = "Bonjour Dyma !";
   }

   public bindEvent(): void {
     console.log("Binding d'événement !");
   }

  ngOnInit(): void {
  }

}
