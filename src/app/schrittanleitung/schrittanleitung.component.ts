import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-schrittanleitung',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterModule],
  templateUrl: './schrittanleitung.component.html',
  styleUrl: './schrittanleitung.component.scss'
})
export class SchrittanleitungComponent {

}
