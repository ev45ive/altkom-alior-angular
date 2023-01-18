import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

// platformServer.bootstrapModule(ServerModule)
// platformNative.bootstrapModule(MobileModule)

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
