---
title: Enter
sidebar: Lighting_sidebar
permalink: Lighting_keyboard_enter.html
folder: Lighting
# draft: true
# toc: true
summary: The Enter key is used to terminate commands you type into the console. It is also used to confirm some dialog popups on the monitor, such as cue deletion/overwrite confirmations.
# keywords: []
authors: ["Ben MacDonald"]
last_updated: August 19, 2021
# tags: []
---

## Usage 
**When with a command:** To terminate a command, simply type in a command with valid syntax, then press {% include lighting/console_button.html content="Enter" %}.

**When with a dialog popup/prompt:** To confirm a prompt, such as those that append "Please Confirm" to your command line, press {% include lighting/console_button.html content="Enter" %}.

When you have terminated a command, a diamond (🔶) will appear at the end of the line. 

Some commands will add an implicit enter for you and run without needing to press enter. These are a few examples of commands that use implicit enter:
- The {% include lighting/console_button.html content="Out" %} command
- Most property selectors on the magic sheet
- [Percent Nudges](Lighting_keyboard_percent_nudge.html)

## Examples
{% include lighting/console_command.html content="1, At, Full, Enter" noLegend=true noTip=true %}
<br>
{% include lighting/console_command.html content="1, Out" noLegend=true noTip=true %}


## On Keyboard
{% include lighting/console_button.html content="Enter" %} is mapped to `Enter` on a QWERTY keyboard.