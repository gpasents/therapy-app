import { Component } from '@angular/core';
import { TranslationService } from '../../services/translation-service.service';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.css']
})
export class LanguageSelectorComponent {
  supportedLanguages = [
    { code: 'en', name: 'English', icon: 'eng-icon.png' },
    { code: 'el', name: 'Ελληνικά', icon: 'language-greek.png' }
  ];

  selectedLanguage: string;
  selectedLanguageName: string;
  selectedLanguageIcon: string;

  constructor(private translationService: TranslationService, private languageService: LanguageService) {
    this.languageService.setLanguage('el');
    this.selectedLanguage = 'el'
    this.selectedLanguageName = "Ελληνικά";
    this.selectedLanguageIcon = "language-greek.png"
  }


  switchLanguage(language: string) {
    console.log(language)
    this.languageService.setLanguage(
      language
    );
    const selectedLang = this.supportedLanguages.find(lang => lang.code === language);
    if (selectedLang) {
      this.selectedLanguageName = selectedLang.name;
      this.selectedLanguageIcon = selectedLang.icon;
    }
  }
}