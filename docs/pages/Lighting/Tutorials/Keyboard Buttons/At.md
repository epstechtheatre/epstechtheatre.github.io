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
last_updated: December 28, 2021
# tags: []
---

## Usage
{% include lighting/console_button.html content="At" %} has two primary usages:

The first is, as stated above, to indicate the next number is a lighting intensity.

The second is used when patching lights to enter the physical address of the fixture.
<br><br>
{% include lighting/console_button.html content="At" %} also lesser used functions. See below for more details.

## Examples

{% capture typicalUsage %}
{% include lighting/console_command.html content="1, At, 45, Enter" noLegend=true noTip=true %}
{% include callout.html type="success" content="This example sets channel 1 to be at 45% intensity." %}

{% endcapture %}

{% capture addressNote %}
In patch mode, {% include lighting/console_button.html content="At" %} will enter as {% include lighting/console_button.html content="Address" %}, representing the physical location the light is **at**.
{% endcapture %}


{% capture patchUsage %}
{% include lighting/console_command.html content="1, At, 2, Enter" noLegend=true noTip=true %}
{% include callout.html type="success" content="This example tells the lighting board that channel 1 on the console should control the physical lighting instrument connected to address 2 in the theatre." %}

{% include note.html content=addressNote %}

{% endcapture %}


<!-- Leave the linkID blank if you want to be able to open multiple sections at once.
Otherwise, only one panel can be open at a time per linkUID.
panelUID must be unique to all other faq panels on this page -->

{% include faq/opening.html linkUID='' %}

{% include faq/panel.html panelUID='genericUse' title='Typical Usage' body=typicalUsage linkUID='' startOpen='true' %}

{% include faq/panel.html panelUID='patchingUse' title='Usage in Patch Mode' body=patchUsage linkUID='' %}

{% include faq/closing.html%}


### Lesser Used / Specific Examples

<!-- Leave the linkID blank if you want to be able to open multiple sections at once.
Otherwise, only one panel can be open at a time per linkUID.
panelUID must be unique to all other faq panels on this page -->

{% include faq/opening.html linkUID='' %}

{% capture backgroundLevel %}
{% include lighting/console_command.html content="1, At, Enter" noLegend=true noTip=true %}
{% include note.html content="The background level comes from either a previous cue or the lights home state from the home preset." %}
{% endcapture %}

{% include faq/panel.html panelUID='restoreToBackground' title='Return a channel to the background intensity level' body=backgroundLevel linkUID='' %}

{% capture nonIntensity %}
{% include lighting/console_command.html content="1, {Pan}, At, 50, Enter" noLegend=true noTip=true %}

{% include note.html content="This example sets channel 1's `Pan` property to 50.<br><br>The `Pan` button can be accessed by clicking down on the encoder mapped to the `Pan` property, or by clicking `Pan` in the encoder display portion of the monitor (It might be in the triangle menu). If the encoders are not currently mapped to anything, terminate the command after specifying your target. The pan property should appear. Pressing the parameter will continue the command using implicit target selection.<br><br>If the parameter does not appear, it likely doesn't exist on the light." %}

{% endcapture %}

{% include faq/panel.html panelUID='nonIntenseProperty' title='Change the value of non-intensity parameters' body=nonIntensity linkUID='' %}

{% capture resetCapture %}
{% include lighting/console_command.html content="1, Color, At, Enter" noLegend=true noTip=true %}

{% include note.html content="This example resets all properties in the `Color` category." %}

{% endcapture %}

{% include faq/panel.html panelUID='paramReset' title='Reset all parameters in a parameter group to their background level' body=resetCapture linkUID='' %}

{% include faq/closing.html%}

## On Keyboard
{% include lighting/console_button.html content="At" %} is mapped to `A` on a QWERTY keyboard