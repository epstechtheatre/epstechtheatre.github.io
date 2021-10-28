---
title: Undo / Redo
sidebar: Lighting_sidebar
permalink: Lighting_keyboard_undo_redo.html
folder: Lighting
# draft: true
# toc: true
summary: Undo and Redo can be used to undo and redo most actions taken when using the console. Undo history is cleared on save or power off.
# keywords: []
authors: ["Ben MacDonald"]
last_updated: October 28, 2021
# tags: []
---

## Usage
Type {% include console_button.html content="Undo" %} to open the command history. Then, use the up and down arrow keys to select how many commands you want to undo. Commands highlighted in gold will be undone in order of most to least recent.

If you realize immediately after that you want to redo your commands click the redo button on the monitor **Before clearing your command line.**

{% include console_button.html content="Undo" %} can also be used for operations taken in blind mode.
## Examples
{% include console_button.html content="Undo" %}
Opens the undo panel

{% include console_button.html content="Undo, Undo, Enter" %}
Undoes the last typed command (right before the undo command)

## Limitations
The {% include console_button.html content="Undo" %} command cannot be used for changes made to a magic sheet. However, change snapshots can be made by clicking the "Save" button in the bottom left of the screen when editing a magic sheet. When using snapshots, you will be able to {% include console_button.html content="Undo" %} back to the last snapshot.

## On Keyboard
{% include console_button.html content="Undo" %} is mapped to `CTRL + X` on a QWERTY keyboard.