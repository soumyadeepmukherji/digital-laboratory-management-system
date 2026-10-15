import { Component } from '@angular/core';
import { DashboardHeader } from '../dashboard-header/dashboard-header';
import { DashboardCards } from '../dashboard-cards/dashboard-cards';

@Component({
  imports: [DashboardHeader, DashboardCards],
  selector: 'app-dashboard-page',
  styleUrl: './dashboard-page.css',
  templateUrl: './dashboard-page.html',
})
export class DashboardPage {}
