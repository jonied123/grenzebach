import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ErrorMeta } from './models/errorMeta';
import { ErrorSyntom } from './models/errorSyntom';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-errordetail',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    RouterModule],
  templateUrl: './errordetail.component.html',
  styleUrl: './errordetail.component.scss'
})
export class ErrordetailComponent {
  constructor(private router: Router) { }

  errormeta = new ErrorMeta("Camera is not working properly", "20. Dezember 2023", "10:02",
    "Innenraum Position", "1388", "Vorderkamera");

  errors: ErrorSyntom[] = [
    new ErrorSyntom("Die Kamera liefert keine Bilder oder Videos."),
    new ErrorSyntom("Die Kamera zeigt ein verzerrtes oder unscharfes Bild."),
    new ErrorSyntom("Die Kamera zeigt ein schwarzes Bild.")
  ]

  goToSchrittanleitung() {
    this.router.navigate(['stepguid'])
  }

  goToErrorLog(){
    this.router.navigate(['errorlog'])
  }
}
