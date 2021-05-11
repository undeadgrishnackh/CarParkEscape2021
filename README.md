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
1. check the input
  - reject not array
  - reject empty array
  - reject parking without my car parked there
2. find your car
3. guide me to the exit