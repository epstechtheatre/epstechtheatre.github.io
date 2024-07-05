---
title: Slash (/)
sidebar: Lighting_sidebar
permalink: Lighting_keyboard_slash.html
folder: Lighting
# draft: true
# toc: true
summary: Slash is used to select a subset from a target. This could be a cue in a cue list, for example.
# keywords: []
authors: [Bea MacDonald]
last_updated: August 21, 2021
# tags: []
---

## Usage
Most commonly, you will be using {% include lighting/console_button.html content="Slash" %} to change between cue lists. However, you can also use it to patch to a universe without doing complex math. See the examples.
## Examples
- You want to load cue list 5
{% include lighting/console_command.html content="Cue, 5, /, Enter, Load" noLegend=true noTip=true %}

- You are in the patch tab and want to patch channel 7 to universe 3, address 400
{% include lighting/console_command.html content="7, At, 3, /, 400, Enter" noLegend=true noTip=true %}

### Complex Examples
You are working on a scene and want to make a light half as bright as it is currently
{% include lighting/console_command.html content="1, /, 5, Enter" noLegend=true noTip=true %}
{% include tip.html content="In this case, / is acting as a divide symbol. You can type any number after the slash and it will divide the current intensity of the light by that value. Additionally, if you are running this command on a group, the division will happen per light, meaning, for example, each light will be divided by whatever 50% is to them." %}

## On Keyboard
{% include lighting/console_button.html content="Slash" %} is mapped to `/` on a QWERTY keyboard.