# CarParkEscape2021
[![build](https://github.com/undeadgrishnackh/CarParkEscape2021/workflows/CI%20Build%20gate./badge.svg)](https://github.com/undeadgrishnackh/CarParkEscape2021/actions?query=workflow%3A%22CI+Build+gate.%22)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=undeadgrishnackh_CarParkEscape2021&metric=alert_status)](https://sonarcloud.io/dashboard?id=undeadgrishnackh_CarParkEscape2021)
[![codecov](https://codecov.io/gh/undeadgrishnackh/CarParkEscape2021/branch/master/graph/badge.svg)](https://codecov.io/gh/undeadgrishnackh/CarParkEscape2021)
[![Known Vulnerabilities](https://snyk.io/test/github/undeadgrishnackh/CarParkEscape2021/badge.svg)](https://snyk.io/test/github/undeadgrishnackh/CarParkEscape2021/)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/c8e046ebad254148950f6fea8f671594)](https://app.codacy.com/gh/undeadgrishnackh/CarParkEscape2021/dashboard)
[![BCH compliance](https://bettercodehub.com/edge/badge/undeadgrishnackh/CarParkEscape2021?branch=master)](https://bettercodehub.com/)

🚧 CodeScene must be configured to scan the repository. Click the badge...
[![CodeScene System Mastery](https://codescene.io/projects/7748/status-badges/system-mastery)](https://codescene.io/projects/7748)

# US1 - Flat grocery store park
## E2E:
**Given** "[2,0,0,0,0,0]" as input
**When** I ask for the shortest path to the exit
**Then** I received "R5"

## Unit tests behavioral flow
> functional appraoch "user knowledge" driven (numeric items)  with the technology expertise to enhance the details ( nested - items):
1. Am I in a parking lot?
 - reject NOT array input []
 - reject empty array
 - reject array input different from Integer (0,2)
2. where is my car?
 - spot
3. move to the exit
 - move to the RIGHT

---
# US2 - 2 floors parking lot
## Scenario 1 - E2E: park on floor #1 with stairs on the Right
**Given** "[[0,0,2,0,0,1],[0,0,0,0,0,0]]" as input
**When** I ask to find the stairs for the shortest path to the exit
**Then** I received "[R3,D1]"
## Scenario 2 - E2E: park on floor #1 with stairs near to me on the Right
**Given** "[[0,0,2,1,0,0],[0,0,0,0,0,0]]" as input
**When** I ask to find the stairs for the shortest path to the exit
**Then** I received "[R1,D1,R2]"
## Scenario 3 - E2E: park on floor #1 with stairs on the Left
**Given** "[[1,0,2,0,0,0],[0,0,0,0,0,0]]" as input
**When** I ask to find the stairs for the shortest path to the exit
**Then** I received "[L2,D1,R5]"
## Scenario 4 - E2E: park on floor #0
**Given** "[[1,0,0,0,0,0],[0,2,0,0,0,0]]" as input
**When** I ask to find the stairs for the shortest path to the exit
**Then** I received "R4"


## Unit tests behavioral flow
1. Am I in a multifloor parking lot?
 - multi array input [[...],[...]]
 - above ground floor there must be a stair [1]
 - reject empty floors input
2. where is my car?
 - new tupla (floor + spot ✅)
3. where is the stair on this floor?
 - Stairs on the right
 - stairs on the Left
 - stairs in the middle of the floor (L || R)
4. move to the exit
 - move to the RIGHT ✅
 - move to the LEFT
 - move DOWN



---
#### TODO LIST:
1. TODO: FIX ✕ find my car in parking lot with 1 floor (3 ms)
2. US1 should be improved as "read as a book" rule.
3. ❓ why are so many tests in skip??
4. double check that we are ready for US2....


### TECH DEBT.
- FIXME: bad way to test it.... expose the whereIsMyCar.
- TODO: in US#2 is necessary to revamp the whereIsMyCar from spot# to a tupla (floor; spot#)