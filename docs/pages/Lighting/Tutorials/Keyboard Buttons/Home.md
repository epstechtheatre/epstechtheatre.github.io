---
title: Home
sidebar: Lighting_sidebar
permalink: Lighting_keyboard_home.html
folder: Lighting
# draft: true
# toc: true
summary: Home returns the target to it's default state.
# keywords: []
authors: ["Ben MacDonald"]
last_updated: August 19, 2021
# tags: []
---

## Usage
By "Homing" A light, you return all of it's properties to default. Typically, this is intensity at 0, colour properties at 100%, and focus/pan at 50% (or whatever degree 50% is). However, if the light is part of the default preset, homing the light will return it to the parameters defined in that group.
## Examples
{% include lighting/console_command.html content="1, Home, Enter" noLegend=true noTip=true %}
Returns the light to its home state.

{% include lighting/console_command.html content="1, Color, Home, Enter" noLegend=true noTip=true %}
Return the light's colour properties to their home values.
## On Keyboard
{% include lighting/console_button.html content="Home" %} is mapped to `Home` on a QWERTY keyboard.