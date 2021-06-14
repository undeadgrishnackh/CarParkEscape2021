# CarParkEscape2021
[![build](https://github.com/undeadgrishnackh/CarParkEscape2021/workflows/CI%20Build%20gate./badge.svg)](https://github.com/undeadgrishnackh/CarParkEscape2021/actions?query=workflow%3A%22CI+Build+gate.%22)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=undeadgrishnackh_CarParkEscape2021&metric=alert_status)](https://sonarcloud.io/dashboard?id=undeadgrishnackh_CarParkEscape2021)
[![codecov](https://codecov.io/gh/undeadgrishnackh/CarParkEscape2021/branch/master/graph/badge.svg)](https://codecov.io/gh/undeadgrishnackh/CarParkEscape2021)
[![Known Vulnerabilities](https://snyk.io/test/github/undeadgrishnackh/CarParkEscape2021/badge.svg)](https://snyk.io/test/github/undeadgrishnackh/CarParkEscape2021/)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/c8e046ebad254148950f6fea8f671594)](https://app.codacy.com/gh/undeadgrishnackh/CarParkEscape2021/dashboard)
[![BCH compliance](https://bettercodehub.com/edge/badge/undeadgrishnackh/CarParkEscape2021?branch=master)](https://bettercodehub.com/)
U
🚧 CodeScene must be configured to scan the repository. Click the badge...
[![CodeScene System Mastery](https://codescene.io/projects/7748/status-badges/system-mastery)](https://codescene.io/projects/7748)

---

# Car Park Escape 2021
## XPFarm yellow belt

Kata source: https://www.codewars.com/kata/591eab1d192fe0435e000014

# User Stories Decomposition - 1' attempt
>>> user-centric but still disconnected from the development flow
## US1 - the grocery store parking
UAT 1: >> E2E 🤷‍♂️ => '~BDD'
1. the parking lot is **FLAT** (_1 spot on 1 floor_)
2. the car is parked inside it (_in the unique parking slot_)
3. the exit is on the extreme RIGHT (_spot 1_)
4. so => *expect an "R0"* as the result.
a
UAT 2: >> E2E 🤷‍♂️ => '~BDD'
1. the parking lot is **FLAT** (_6 spots on 1 floor_)
2. the car is parked inside it (_in the extreme left_)
3. the exit is on the extreme RIGHT (_spot 6_)
4. so => *expect an "R5"* as the result.


---
# User Stories Decomposition - 2' attempt
>>> user story creation with ATDD refinement
>>> TDD/ATDD Double loops approach.
## US 1 - the flat grocery store parking.
AS a driver that parked in a grocery store parking
I NEED to understand which is the path to the exit
SO THAT I'll be able to escape it ASAP.

### UAT 1: ✅
GIVEN [2,0,0,0,0,0] as input
WHEN I request the shortest path to the exit
THEN I receive "R5".
#### UnitTests (2' coding miniloops):
1. Am I in a parking lot? 
 . ✅ Is an array?
 . ✅ Is not empty array?
 . ✅ are cars parked in?
2. Where is my car?
 . ✅ find my car slot as 2 into the array (spot number)
3. Move to the exit
 . ✅ move to the RIGHT
 . ✅ move multiple steps

 # User Stories Decomposition - 3' attempt
 >>> user story creation with ATDD refinement
>>> TDD/ATDD Double loops approach.
## US 1 - the flat grocery store parking.
AS a driver that parked in a grocery store parking
I NEED to understand which is the path to the exit
SO THAT I'll be able to escape it ASAP.

### UAT 1: ✅
GIVEN [[2,0,0,0,0,0]] as input
WHEN I request the shortest path to the exit
THEN I receive "R5".

#### UnitTests (2' coding miniloops):
1. Am I in a parking lot? 
 - Is a Proper Parking lot
  . ✅ Is an array?
  . ✅ Is not empty array?
 - Is my car in Parking lot?
  . ✅ are cars parked in?
2. Where is my car?
 . ✅ find my car floor as 0
 . ✅ find my car slot as 2 into the array (spot number)
3. Move to the exit
 . ✅ move to the RIGHT
 . ✅ move multiple steps

### UAT 2: ✅
GIVEN [0,2,0,0,0,0] as input
WHEN I request the shortest path to the exit
THEN I receive "R4".
#### Unit Tests (2' coding mini lops):
1. ✅ create the multi-steps algorithm (move 4 steps)

---

# US2: 2-floors parking
AS a driver that parked in a 2-floors parking
I NEED to find the stairs
SO THAT I'll be able to find the exit ASAP.

### UAT 4: parking on the ground floor 😌
GIVEN [[0,0,0,0,0,1],[0,2,0,0,0,0]] as the parking lot
WHEN I request the shortest path to the exit
THEN I receive "[R4]".

#### unit test mini-loops:
1. is a 2 floors parking?
 - ?: input is a multidimension array [[],[]]
   - ? [[],[]] --> Rejcted
   - Refactor US2 UAT4 guardian

 - WIP: reject everhing else than {0,1,2}
 - after 1' floor must be a stairs case
2. in which floor is my car?
 - floor number
 - parking slot or spot ✅ in previous US but must change in a tupla (floor, spot)

##### unit tests
- ✅ Split guards into:
  - Check building composition
    - ✅ building is not an array
    - ✅ building is empty = []
    - ✅ building floor 0 is empty = [[]]
  - Check buiding contents
    - ✅ reject parking lot without car = [[0,0,0,0,0,0]]
    - ✅ accept building where car parked on ground floor = [[2,0,0,0,0,0]]
##### TECH DEBT
- refactor US1 tests so that they pass with new 2D array
- only checking ground floor is empty

### UAT 1: stairs on the extreme RIGHT side
GIVEN [[0,0,2,0,0,1],[0,0,0,0,0,0]] as the parking lot
WHEN I request the shortest path to the exit
THEN I receive "[R3,D1]".

### UAT 3: stairs on the immediate RIGHT
GIVEN [[0,0,2,1,0,0],[0,0,0,0,0,0]] as the parking lot
WHEN I request the shortest path to the exit
THEN I receive "[R1,D1,R2]".

### UAT 2: stairs on the extreme LEFT side 😖
GIVEN [[1,0,2,0,0,0],[0,0,0,0,0,0]] as the parking lot
WHEN I request the shortest path to the exit
THEN I receive "[L2,D1,R5]".


--- 
>>> Decide where to put these behaviours into your UATs...
#### unit-tests user behaviors & logic:
> 1. is a 2 floors parking?
>  - reject everhing else than {0,1,2}
>  - after 1' floor must be a stairs case
>  - input is a multidimension array [[],[]]
> 2. in which floor is my car?
>  - floor number
>  - parking slot or spot ✅ in previous US but must change in a tupla (floor, spot)
3. where are the stairs?
  - on the RIGHT
  - on the LEFT
4. move to the exit...
 - move RIGHT ✅ in previous US
 - move DOWN
 - move LEFT


 


✅ Refactor
1. ✅ Decouple the test cases
2. 🚧 Separate the constructor funcionality to new method
  - 🚧 Change failing testcases to work with newly created method
🚧

>> For the next lesson

- double loop and refactor loop;
- 