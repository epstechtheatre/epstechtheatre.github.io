---
title: Clear
sidebar: Lighting_sidebar
permalink: Lighting_keyboard_clear.html
folder: Lighting
# draft: true
# toc: true
summary: Clears the previous key pressed into a non-terminated command line, or clears the command if it had been terminated.
# keywords: []
authors: ["Ben MacDonald"]
last_updated: December 28, 2021
# tags: []
---

## Usage
{% include lighting/console_button.html content="Clear" %} can only be used if a command is currently in the command line. So long as this is true, it can be pressed at any time.
## Examples

<!-- Leave the linkID blank if you want to be able to open multiple sections at once.
Otherwise, only one panel can be open at a time per linkUID.
panelUID must be unique to all other faq panels on this page -->

{% include faq/opening.html linkUID='' %}

{% capture clearLine %}
{% include lighting/console_command.html content="1, At, 5, Enter, Clear" noLegend=true noTip=true %}
{% include callout.html type="success" content="This example clears the entire command line. This will work for any terminated command. You can tell if a command is terminate as it shows the 🔶 symbol at the end of the line." %}

{% include tip.html content="If you start typing a new command but don't clear, the board is sometimes smart enough to automatically clear the command line for you." %}

{% endcapture %}

{% capture clearTheFive %}
This command clears the {% include lighting/console_button.html content="5" %}, as it was the last key pressed.<br><br>
You could continue typing this command as if {% include lighting/console_button.html content="Clear" %} was never pressed, or press {% include lighting/console_button.html content="Clear" %} again to backspace once further, deleting the {% include lighting/console_button.html content="At" %}.
{% endcapture %}

{% capture backspace %}
{% include lighting/console_command.html content="1, At, 5, Clear" noLegend=true noTip=true %}
{% include callout.html type="success" content=clearTheFive %}
{% endcapture %}

{% capture ShiftClearCallout %}
Pressing {% include lighting/console_button.html content="Shift" %} and {% include lighting/console_button.html content="Clear" %} at the same time performs the same operation as clearing a terminated command and deletes everything in the command line.<br><br>Plus, it can be used at any time, even your command isn't terminated yet.
{% endcapture %}


{% capture ShiftClear %}
{% include lighting/console_command.html content="1, At, 5, Shift & Clear" noLegend=true noTip=true %}
{% include callout.html type="success" content=ShiftClearCallout %}

{% endcapture %}



{% include faq/panel.html panelUID='ClearTerminated' title='Clear a completed the command line' body=clearLine linkUID='' startOpen='true' %}

{% include faq/panel.html panelUID='Backspace' title='Use clear as a backspace' body=backspace linkUID='' startOpen='false' %}

{% include faq/panel.html panelUID='FullClear' title='Delete your entire command line, even if the command isn\'t terminated' body=ShiftClear linkUID='' startOpen='false' %}


{% include faq/closing.html%}

## On Keyboard
{% include lighting/console_button.html content="Clear" %} is mapped to `Backspace` on a QWERTY keyboard.