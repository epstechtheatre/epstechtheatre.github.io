---
title: About
keywords: []
sidebar: Lighting_sidebar
permalink: Lighting_keyboard_about.html
folder: Lighting
# draft: true
toc: true
authors: [Ben MacDonald]
summary: The About button shows system information as well as channel source information
last_updated: August 21, 2021
# tags: []
---

## Usage
With nothing in your command line. Pressing {% include console_button.html content="About" %} will show you the current system information for the lighting board application. You can see the current version, number of cues in the showfile, and IP address of the console.

You can also use about to see information about any target. This is especially useful if you have a "Zombie Light" that is stuck on for some reason.

Press {% include console_button.html content="About" %} again to close the window.
## Examples

{% capture col1 %}
Type in the ID of the channel and click {% include console_button.html content="About" %} to see where it is getting properties from.
{% endcapture %}

{% capture col2 %}
With an empty command line, press {% include console_button.html content="About" %} and check the reported version against the latest download on the ETC website.
{% endcapture %}



{% include faq_opening.html %}

{% include faq_panel.html number='one' title='Figure out why a light won\'t turn off when you go to a cue' body=col1 %}

{% include faq_panel.html number='two' title='Check if your software is up-to-date' body=col2 %}

{% include faq_closing.html %}
## On Keyboard
{% include console_button.html content="About" %} is mapped to `Y` on a QWERTY keyboard