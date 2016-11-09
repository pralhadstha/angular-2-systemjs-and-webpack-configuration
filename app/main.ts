import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';
//could use ./folder/app.module.ts or from root of main app folder defined in system.config.js
// E.g. : app/app/app.module or ./app/app.module in inside another app folder

platformBrowserDynamic().bootstrapModule(AppModule); //bootstrap the module we want to use