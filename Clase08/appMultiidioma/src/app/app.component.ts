import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  availableLanguages = [];

  constructor(private readonly translate: TranslateService) {
    this.translate.addLangs(['es', 'en']);
    this.translate.setDefaultLang('es');

    const languageBrowser = this.translate.getBrowserLang();
    this.translate.use(languageBrowser.match(/es|en/) ? languageBrowser : 'es');

    this.availableLanguages = this.translate.langs;
  }

  available(language: string) {
    this.translate.use(language);
  }
}
