---
title: Sneak
sidebar: Lighting_sidebar
permalink: Lighting_keyboard_sneak.html
folder: Lighting
# draft: true
# toc: true
summary: Shift allows you to gradually transition a lights property to another value
# keywords: []
authors: ["Bea MacDonald"]
last_updated: August 19, 2021
# tags: []
---

## Usage
Like what would happen in a cue list, you can use {% include lighting/console_button.html content="Shift" %} to slowly transition a light's property or properties to another value over a timed interval. There are also complex usages, see the examples below.
## Examples
{% include lighting/console_command.html content="1, At, Full, Sneak, Enter" noLegend=true noTip=true %}
Sneaks the light to full over the default sneak interval (typically, 5 seconds).

{% include lighting/console_command.html content="1, At, Full, Sneak, Time, 10, Enter" noLegend=true noTip=true %}
Sneaks the light to full over 10 seconds.

{% include lighting/console_command.html content="1, {Pan}, At, 50, Sneak, Enter" noLegend=true noTip=true %}
Sneaks the light's `Pan` Property to 50 over the default sneak interval.

## Complex Examples
{% include lighting/console_command.html content="1, Color Palette 5, Sneak, Enter" noLegend=true noTip=true %}
Sneaks the light's color properties into Color Palette 5 over the default sneak interval.

{% include lighting/console_command.html content="1, Sneak, Enter" noLegend=true noTip=true %}
Sneaks the light to the background state. If there is no background state, it goes to home.

{% include lighting/console_command.html content="1, Sneak, Sneak, Enter" noLegend=true noTip=true %}
Sneaks all the light's non-intensity parameters to the background state. If there is no background state, those properties go to home.

## On Keyboard
{% include lighting/console_button.html content="Sneak" %} is mapped to `N` on a QWERTY keyboard