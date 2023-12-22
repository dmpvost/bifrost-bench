import {FixtureSiretSuccess} from "./FixtureSiretSuccess";
import {FixtureSiretFailed} from "./FixtureSiretFailed";

export class FixtureSiretIndex {

    success = new FixtureSiretSuccess();
    error = new FixtureSiretFailed();
}
