import { run as lightingRun } from "./lighting/apiBoardPref.js";

switch (GLOBAL_pageFolder) {
    case "Lighting": {
        lightingRun()
    }

    default:
        break;
}