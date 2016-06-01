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

import {
	DashboardComponent
} from './dashboard.component';

import {
	HeroDetailComponent
} from './hero-detail.component';

@Component({
	selector: 'my-app',
	templateUrl: 'app/app.view.html',
	styleUrls: ['app/app.component.css'],
	directives: [ROUTER_DIRECTIVES],
	providers: [
		HeroService,
		ROUTER_PROVIDERS
	]
})

@RouteConfig([
	{
		path: '/dashboard',
		name: 'Dashboard',
		component: DashboardComponent,
		useAsDefault: true
	},
	{
		path: '/detail/:id',
		name: 'HeroDetail',
		component: HeroDetailComponent
	},
	{
		path: '/heroes',
		name: 'Heroes',
		component: HeroesComponent
	}
])

export class AppComponent {
	title = 'Tour of Heroes';
}