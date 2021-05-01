# Use Case: UC04a Connect Users - Send request to connect

**Actors**: Logged in User

**Stakeholder**: Logged in User

**Primary Actor**: Logged in User

**Preconditions**: Browser has navigated to `$PATH/dashboard`, the user logged in, and the user has clicked either "Find Sponsor" or "Find Sponsees" buttons.

**Triggers**: Actor clicks the "Sponsor me?" or "Sponsor them!" buttons.

**Purpose**: Actor is requesting another user to connect to them as a sponsor or a sponsee.

---

## Main success scenarios (Basic Flow):

| Actor Action | System Response |
|:--------------|:----------------|
| 1. Actor navigates to /dashboard and has clicked the "Find a Sponsor" button.| |
| 2. Actor clicks the "Sponsor me?" button. | 3. System generates a request. |
| | 4. System posts the request to the target user. |
| | 5. System disables the "Sponsor me?" button for the target user. |

___

## Alternative Courses:

**1a.** Actor clicks the "Sponsor them!" button.

---

## Alternative paths (Alternative Flow):

### 1a
| Actor Action | System Response |
|:--------------|:----------------|
| 1. Actor navigates to /dashboard and has clicked the "Find Sponsees" button.| |
| 2. Actor clicks the "Sponsor them!" button. | 3. System generates a request. |
| | 4. System posts the request to the target user. |
| | 5. System disables the "Sponsor them!" button for the target user. |

---

**Postconditions**: Continue to display list of users to send another request with buttons disabled for users where a request was already sent.

---
