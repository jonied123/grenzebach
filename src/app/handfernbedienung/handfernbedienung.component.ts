import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-handfernbedienung',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './handfernbedienung.component.html',
  styleUrl: './handfernbedienung.component.scss'
})
export class HandfernbedienungComponent {
  constructor(private router: Router){}

  goToErrorDetail(){
    this.router.navigate(['']);
  }
}
