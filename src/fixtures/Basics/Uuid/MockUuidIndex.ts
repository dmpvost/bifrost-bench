import {MockUuidSucces} from "./Uuid_syntaxe/MockUuidSyntaxeSuccess";
import {MockUuidSyntaxeError} from "./Uuid_syntaxe/MockUuidSyntaxeError";

export class MockUuidIndex {
    success_syntaxe = new MockUuidSucces();
    errors_syntaxe = new MockUuidSyntaxeError();
}

