import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { LanguageSelectorComponent } from './components/language-selector/language-selector.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LanguageService } from './services/language.service';
import { TranslationService } from './services/translation-service.service';
import { CarouselComponent } from './components/carousel/carousel/carousel.component';
import { SidePanelComponent } from './components/side-panel/side-panel.component';
import { HeaderComponent } from './components/header/header.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppointmentFormComponent } from './components/appointment-form/appointment-form/appointment-form.component';
import { RecaptchaModule } from 'ng-recaptcha';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    LanguageSelectorComponent,
    SidePanelComponent,
    HeaderComponent,
    MainPageComponent,
    AboutComponent,
    ServicesComponent,
    AppointmentFormComponent,
  ],
  imports: [
    BrowserModule,
    CarouselComponent,
    NgbModule,
    HttpClientModule,
    RecaptchaModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  providers: [LanguageService, TranslationService],
  bootstrap: [AppComponent],
})
export class AppModule {}
