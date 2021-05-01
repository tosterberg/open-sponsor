# Use Case: UC04b Connect Users - Accept request to connect

**Actors**: Logged in User

**Stakeholder**: Logged in User

**Primary Actor**: Logged in User

**Preconditions**: Browser has navigated to `$PATH/requests`, and the user logged in.

**Triggers**: Actor clicks the "Accept" or "Reject" request button.

**Purpose**: Actor is responding to a request made by another user.

---

## Main success scenarios (Basic Flow):

| Actor Action | System Response |
|:--------------|:----------------|
| 1. Actor navigates to /requests.| |
| 2. Actor clicks the "Accept" button. | 3. System updates the request to a connection. |
| | 4. System updates the sponsor/sponsee details on their respective profiles. |
| | 5. System removes the card representing the request. |

___

## Alternative Courses:

**1a.** Actor clicks the "Reject" button.

---

## Alternative paths (Alternative Flow):

### 1a
| Actor Action | System Response |
|:--------------|:----------------|
| 1. Actor navigates to /requests.| |
| 2. Actor clicks the "Reject" button. | 3. System updates the request to rejected. |
| | 4. System removes the card representing the request. |

---

**Postconditions**: Continue to display list of remaining requests that have not yet been responded too.

---
