import { loadFeature, defineFeature } from "jest-cucumber";

const feature = loadFeature("./__tests__/Features/sample.feature");

defineFeature(feature, (test) => {
    test('It Does a thing', ({ given, when, then, pending }) => {
        given('The fucker loads', () => {
            pending();
        });

        given('i can click it', () => {
            pending();
        });

        then('it should do shit', () => {
            pending();
        });
    });
});

