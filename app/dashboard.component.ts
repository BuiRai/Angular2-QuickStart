import {
	Component,
	OnInit
} from '@angular/core';

import {
	Hero
} from './hero';

import {
	HeroService
}from './hero.service';

import {
	Router
} from '@angular/router-deprecated';

@Component({
	selector: 'my-dashboard',
	templateUrl: 'app/dashboard.view.html',
	styleUrls: ['app/dashboard.component.css']
})

export class DashboardComponent implements OnInit{

	heroes: Hero[] = [];

	constructor( private router: Router, private heroService: HeroService ) {

	}

	ngOnInit() {
		this.heroService.getHeroes().
			then(heroes => this.heroes = heroes.slice(0, 4));
	}

	goToDetail(hero: Hero) {
		let link = ['HeroDetail', { id: hero.id }];
		this.router.navigate(link);
	}

}