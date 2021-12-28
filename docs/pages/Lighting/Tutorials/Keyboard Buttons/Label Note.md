---
title: Label / Note
sidebar: Lighting_sidebar
permalink: Lighting_keyboard_label_note.html
folder: Lighting
# draft: true
# toc: true
summary: Add little notes and phrases to cues so you remember what they are
# keywords: []
authors: ["Ben MacDonald"]
last_updated: August 19, 2021
# tags: []
---

## Usage
Label is used to assign a note to cues that appear in the PSD during playback. Notes can also be used for this, however, they, don't appear by default. They can be seen by hover over the "Label" box in the PSD.

Cues with a note show a "+" in the top-right corner of the "Label" field.

Switch to Note mode by holding {% include lighting/console_button.html content="Shift" %} and pressing the key.

After pressing Label or Note, type using a regular computer keyboard to add text, then press enter on the console or the keyboard.

## Examples
{% include lighting/console_command.html content="Record, Cue, 1, Label, This is a Label, Enter" noLegend=true noTip=true %}
Record a new cue with a label

{% include lighting/console_command.html content="Record, Cue, 1, Note, This is a Note, Enter" noLegend=true noTip=true %}
Record a new cue with a note

{% include lighting/console_command.html content="Cue 1, Label, This is a new Label, Enter" noLegend=true noTip=true %}
Edit the label of an existing cue.

{% include lighting/console_command.html content="Cue, 1, Label, This is a label, Label" noLegend=true noTip=true %}
Removes all text back to the first {% include lighting/console_button.html content="Label" %} entry. If you add an {% include lighting/console_button.html content="Enter" %}, you can remove the label from a cue this way

## On Keyboard
{% include lighting/console_button.html content="Label / Note" %} is mapped to `L` on a QWERTY keyboard.
{% include note.html content="When in Label mode, all keybinds become disabled, including Label" %}
