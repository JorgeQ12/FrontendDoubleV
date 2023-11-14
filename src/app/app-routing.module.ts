import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginUserComponent } from './components/loginuser/loginuser.component';
import { HomeDoubleVComponent } from './components/homedoublev/HomeDoubleV.component';

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
