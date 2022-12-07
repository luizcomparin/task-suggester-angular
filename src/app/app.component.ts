import { Component, Renderer2 } from '@angular/core';
import { ConfigComponent } from './pages/config/config.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent {

    constructor(public renderer: Renderer2) {}

	ativo?: boolean;

    tarefa = "Meditar"
    descricao = "Sentar em posição controlada, relaxando o corpo. Evitar pensamentos, focar na respiração."


	animar() {
		this.ativo = !this.ativo;
	}

	show = config.textoimport;

    ngAfterViewInit() {
        let gridContent = document.querySelector('#horizontal-scrolling');
        if (gridContent!.scrollHeight <= gridContent!.clientHeight) {
            this.renderer.listen(gridContent, 'wheel', this.scrollHorizontally)
        }
    }

     scrollHorizontally(e: { deltaY: number; }) {
        let gridContent = document.querySelector('#horizontal-scrolling');
        let delta = Math.max(-1, Math.min(1, e.deltaY));
        gridContent!.scrollLeft += (delta * 70);
    }


}
let config = new ConfigComponent();
