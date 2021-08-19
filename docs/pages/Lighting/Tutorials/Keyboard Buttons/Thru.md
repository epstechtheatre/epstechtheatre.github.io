---
title: Thru
sidebar: Lighting_sidebar
permalink: Lighting_keyboard_thru.html
folder: Lighting
# draft: true
# toc: true
summary: Thru is used to select all items in a target between 2 given numbers.
# keywords: []
# authors: []
# last_updated: Month Day, Year
# tags: []
---

## Usage
The most basic usage of {% include console_button.html content="Thru" %} is with channels. To select every light between channel 1 and channel 1000, you can use {% include console_button.html content="Thru" %}.

You can also use Thru to select every Cue, Group, Palette, as well as any other target between 2 numbers.

Thru has a complex usages, see the examples below.
## Examples
{% include console_command.html content="1, Thru, 1000, Enter" noLegend=true noTip=true %}
Selects every channel between 1 and 1000, including channel 1 and channel 1000.

{% include console_command.html content="Cue, 1, Thru, 10" noLegend=true noTip=true %}
Selects every cue between cue 1 and cue 10, including cue 1 and cue 10.

### Complex Examples
{% include console_command.html content="Cue 1, Thru, Thru, Enter" noLegend=true noTip=true %}
Selects every cue between cue 1 and the last cue in the active cue list. This same syntax applies to most other targets.

{% include console_command.html content="Group 1, At, 0, Thru, 100" noLegend=true noTip=true %}
Sets the intensity of the lights in Group 1 to linearly cascade from 0% to 100% across the group. This is dependent on the ordering of lights in the group.

## On Keyboard
{% include console_button.html content="Cue" %} is mapped to `Q` on a QWERTY keyboard.