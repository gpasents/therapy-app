import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from './language.service';

@Injectable({
  providedIn: 'root'
})
@Injectable()
export class TranslationService {
  constructor(
    private translateService: TranslateService,
    private languageService: LanguageService
  ) {
    this.init();
  }

  private init(): void {
    this.translateService.setDefaultLang('en');
    this.languageService.language$.subscribe(language => {
      this.translateService.use(language);
    });
  }

  getTranslation(key: string): string {
    return this.translateService.instant(key);
  }
}