# CarParkEscape 2021 sessions with some classes
[![build](https://github.com/undeadgrishnackh/CarParkEscape2021/workflows/CI%20Build%20gate./badge.svg)](https://github.com/undeadgrishnackh/CarParkEscape2021/actions?query=workflow%3A%22CI+Build+gate.%22)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=undeadgrishnackh_CarParkEscape2021&metric=alert_status)](https://sonarcloud.io/dashboard?id=undeadgrishnackh_CarParkEscape2021)
[![codecov](https://codecov.io/gh/undeadgrishnackh/CarParkEscape2021/branch/master/graph/badge.svg)](https://codecov.io/gh/undeadgrishnackh/CarParkEscape2021)
[![Known Vulnerabilities](https://snyk.io/test/github/undeadgrishnackh/CarParkEscape2021/badge.svg)](https://snyk.io/test/github/undeadgrishnackh/CarParkEscape2021/)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/c8e046ebad254148950f6fea8f671594)](https://app.codacy.com/gh/undeadgrishnackh/CarParkEscape2021/dashboard)
[![BCH compliance](https://bettercodehub.com/edge/badge/undeadgrishnackh/CarParkEscape2021?branch=master)](https://bettercodehub.com/)

This repo contains the lessons done with some XPFarm classes around dysfunctional product ownership and how it affects the TDD flow. The whole sessions are built around a RPG gamification to refine the "dysfunctional" kata description into 3 user stories with incremental complexity. Every US is refined in a dysfunctional and functional way:
- *dysfunctional*: the PO doesn't provide proper UAT, the developers are disconnected between user behaviors (E2E tests) and code behaviors (Unit tests);
- *functional*: developers "challenge" the PO with an open and legit question 'how do you wanna test the US during the demo?'. It triggers a functional ATDD discussion that creates one or multiple UATs in the Given/When/Then format. The developers use the UAT as BDD E2E loop and start to deep dive into the user behaviors behind the scenario, creating de facto the notes for the upcoming pomodoro of coding. These notes are used from the pair (driver/navigator) to drive the coding session.

# the kata
The parking escape kata description is (https://www.codewars.com/kata/591eab1d192fe0435e000014 |THIS ONE) and besides being a lovely exercise for coding how it is was created opens up a great opportunity to improve it as a better agile software development backlog.
- US1: the flat grocery store parking
- US2: a 2 floors parking
- US3: a multi-level parking

---
# US1 - The flat grocery store parking ✅ 
> AS a driver that parked in a grocery store parking \
> I NEED to understand which is the path to the exit \
> SO THAT I'll be able to escape it ASAP.

## UAT: ✅ 
>GIVEN 🚘 🅿️ 🅿️ 🅿️ 🅿️ 🅿️ as input \
>WHEN I request the shortest path to the exit \
>THEN I receive "R5".

## Code Behaviors - Unit Tests (2' coding mini-loops):
1. Am I in a parking lot?
 - ✅ Is an array
 - ✅ Is not an empty array
 - ✅ are cars parked in

2. Where is my car? 
 - ✅ find my car into the parking

3. Move to the exit... 
 - ✅ move to the RIGHT 
 - ✅ move multiple steps

---
# US2 - 2 floors parking lot
## Scenario 1 - E2E: park on floor #0
**Given** "[[1,0,0,0,0,0],[0,2,0,0,0,0]]" as input\
**When** I ask to find the shortest path to the exit\
**Then** I received "R4"
### Unit tests behavioral flow
1. Am I in a multifloor parking lot?
 - ✅ multi array input [[...],[...]]
 - ✅ above ground floor there must be a stair [1]
 - ✅ reject empty floors input
2. where is my car?
 - ✅ new tupla (floor + spot ✅)
 - ✅ ⚠️ because the building is passed as a reverse kinda underground parking, the tupla is floor, slot where floor is human oriented floor number and raw array index.
## Scenario 2 - E2E: park on floor #1 with stairs on the Right
**Given** "[[0,0,2,0,0,1],[0,0,0,0,0,0]]" as input\
**When** I ask to find the stairs for the shortest path to the exit\
**Then** I received "[R3,D1]"
### Unit tests behavioral flow
3. where is the stair on this floor?
 - Stairs on the right
4. move to the exit
 - move to the RIGHT ✅
 - move DOWN
## Scenario 3 - E2E: park on floor #1 with stairs near to me on the Right
**Given** "[[0,0,2,1,0,0],[0,0,0,0,0,0]]" as input\
**When** I ask to find the stairs for the shortest path to the exit\
**Then** I received "[R1,D1,R2]"
## Scenario 4 - E2E: park on floor #1 with stairs on the Left
**Given** "[[1,0,2,0,0,0],[0,0,0,0,0,0]]" as input\
**When** I ask to find the stairs for the shortest path to the exit\
**Then** I received "[L2,D1,R5]"


### uncovered behaviors
3. where is the stair on this floor?
 - Stairs on the right
 - stairs on the Left
 - stairs in the middle of the floor (L || R)
4. move to the exit
 - move to the RIGHT ✅
 - move to the LEFT
 - move DOWN