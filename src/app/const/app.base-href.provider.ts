import {APP_BASE_HREF} from "@angular/common";
import {BaseHrefService} from "../lazy/services/base-href/base-href.service";

export const APP_BASE_HREF_PROVIDER = {
  provide: APP_BASE_HREF,
  useFactory: (service: BaseHrefService) => {
    if (!service.value) {
      service.next(window.location.pathname);
    }

    return service.value;
  },
  deps: [BaseHrefService]
}
