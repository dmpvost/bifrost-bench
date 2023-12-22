import {FixtureVariances} from "./BifrostVariances";
import {FixtureObject} from "./FixtureObject";
import {getLocalList, microTesting, verifyError, verifySuccess} from "../utils";
import {CodeM} from "./BifrostError";

export type BifrostBenchCallback<Input, Output> = (mock: FixtureObject<Input, Output>) => Promise<void>;
export type BifrostSimpleBenchCallback<Input, Output> = (objTest: FixtureObject<Input, Output>) => Promise<void>;

export class BifrostBench {

    public static variances<Input, Output>(
        description: string,
        template: FixtureObject<Input, Output>,
        variances: Array<FixtureVariances<Input, Output>>,
        callback: BifrostBenchCallback<Input, Output>
    ): void {
        describe(description, () => {
            const testData = microTesting(template, variances);

            test.each(testData.map(testCase => [testCase.title, testCase]))(
                "%s",
                async (title: string, objTest: FixtureObject<Input, Output>) => {
                    try {
                        // Ici, vous pouvez ajouter des logiques supplémentaires si nécessaire
                        await callback(objTest);
                        verifySuccess(objTest);
                    } catch (e) {
                        // Gestion des erreurs spécifique à BifrostBench
                        verifyError(objTest, e);
                    }
                }
            );
        });
    }

    public static listSuite<Input, Output>(
        description: string,
        list: Array<FixtureObject<Input, Output>>,
        callback: BifrostSimpleBenchCallback<Input, Output>,
        additionnalErrorCode?: Array<CodeM>
    ): void {
        describe(description, () => {
            test.each(list.map(objTest => [objTest]))(
                "%s",
                async (objTest: FixtureObject<Input, Output>) => {
                    try {
                        // Exécution de la logique de test
                        await callback(objTest);
                        // Vérification du succès si nécessaire
                        verifySuccess(objTest);
                    } catch (e) {
                        // Gestion des erreurs spécifique
                        verifyError(objTest, e, additionnalErrorCode);
                    }
                }
            );
        });
    }


    public static getList<Input, Output>(obj: Array<any>): Array<FixtureObject<Input, Output>> {
        if (Array.isArray(obj)) {
            let globalArray: Array<FixtureObject<Input, Output>> = [];
            let arr: any;
            for (arr of obj) {
                globalArray = globalArray.concat(getLocalList(arr));
            }
            if (globalArray.length <= 0) {
                throw new Error("FixtureProvider getList array is empty! bug!");
            }
            //console.log("getList:", globalArray);
            return globalArray;
        } else {
            return getLocalList(obj);
        }
    }


}
