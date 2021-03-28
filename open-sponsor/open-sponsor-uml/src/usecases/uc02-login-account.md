# Use Case: UC02 Login Account

**Actors**: Registered User

**Stakeholder**: Registered User

**Primary Actor**: Registered User

**Preconditions**: Browser has navigated to `$PATH/login`, the user is not logged in, and the user has a registered account.

**Triggers**: Login button is pressed.

**Purpose**: To login a registered user to the system.

**Overview**: An actor interacts with the login system, filling out the form with the required information and submitting it to be authenticated against the open-sponsor persistent storage.

---

## Main success scenarios (Basic Flow):

| Actor Action | System Response |
|:--------------|:----------------|
| 1. Actor fills out the all form items.| |
| 2. Actor clicks the login button. | 3. System authenticates the users form entries against the persistent storage. |
| | 4. System displays message for login success. |
| | 5. System navigates to the Dashboard screen. |

___

## Alternative Courses:

**1a.** Required field is null, empty, or undefined.

**1b.** Username or password does not match the authenticated account username and password.

---

## Alternative paths (Alternative Flow):

### 1a
| Actor Action | System Response |
|:--------------|:----------------|
| 1. Actor does not fill out the all form items.| |
| 2. Actor clicks the login button. | 3. System displays message stating the username or password was incorrect. |
| | 4. System returns to initial preconditions. |

---

### 1b
| Actor Action | System Response |
|:--------------|:----------------|
| 1. Actors form items do not match the account username and password.| |
| 2. Actor clicks the login button. | 3. System displays message stating the username or password was incorrect. |
| | 4. System returns to initial preconditions. |

---

**Postconditions**: Browser has navigated to `$PATH/dashboard`, and system has logged in the Actors account.

---
