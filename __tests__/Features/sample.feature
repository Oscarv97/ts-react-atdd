Feature: Feature fuckit

   Feature Description


Scenario: Color change

Given The user can load the page
And can click onto the button
Then it should change the colour

Scenario Outline: Drone Multiple Journies
Given The drone has <Fuel> 
And the first dropoff is at <locationA>
And the second location is at <locationB>
Then i would expect the drone to <response> the Order

Examples:
| Fuel | locationA | locationB          | response |
| 40   | 30303e 32423w  | 3234e 53454w  | accept   |
| 40   | 39492394423w  | 3234e 53454w  | decline   |
| 40   | 30303e 32423w  | 1234e 53454w  | accept   |