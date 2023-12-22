import AssertionError from "./assertion/AssertionError";
import {CodeM, LocalizeError, MessageCodes} from "./model/BifrostError";
import {FixtureObject} from "./model/FixtureObject";
import {FixtureVariances} from "./model/BifrostVariances";

export function microTesting<Input, Output>(template: FixtureObject<Input, Output>, variances: Array<FixtureVariances<Input, Output>>): Array<FixtureObject<Input, Output>> {
    let listTest: Array<FixtureObject<Input, Output>> = [template];

    variances.forEach(variance => {
        if (variance.field !== undefined) {
            // @ts-ignore
            if (template.object[variance.field] === undefined) {
                return;
            }
        }

        variance.alterations.forEach(mock => {
            const generatedMock = buildMicroTesting(template, mock, variance);
            if (generatedMock) {
                listTest.push(generatedMock);
            }
        });

        if (variance.undefined !== false) {
            const objectWithoutField = {...template.object};
            //@ts-ignore
            delete objectWithoutField[variance.field];
            listTest.push(new FixtureObject<Input, Output>("missing field", objectWithoutField, {error: MessageCodes.BAD_FORMAT.code}));
        }
    });

    return listTest;
}

function buildMicroTesting<Input, Output>(defaultMock: FixtureObject<Input, Output>, mock: FixtureObject<Input, Output>, variance: FixtureVariances<Input, Output>): FixtureObject<Input, Output> | null {
    const copy = new FixtureObject<Input, Output>(defaultMock.title, {...defaultMock.object}, {
        success: defaultMock.success,
        error: defaultMock.error
    });

    if (typeof mock.object === "object") {
        copy.object = {...copy.object, ...mock.object};
    } else {
        // @ts-ignore
        copy.object[variance.field] = mock.object;
    }

    copy.success = mock.success;
    copy.error = mock.error;
    copy.title = mock.title;
    return verifyObjectAndPrepare(copy);
}


function verifyObjectAndPrepare<Input, Output>(obj: FixtureObject<Input, Output>): FixtureObject<Input, Output> {
    if (!obj) {
        console.error("obj:", obj);
        throw new Error("FixtureProvider have not item!");
    }
    if (obj instanceof FixtureObject) {
        // ok
    } else {
        console.error("obj:", obj);
        throw new Error("This object is not a FixtureObject");
    }
    if (obj && obj.success && obj.error) {
        console.error("item:", obj);
        throw new Error("FixtureProvider both success & error are set! Fix this before");
    }

    return obj;
}

export function verifySuccess<Input, Output>(mock: FixtureObject<Input, Output>) {
    if (mock.error) {
        throw new Error("verifyError: Should FAIL!");
    }
    if (!mock.success) {
        throw new Error("verifySucces: mock.succes is NOT set! You FORGET to add value!");
    }
}

export function verifyError<Input, Output>(obj: FixtureObject<Input, Output>, error: any, additionnalExpectedErrorCode?: Array<string>) {
    if (obj.success) {
        console.error("Should be success:", {
            mock: JSON.stringify(obj, null, 4),
            error: JSON.stringify(error, null, 4),
            additionnalErrorCode: additionnalExpectedErrorCode,
        });
        throw new Error(
            "verifyError: mock.success! Should be a SUCCESS! [" + additionnalExpectedErrorCode + "] Error:" + error
        );
    }
    if (!obj.error) {
        console.error("Should be an error:", {
            obj: obj,
            error: error,
            additionnalErrorCode: additionnalExpectedErrorCode,
        });
        throw new Error("verifyError: mock.error is NOT set! You FORGET to add value!");
    }
    let expectedErrorCodeList: Array<string> = [];
    if (additionnalExpectedErrorCode) {
        if (Array.isArray(additionnalExpectedErrorCode)) {
            expectedErrorCodeList = expectedErrorCodeList.concat(additionnalExpectedErrorCode);
        } else {
            expectedErrorCodeList.push(additionnalExpectedErrorCode);
        }
    }
    if (obj && obj.error) {
        expectedErrorCodeList.push(obj.error);
    }
    verifyBifrostErrorObject(error, expectedErrorCodeList);
}


function verifyBifrostErrorObject(err: LocalizeError, expectedErrorCode: Array<string>): boolean {

    if (!expectedErrorCode) {
        console.error('FixtureObject in error:');
        throw new Error("FixtureApiError: errCode reveived is null ! ");
    }

    if (!err) {
        console.error('FixtureObject in error:');
        throw new Error("FixtureApiError: error reveived is null ! ");
    }

    if (Array.isArray(expectedErrorCode)) {
        let errorLocalCode: CodeM;
        let findError: boolean = false;
        for (errorLocalCode of expectedErrorCode) {
            if (err?.code === errorLocalCode) {
                findError = true;
            }
        }
        if (findError === false) {
            console.error("Error:", err);
            console.error('FixtureObject in error:');
            throw new Error("Bad statusCode [" + err?.code + "] should one of [" + expectedErrorCode + "]");
        }
    } else {
        if (err?.code !== expectedErrorCode) {
            console.error("Error:", err);
            console.error('FixtureObject in error:');
            throw new Error("Bad statusCode [" + err?.code + "] should be [" + expectedErrorCode + "]");
        }
    }

    try {
        AssertionError.test(err);
    } catch (e) {
        console.error(JSON.stringify(err, null, 4));
        console.error('FixtureObject in error:');
        console.error("Format AssertionApiError:" + JSON.stringify(e, null, 4));
        throw e;
    }

    return true;
}


export function getLocalList<Input, Output>(obj: any): Array<FixtureObject<Input, Output>> {
    let globalArray: Array<FixtureObject<Input, Output>> = [];

    if (obj instanceof FixtureObject) {
        globalArray.push(obj);
        return globalArray;
    }

    if (obj instanceof FixtureVariances) {
        throw new Error(
            "You are using FixtureVariances as a FixtureObject. Do you forget to use function variantSuite?"
        );
    }

    let item: any;
    for (item of Object.entries(obj)) {
        //console.log("item:", item);

        if (item[1] instanceof FixtureObject) {
            let val: FixtureObject<Input, Output> = verifyObjectAndPrepare(item[1]);
            globalArray.push(val);
        } else if (typeof item[1] === "object") {
            globalArray = globalArray.concat(getLocalList(item[1]));
        } else {
            throw new Error(
                "This is situation is very bad. Good luck! typeof[" +
                typeof obj +
                "]" +
                JSON.stringify(obj, null, 4)
            );
        }
    }

    return globalArray;
}

