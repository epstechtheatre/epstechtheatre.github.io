---
title: Update
sidebar: Lighting_sidebar
permalink: Lighting_keyboard_update.html
folder: Lighting
# draft: true
# toc: true
summary: Update is used for two primary functions, updating a cue and saving the showfile.
# keywords: []
authors: ["Ben MacDonald"]
last_updated: January 1, 2022
# tags: []
---

## Usage
When in a cue, you can still modify light data. If you make a change you like and want to save it into the cue, you can do that with update. You can also quickly save your entire showfile with an shortcut.
## Examples
<!-- Leave the linkID blank if you want to be able to open multiple sections at once.
Otherwise, only one panel can be open at a time per linkUID.
panelUID must be unique to all other faq panels on this page -->

{% include faq/opening.html linkUID='' %}

{% capture updateCue %}
{% include lighting/console_command.html content="Update, Enter" noLegend=true noTip=true %}
{% include callout.html type="success" content="Updates the current cue, saving manual lighting data into the cue list. You can tell if a light contains manual data if its number is red in the live table." %}

{% endcapture %}

{% include faq/panel.html panelUID='updateCue' title='Update an existing cue with new lighting data' body=updateCue linkUID='' startOpen='true' %}

{% capture updateChannel %}
{% include lighting/console_command.html content="3, Update, Enter" noLegend=true noTip=true %}

{% include callout.html type="success" content="Like the above example, this will update the current cue, but will only save new manual data from channel 3, if any exists." %}
{% endcapture %}

{% include faq/panel.html panelUID='saveChannel' title='Update an existing cue with new lighting data from selected channels' body=updateChannel linkUID='' startOpen='false' %}

{% capture saveShowfile %}
Press {% include lighting/inline_console_command.html content="Shift & Update" andAsWord=true %} at the same time. This will perform the same operation as clicking <code>Save</code> in the File Browser. If you want to save the current showfile under a different name, you cannot use this shortcut.
{% endcapture %}

{% include faq/panel.html panelUID='saveShowfile' title='Quickly save the current showfile' body=saveShowfile linkUID='' startOpen='false' %}


{% include faq/closing.html%}

## On Keyboard
{% include lighting/console_button.html content="Update" %} is mapped to `U` on a QWERTY keyboard.