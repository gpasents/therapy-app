import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.css']
})
export class LanguageSelectorComponent {
  supportedLanguages = [
    { code: 'en', name: 'English', icon: 'eng-icon.png' },
    { code: 'el', name: 'Ελληνικά', icon: 'language-greek.png' }
    // Add more languages as needed
  ];

  selectedLanguage: string;
  selectedLanguageName: string;
  selectedLanguageIcon: string;

  constructor(private translateService: TranslateService) {
    this.selectedLanguage = translateService.currentLang;
    this.selectedLanguageName = "greek";
    this.selectedLanguageIcon = "language-greek.png"
  }


  changeLanguage(code: string) {
    const selectedLang = this.supportedLanguages.find(lang => lang.code === code);
    if (selectedLang) {
      this.selectedLanguageName = selectedLang.name;
      this.selectedLanguageIcon = selectedLang.icon;
    }
  }


}