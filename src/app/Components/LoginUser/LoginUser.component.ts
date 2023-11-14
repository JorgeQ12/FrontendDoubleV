import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UsuarioDTO } from 'src/app/class/usuarioDTO';
import {LoginUserService} from 'src/app/components/loginuser/services/loginuser.service'
import { ResultResponse } from 'src/app/interfaces/resultresponse';
import { Usuario } from 'src/app/interfaces/usuario';

@Component({
  selector: 'app-loginuser',
  templateUrl: './loginuser.component.html',
  styleUrls: ['./loginuser.component.css']
})
export class LoginUserComponent implements OnInit {
  loginForm!: FormGroup;
  dataInfo: UsuarioDTO = { NombreUsuarioDTO: '', ContraseñaDTO: '' };
  isLoading: boolean = false;

  constructor(private formBuilder: FormBuilder, private LoginUserService: LoginUserService, private _snackBar: MatSnackBar, private router: Router) { }

  ngOnInit() {
    this.validatorsForms();
  }

  validatorsForms(){
    this.loginForm = this.formBuilder.group({
      usuario: ['', [Validators.required, Validators.pattern(/^\S*$/)]], //Valida que el campo no tenga espacios
      password: ['', [Validators.required, Validators.pattern(/^\S*$/)]] //Valida que el campo no tenga espacios
    });
  }

  getErrorMessage(controlName: string): string | null {
    const control = this.loginForm.get(controlName);
  
    if (control?.hasError('required')) {
      return 'Este campo es obligatorio.';
    }
  
    if (control?.hasError('pattern')) {
      return 'Por favor, digite correctamente el campo.';
    }
  
    return null;
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.isLoading = true;
      this.mappInfoDto(this.loginForm);
      this.nextLogin();
    }
  }
  
  mappInfoDto(data: FormGroup){
    this.dataInfo.NombreUsuarioDTO = data.value['usuario'];
    this.dataInfo.ContraseñaDTO = data.value['password'];
  }

  nextLogin(){
    this.LoginUserService.GetLoginUser(this.dataInfo).subscribe((response: ResultResponse<Usuario>) => {
      this.isLoading = false;
      if(!response.isSucces){
        this._snackBar.open('Usuario No Encontrado', 'Cerrar', {
          duration: 3000
        });
      }else{
        this.router.navigate(['Home'])
      }
    })

  }

  
}
