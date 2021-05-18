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
## TDD/ATDD Double loop approach.
### Scenario 1:
GIVEN [2,0,0,0,0,0] as input
WHEN I request the shortest path to the exit
THEN I receive "R5".

#### 2' loop UnitTest+:
1. Am I in a parking lot?
 . Is an array
 . Is not empty array
 . are cars parked in
2. Where is my car?
 . find my car slot as 2 into the array
3. Move to the exit
 . move to the RIGHT
 . move multiple steps