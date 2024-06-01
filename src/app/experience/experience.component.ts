import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {

	public experiences = [
        { role: 'Développeur Fullstack', company: 'TechCompany', period: '2021 - Présent', description: 'Développement de solutions web avec Angular et Node.js.' },
        // Autres expériences...
    ];
}
