---
title: Tab
sidebar: Lighting_sidebar
permalink: Lighting_keyboard_tab.html
folder: Lighting
# draft: true
# toc: true
summary: Tab is used to quickly open a tab on the monitors
# keywords: []
authors: ["Ben MacDonald"]
last_updated: October 28, 2021
# tags: []
---

## Usage
Every tab on the console is number. Knowing this number, you can use {% include console_button.html content="Tab" %} to quickly open it on one of your monitors. You can also use tab to change which monitor has focus (ie, which monitor is currently accepting mouse scroll and zoom input). 

{% include warning.html content="Sometimes changing tab focus can put the board into or out of blind mode." %}

Simply hold down {% include console_button.html content="Tab" %}, enter the tab id and then release {% include console_button.html content="Tab" %} to open the page.

## Examples
{% include console_command.html content="Tab, 27" noLegend=true noTip=true %}
Swaps to or opens the Colour Picker (swapping takes prescience).

{% include console_command.html content="Tab, 2" noLegend=true noTip=true %}
Swaps to the Playback Show Display

{% include console_command.html content="Tab, 1" noLegend=true noTip=true %}
Swaps to the Live Table.
## On Keyboard
{% include console_button.html content="Tab" %} is mapped to `TAB` on a QWERTY keyboard.