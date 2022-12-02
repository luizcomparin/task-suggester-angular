import { Component } from '@angular/core';
import { ConfigComponent } from './pages/config/config.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent {
	ativo?: boolean;

	animar() {
		this.ativo = !this.ativo;
	}

	show = config.textoimport;
}
let config = new ConfigComponent();
