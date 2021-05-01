# Use Case: UC05 Message Users

**Actors**: Logged in User

**Stakeholder**: Logged in User

**Primary Actor**: Logged in User

**Preconditions**: Browser has navigated to `$PATH/chatroom`, the user logged in, and the user has selected a room for their chat.

**Triggers**: Actor types a message into the textbox and clicks the "Send" button.

**Purpose**: Actor is posting a message the chatroom.

---

## Main success scenarios (Basic Flow):

| Actor Action | System Response |
|:--------------|:----------------|
| 1. Actor navigates to /chatroom after logging in.| |
| 2. Actor types a message into the pages textbox. | |
| 3. Actor clicks the "Send" button. | 4. System authenticates the users JWT token. |
| | 4. System posts the message to the chatroom. |
| | 5. System redraws the chat feed with the new message. |

___

## Alternative Courses:

**1a.** Actor presses the Enter key after typing message.

---

## Alternative paths (Alternative Flow):

### 1a
| Actor Action | System Response |
|:--------------|:----------------|
| 1. Actor navigates to /chatroom after logging in.| |
| 2. Actor types a message into the pages textbox. | |
| 3. Actor presses the Enter key. | 4. System authenticates the users JWT token. |
| | 4. System posts the message to the chatroom. |
| | 5. System redraws the chat feed with the new message. |

---

**Postconditions**: System clears the textbox to blank for a new message to be sent.

---
