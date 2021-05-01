# Use Case: UC06 Find Module

**Actors**: Logged in User

**Stakeholder**: Logged in User

**Primary Actor**: Logged in User

**Preconditions**: Browser has navigated to `$PATH/findModules`, the user logged in, and the user has a registered account.

**Triggers**: Actor enters search criteria into search box and clicks the "search" button.

**Purpose**: Actor is entering query criteria to find modules based on creator or step.

---

## Main success scenarios (Basic Flow):

| Actor Action | System Response |
|:--------------|:----------------|
| 1. Actor navigates to /findModules after logging in.| |
| 2. Actor types a query into the pages search box. | |
| 3. Actor clicks the "search" button. | 4. System authenticates the users JWT token. |
| | 4. System queries the collection based on the search string. |
| | 5. System displays the resulting learning modules. |

___

## Alternative Courses:

**1a.** Actor enters the search criteria into the search box and presses the Enter key.

---

## Alternative paths (Alternative Flow):

### 1a
| Actor Action | System Response |
|:--------------|:----------------|
| 1. Actor navigates to /findModules after logging in.| |
| 2. Actor types a query into the pages search box. | |
| 3. Actor presses the Enter key. | 4. System authenticates the users JWT token. |
| | 4. System queries the collection based on the search string. |
| | 5. System displays the resulting learning modules. |

---

**Postconditions**: None.

---
