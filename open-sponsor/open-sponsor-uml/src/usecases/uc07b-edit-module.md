# Use Case: UC07b Edit Module - Actor edits personal stepwork module

**Actors**: Logged in User

**Stakeholder**: Logged in User

**Primary Actor**: Logged in User

**Preconditions**: Browser has navigated to `$PATH/editStepwork`, the user logged in, and the user is the username on their copy of the learning module.

**Triggers**: Actor clicks the "Save Module" button.

**Purpose**: Actor is saving an edited step work learning module.

---

## Main success scenarios (Basic Flow):

| Actor Action | System Response |
|:--------------|:----------------|
| 1. Actor navigates to /editStepwork after logging in.| |
| 2. Actor makes a change to any field, or does not.| |
| 3. Actor clicks the "Save Module" button. | 4. System validates the submission. |
| | 5. System updates the step work module in the collection. |
| | 6. System displays confirmation of successful edit. |

___

## Alternative Courses:

**1a.** Actor clicks the "Cancel" button.

---

## Alternative paths (Alternative Flow):

### 1a
| Actor Action | System Response |
|:--------------|:----------------|
| 1. Actor navigates to /editStepwork after logging in.| |
| 2. Actor makes a change to any field, or does not.| |
| 3. Actor clicks the "Cancel" button. | 4. System proceeds to Postconditions. |

---

**Postconditions**: Browser navigates back to `$PATH/stepwork`.
