---
title: Park
sidebar: Lighting_sidebar
permalink: Lighting_keyboard_park.html
folder: Lighting
# draft: true
# toc: true
summary: Park allows you to forcefully keep a channel, address, or channel parameter at a set level. Parked channels are ignored in record commands.
# keywords: []
authors: ["Ben MacDonald"]
last_updated: October 28, 2021
# tags: []
---

## Usage
Simply find the channel or group you want to {% include console_button.html content="Park" %} and use one of the following examples.

When a channel is parked, the light on the {% include console_button.html content="Park" %} button will light up. Parked channels persist across Showfiles and Power Cycles.

To Unpark a light, simply use the {% include console_button.html content="Park" %} command on it again.
## Examples
{% include console_command.html content="1, Park, Enter" noLegend=true noTip=true %}
Parks Channel 1 at it's current level.

{% include console_command.html content="1, At, 30, Park, Enter" noLegend=true noTip=true %}
Parks Channel 1 at 30%.

{% include console_command.html content="1, Color, Park, Enter" noLegend=true noTip=true %}
Parts all Color Parameters of Channel 1 at their current level.

{% include console_command.html content="1 Park, Enter, Enter" noLegend=true noTip=true %}
Unparks channel 1 (if parked), otherwise parks it as per example 1.

## On Keyboard
{% include console_button.html content="Park" %} is mapped to `ALT + K` on a QWERTY keyboard.