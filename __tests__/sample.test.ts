import { loadFeature, defineFeature } from "jest-cucumber";

const feature = loadFeature("./__tests__/Features/sample.feature");

defineFeature(feature, (test) => {
    test('Color change', ({ given, when, then, pending }) => { 
        given('The user can load the page', () => {            
            pending();                                         
        });                                                    
                                                               
        given('can click onto the button', () => {             
            pending();                                         
        });                                                    
                                                               
        then('it should change the colour', () => {            
            pending();                                         
        });                                                    
    });  
    
    test('Drone Multiple Journies', ({ given, when, then, pending }) => {
        given(/^The drone has (.*)$/, (arg0) => {
            pending();
        });

        given(/^the first dropoff is at (.*)$/, (arg0) => {
            pending();
        });

        given(/^the second location is at (.*)$/, (arg0) => {
            pending();
        });

        then(/^i would expect the drone to (.*) the Order$/, (arg0) => {
            pending();
        });
    });
});

