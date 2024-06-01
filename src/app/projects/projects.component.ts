import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

	public projects = [
        { name: 'Projet 1', description: 'Application web pour la gestion des tâches', link: 'http://example.com' },
        // Autres projets...
    ];
}
