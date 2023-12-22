// import {FixtureBasicIndex} from "../../Basics/FixtureBasicIndex";
// import {FixtureInjectionIndex} from "../../Injections/FixtureInjectionIndex";
//
// let basics = new FixtureBasicIndex();
// let injections = new FixtureInjectionIndex();
//
// export class FixtureSuperCustomer {
//
//     register: Array<VarianceFields<any>> = [
//         {
//             field: 'email',
//             mocks: FixtureProvider.getList([
//                 basics.Email.neverUsed,
//                 basics.Email.error,
//                 injections.routageCustomer
//             ]),
//             removeField: true
//         },
//         /* {
//              field: 'password',
//              mocks: FixtureProvider.getList([
//                  injections.Password.error.ERR_0354_account_already_exist_with_other_password,
//              ]),
//              removeField: true
//          },*/
//         {
//             field: 'dns',
//             mocks: FixtureProvider.getList([
//                 basics.DNS
//             ]),
//             removeField: false
//         },
//         {
//             field: 'cust_first_name',
//             mocks: FixtureProvider.getList([
//                 basics.ProperName.success_firstName,
//                 basics.ProperName.error,
//             ]),
//             removeField: true
//         }, {
//             field: 'cust_last_name',
//             mocks: FixtureProvider.getList([
//                 basics.ProperName.success_lastName,
//                 basics.ProperName.error,
//             ]),
//             removeField: true
//         },
//         {
//             field: 'cust_phone_number',
//             mocks: FixtureProvider.getList([
//                 basics.PhoneNumber.success,
//                 basics.PhoneNumber.error,
//             ]),
//             removeField: false
//         },
//         {
//             field: 'cust_uuid',
//             mocks: FixtureProvider.getList([
//                 basics.UUID.success_users_exist,
//                 basics.UUID.errors_users_dont_exist,
//                 basics.UUID.errors_syntaxe,
//             ]),
//             removeField: true
//         }
//     ];
//
// }
