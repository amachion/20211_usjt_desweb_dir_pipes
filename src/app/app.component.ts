import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'novo-diretivas';

  lembrete: string;
  lembretes: Array<string>=[];

  salvar() {
    this.lembretes=[this.lembrete, ...this.lembretes];
    this.lembrete='';
  }
}
