# Purple Hearts
  Purple Hearts is a Javascript speed typing game. The game exists on a 2D grid with one vertical line on the left and three equidistant horizontal lines. The player can freely move vertically between each line. Enemies with a word anchored to them will appear on a random lane and move towards the player. Players can destroy the enemy by correctly typing the anchored word. If the player can survive 15 levels without losing their three lives, they win.

# Functionality & MVPs
  + Gameplay
    + Players will use their up and down arrows to move vertically between three lanes
    + Enemies will appear along the three lanes and can move horizontally towards the player
    + Players can destroy enemy by typing the word anchored to the enemy before the enemy reaches the player
  + Design
    + Includes a control container with SVGs for music/mute music, optional play button/pause button, current level, count of remaining lives 
    + Once in gameplay mode, includes a button in top left corner to access tutorial again 

# Wireframes
![home_wireframe](https://github.com/vuongcindy/JS_project/blob/main/images/home_wireframe.png)
![game_wireframe](https://github.com/vuongcindy/JS_project/blob/main/images/game_wireframe.png)

# Technologies, Libraries, APIs
  + Genius Lyrics API will be used to fetch words
  + Canvas API will be used to add visual elements 
  + Webpack will be used to bundle JS files for browser usage 
  + npm will be used as a JS package manager

# Implementation Timeline
  + Friday Afternoon
    + Research how to use and integrate APIs, webpacks
    + Create base framework
  + Weekend
    + Add keybinding
    + Add font color changes (green if correct letter is typed, red if not)
    + Render static enemies 
    + Add logic for enemies being added and destroyed
    + Render static player
  + Monday
    + Add logic for each level
    + Add horizontal movement for enemies
    + Add vertical movement for player
  + Tuesday
    + Create instruction page
    + Add music
    + Add controls (mute music, display levels, display remaining lives)
  + Wedneday
    + Add static sprites
    + Testing and debugging
  + Thursday Morning
    + Deploy to GitHub or Heroku
    + Update README

# Bonus Features
  + Tutorial popups
  + Pause game button and logic
  + Upgrade static sprites to moving sprites
