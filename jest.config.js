module.exports = {
    testTimeout: 30000,
    verbose: false,
    roots: ["<rootDir>"],
    testEnvironment: "node",
    transform: {
        "^.+\\.tsx?$": "ts-jest",
    },
    testRegex:
        "(/__tests__/.*|(\\.|/)(code.test|db.test|controller.test|middleware.test|gps.test|activity.test))\\.tsx?$",
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
    globals: {
        __DEV__: true,
        __PG__: {},
        "ts-jest": {
            importHelpers: true,
            isolatedModules: true,
        },
    },
    coverageThreshold: {
        global: {
            branches: 80,
            functions: 80,
            lines: 80,
            statements: 80,
        },
    },
    collectCoverageFrom: ["src/**/*.{ts,sql}"],
    reporters: [
        "default",
        [
            "jest-junit",
            {suiteName: "Test DB"},
            {
                classNameTemplate: (vars) => {
                    return vars.classname.toUpperCase();
                },
            },
        ],
    ],
    transformIgnorePatterns: ["<rootDir>/node_modules/"],
    runner: "groups",
    coverageReporters: ["json", "lcov", "text", "clover"],
    collectCoverage: false,
    preset: "ts-jest", // use this if you are using TypeScript
    // globalSetup: "<rootDir>/unitTest/db/database_setup.ts",
};
