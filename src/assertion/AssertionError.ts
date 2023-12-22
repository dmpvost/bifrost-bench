/// <reference types="jest" />
/// <reference types="node" />

import {LocalizeError} from "../model/BifrostError";

export default class AssertionError {

    constructor() {
    }

    public static test(obj: LocalizeError) {
        try {
            expect(obj).toMatchObject({
                code: expect.any(String),
                message: expect.any(String),
                translations: {
                    fr: expect.any(String),
                    en: expect.any(String),
                }
            });
        } catch (e) {
            console.error("ERROR -> Assertion -> AssertionApiError:", obj);
            throw e;
        }
    }
}
