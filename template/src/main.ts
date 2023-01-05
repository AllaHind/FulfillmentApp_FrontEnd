import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { registerLicense } from '@syncfusion/ej2-base';

// Registering Syncfusion license key
registerLicense('Mgo+DSMBaFt/QHRqVVhkXlpFdEBB' +
  // tslint:disable-next-line:max-line-length
  'XHxAd1p/VWJYdVt5flBPcDwsT3RfQF5jSH5Wd0dhWH9adHFVQw==;Mgo+DSMBPh8sVXJ0S0J+XE9AdFRDX3xKf0x/TGpQb19xflBPallYVBYiSV9jS31Td0VmWH1ccXRRQmZaVA==;ORg4AjUWIQA/Gnt2VVhkQlFacl1JXGFWfVJpTGpQdk5xdV9DaVZUTWY/P1ZhSXxQdkRjXH5ccnVVQmRUUkE=;ODgzNjE1QDMyMzAyZTM0MmUzMGZZMlBJSThqRkFFWGFZQVgxbm4rRE5XQjBFVWVQZVpQaTQwVUJ5YnNySGM9;ODgzNjE2QDMyMzAyZTM0MmUzMGlONm8yODFyandQSUNxSWJpa1d3ekJTRXdUZWx4cWZNTHdsNkpCTEliRUk9;NRAiBiAaIQQuGjN/V0Z+WE9EaFtAVmJLYVB3WmpQdldgdVRMZVVbQX9PIiBoS35RdUViWXpfcnZURmRUVE1y;ODgzNjE4QDMyMzAyZTM0MmUzMGM1N0xZU3BRSHkyZkZ5YXNVTG1lalViS1ZEbHpja2FVTE1pWlR1VkRYMHc9;ODgzNjE5QDMyMzAyZTM0MmUzMExVejFnQWdOakIxMjN3cHFWV0JQVVhGTjlzMzVUZHRoays3a2dDMjVLeU09;Mgo+DSMBMAY9C3t2VVhkQlFacl1JXGFWfVJpTGpQdk5xdV9DaVZUTWY/P1ZhSXxQdkRjXH5ccnVVQmlZVUA=;ODgzNjIxQDMyMzAyZTM0MmUzMG5PTmxoVFJna0RacHJZRkxiMGFOY1ZRNU41S29RWFIxZ1JGelp6RmZveFU9;ODgzNjIyQDMyMzAyZTM0MmUzMEZ6WHJUTzc1Y3huSzhZUmFFMWFCT1lkdG9SQXlLdSs2aUc3UU11TDYxOUk9;ODgzNjIzQDMyMzAyZTM0MmUzMGM1N0xZU3BRSHkyZkZ5YXNVTG1lalViS1ZEbHpja2FVTE1pWlR1VkRYMHc9');
if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
