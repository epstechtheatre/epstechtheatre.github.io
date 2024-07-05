---
title: Update
sidebar: Lighting_sidebar
permalink: Lighting_keyboard_update.html
folder: Lighting
# draft: true
# toc: true
summary: Update is used for two primary functions, updating a cue and saving the showfile.
# keywords: []
authors: ["Bea MacDonald"]
last_updated: August 19, 2021
# tags: []
---

## Usage
When in a cue, you can still modify light data. If you make a change you like and want to save it into the cue, you can do that with update. You can also quickly save your entire showfile with an shortcut.
## Examples
{% include lighting/console_command.html content="Update, Enter" noLegend=true noTip=true %}
Updates the current cue, saving manual lighting data into the cue list.

{% include lighting/console_command.html content="3, Update, Enter" noLegend=true noTip=true %}
Updates the current cue, saving manual lighting data for channel 3 into the cue list.

Pressing {% include lighting/console_button.html content="Shift" %} and {% include lighting/console_button.html content="Update" %} at the same time saves the showfile.

## On Keyboard
{% include lighting/console_button.html content="Update" %} is mapped to `U` on a QWERTY keyboard.