import { 
	Component 
} from '@angular/core';

import {
	OnInit
} from '@angular/core';

import {
	Hero
} from './hero';

import { 
	HeroDetailComponent 
} from './hero-detail.component';

import {
	HeroService
} from './hero.service';

import {
	Router
} from '@angular/router-deprecated';

@Component({
	selector: 'my-heroes',
	templateUrl: 'app/heroes.view.html',
	styleUrls: ['app/heroes.component.css'],
	directives: [HeroDetailComponent]
})

export class HeroesComponent implements OnInit{
	title = 'Tour of Heroes';
	heroes: Hero[];
	selectedHero: Hero;

	constructor( private router: Router, private heroService: HeroService ) {

	}

	ngOnInit() {
		this.getHeroes();
	}

	getHeroes(){
		this.heroService.getHeroes().then(heroes => this.heroes = heroes);
	}

	onSelect(hero: Hero) {
		this.selectedHero = hero;
	}

	goToDetail() {
    	this.router.navigate(['HeroDetail', { id: this.selectedHero.id }]);
  	}

}