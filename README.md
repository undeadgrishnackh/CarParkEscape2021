# CarParkEscape2021
[![build](https://github.com/undeadgrishnackh/CarParkEscape2021/workflows/CI%20Build%20gate./badge.svg)](https://github.com/undeadgrishnackh/CarParkEscape2021/actions?query=workflow%3A%22CI+Build+gate.%22)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=undeadgrishnackh_CarParkEscape2021&metric=alert_status)](https://sonarcloud.io/dashboard?id=undeadgrishnackh_CarParkEscape2021)
[![codecov](https://codecov.io/gh/undeadgrishnackh/CarParkEscape2021/branch/master/graph/badge.svg)](https://codecov.io/gh/undeadgrishnackh/CarParkEscape2021)
[![Known Vulnerabilities](https://snyk.io/test/github/undeadgrishnackh/CarParkEscape2021/badge.svg)](https://snyk.io/test/github/undeadgrishnackh/CarParkEscape2021/)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/c8e046ebad254148950f6fea8f671594)](https://app.codacy.com/gh/undeadgrishnackh/CarParkEscape2021/dashboard)
[![BCH compliance](https://bettercodehub.com/edge/badge/undeadgrishnackh/CarParkEscape2021?branch=master)](https://bettercodehub.com/)

🚧 CodeScene must be configured to scan the repository. Click the badge...
[![CodeScene System Mastery](https://codescene.io/projects/7748/status-badges/system-mastery)](https://codescene.io/projects/7748)

---

# Car Park Escape 2021
## XPFarm yellow belt

Kata source: https://www.codewars.com/kata/591eab1d192fe0435e000014

# User Stories Decomposition
## US1 - the grocery store parking
UAT 1: ✅
1. the parking lot is **FLAT** ([2])
2. the car is parked inside it
3. the exit is on the extreme RIGHT (last array spot)
4. so => *expect an "R0"* as the result.
> code bahaviors
>> - IN is an array ✅
>> - Guard: reject wrong NO array input (undefined ✅, not an array✅) 
>> - Guard: reject empty array ✅
>> - Guard: reject a parking without my car
>> - ✅ Inside the array must be a car (2) 
>> move to the exit exit

#### TechDebt considerations:
- ✅ the guardian doesn't have a real unit check tester as exported functions
- ✅ car indicator and free slot are just numbers not so readable
- **TODO 4 LATER!** input is only an ARRAY not a MULTIARRAY --> US2 more difficult.

UAT 2: ✅
1. the parking lot is **FLAT** (_6 spots on 1 floor_)
2. the car is parked inside it (_in the extreme left_)
3. the exit is on the extreme RIGHT (_spot 6_)
4. so => *expect an "R5"* as the result.

> code behaviors
>> moving multiple steps
#### TechDebt: 
- split the US/UAT in multiple scenarios/files.
- didn't check for the parking elements: !! maybe rule engin with list.
 - 0 is accepted as parking free slot
 - 2 is a my Car
 - TODO: US2 1 as the staircase
- ✅ the result is a string ❌, or must be an ARRAY✔️

Unit:
1. input as array
2. empty slot === 0
3. car === 2
4. no stairs on floor 0
5. my car must be in the parking

>>> code behaviors
>> 1. guardians
>> 2. flat building
>> 3. moving to the right
>> 4. moving multiple steps

### US1 -
--- Desc
as a driver
i want to have a direction to the exit from a flat parking space with 6 slots
so that i can escape on the shortest route

--- UAT
Given a flat parking space
when finding the exit
then 

### US2 - As a driver i want to find the ideal route in a two floor parking space with the stairs on the right so that i can escape by only moving to the right and then down 1 floor

-   Given two dimensional array (items representing the parking floor, with 5 slots on each floor
    1 indicating the stair, 2 the car position, and 0 empty slots), with stair above exit
    example input `[[2,0,0,0,1],[0,0,0,0,0]]`
-   When calculating escape route
-   Then the output should be an array of strings\
    first item: move to far right - `Rx` - x being the number of slots the car needs to move for the stair\
    second item: `D1` \
    example output `['R4', 'D1']`

>>> code behaviors
>> 1. guardians ?? multiple array ??
>> 2. multi floors building
>> 3. moving to the right ?? LEFT ??
>> 4. looking for the staircase
>> 5. moving DOWN


## TechDebt
- Guardian should check the first item in the argument includes a car
- Check whether it is a 5 slots length