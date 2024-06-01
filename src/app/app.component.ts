import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faDatabase, faDisplay, faEnvelope, faMoon, faPhone, faServer, faSun } from '@fortawesome/free-solid-svg-icons';
import { ContactComponent } from "./contact/contact.component";
import { EducationComponent } from "./education/education.component";
import { ProjectsComponent } from "./projects/projects.component";
import { ExperienceComponent } from "./experience/experience.component";
import { SkillsComponent } from "./skills/skills.component";
import { DescriptionComponent } from "./description/description.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, FontAwesomeModule, CommonModule, ContactComponent, EducationComponent, ProjectsComponent, ExperienceComponent, SkillsComponent, DescriptionComponent]
})
export class AppComponent implements OnInit{
	faSun = faSun;
  	faMoon = faMoon;
	darkMode: boolean = false;

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