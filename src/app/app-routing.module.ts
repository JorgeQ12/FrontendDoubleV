import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginUserComponent } from './Components/LoginUser/LoginUser.component';
import { HomeDoubleVComponent } from './Components/HomeDoubleV/HomeDoubleV.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Ruta predeterminada redirige a '/login'
  { path: 'login', component: LoginUserComponent },
  { path: 'Home', component: HomeDoubleVComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
