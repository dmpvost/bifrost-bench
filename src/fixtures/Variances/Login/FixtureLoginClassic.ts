//
// let basics = new FixtureBasicIndex();
// let injections = new FixtureInjectionIndex();
//
// export class FixtureLoginClassic {
//     classic: Array<
//         VarianceFields<{
//             app: AppOxycar;
//             env: EnvOxycar;
//             route: AuthentificationRoute;
//             flow: UserFlow;
//             dnsLocal: string;
//             cust_uuid: string;
//             ent_uuid: string;
//         }>
//     > = [
//         {
//             field: "cust_uuid",
//             mocks: FixtureProvider.getList([basics.UUID.success_users_exist]),
//             removeField: false,
//         },
//         {
//             field: "ent_uuid",
//             mocks: FixtureProvider.getList([basics.UUID.success_ent_uuid]),
//             removeField: false,
//         },
//         {
//             field: "app",
//             mocks: FixtureProvider.getListFromENUM_key(AppOxycar),
//             removeField: false,
//         },
//         {
//             field: "env",
//             mocks: FixtureProvider.getListFromENUM_key(EnvOxycar),
//             removeField: false,
//         },
//         {
//             field: "route",
//             mocks: FixtureProvider.getListFromENUM_key(AuthentificationRoute),
//             removeField: false,
//         },
//         {
//             field: "flow",
//             mocks: FixtureProvider.getListFromENUM_key(UserFlow),
//             removeField: false,
//         },
//         {
//             field: "dnsLocal",
//             mocks: FixtureProvider.getList([basics.DNS.succes]),
//             removeField: false,
//         },
//     ];
// }
