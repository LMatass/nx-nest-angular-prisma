import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'lib-client-feature-authentication',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './client-feature-authentication.component.html',
  styleUrl: './client-feature-authentication.component.css',
})
export class ClientFeatureAuthenticationComponent {}
