
# XO | Noughts & Crosses

"XO" is a website for playing noughts and crosses (tic-tac-toe) where users can engage in games against their friends or play against a computer opponent.

## Demo & Snippits
[https://xo-play.vercel.app/](https://xo-play.vercel.app/)

**Game Menu**

![XO_Menu](https://github.com/MrMeshak/XO/assets/94204153/e06c02a6-4c8b-489c-8cf0-d56628e0d848)

**Gameplay**

![XO_Gameplay](https://github.com/MrMeshak/XO/assets/94204153/d19bafda-2417-4514-89f8-33c4611d3d64)

**Win State**

![XO_game_end](https://github.com/MrMeshak/XO/assets/94204153/2aaecee0-8473-498d-97fa-eaf5a6cad728)

## Features
* **Responsive Design** : displays the optimal layout for the game depending on screen size.
* **Single Player Mode (computer player)** : computer player implemented with two difficulty settings. In easy mode, the computer moves to a random position on the board. In hard mode, the computer uses the Minimax algorithm to determine the optimal move, making it impossible to beat.
* **Multiplayer Mode (single device)** : Two people can play against each other on a single device by taking turns.
* **Score Tracking** : When playing a series of games, the number of wins for each player is displayed.

## Learnings
My goal with this project was to not only create a fun little game but also to learn some new technologies and techniques.

* **Testing with Jest** : This is my first project implementing unit testing with Jest. I really saw the power and value of automated testing when developing the game logic and the Minimax algorithm for the computer player.

* **Styling using TailwindCSS** : It was great to try out TailwindCSS. I really enjoyed the ability to have the 'css with the html'. This helped to minimise CSS naming problems and makes it super easy to modify the styling or HTML.

* **State Management with Zustand** : Coming from my previous projects using Redux, I really enjoyed using Zustand because of its simplicity and minimal boilerplate.

## Acknowledgments

* **FrontendMentor** : This project is based on the [Tic Tac Toe Challenge from Frontend Mentor](https://www.frontendmentor.io/challenges/tic-tac-toe-game-Re7ZF_E2v)
