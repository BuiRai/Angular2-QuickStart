import {
	Component
} from '@angular/core';

import {
	HeroesComponent
} from './heroes.component';

import {
	HeroService
} from './hero.service'

import {
	RouteConfig,
	ROUTER_DIRECTIVES,
	ROUTER_PROVIDERS
} from '@angular/router-deprecated';

@Component({
	selector: 'my-app',
	templateUrl: 'app/app.view.html',
	directives: [ROUTER_DIRECTIVES],
	providers: [
		HeroService,
		ROUTER_PROVIDERS
	]
})

@RouteConfig([
	{
		path: '/heroes',
		name: 'Heroes',
		component: HeroesComponent
	}
])

export class AppComponent {
	title = 'Tour of Heroes';
}