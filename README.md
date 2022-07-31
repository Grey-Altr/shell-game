## The Golden Rule: 

🦸 🦸‍♂️ `Stop starting and start finishing.` 🏁

If you work on more than one feature at a time, you are guaranteed to multiply your bugs and your anxiety.

## Making a plan

1) **Make a drawing of your app. Simple "wireframes"** 
1) **Look at the drawing and name the HTML elements you'll need to realize your vision**
1) **Look at the drawing and imagine using the app. What _state_ do you need to track?** 
1) **For each HTML element ask: Why do I need this? (i.e., "we need div to display the results in")** 
1) **Once we know _why_ we need each element, think about how to implement the "Why" as a "How" (i.e., `resultsEl.textContent = newResults`)**
1) **Find all the 'events' (user clicks, form submit, on load etc) in your app. Ask one by one, "What happens when" for each of these events. Does any state change? Does any DOM update?**
1) **Think about how to validate each of your features according to a Definition of Done. (Hint: console.log usually helps here.)**
1) **Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.**

Additional considerations:
- Ask: which of your HTML elements need to be hard coded, and which need to be dynamically generated?
- Consider your data model. 
  - What kinds of objects (i.e., Dogs, Friends, Todos, etc) will you need? 
  - What are the key/value pairs? 
  - What arrays might you need? 
  - What needs to live in a persistence layer?
- Is there some state we need to initialize?
- Ask: should any of this work be abstracted into functions? (i.e., is the work complicated? can it be reused?)


| User should be able to . . .                                                         |             |
| :----------------------------------------------------------------------------------- | ----------: |
| Visit the deployed pages on GitHub pages, with link in the About section of the Github repo|        2✓ |
| See three cups, with a button beneath each of them.                               |        2✓ |

| Events . . .                                                         |             |
| :----------------------------------------------------------------------------------- | ----------: |
| On clicking a cup button, the total number of guesses increment                         |        2 ✓|
| On clicking the correct cup button, the total number of correct guesses increment                       |        2✓ |
| On clicking the incorrect cup button, the number of incorrect guesses increments                       |        2✓ |
| On click, see the correct cup's image change, clearing out the previous correct guess style|2✓|

| Functions                                                              |             |
| :----------------------------------------------------------------------------------- | ----------: |
| IMPURE: `resetStyles()`, sets all the cups back to empty and hides the ball from the user | 2✓ |
| IMPURE: `getRandomItem(arr) : returns random item from given array` | 2 |
| IMPURE: `handleGuess(userGuess, correctSpot)`, should take in the userGuess and the correctSpot. Use getRandomItem to figure out the "correct spot". It resets the styles, figures out if the user got it right, increments the wins if so, increments the total games no matter what, and adds the ball to the correct cup | 4 |
  

## Events
- User clicks any of the three cup buttons
  - (reset image of all cups)
  - Set State
    - Increment total attempts
    - Use Math.random() to decide which cup is correct
    - We need to compare the correct cup with the cup the user clicked
      - If the user clicked the correct cup, increment win
      - (optionally: If the user did NOT click the correct cup, increment loss)
  - Update DOM
    - Change image of correct cup
    - Change numbers in winEl, lossEl, and totalEl





Project plan:

1) App loads to header "3 CUPS" showing three cups with buttons under each, beneath which is a list of the current games stats displaying number of games played, number of wins and number of losses.

2) User clicks the button corresponding to their choice.

3) Correct choices reveal the ball. Incorrect choice show an empty cup.

4) Stat Counter updates 
