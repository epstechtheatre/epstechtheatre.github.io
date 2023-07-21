---
title: Select Manual
sidebar: Lighting_sidebar
permalink: Lighting_keyboard_selectmanual.html
folder: Lighting
# draft: true
# toc: true
summary: Select Manual is used to quickly select every light that has a manually set (ie, not recorded) value
# keywords: []
authors: [Ben MacDonald]
last_updated: January 1, 2022
# tags: []
# customPageType: text
---

## Usage
This command has implied usage. See the example below.

{% include tip.html content="If a light is currently \"Manual\", its intensity number will be red on the Magic Sheet and Live Table" %}


See also: [Select Active](./Lighting_keyboard_selectactive) and [Select Last](./Lighting_keyboard_selectlast)

## Examples
<!-- Leave the linkID blank if you want to be able to open multiple sections at once.
Otherwise, only one panel can be open at a time per linkUID.
panelUID must be unique to all other faq panels on this page -->

{% include faq/opening.html linkUID='' %}

{% capture useSMHere %}
If we were to use {% include lighting/console_button.html content="Select Manual" %} here, all channels from 1 to 100 would be selected, as they currently contain manual data. This data will be turned into saved data in the next command.
{% endcapture %}

{% capture fullExample %}
{% include note.html content="This example assumes you clear between each command." %}

{% include callout.html type="info" content="First, we are going to do some random work to populate the command history." %}

{% include lighting/console_command.html content="1, Thru, 100, At, 50, Enter" noLegend=true noTip=true %}

{% include callout.html type="info" content=useSMHere %}
{% include lighting/console_command.html content="Record, Cue, 1, Enter" noLegend=true noTip=true %}
<br>
{% include lighting/console_command.html content="1, At, Full, Enter" noLegend=true noTip=true %}
<br>
{% include lighting/console_command.html content="Select Manual, Enter" noLegend=true noTip=true %}

{% include callout.html type="success" content="This only selects channel 1, as it is the only channel that was given manual data since the last data save (record). Note that saving the showfile does not turn manual data into saved data." %}
{% endcapture %}

{% include faq/panel.html panelUID='fullExample' title='Full usage example' body=fullExample linkUID='' startOpen='true' %}

{% include faq/closing.html%}


## Lesser Used / Specific Examples

<!-- Leave the linkID blank if you want to be able to open multiple sections at once.
Otherwise, only one panel can be open at a time per linkUID.
panelUID must be unique to all other faq panels on this page -->

{% include faq/opening.html linkUID='' %}

{% capture selectInRange %}
{% include lighting/console_command.html content="1, Thru, 10, Select Manual, Enter" noLegend=true noTip=true %}
{% include callout.html type="success" content="This selects any channel with manual data that is between channels 1 and 10 inclusive." %}

{% endcapture %}


{% include faq/panel.html panelUID='selectManualInRange' title='Select all manual channels in a target range' body=selectInRange linkUID='' startOpen='false' %}

{% include faq/closing.html%}

## On Keyboard
{% include lighting/console_button.html content="Select Manual" %} is mapped to `CTRL + M` on a QWERTY keyboard