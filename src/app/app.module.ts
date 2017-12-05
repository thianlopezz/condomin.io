import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { RegistroPage } from '../pages/registro/registro';

import { NoticiasPage } from '../pages/noticias/noticias';
import { QuejasPage } from '../pages/quejas/quejas';
import { CrearQuejaPage } from '../pages/crear-queja/crear-queja';
import { CambiarContrasenaPage } from '../pages/cambiar-contrasena/cambiar-contrasena';
import { ConfiguracionPage } from '../pages/configuracion/configuracion';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginProvider } from '../providers/login/login';
import { RegistroProvider } from '../providers/registro/registro';
import { QuejasProvider } from '../providers/quejas/quejas';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    RegistroPage,
    NoticiasPage,
    QuejasPage,
    CrearQuejaPage,
    CambiarContrasenaPage,
    ConfiguracionPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    RegistroPage,
    NoticiasPage,
    QuejasPage,
    CrearQuejaPage,
    CambiarContrasenaPage,
    ConfiguracionPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LoginProvider,
    RegistroProvider,
    ConfiguracionPage,
    QuejasProvider
  ]
})
export class AppModule {}
