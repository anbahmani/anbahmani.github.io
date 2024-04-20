import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faDatabase, faEnvelope, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FontAwesomeModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
	faSun = faSun;
  	faMoon = faMoon;
	faEnvelope = faEnvelope;
	faDatabase = faDatabase;
	darkMode: boolean = false;

	public experiences = [
        { role: 'Développeur Fullstack', company: 'TechCompany', period: '2021 - Présent', description: 'Développement de solutions web avec Angular et Node.js.' },
        // Autres expériences...
    ];
    public projects = [
        { name: 'Projet 1', description: 'Application web pour la gestion des tâches', link: 'http://example.com' },
        // Autres projets...
    ];

	ngOnInit(): void {
		this.switchToLight();
		this.loadTheme();
	}

	loadTheme() {
		if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
			this.darkMode = true;
		  } else {
			this.darkMode = false;
		  }
	}

	switchToDark() {
		localStorage.setItem('theme', 'dark');
		this.loadTheme();
	}

	switchToLight() {
		localStorage.setItem('theme', 'light');
		this.loadTheme();
	}

	setOSPreference() {
		localStorage.removeItem('theme');
		this.loadTheme();
	}

	switchTheme() {
		this.darkMode ? this.switchToLight() : this.switchToDark();
	}
}