import {CodeM} from "./BifrostError";

export class FixtureObject<Input, Output> {

    title: string;
    object: Input;
    success: Output | undefined;
    error: CodeM | undefined;
    field: string | undefined;

    constructor(title: string, object: Input, result: { success?: Output, error?: CodeM } = {}) {
        this.title = title;
        this.object = object;
        if (result && result.error) this.error = result.error;
        if (result && result.success) this.success = result.success;

        if (result && result.error && result.success) {
            throw new Error("Warning! You should add ONLY one error or one success! " + JSON.stringify({
                title: title,
                object: object,
                result: result
            }, null, 4));
        }
    }

    public toString(): string {
        if (!this) {
            console.error("this:", this);
            throw new Error('FixtureProvider have not item!');
        }
        if (this && this.success && this.error) {
            console.error("item:", this);
            throw new Error('FixtureProvider both success & error are set! Fix this before');
        }

        if (!this.error && !this.success) {
            throw new Error('You forget to add .succes or .error scenario for : ' + JSON.stringify(this, null, 4));
        }

        if (this.error) {
            if (this.field) {
                return 'should fail \t| ' + this.field + ' [' + this.error + '] ->\t' + this.title;
            } else {
                return 'should fail \t| ' + this.error + ' ->\t' + this.title;
            }

        } else {
            if (this.field) {
                return 'should success \t| ' + this.field + '->\t' + this.title;
            } else {
                return 'should success \t| ' + this.title;
            }

        }

    }

}






