import { Component } from '@angular/core';

declare function agendar(): void;

@Component({
  selector: 'app-agenda',
  imports: [],
  templateUrl: './agenda.component.html',
  styleUrl: './agenda.component.css'
})
export class AgendaComponent {
  ngOnInit() {
    agendar();//iniciando a função agendar
  }

}
