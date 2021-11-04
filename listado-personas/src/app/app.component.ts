import { Component } from '@angular/core';
import { Persona } from './persona.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Listado de Personnas';
  personas: Persona[]=[new Persona('Alfonso', 'Porto'), new Persona('Lurdes','Martinez')];

  personaAgregada(persona: Persona){
    this.personas.push(persona);
  }

}

