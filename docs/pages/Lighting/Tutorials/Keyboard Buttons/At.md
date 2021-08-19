---
title: At
sidebar: Lighting_sidebar
permalink: Lighting_keyboard_at.html
folder: Lighting
# draft: true
# toc: true
summary: At is used most commonly to signify that the next number in your command is a lighting intensity
# keywords: []
authors: ["Ben MacDonald"]
last_updated: August 19, 2021
# tags: []
---

## Usage
{% include console_button.html content="At" %} has two primary usages:

The first is, as stated above, to indicate the next number is a lighting intensity.

The second is used when patching lights to enter the physical address of the fixture.
<br><br>
You can also use at for more complex property percent assignments. See the examples below.

## Examples
{% include console_command.html content="1, At, 45, Enter" noLegend=true noTip=true %}
<br>
When patching:

{% include console_command.html content="1, At, 2, Enter" noLegend=true noTip=true %}
(Meaning, Channel 1 is at Physical Address 2)


### Complex Examples

{% include console_command.html content="1, At, Enter" noLegend=true noTip=true %}
Returns the channel to the background intensity level (either from a previous cue or lighting home state)

{% include console_command.html content="1, {Pan}, At, 50, Enter" noLegend=true noTip=true %}
Sets the light's, `Pan` property to 50.

{% include note.html content="The `Pan` button can be accessed by clicking down on the encoder mapped to the `Pan` property, or by clicking `Pan` in the encoder display portion of the monitor (It might be in the triangle menu). If the encoders are not currently mapped to anything, terminate the command after specifying your target, this use implicit target selection to continue the command. " %}


{% include console_command.html content="1, Color, At, Enter" noLegend=true noTip=true %}
Resets all properties in the `Color` category to the background state for the light.

## On Keyboard
{% include console_button.html content="At" %} is mapped to `A` on a QWERTY keyboard