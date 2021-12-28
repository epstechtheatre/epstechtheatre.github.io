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
last_updated: December 28, 2021
# tags: []
---

## Usage 
**When with a command:** To terminate a command, simply type in a command with valid syntax, then press {% include console_button.html content="Enter" %}.

**When with a dialog popup/prompt:** To confirm a prompt, such as those that append "Please Confirm" to your command line, press {% include console_button.html content="Enter" %}.

When you have terminated a command, a diamond (🔶) will appear at the end of the line. 

Some commands will add an implicit enter for you and run without needing to press enter. These are a few examples of commands that use implicit enter:
- The {% include console_button.html content="Out" %} command
- Most property selectors on the magic sheet
- [Percent Nudges](Lighting_keyboard_percent_nudge.html)

## Examples
<!-- Leave the linkID blank if you want to be able to open multiple sections at once.
Otherwise, only one panel can be open at a time per linkUID.
panelUID must be unique to all other faq panels on this page -->

{% include faq/opening.html linkUID='' %}

{% capture TypicalUse %}
{% include console_command.html content="1, At, Full, Enter" noLegend=true noTip=true %}
{% include callout.html type="success" content="This example simply sets Channel 1 to Full intensity. Changing the parameters of lights is the most common time you will be using enter." %}
{% endcapture %}

{% capture ImpliedEnterCallout %}
This example uses the {% include console_button.html content="Out" %} keyword to quickly set Channel 1 to 0% intensity. {% include console_button.html content="Out" %} is an example of an operation that automatically hits {% include console_button.html content="Enter" %} and terminates the command.
{% endcapture %}

{% capture ImpliedEnter %}
{% include console_command.html content="1, Out" noLegend=true noTip=true %}
{% include callout.html type="success" content=ImpliedEnterCallout %}
{% endcapture %}


{% include faq/panel.html panelUID='TypicalUse' title='Typical Use' body=TypicalUse linkUID='' startOpen='true' %}

{% include faq/panel.html panelUID='ImpliedEnter' title='Operations with implied enter' body=ImpliedEnter linkUID='' startOpen='false' %}


{% include faq/closing.html%}

<br>


## On Keyboard
{% include console_button.html content="Enter" %} is mapped to `Enter` on a QWERTY keyboard.