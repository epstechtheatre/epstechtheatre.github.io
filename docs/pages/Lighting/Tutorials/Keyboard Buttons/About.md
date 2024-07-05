---
title: About
keywords: []
sidebar: Lighting_sidebar
permalink: Lighting_keyboard_about.html
folder: Lighting
# draft: true
toc: true
authors: [Bea MacDonald]
summary: The About button shows system information as well as channel source information
last_updated: August 21, 2021
# tags: []
---

{% capture test %}
Does this work like i want it
{% include lighting/console_command.html content="1, At, Full" noLegend=true noTip=true andAsWord=false %}
{% include callout.html type="success" content="Testing" %}

{% endcapture %}


{% include modal/buttonActivator.html modalUID="test" buttonLabel="test" %}
{% include modal/popover.html modalUID="test" modalTitle="import test" modalBody=test %}

## Usage
With nothing in your command line. Pressing {% include lighting/console_button.html content="About" %} will show you the current system information for the lighting board application. You can see the current version, number of cues in the showfile, and IP address of the console.

You can also use about to see information about any target. This is especially useful if you have a "Zombie Light" that is stuck on for some reason.

Press {% include lighting/console_button.html content="About" %} again to close the window.
## Examples
You want to check if your software is up-to-date. With an empty command line, press {% include lighting/console_button.html content="About" %} and check the reported version against the latest download on the ETC website.

You are trying to figure out why a light won't turn off when you go to cue 0. Type in the ID of the channel and click {% include lighting/console_button.html content="About" %} to see where it is getting properties from.
## On Keyboard
{% include lighting/console_button.html content="About" %} is mapped to `Y` on a QWERTY keyboard