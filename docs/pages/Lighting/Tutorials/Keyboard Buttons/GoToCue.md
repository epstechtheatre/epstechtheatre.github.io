---
title: Go To Cue
sidebar: Lighting_sidebar
permalink: Lighting_keyboard_gotocue.html
folder: Lighting
# draft: true
# toc: true
summary: Go To Cue is used to quickly jump to a cue much later or much earlier than the current cue. It can also be used to jump to a cue in a different cue list.
# keywords: []
authors: ["Ben MacDonald"]
# last_updated: August 19, 2021
# tags: []
---

## Usage
Type {% include lighting/console_button.html content="Go To Cue" %} and the ID of the cue you want to jump to.

You can also use two other variants of Go To Cue, see the examples below.
## Examples
{% include lighting/console_command.html content="Go To Cue, 5, Enter" noLegend=true noTip=true %}
Goes to Cue 5 in the currently active (and primary if multiple are active) cue list

{% include lighting/console_command.html content="Go To Cue, 4, /, 3, Enter" noLegend=true noTip=true %}
Goes to cue 3 in cue list 4.

{% include lighting/console_command.html content="Go To Cue, Out, Enter" noLegend=true noTip=true %}
Exits the cue list by jumping to the top of the cue stack (setting the first cue to be pending). Also resets all lights to their home state / background values if another source is present.

{% include lighting/console_command.html content="Go To Cue, 0, Enter" noLegend=true noTip=true %}
Goes to the first cue in the active cue list. Sets intensity to the default state, but not non-intensity properties. Sets the first cue to be pending

## Go To Cue 0
A special button on the console. Holding this button down and pressing `Load` for any active cue list will perform the active of `Go To Cue, 0` above.

## On Keyboard
{% include lighting/console_button.html content="Go To Cue" %} is mapped to `CTRL + G` on a QWERTY keyboard.

{% include lighting/console_button.html content="Go To Cue 0" %} is mapped to `CTRL + ALT+ G` on a QWERTY keyboard.