---
title: Select Manual
sidebar: Lighting_sidebar
permalink: Lighting_keyboard_selectmanual.html
folder: Lighting
# draft: true
# toc: true
summary: Select Manual is used to quickly select every light that has a manually set (ie, not recorded) value
# keywords: []
authors: [Ben MacDonald]
last_updated: August 21, 2021
# tags: []
# customPageType: text
---

## Usage
This command has implied usage. See the example below.

{% include tip.html content="If a light is currently \"Manual\", its intensity number will be red on the Magic Sheet and Live Table" %}


See [Select Active](./Lighting_keyboard_selectactive) and [Select Last](./Lighting_keyboard_selectlast)

## Examples
{% include note.html content="This example assumes you clear between each command." %}

{% include lighting/console_command.html content="1, Thru, 100, 50%, Enter" noLegend=true noTip=true %}
<br>
{% include lighting/console_command.html content="Record, Cue, 1, Enter" noLegend=true noTip=true %}
<br>
{% include lighting/console_command.html content="1, At, Full, Enter" noLegend=true noTip=true %}
<br>
{% include lighting/console_command.html content="Select Manual, Enter" noLegend=true noTip=true %}
Selects Channel 1, as it is the only channel that was modified after the most recent record.

<br><br><br>
{% include lighting/console_command.html content="1, Thru, 10, Select Manual, Enter" noLegend=true noTip=true %}
Selects any light between channels 1 and 10 that has manual data.

## On Keyboard
{% include lighting/console_button.html content="Select Manual" %} is mapped to `CTRL + M` on a QWERTY keyboard