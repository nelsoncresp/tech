import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { ProductosComponent } from './componentes/productos/productos.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegisterComponent } from './componentes/register/register.component';
import { TestimoniosComponent } from './componentes/testimonios/testimonios.component';

const routes: Routes = [
  {
    path:'', component:InicioComponent
  },
  {
    path:'productos', component: ProductosComponent
  },
  {
    path:'login', component: LoginComponent
  },{
    path:'register', component: RegisterComponent 
  },
  {
    path: 'testimonials', component: TestimoniosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
