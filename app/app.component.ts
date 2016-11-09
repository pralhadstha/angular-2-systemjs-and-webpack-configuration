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
				<div *ngFor = "let user of users" (click) = "selectUser(user)">
					<!--
						structural directives -> *
						event binding -> ()
						property binding -> []

						Eg.:
						[class.active] = "user ===activeUser"
					-->
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
	];

	activeUser; // variable declaration which automatically adds to the class

	selectUser(user) {
		this.activeUser = user;
		console.log(this.activeUser);
	}

}