import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'feeling-lazy-angular';

    ativo?: boolean  ;

    animar() {

        this.ativo = !this.ativo
    }

}
