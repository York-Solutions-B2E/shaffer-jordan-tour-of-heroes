import { Component, OnInit } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeroService } from '../hero.service';
import { HEROES } from '../mock-heroes';
import { Hero } from '../hero';
import { MessageService } from '../message.service';
import { RouterLink, RouterModule } from '@angular/router';
import { HeroSearchComponent } from '../hero-search/hero-search.component';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [FormsModule, RouterLink, CommonModule, HeroSearchComponent, RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit{

    heroes: Hero[] = [];
  
    constructor(private heroService: HeroService) { }
  
    ngOnInit(): void {
      this.getHeroes();
    }
  
    getHeroes(): void {
      this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes.slice(1, 5));
    }
}
