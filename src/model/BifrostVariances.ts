import {FixtureObject} from "./FixtureObject";

export class FixtureVariances<Input,Output> {

    constructor() {
    }

    field: string | undefined;
    alterations: Array<FixtureObject<Input,Output>> = [];
    undefined?: boolean; // Add a test with undefined
}



