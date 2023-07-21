---
title: Recall / From
sidebar: Lighting_sidebar
permalink: Lighting_keyboard_recallfrom.html
folder: Lighting
# draft: true
# toc: true
summary: Recall From allows you to quickly copy values from one channel to another without immediately saving that data like Copy To does.
# keywords: []
authors: [Ben MacDonald]
last_updated: October 28, 2021
# tags: []
---

## Usage
{% include lighting/console_button.html content="Recall From" %} benefits from parameter specificity, however can be used in its plain form. It will attempt to copy all transferable properties from one targeted channel into another. It can also be used to copy data from certain cues

{% include warning.html content="Recall From can be used in blind mode. Note that just like normal, all changes are saved instantaneously and transferred data is not an exception to this." %}

## Examples
{% include lighting/console_command.html content="1, Recall From, 2, Enter" noLegend=true noTip=true %}
Copies all transferrable properties that Channel 2 currently has and pastes them into Channel 1 as manual data. Note that a record would still have to be called to for channel 1 to replay new data in a cue list.

{% include lighting/console_command.html content="1, Recall From, 2, Cue, 5, Enter" noLegend=true noTip=true %}
Copies all transferrable properties that Channel 2 has in Cue 5 and pastes them into Channel 1 now as manual data.

{% include lighting/console_command.html content="Recall From, Recall From, 0.2, Enter" noLegend=true noTip=true %}
Shorthand for {% include lighting/console_button.html content="Recall" %} {% include lighting/console_button.html content="Cue" %}. Using either form will copy all data from cue 0.2 and paste onto every light (with data present in cue 0.2).

{% include lighting/console_command.html content="1, Color, Recall From, 2" noLegend=true noTip=true %}
Copies only `Color` parameters from Channel 2 into Channel 1.

{% include lighting/console_command.html content="1, Pan, Recall From, 2" noLegend=true noTip=true %}
Copies only the `Pan` parameter from Channel 2 into Channel 1.
## On Keyboard
{% include lighting/console_button.html content="Recall From" %} is mapped to `E` on a QWERTY keyboard.