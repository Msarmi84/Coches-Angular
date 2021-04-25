
import { Component, Input, OnChanges, OnInit, SimpleChanges, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Coche } from '../models/coche';

@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.scss']
})
export class CarFormComponent implements OnInit, OnChanges{

  @Input() esTemaOscuro: boolean = true;
  @Input() coche: Coche;

  @Output() borrarCoche = new EventEmitter<Coche>();
  @Output () guardar = new EventEmitter<Coche>();

  elFormulario: FormGroup;
  submitted = false;

  constructor(fb: FormBuilder) {
    this.elFormulario = fb.group({
      id: [''],
      nombre: [''],
      color: ['', Validators.required],
      state: ['' , Validators.required ],
      doors: [3, [Validators.min(3), Validators.max(5), Validators.required]],
      rating: [2],
      available: [''],
      model: ['', Validators.required],
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.coche.currentValue) {
      this.elFormulario.patchValue(changes.coche.currentValue);
    }
  }


  ngOnInit(): void {
    this.elFormulario.controls.model.valueChanges.subscribe(value => { // si cambia el valor y me suscribo
      if (value?.toLowerCase() === 'familiar'){
        this.elFormulario.controls.doors.setValue(5);
        this.elFormulario.controls.doors.disable();
      } else{
        this.elFormulario.controls.doors.enable();
      }
    });

    this.elFormulario.controls.state.valueChanges.subscribe(value => { // si cambia el valor y me suscribo
        if (value === 'nuevo'){
          this.elFormulario.controls.rating.setValue(2);
        }
    });

  }

  guardarClick(obj: any): void {

    this.submitted = true;
    if (this.elFormulario.valid) {
      console.log(this.elFormulario.value);
      this.guardar.emit(new Coche(this.elFormulario.getRawValue()));
    }
  }

  eliminarClick(event: Event, coche: Coche): void {
    if (this.coche && window.confirm('Estas seguro que quieres eliminar este coche?')){
      this.borrarCoche.emit(this.coche);
      this.limpiarForm();
    }
  }
  nuevoClick(): void {

    this.limpiarForm();

    this.elFormulario.patchValue({
      available: 1,
      doors: 3,
      estado: 'nuevo'
    });
  }

  private limpiarForm(): void {
    this.submitted = false;
    this.elFormulario.reset();
  }





}
