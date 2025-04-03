import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CakeClassicUtls } from '@app/cakes/classic';
import { Cake } from '@app/model/cake';
import { ButtonModule } from 'primeng/button';
import { ImageModule } from 'primeng/image';

@Component({
  selector: 'app-classic',
  imports: [
    CommonModule,
    ImageModule,
    ButtonModule
  ],
  templateUrl: './classic.component.html',
  styleUrl: './classic.component.scss'
})
export class ClassicComponent {
  
  public entities: Cake[];

  constructor() {
    
    this.entities = CakeClassicUtls.getClassics()
  }

}
