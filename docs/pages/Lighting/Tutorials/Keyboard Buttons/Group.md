---
title: Group
sidebar: Lighting_sidebar
permalink: Lighting_keyboard_group.html
folder: Lighting
# draft: true
# toc: true
summary: Group is used to target and edit creating lighting groups.  
# keywords: []
authors: ["Ben MacDonald"]
last_updated: October 28, 2021
# tags: []
---
## Usage
Type {% include lighting/console_button.html content="Group" %} and the ID of the group to target it like you would a channel. You can also use group to record new groups, however I recommend you do so using the blind mode editor instead.
## Examples
{% include lighting/console_command.html content="Group, 3, At, Full" noLegend=true noTip=true %}
Sets the intensity parameter for all lights in Group 3 to 100%.

{% include lighting/console_command.html content="Group, 1, Enter" noLegend=true noTip=true %}
Selects Group 1 for use with on-screen tools.

{% include lighting/console_command.html content="1, Thru, 10, Record, Group, 999, Enter" noLegend=true noTip=true %}
Records manual channels between 1 and 10 to Group 999.

{% include lighting/console_command.html content="Group Group" noLegend=true noTip=true %}
Opens the Group List Index Tab.
{% include warning.html content="This feature will active blind mode!" %}

To edit groups in the list index, select the group using the select command, then enter the numbers of all channels and click enter. Saving is instantaneous.


## On Keyboard
{% include lighting/console_button.html content="Group" %} is mapped to `G` on a QWERTY keyboard