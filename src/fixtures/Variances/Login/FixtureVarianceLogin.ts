// import {FixtureBasicIndex} from "../../Basics/FixtureBasicIndex";
// import {FixtureInjectionIndex} from "../../Injections/FixtureInjectionIndex";
// import {BifrostBench} from "../../../model/BifrostBench";
//
// let basics = new FixtureBasicIndex();
// let injections = new FixtureInjectionIndex();
//
// export class FixtureVarianceLogin {
//     login: Array<VarianceFields<{
//         login: string,
//         password: string,
//         apikey: string
//     }>> = [
//         {
//             field: 'login',
//             mocks: BifrostBench([
//                 basics.Email.success.ostermannVincentAtGmailComOK,
//                 basics.Email.error,
//                 basics.Email.neverUsed,
//                 injections.login
//             ]),
//             removeField: true
//         },
//         {
//             field: 'password',
//             mocks: FixtureProvider.getList([
//                 basics.Password.error.ERR_0186_bad_id_or_bad_password,
//             ]),
//             removeField: true
//         },
//         {
//             field: 'apikey',
//             mocks: FixtureProvider.getList([
//                 basics.Apikey.error,
//                 basics.Apikey.success
//             ]),
//             removeField: false
//         }
//     ];
//
// }
