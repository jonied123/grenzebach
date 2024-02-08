import { Routes } from '@angular/router';
import { ErrordetailComponent } from './errordetail/errordetail.component';
import { HandfernbedienungComponent } from './handfernbedienung/handfernbedienung.component';
import { ErrorlogComponent } from './errorlog/errorlog.component';
import { SchrittanleitungComponent } from './schrittanleitung/schrittanleitung.component';

export const routes: Routes = [
    { path: '', component: ErrordetailComponent },
    { path: 'remote', component: HandfernbedienungComponent },
    { path: 'stepguid', component: SchrittanleitungComponent},
    { path: 'errorlog', component: ErrorlogComponent }
];
