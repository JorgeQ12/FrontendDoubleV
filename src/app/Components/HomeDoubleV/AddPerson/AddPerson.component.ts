import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Persona } from 'src/app/Interfaces/Persona';
import { AddPersonServiceService } from './Services/AddPersonService.service';
import { ResultResponse } from 'src/app/Interfaces/ResultResponse';
import { PersonaDTO } from 'src/app/Class/PersonaDTO';
import { TipoIdentificacion } from 'src/app/Interfaces/TipoIdentificacion';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-AddPerson',
  templateUrl: './AddPerson.component.html',
  styleUrls: ['./AddPerson.component.css']
})
export class AddPersonComponent implements OnInit {
  @Output() exitComponentEmitter = new EventEmitter<any>();
  saveDataForm!: FormGroup;
  dataPerson: PersonaDTO = {
    NombresDTO: '',
    ApellidosDTO: '',
    NumeroIdentificacionDTO: '',
    EmailDTO: '',
    TipoIdentificacionCodeDTO: '',
    TipoIdentificacionDTO: ''
  };
  typeDocument!: Array<TipoIdentificacion>;
  constructor(private formBuilder: FormBuilder, private AddPersonService: AddPersonServiceService, private _snackBar: MatSnackBar ) { }

  ngOnInit() {
    this.validatorsForms();
    this.GetTypeDocument();
  }

  validatorsForms(){
    this.saveDataForm = this.formBuilder.group({
      nombres: ['', [Validators.required, Validators.pattern(/^\S*$/)]], //Valida que el campo no tenga espacios
      apellidos: ['', [Validators.required, Validators.pattern(/^\S*$/)]], //Valida que el campo no tenga espacios
      identificacion: ['', [Validators.required, Validators.pattern(/^\d+$/)]], // Solo números
      email: ['', [Validators.required, Validators.email]], //Valida que el campo no tenga espacios
      tipoIdentificacion: ['', [Validators.required, Validators.pattern(/^\S*$/)]] //Valida que el campo no tenga espacios
    });
  }

  getErrorMessage(controlName: string): string | null {
    const control = this.saveDataForm.get(controlName);
  
    if (control?.hasError('required')) {
      return 'Este campo es obligatorio.';
    }
  
    if (control?.hasError('pattern')) {
      return 'Por favor, digite correctamente el campo.';
    }

    if (control?.hasError('email')) {
      return 'Por favor, ingrese un correo electrónico válido.';
    }
  
    return null;
  }

  addPerson(){
    this.mappInfoDto(this.saveDataForm)
    console.log(this.saveDataForm)
    this.AddPersonService.InsertPerson(this.dataPerson).subscribe((x: ResultResponse<Persona>) => {
      if(x.isSucces){
        this._snackBar.open('Persona Ingresada Correctamente', 'Cerrar', {
          duration: 3000
        });
        this.exitComponent();
      }
    })
  }

  mappInfoDto(data: FormGroup){
    if(data.valid)
    {
      this.dataPerson.NombresDTO = data.value['nombres'];
      this.dataPerson.ApellidosDTO = data.value['apellidos'];
      this.dataPerson.NumeroIdentificacionDTO = data.value['identificacion'];
      this.dataPerson.EmailDTO = data.value['email'];
      this.dataPerson.TipoIdentificacionDTO = data.value['tipoIdentificacion'];
      this.dataPerson.TipoIdentificacionCodeDTO = this.typeDocument.find(x => x.id.includes(this.dataPerson.TipoIdentificacionDTO))?.code;
    }
  }

  exitComponent(){
    this.exitComponentEmitter.emit({'person': false})
  }

  GetTypeDocument()
  {
    this.AddPersonService.GetTypeDocument().subscribe((x: ResultResponse<Array<TipoIdentificacion>>) => {
      if(x.isSucces){
        this.typeDocument = x.data;
      }
    })
  }
}
