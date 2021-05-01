# Use Case: UC07a Edit Module - Author edits module

**Actors**: Logged in User

**Stakeholder**: Logged in User

**Primary Actor**: Logged in User

**Preconditions**: Browser has navigated to `$PATH/dashboard`, the user logged in, and the user has a registered account.

**Triggers**: .

**Purpose**: .

**Overview**: .

---

## Main success scenarios (Basic Flow):

| Actor Action | System Response |
|:--------------|:----------------|
| 1. Actor navigates to /dashboard after logging in.| |
| 2. Actor clicks the "Find a Sponsor" button. | 3. System authenticates the users JWT token. |
| | 4. System retrieves users meeting the criteria. |
| | 5. System displays a list of users with a button prompt to interact. |

___

## Alternative Courses:

**1a.** Actor clicks the "Find Sponsees" button.

---

## Alternative paths (Alternative Flow):

### 1a
| Actor Action | System Response |
|:--------------|:----------------|
| 1. Actor navigates to /dashboard after logging in.| |
| 2. Actor clicks the "Find Sponsees" button. | 3. System authenticates the users JWT token. |
| | 4. System retrieves users meeting the criteria. |
| | 5. System displays a list of users with a button prompt to interact. |

---

**Postconditions**: None.

---
