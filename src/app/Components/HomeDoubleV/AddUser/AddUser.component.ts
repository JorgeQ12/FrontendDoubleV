import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioDTO } from 'src/app/class/usuarioDTO';
import { ResultResponse } from 'src/app/interfaces/resultresponse';
import { Usuario } from 'src/app/interfaces/usuario';
import { AddUserService } from './services/adduser.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AddUserComponent implements OnInit {
  @Output() exitComponentEmitter = new EventEmitter<any>();
  saveDataUser!: FormGroup;
  dataUser: UsuarioDTO = { NombreUsuarioDTO: '', ContraseñaDTO: '' };

  constructor(private formBuilder: FormBuilder,  private AddUserService: AddUserService,  private _snackBar: MatSnackBar) { }

  ngOnInit() {
    this.validatorsForms();
  }

  validatorsForms(){
    this.saveDataUser = this.formBuilder.group({
      usuario: ['', [Validators.required, Validators.pattern(/^\S*$/)]], //Valida que el campo no tenga espacios
      password: ['', [Validators.required, Validators.pattern(/^\S*$/)]], //Valida que el campo no tenga espacios
    });
  }

  getErrorMessage(controlName: string): string | null {
    const control = this.saveDataUser.get(controlName);
  
    if (control?.hasError('required')) {
      return 'Este campo es obligatorio.';
    }
  
    if (control?.hasError('pattern')) {
      return 'Por favor, digite correctamente el campo.';
    }
  
    return null;
  }

  addUser(){
    this.mappInfoDto(this.saveDataUser)
    this.AddUserService.InsertUser(this.dataUser).subscribe((x: ResultResponse<Usuario>) => {
      if(x.isSucces){
        this._snackBar.open('Usuario Ingresado Correctamente', 'Cerrar', {
          duration: 3000
        });
        this.exitComponent();
      }
    })
  }

  mappInfoDto(data: FormGroup){
    if(data.valid)
    {
      this.dataUser.NombreUsuarioDTO = data.value['usuario'];
      this.dataUser.ContraseñaDTO = data.value['password'];
    }
  }

  exitComponent(){
    this.exitComponentEmitter.emit({'user': false})
  }
}
