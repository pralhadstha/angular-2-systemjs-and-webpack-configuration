import { Component } from '@angular/core';
import { User } from './shared/modals/user';

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
	loginmessage: string = "This is a login message!";
	users : User[]= [
		{ id: 1, name: 'Apple'},
		{ id: 2, name: 'Ball'},
		{ id: 3, name: 'Cat'},
	];

	activeUser: User; // variable declaration which automatically adds to the class

	selectUser(user) {
		this.activeUser = user;
		console.log(this.activeUser);
	}

}