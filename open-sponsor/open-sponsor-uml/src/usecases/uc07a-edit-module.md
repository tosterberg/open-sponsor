# Use Case: UC07a Edit Module - Author edits module

**Actors**: Logged in User

**Stakeholder**: Logged in User

**Primary Actor**: Logged in User

**Preconditions**: Browser has navigated to `$PATH/editModules`, the user logged in, and the user is the author of the module.

**Triggers**: Actor clicks the "Save Module" button.

**Purpose**: Actor is editing a published learning module to be worked on by other users.

---

## Main success scenarios (Basic Flow):

| Actor Action | System Response |
|:--------------|:----------------|
| 1. Actor navigates to /editModules after logging in.| |
| 2. Actor makes a change to any field, or does not.| |
| 3. Actor clicks the "Save Module" button. | 4. System validates the submission. |
| | 5. System updates the learning module in the collection. |
| | 6. System displays confirmation of successful edit. |

___

## Alternative Courses:

**1a.** Actor clicks the "Cancel" button.

---

## Alternative paths (Alternative Flow):

### 1a
| Actor Action | System Response |
|:--------------|:----------------|
| 1. Actor navigates to /editModules after logging in.| |
| 2. Actor makes a change to any field, or does not.| |
| 3. Actor clicks the "Cancel" button. | 4. System proceeds to Postconditions. |

---

**Postconditions**: Browser navigates back to `$PATH/myPublishedModules`.
