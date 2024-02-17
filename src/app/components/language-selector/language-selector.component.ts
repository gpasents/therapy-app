import { Component, OnInit } from '@angular/core';
import { TranslationService } from '../../services/translation-service.service';
import { LanguageService } from '../../services/language.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.css']
})
export class LanguageSelectorComponent implements OnInit {
  supportedLanguages: any[] = [
    { code: 'en', name: 'English', icon: 'eng-icon.png' },
    { code: 'el', name: 'Ελληνικά', icon: 'language-greek.png' }
  ];

  selectedLanguage: any = {
    code: '',
    name: '',
    icon: ''
  };

  constructor(
    private translationService: TranslationService,
    private languageService: LanguageService,
    private translateService: TranslateService
  ) {
    this.languageService.language$.subscribe(language => this.updateSelectedLanguage(language));
  }

  ngOnInit(): void {
    this.updateSelectedLanguage(this.translateService.currentLang);
  }

  switchLanguage(language: string) {
    this.languageService.setLanguage(language);
    this.updateSelectedLanguage(language);
  }

  private updateSelectedLanguage(language: string) {
    const selectedLang = this.supportedLanguages.find(lang => lang.code === language);
    if (selectedLang) {
      this.selectedLanguage = selectedLang;
    }
  }

}