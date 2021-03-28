# Use Case: UC01 Register Account

**Actors**: User

**Stakeholder**: User

**Primary Actor**: User

**Preconditions**: Browser has navigated to `$PATH/register`, and user is not logged in.

**Triggers**: Submit button is pressed.

**Purpose**: To register a new user to the system.

**Overview**: An actor interacts with the register system, filling out the form with the required information and submitting it to be registered in the open-sponsor persistent storage.

---

## Main success scenarios (Basic Flow):

| Actor Action | System Response |
|:--------------|:----------------|
| 1. Actor fills out the all form items.| |
| 2. Actor clicks the submit button. | 3. System registers the user in the persistent storage. |
| | 4. System displays message for registration success. |
| | 5. System navigates to the Login screen. |

___

## Alternative Courses:

**1a.** Required field is null, empty, or undefined.

**1b.** Email does not match the regex for email pattern.

---

## Alternative paths (Alternative Flow):

### 1a
| Actor Action | System Response |
|:--------------|:----------------|
| 1. Actor does not fill out the all form items.| |
| 2. Actor clicks the submit button. | 3. System displays message requesting fields be filled out. |
| | 4. System returns to initial preconditions. |

---

### 1b
| Actor Action | System Response |
|:--------------|:----------------|
| 1. Actors email form item does not match the email address regex.| |
| 2. Actor clicks the submit button. | 3. System displays message requesting fields be filled out. |
| | 4. System returns to initial preconditions. |

---

**Postconditions**: Browser has navigated to `$PATH/login`, and system has registered the Actors account.

---
