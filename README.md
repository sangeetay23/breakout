## Breakout Game Documentation

This documentation outlines the structure and functionality of the "Breakout!" game, built using HTML, CSS, and JavaScript.

### Files

* **index.html:** The main HTML file that displays the game.
* **style.css:** Defines the styling and visual appearance of the game elements.
* **script.js:** Contains the JavaScript code that handles the game logic, animations, and interactions.

### index.html

* **DOCTYPE html:** Declares the document type as HTML5.
* **html tag:** Represents the root element of the HTML document.
* **head tag:** Contains metadata about the document.
    * **meta tags:** Define character set and viewport settings.
    * **link tag:** Links the `style.css` file for styling.
    * **title tag:** Specifies the title of the HTML document.
* **body tag:** Contains the visible content of the HTML document.
    * **h1 tag:** Displays the game title.
    * **button tag (id="rules-btn"):** A button to show the game rules.
    * **div tag (id="rules"):** Contains the game rules, initially hidden.
        * **h2 tag:** Title for the rules section.
        * **p tags:** Explain the game rules.
        * **button tag (id="close-btn"):** A button to close the rules section.
    * **canvas tag (id="canvas"):** The canvas element where the game is rendered.
    * **script tag:** Links the `script.js` file for JavaScript logic.

### style.css

* **@import url:** Imports the "Balsamiq Sans" font from Google Fonts.
* **:root:** Defines custom CSS variables for color themes:
    * `--background-color`: Background color.
    * `--background-secondary-color`: Secondary background color.
    * `--canvas-color`: Canvas background color.
    * `--text-color`: Text color.
    * `--sidebar-color`: Color for the rules sidebar.
    * `--button-color`: Button background color.
    * `--hover-color`: Button hover color.
* **\*:** Applies general styles to all elements.
* **body:** Styles the main body of the game:
    * Sets background color and gradient.
    * Defines font family.
    * Centers the content horizontally and vertically.
    * Sets minimum height to the full viewport height.
    * Removes default margins.
* **h1:** Styles the game title.
* **canvas:** Styles the canvas element:
    * Sets background color.
    * Makes it a block element.
    * Adds border-radius.
    * Sets width and maximum width.
* **.btn:** Styles the buttons:
    * Sets cursor style.
    * Removes default border.
    * Adds padding, background color, text color, border-radius, font inheritance, and font size.
* **.btn:focus:** Removes outline on focus.
* **.btn:hover:** Changes background color on hover.
* **.btn:active:** Applies a slight scale transformation on click.
* **.rules-btn:** Styles the "Show Rules" button:
    * Positions it absolutely at the top-left corner.
* **.rules:** Styles the rules sidebar:
    * Positions it absolutely at the top-left corner.
    * Sets background color and text color.
    * Defines minimum height, width, padding, and line-height.
    * Initially hides the sidebar by translating it horizontally.
    * Adds a transition effect for smooth sidebar appearance.
* **.rules.show:** Styles the rules sidebar when it is visible:
    * Translates the sidebar to its visible position.

### script.js

#### Game Variables

* **rulesButton, closeButton, rules, canvas, ctx:** References to HTML elements.
* **color, secondaryColor:** CSS variables for button and sidebar colors.
* **score:** Stores the player's score.
* **brickRowCount, brickColumnCount:** Number of rows and columns for bricks.
* **heightRatio:** Ratio used for responsive canvas height.
* **canvas.height, ctx.canvas.width, ctx.canvas.height:** Sets the canvas dimensions.

#### Game Objects

* **ball:** Represents the ball object with properties like position, size, speed, and movement direction.
* **paddle:** Represents the paddle object with properties like position, size, speed, and movement direction.
* **brickInfo:** Contains information about each brick, including size, padding, and offset.
* **bricks:** A 2D array representing the bricks in the game.

#### Functions

* **drawBall(), drawPaddle(), drawScore(), drawBricks():** Functions to draw the game elements on the canvas.
* **draw():** Clears the canvas and redraws all elements.
* **movePaddle():** Moves the paddle based on keyboard input.
* **moveBall():** Moves the ball and handles collisions with walls, paddle, and bricks.
* **increaseScore():** Increases the score and resets bricks if needed.
* **showAllBricks():** Makes all bricks visible again.
* **keyDown(), keyUp():** Event handlers for keyboard input to control the paddle.
* **update():** Updates the game state and redraws the canvas continuously.

#### Event Listeners

* **keydown, keyup:** Listen for keyboard events to move the paddle.
* **click (rulesButton, closeButton):** Listen for clicks on the rules button and close button to show and hide the rules sidebar.

#### Initialization

* **update():** Calls the `update` function to start the game loop.

### Game Logic

* The game loop continuously updates the positions of the ball and paddle, checks for collisions, and redraws the elements on the canvas.
* The player uses the left and right arrow keys to move the paddle.
* The ball bounces off the walls and the paddle.
* When the ball hits a brick, the brick disappears, and the score increases.
* If the ball falls below the bottom of the canvas, the game resets, and all bricks become visible again.
* The game also includes a "Rules" section with instructions on how to play.

### Summary

This Breakout game is a simple and fun implementation of the classic arcade game. The code is well-structured and uses clear variable names and comments. The game provides basic game mechanics, including ball movement, paddle control, brick collisions, and score tracking. The responsive design and CSS styling enhance the visual appeal of the game.
