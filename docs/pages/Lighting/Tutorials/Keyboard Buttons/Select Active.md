---
title: Select Active
sidebar: Lighting_sidebar
permalink: Lighting_keyboard_selectactive.html
folder: Lighting
# draft: true
# toc: true
summary: Select Active is used to quickly select every light with a non-0 intensity.
# keywords: []
authors: [Ben MacDonald]
last_updated: August 21, 2021
# tags: []
# customPageType: text
---

## Usage
This command has implied usage. See the example below.

See [Select Last](./Lighting_keyboard_selectmanual) and [Select Manual](./Lighting_keyboard_selectmanual)

## Examples
{% include note.html content="This example assumes you clear between each command." %}

{% include lighting/console_command.html content="1, At, Full, Enter" noLegend=true noTip=true %}
<br>
{% include lighting/console_command.html content="Group 1, At, 50, Enter" noLegend=true noTip=true %}
<br>
{% include lighting/console_command.html content="15, At, 22, Enter" noLegend=true noTip=true %}
<br>
{% include lighting/console_command.html content="1, Out" noLegend=true noTip=true %}
<br>
{% include lighting/console_command.html content="Select Active, Enter" noLegend=true noTip=true %}
Will Select Group 1, and Channel 15.

<br><br><br>
{% include lighting/console_command.html content="Select Active, Select Active, Enter" noLegend=true noTip=true %}
Selects any active channel, not including channels given intensity by active submasters.
{% include note.html content="You must press Select Active twice quickly for this to work!" %}


## On Keyboard
{% include lighting/console_button.html content="Select Active" %} is mapped to `CTRL + A` on a QWERTY keyboard.