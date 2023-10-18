import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  serverElements01 = [];
  newServerName01 = '';
  newServerContent01 = '';

  onAddServer() {
    if (this.newServerName01 == '' || this.newServerContent01 == '') return;
    this.serverElements01.push({
      type: 'server',
      name: this.newServerName01,
      content: this.newServerContent01,
    });
  }

  onAddBlueprint() {
    if (this.newServerName01 == '' || this.newServerContent01 == '') return;
    this.serverElements01.push({
      type: 'blueprint',
      name: this.newServerName01,
      content: this.newServerContent01,
    });
  }

  onDelete(name: string) {
    const idx = this.serverElements01.findIndex((el) => el.name === name);
    this.serverElements01.splice(idx, 1);
  }

  serverElements = [
    { type: 'server', name: 'Testserver', content: 'Just a test!' },
  ];

  ejemplo: string = '';
  cogerEvento(evento: string) {
    this.ejemplo = evento;
  }

  onServerAdded(serverData: { serverName: string; serverContent: string }) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent,
    });
  }

  onBlueprintAdded(blueprintData: {
    serverName: string;
    serverContent: string;
  }) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent,
    });
  }

  onChangeFirst() {
    this.serverElements[0].name = 'Changed!';
  }

  onDestroyFirst() {
    this.serverElements.splice(0, 1);
  }
}
