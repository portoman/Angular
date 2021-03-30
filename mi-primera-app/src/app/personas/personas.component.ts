import { Component } from "@angular/core";

@Component({
    selector:'app-personas',
    /* "`" Para poder hacer saltos de línea. Se puede elegir template, en lugar de templateURL, si son elementos cortos a añadir.
    La plantilla template(html) es obligatorio añadirla, la plantilla css no.
    Abajo, como sería de "manera inline" (template)
    template:`<h1>Listado de personas</h1>
    <app-persona></app-persona>
    <app-persona></app-persona>`*/
    templateUrl:'./personas.component.html',
    styleUrls:['./personas.component.css'],
   /*Abajo sería la manera "inline"
    styles:[`
        h1{
            color:blue;
        }
        
    `]*/
})
export class PersonasComponent{
    deshabilitar=false;
    mensaje: string='No se ha agregado ninguna persona';
    titulo='';

    agregarPersona(){
        this.mensaje='Persona agregada';

    }
    modificarTitulo(event: Event){
        console.log('Entrando a método modificar título')
        this.titulo=(<HTMLInputElement>event.target).value;
    }

}