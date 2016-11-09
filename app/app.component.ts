import { Component } from '@angular/core';

@Component({
	selector: 'app',
	template: `
	<main>
		<div>
			{{ loginmessage }}
		</div>
		<div class="arrow">
			<div *ngIf = "users">
				<div *ngFor = "let user of users">
					{{ user.id }} {{ user.name }}
				</div>
			</div>
		</div>
	</main>
	`
})

export class AppComponent {
	loginmessage = "This is a login message!";
	users = [
		{ id: 1, name: 'Apple'},
		{ id: 2, name: 'Ball'},
		{ id: 3, name: 'Cat'},
	]
}