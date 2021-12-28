---
title: Numbers
sidebar: Lighting_sidebar
permalink: Lighting_keyboard_numbers.html
folder: Lighting
# draft: true
# toc: true
summary: Number buttons are used to select targets, channels, cues and anything with an ID.
# keywords: []
# authors: []
last_updated: August 19, 2021
# tags: []
---

## Usage
When in {% include lighting/console_button.html content="Live" %} mode, number buttons by default refer to channel IDs. By prefixing a number with a more specific target like a group or que. The lookup is modified. Numbers are also used to set property values like intensity, color and focus.
## Examples
{% include lighting/console_command.html content="1, At, Full, Enter" noLegend=true noTip=true %}
Sets Channel 1 to Full.

{% include lighting/console_command.html content="1, At 50, Enter" noLegend=true noTip=true %}
Sets Channel 1 to 50%.

{% include lighting/console_command.html content="Group 1, At 50, Enter" noLegend=true noTip=true %}
Sets Group 1 to 50%.

{% include lighting/console_command.html content="Group 1, Record Cue 14" noLegend=true noTip=true %}
Records the data for Group 1 into Cue 14.

## Complex Examples
{% include lighting/console_command.html content="1, At, 5, Enter" noLegend=true noTip=true %}
Sets Channel 1 to 50%. This also applies for any single digit intensity value (ie, 9, will set to 90%)

{% include lighting/console_command.html content="1, At, 05, Enter" noLegend=true noTip=true %}
Sets Channel 1 to 5%

## On Keyboard
{% include lighting/console_button.html content="Numbers" %} are mapped to their respective `0-9` keys on a QWERTY keyboard. Using the numbers on a Number Pad will also work.