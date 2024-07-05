---
title: Percent Nudge
sidebar: Lighting_sidebar
permalink: Lighting_keyboard_percent_nudge.html
folder: Lighting
# draft: true
# toc: true
summary: Percent Nudges are used to quickly step the intensity of a light up or down.
# keywords: []
authors: ["Bea MacDonald"]
last_updated: August 19, 2021
# tags: []
# customPageType: text
---

## Usage
Select a channel or group, and press {% include lighting/console_button.html content="+%" %} or {% include lighting/console_button.html content="-%" %} to increase or decrease the intensity. You can also use nudges for non-intensity parameters.

Nudges have implicit Enters, you do not have to hit enter to terminate the command after nudging.

You can also chain nudges together, without retyping the whole command.
## Examples
{% include lighting/console_command.html content="1, +%, -%, +%" noLegend=true noTip=true %}

{% include lighting/console_command.html content="1, {Pan}, +%" noLegend=true noTip=true %}

## On Keyboard
{% include lighting/console_button.html content="+%" %} is mapped to `CTRL + ALT + =` on a QWERTY keyboard.

{% include lighting/console_button.html content="-%" %} is mapped to `CTRL + ALT + -` on a QWERTY keyboard.