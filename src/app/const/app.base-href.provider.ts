import {APP_BASE_HREF} from "@angular/common";
import {BaseHrefService} from "../lazy/services/base-href/base-href.service";

export const APP_BASE_HREF_PROVIDER = {
  provide: APP_BASE_HREF,
  useFactory: (service: BaseHrefService) => {
    console.log("App Base Href Factory");

    if (!service.value) {
      const value = () => {
        // window.location.pathname
        return "/Test-Base-Href";
      }

      service.next(value());
    }

    return service.value;
  },
  deps: [BaseHrefService]
}
