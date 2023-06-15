import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'FrictionReport';

  constructor(private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer){
    this.matIconRegistry.addSvgIcon(
      "open_in_new",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/open_in_new_300.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "help",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/help_300.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "sun",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/weather-icons/sun_300.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "moon",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/weather-icons/moon_300.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "partly_cloudy_day",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/weather-icons/partly_cloudy_day_300.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "partly_cloudy_night",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/weather-icons/partly_cloudy_night_300.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "cloudy",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/weather-icons/cloudy_300.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "rain",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/weather-icons/rain_300.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "thunderstorm",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/weather-icons/thunderstorm_300.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "snow",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/weather-icons/snow_300.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "foggy",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/weather-icons/foggy_300.svg")
    );
  }

}
