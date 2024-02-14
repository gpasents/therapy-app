// language.service.ts
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
@Injectable()
export class LanguageService {
  private _language = new Subject<string>();
  language$ = this._language.asObservable();

  setLanguage(language: string): void {
    this._language.next(language);
  }
}