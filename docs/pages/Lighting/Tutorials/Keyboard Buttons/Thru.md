---
title: Thru
sidebar: Lighting_sidebar
permalink: Lighting_keyboard_thru.html
folder: Lighting
# draft: true
# toc: true
summary: Thru is used to select all items in a target between 2 given numbers.
# keywords: []
# authors: []
# last_updated: Month Day, Year
# tags: []
---

## Usage
The most basic usage of {% include lighting/console_button.html content="Thru" %} is with channels. To select every light between channel 1 and channel 1000, you can use {% include lighting/console_button.html content="Thru" %}.

You can also use Thru to select every Cue, Group, Palette, as well as any other target between 2 numbers.

{% include lighting/console_button.html content="Thru" %} also has a bunch of specific usages. See the examples below:
## Examples
<!-- Leave the linkID blank if you want to be able to open multiple sections at once.
Otherwise, only one panel can be open at a time per linkUID.
panelUID must be unique to all other faq panels on this page -->

{% include faq/opening.html linkUID='' %}

{% capture selectChannels %}
{% include lighting/console_command.html content="1, Thru, 1000, Enter" noLegend=true noTip=true %}
{% include callout.html type="success" content="This will select every channel between 1 and 1000, including channel 1 and channel 1000." %}

{% endcapture %}


{% include faq/panel.html panelUID='selectChannelRange' title='Select a large number of channels' body=selectChannels linkUID='' startOpen='true' %}

{% capture selectCues %}
{% include lighting/console_command.html content="Cue, 1, Thru, 10" noLegend=true noTip=true %}
{% include callout.html type="success" content="This will select every cue between cue 1 and cue 10, including cue 1 and cue 10." %}

{% endcapture %}

{% include faq/panel.html panelUID='selectCueRange' title='Select multiple cues' body=selectCues linkUID='' startOpen='false' %}


{% include faq/closing.html%}

### Lesser Used / Specific Examples
<!-- Leave the linkID blank if you want to be able to open multiple sections at once.
Otherwise, only one panel can be open at a time per linkUID.
panelUID must be unique to all other faq panels on this page -->

{% include faq/opening.html linkUID='' %}

{% capture cascade %}
{% include lighting/console_command.html content="Group, 1, At, 0, Thru, 100, Enter" noLegend=true noTip=true %}
{% include callout.html type="success" content="This will set all lights in group 1 to some intensity between 0 and 100. For example, if there 5 lights in group 1 with channel ids 1 thru 5 in order, channel 1 would be 0%, 2 would be 25%, with the pattern repeating to 5 at 100%." %}
{% include note.html content="Groups don't have do have lights in chronological order. The ordering of lights in a group will affect which light is assigned what intensity. In the above example, if channel 2 came before channel 1 in the group, channel 2 would be set to 0%, and channel 1 to 25%." %}
<br><br>
This can also be done with lights not in a group:
{% include lighting/console_command.html content="1, Thru, 10, At, 0, Thru, 100, Enter" noLegend=true noTip=true andAsWord=false %}

{% endcapture %}

{% include faq/panel.html panelUID='cascadeIntensity' title='Linearly cascade intensity values across a selection of lights' body=cascade linkUID='' startOpen='true' %}


{% capture lastCueCallout %}
In this example, cue 1 was the entered cue. The {% include lighting/inline_console_command.html content="Thru, Thru" andAsWord=false %} syntax tells the board to find the last cue in the active list. This same syntax can also be applied to certain other targets as well.
{% endcapture %}


{% capture selectLastCue %}
{% include lighting/console_command.html content="Cue 1, Thru, Thru, Enter" noLegend=true noTip=true %}
{% include callout.html type="success" content=lastCueCallout %}

{% endcapture %}

{% include faq/panel.html panelUID='selectLastCue' title='Select every cue between a entered id and the last cue in the cue list' body=selectLastCue linkUID='' startOpen='false' %}

{% include faq/closing.html%}


## On Keyboard
{% include lighting/console_button.html content="Cue" %} is mapped to `Q` on a QWERTY keyboard.