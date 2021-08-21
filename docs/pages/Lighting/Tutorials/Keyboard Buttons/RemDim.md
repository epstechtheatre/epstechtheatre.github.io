---
title: RemDim
sidebar: Lighting_sidebar
permalink: Lighting_keyboard_remdim.html
folder: Lighting
# draft: true
# toc: true
summary: RemDim is used to quickly take out the intensity of any channel you don't select.
# keywords: []
authors: [Ben MacDonald]
last_updated: August 21, 2021
# tags: []
---

## Usage
When using {% include console_button.html content="RemDim" %} any channel you don't specify in the command line that is above 0% is taken to 0%, unless the intensity of that light is provided by a submaster or is parked.

This is especially useful to crash (snap to) spotlights, where the most important part of the look is that no other light is turned on.

This are a bunch of weird usages of {% include console_button.html content="RemDim" %}. As such, there are a lot of complex examples. 

## Examples
{% include console_command.html content="1, RemDim, Enter" noLegend=true noTip=true %}
Sets every light that isn't channel 1 (given the above exceptions) to 0%.
<br><br>
{% include console_command.html content="1, RemDim, At, Full, Enter" noLegend=true noTip=true %}
Same as above, but also sets channel 1 to 100%.

Identical To:
{% include console_command.html content="1, At, Full, RemDim, Enter" noLegend=true noTip=true %}


### Complex Examples
{% include console_command.html content="1, RemDim, 10, Enter" noLegend=true noTip=true %}
Sets every channel except channel 1 (and exceptions) that has an intensity above 10% to 10%. This won't affect lights below 10%.
<br><br>
{% include console_command.html content="1, RemDim, 10, At, Full, Enter" noLegend=true noTip=true %}
Same as above, but also sets channel 1 to 100%.

Identical to:
{% include console_command.html content="1, At, Full, RemDim, 10, Enter" noLegend=true noTip=true %}

<br><br>
{% include console_command.html content="1, RemDim, /, 10, Enter" noLegend=true noTip=true %}
Similar to first example, instead setting all lights except 1 (and exceptions) to 10% of their current value.
<br><br>
{% include console_command.html content="1, At, 50%, RemDim, Enter" noLegend=true noTip=true %}
{% include console_command.html content="Next" noLegend=true noTip=true %}
Applies the RemDim command to the next patched channel after channel 1.
{% include console_command.html content="Last" noLegend=true noTip=true %}
Applies the RemDim command to the previously patched channel (in this case, channel 1).

## On Keyboard
{% include console_button.html content="RemDim" %} is mapped to `H` on a QWERTY keyboard.