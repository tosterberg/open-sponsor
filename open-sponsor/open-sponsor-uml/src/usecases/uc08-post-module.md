# Use Case: UC08 Post Module

**Actors**: Logged in User

**Stakeholder**: Logged in User

**Primary Actor**: Logged in User

**Preconditions**: Browser has navigated to `$PATH/createModules`, the user logged in, and the user has a registered account.

**Triggers**: Actor clicks the "Save Module" button.

**Purpose**: Actor is posting a learning module to be worked on by other users.

---

## Main success scenarios (Basic Flow):

| Actor Action | System Response |
|:--------------|:----------------|
| 1. Actor navigates to /createModules after logging in.| |
| 2. Actor fills in all fields to create a learning module.| |
| 3. Actor clicks the "Save Module" button. | 4. System validates the submission. |
| | 5. System adds the learning module to the collection. |
| | 6. System displays successful posting. |

___

## Alternative Courses:

**1a.** Actor clicks the "Save Module" button without filling out all fields.
**1b.** Actor clicks the "Cancel" button.

---

## Alternative paths (Alternative Flow):

### 1a
| Actor Action | System Response |
|:--------------|:----------------|
| 1. Actor navigates to /createModules after logging in.| |
| 2. Actor does not fill in all fields to create a learning module.| |
| 3. Actor clicks the "Save Module" button. | 4. System validates the submission. |
| | 5. System displays error due to failed validation. |
| | 5. System resets to Preconditions. |

### 1b
| Actor Action | System Response |
|:--------------|:----------------|
| 1. Actor navigates to /createModules after logging in.| |
| 2. Actor does/doesn't fill in all fields to create a learning module.| |
| 3. Actor clicks the "Cancel" button. | 4. System proceeds to Postconditions. |

---

**Postconditions**: Browser navigates back to `$PATH/myPublishedModules`.

---
