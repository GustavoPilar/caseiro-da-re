import { Component } from '@angular/core';
import { Router, RouterLinkActive } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';

@Component({
  selector: 'app-home',
  imports: [ButtonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {


  /**
   *
   */
  constructor(
    private router: Router
  ) {
    
  }

  getRouterLink(target: string): void {
    this.router.navigate(['/category/' + target]);
  }
}
