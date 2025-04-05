import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CakeClassicUtls } from '@app/cakes/classic';
import { Cake } from '@app/model/cake';
import { Frosting } from '@app/model/frosting';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { ImageModule } from 'primeng/image';
import { SelectModule } from 'primeng/select';

@Component({
  selector: 'app-classic',
  imports: [
    CommonModule,
    ImageModule,
    ButtonModule,
    DialogModule,
    SelectModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './classic.component.html',
  styleUrl: './classic.component.scss'
})
export class ClassicComponent implements OnInit {
  
  public entities: Cake[];
  public selectedEntity: Cake = null;
  public selectedFrosting: Frosting = null
  public modalDialog: boolean = false;
  public form: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) {
    
    this.entities = CakeClassicUtls.getClassics()
  }

  public ngOnInit(): void {
    this.initForm();
  }

  public initForm() {
    this.form = this.formBuilder.group({
      Description: ['Selecione um bolo'],
      Category: ['Tradicional'],
      Frosting: [],
      Price: [19.50]
    })
  }

  open(entity: Cake) {

    this.selectedEntity = entity;

    this.UpdateForm(this.selectedEntity);

    this.modalDialog = true;
  }

  close() {
    this.modalDialog = false;
  }

  private UpdateForm(entity: Cake): void {
    this.form.patchValue({
      Description: entity.Description,
      Category: entity.Category,
      Price: entity.Price
    })
  }

  save() {
    this.modalDialog = false;
  }


}
