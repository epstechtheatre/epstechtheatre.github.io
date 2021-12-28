---
title: Select Last
sidebar: Lighting_sidebar
permalink: Lighting_keyboard_selectlast.html
folder: Lighting
# draft: true
# toc: true
summary: Select Last quickly select the last light or group you ran a command on. 
# keywords: []
# authors: []
# last_updated: Month Day, Year
# tags: []
---

## Usage
If you selected a channel or channel set, then made changes to a cue or an effect. You can use {% include lighting/console_button.html content="Select Last" %} to quickly recall the lights you changed.

Pressing {% include lighting/console_button.html content="Select Last" %} multiple times cycles through a subset of all previous selections.

See [Select Active](./Lighting_keyboard_selectactive) and [Select Manual](./Lighting_keyboard_selectmanual)
## Examples
{% include note.html content="This example assumes you clear between each command." %}

{% include lighting/console_command.html content="Group, 300, +, 8, Thru, 64, At, Full, Enter" noLegend=true noTip=true %}
<br>
{% include lighting/console_command.html content="Record, Cue, 1, Enter" noLegend=true noTip=true %}
<br>
{% include lighting/console_command.html content="Select Last, Out" noLegend=true noTip=true %}
Will set Group 300 and Channels 8 through 64 to Out.

## On Keyboard
{% include lighting/console_button.html content="Select Last" %} is mapped to `CTRL + L` on a QWERTY keyboard.