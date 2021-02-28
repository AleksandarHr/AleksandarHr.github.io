---
layout: project
title: Where Else? ElseWhere.
---

A prototype for a 2D tile-based puzzle game made in Unity.

# 2D Tile-Based Puzzle Game
*ElseWhere* is a prototype of a 2D tile-based top-down puzzle game. You, the player, controls a single character which moves from one room to another. In every room you have to solve a puzzle in order to enter the next one. There are a few rooms with no puzzles which are referred to as the *hub rooms* (see below). The puzzles rely on a few key mechanics described below. Since part of the fun is that the player has to figure out the mechanics of the levels and of the character - stop reading, reach out to me so I can send you the playable prototype for you to playthrough, and then come back to read the rest (a.k.a. **spoiler alert**).

# Level Design
The levels design consist of a set of tiles each with certain characteristics. These characteristics along with the mechanics specific to the character construct the respective puzzles.

## Tile Types
There are various types of tiles which the player encounters throughout the game. Part of the fun is for the player to explore the mechanics behind each tile type, so what :

* Regular tiles <img width="3%" src="/images/ElseWhere/RegularTile.png">: the player can freely walk on those.
* Hole tiles <img width="3%" src="/images/ElseWhere/Hole.png">: if the player walks on a hole tile, the character is respawned at the level starting location.
* Wall tiles <img width="3%" src="/images/ElseWhere/Wall.png">: the player can never move through this tile.
* Red door tiles <img width="3%" src="/images/ElseWhere/GateTemp.jpg">: the player needs to unlock the door to move through it
* Single push-down panel <img width="3%" src="/images/ElseWhere/PanelCrumbleUnbroken.png"> <img width="3%" src="/images/ElseWhere/PanelCrumbleBroken.png">: the player needs to stand on top of this once to open a red door.
* Double push-down panel <img width="3%" src="/images/ElseWhere/PanelDoubleCrumbleUnbroken.png"> <img width="3%" src="/images/ElseWhere/PanelDoubleCrumbleBroken.png">: the player and its clone must stand on top of two such tiles simultaneously to open a red door.
* One-way Gate <img width="3%" src="/images/ElseWhere/OneWayGate.png">: the player can only walk through this tile in the direction specified by the arrow.
* Yellow door tiles  <img width="3%" src="/images/ElseWhere/KeyedGate.png">: the player needs to pickup the yellow key in order to unlock the yellow door.
* Yellow door key tile  <img width="3%" src="/images/ElseWhere/Key.png">: the key which unlocks the yellow door.
* Teleport tiles <img width="3%" src="/images/ElseWhere/Teleporter.png">: if the player steps on such a tile it will be teleported to a location of another specific such tile in the same level.
* Ice tiles <img width="3%" src="/images/ElseWhere/Ice.png">: when the player enters an ice tile it will continue to slide in the same direction until there are no more ice tiles.

# Mechanics
The main character mechanic is a *cloning ability*. The player can spawn a clone of itself - initially, the clone is a floating blue sphere which after a cool-down period of a few seconds or a 4 tile movements a blue character clone is spawned. This ability is crucial for solving some of the puzzles - e.g. puzzles which have double push-down panels or puzzles which require the character to reach a part of the level which is cut-off by hole tiles. While this mechanic is simple it allowed for some quite interesting and challenging puzzles. <br/>
**TODO:** Another character mechanic which was only a work-in-progress by the end of this project was what we called a *blow-back* ability. The *blow-back* ability could be used to either push certain *movable* tiles around or to push back the character itself away from *static* tiles.

# Story & NPC
**TODO:** Something which can be considered crucial for a successful game (also recognized by us as such) is the game story. Our plan was for the game story to be told mainly through NPCs (e.g. non-playable characters) which would be positioned in the so-called *hub rooms* - the rooms which have no puzzles in them but rather serve as a transitions between parts of the game (and parts of the story).

# Walkthrough
Below you can watch a complete walkthrough for the game prototype.
{% include youtube_embed.html id="e9iNxfWE7ig" %}  
*I have no rights on the music: Meditation Spa - Celtic Spa - Long a Growing With Gentle Birdsong for Calm and Peaceful Relaxation.* <br/>

Explore the source code [here](https://github.com/AleksandarHr/ElseWhere){:target="_blank"}. <br/>
The sprites for the character were taken from the [2D Roguelike Tutorial](https://learn.unity.com/project/2d-roguelike-tutorial){:target="_blank"}. <br/>
_The project was implemented in collaboration with Jerry Chen, Tyler Dewey, and Eric Raymaker._
