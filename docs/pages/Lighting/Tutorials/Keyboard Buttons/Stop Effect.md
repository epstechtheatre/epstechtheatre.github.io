---
title: Stop Effect
sidebar: Lighting_sidebar
permalink: Lighting_keyboard_stopeffect.html
folder: Lighting
# draft: true
# toc: true
summary: The Stop Effect button is a quick shortcut to stop all or targeted running effects.
# keywords: []
authors: ["Ben MacDonald"]
last_updated: November 02, 2021
# tags: []
---

## Usage
Use {% include console_button.html content="Stop Effect" %} to quickly stop effects regardless of how they are running (channel, group, or fader assignment).

{% include tip.html content="All functionality of the {% include console_button.html content="Stop Effect" %} button is mirrored in the Effects tab of the magic sheet." %}

## Examples
{% include console_command.html content="Stop Effect, Enter" noLegend=true noTip=true %}
Stop all currently running effects, across the entire grid

{% include console_command.html content="Effect, 910, Stop Effect, Enter" noLegend=true noTip=true %}
Stop effect 910 across the entire grid (if it is running)

Alias for:
{% include console_command.html content="Stop Effect, 910, Enter" noLegend=true noTip=true %}

{% include console_command.html content="20, Stop Effect, Enter" noLegend=true noTip=true %}
Stops all running effects on Channel 20 (if any are running)

{% include console_command.html content="Stop Effect, Load, Enter" noLegend=true noTip=true %}
Stops an effect on a running fader 

{% capture LoadNote %}
To target a certain fader, you have to use its specific {% include console_button.html content="Load" %} key).
{% endcapture %}

{% include note.html content=LoadNote %}

## On Keyboard
{% include console_button.html content="Stop Effect" %} is mapped to `CTRL + ALT + E` on a QWERTY keyboard.