---
title: •
sidebar: Lighting_sidebar
permalink: Lighting_keyboard_dot.html
folder: Lighting
# draft: true
# toc: true
# summary: 
# keywords: []
authors: ["Ben MacDonald"]
last_updated: December 28, 2021
# tags: []
---

## Usage
The {% include console_button.html content="Dot" %} is used to add decimals to targets. This is used most commonly in cue ID's. Targets that allow decimal numbers can use up to three decimal places. A very typical reason to use decimal cues is when making additions to the cue list far in the future. Some tech like to use decimal cues as a personal marker regarding what type of cue it is.<br><br>
For example, I used decimal cues for any cue activated by a follow time. That way I was aware of what the intention of the cue list was, and operators were less prone to thinking they accidentally hit go.
## Examples
<!-- Leave the linkID blank if you want to be able to open multiple sections at once.
Otherwise, only one panel can be open at a time per linkUID.
panelUID must be unique to all other faq panels on this page -->

{% include faq/opening.html linkUID='' %}

{% capture Decimal %}
{% include console_command.html content="Record, Cue, 1, ., 5, Enter" noLegend=true noTip=true %}
{% include callout.html type="success" content="This command would record the current live state in to Cue 1.5.<br><br>Decimal cues still obey the rules of ascending order. As such, this cue would play after Cue 1, but before Cue 2." %}

{% endcapture %}


{% include faq/panel.html panelUID='' title='Use a decimal number when recording a target' body=Decimal linkUID='' startOpen='true' %}

{% include faq/closing.html%}


## On Keyboard
{% include console_button.html content="Dot" %} is mapped to `.` on a QWERTY keyboard.