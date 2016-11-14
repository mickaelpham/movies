import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { MovieAppModule } from './movie-app.module';

const platform = platformBrowserDynamic();
platform.bootstrapModule(MovieAppModule);
