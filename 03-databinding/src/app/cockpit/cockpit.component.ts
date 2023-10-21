import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  ViewChild,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css'],
})
export class CockpitComponent implements OnInit {
  @Output() ejemploSimple = new EventEmitter<string>();

  @Output() serverCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();
  @Output() blueprintCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();
  newServerName: string = '';
  newServerContent: string = '';
  @ViewChild('serverContentInput', { static: false })
  serverContentInput: ElementRef;
  viewChild: string;

  constructor() {}

  ngOnInit() {}
  contador: number = 0;

  subirEjemplo() {
    this.viewChild = this.serverContentInput.nativeElement.value;
    this.ejemploSimple.emit(
      'Cadena ejemplo creada en cockpit' + this.contador++
    );
  }

  onAddServer() {
    this.serverCreated.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent,
    });
  }

  onAddBlueprint() {
    this.blueprintCreated.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent,
    });
  }
}
