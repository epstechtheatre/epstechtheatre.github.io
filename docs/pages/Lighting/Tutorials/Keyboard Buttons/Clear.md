---
title: Clear
sidebar: Lighting_sidebar
permalink: Lighting_keyboard_clear.html
folder: Lighting
# draft: true
# toc: true
summary: Clears the previous key pressed into a non-terminated command line, or clears the command if it had been terminated.
# keywords: []
authors: ["Bea MacDonald"]
last_updated: August 19, 2021
# tags: []
---

## Usage
Clear can only be used if a command is currently in the command line. You can use clear at any time, provided this condition is met.
## Examples
{% include lighting/console_command.html content="1, At, 5, Clear, 6, Enter" noLegend=true noTip=true %}
Clears the {% include lighting/console_button.html content="5" %}, as it was the last key pressed.

{% include lighting/console_command.html content="1, At, 5, Enter, Clear" noLegend=true noTip=true %}
Clears the entire command line, as the command was terminated.

Pressing {% include lighting/console_button.html content="Shift" %} and {% include lighting/console_button.html content="Clear" %} at the same time performs the same operation as above and deletes the entirety of your command. It can also be used if you command has not been terminated.
## On Keyboard
{% include lighting/console_button.html content="Clear" %} is mapped to `Backspace` on a QWERTY keyboard.