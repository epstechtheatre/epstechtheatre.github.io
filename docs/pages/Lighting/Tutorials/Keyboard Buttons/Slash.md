---
title: Slash (/)
sidebar: Lighting_sidebar
permalink: Lighting_keyboard_slash.html
folder: Lighting
# draft: true
# toc: true
summary: Slash is used in cases where additional specification is required. This could be a DMX universe, a cue list, or a cue in a specific cue list.
# keywords: []
authors: [Ben MacDonald]
last_updated: January 1, 2022
# tags: []
---

## Usage
Most commonly, you will be using {% include lighting/console_button.html content="Slash" %} to change between cue lists. However, you can also use it to patch to a universe without doing complex math. See the examples.
## Examples
<!-- Leave the linkID blank if you want to be able to open multiple sections at once.
Otherwise, only one panel can be open at a time per linkUID.
panelUID must be unique to all other faq panels on this page -->

{% include faq/opening.html linkUID='' %}


{% capture loadCueCallout %}
This command will load cue list 5 into the playback cue. The next time {% include lighting/console_button.html content="Go" %} is pressed, the board will fully transfer into the new list. Until then, it can still be detached, such as if {% include lighting/console_button.html content="Back" %} is pressed.
{% endcapture %}


{% capture loadCueList %}
{% include note.html content="Not all consoles support having multiple cue lists in the same showfile, however, most if not all non-legacy consoles should." %}

{% include lighting/console_command.html content="Cue, 5, /, Enter, Load" noLegend=true noTip=true %}
{% include callout.html type="success" content=loadCueCallout %}

You can also prepare a specific cue number in the new list by specifying the cue ID after the {% include lighting/console_button.html content="/" %}

{% endcapture %}

{% include faq/panel.html panelUID='loadCueList' title='Load another cue list stored in the showfile' body=loadCueList linkUID='' startOpen='false' %}

{% capture patchUniverse %}
Using slash, you can mitigate the math you have to do to patch channels to DMX values in separate DMX universes.
{% include lighting/console_command.html content="7, At, 3, /, 400, Enter" noLegend=true noTip=true %}
{% include callout.html type="success" content="This command would patch channel 7 to be in DMX universe 3 at channel 400. This is equivalent to patching the light to the raw DMX value of 1936 (3*512 + 400). If this was a multi-address light like an LED or mover, additional addresses would increment by one starting at 3/400." %}
{% endcapture %}

{% include faq/panel.html panelUID='patchUniverse' title='Patch a channel to a specific universe number' body=patchUniverse linkUID='' startOpen='false' %}


{% include faq/closing.html%}

### Specific / Lesser Used Examples
<!-- Leave the linkID blank if you want to be able to open multiple sections at once.
Otherwise, only one panel can be open at a time per linkUID.
panelUID must be unique to all other faq panels on this page -->

{% include faq/opening.html linkUID='' %}

{% capture halfLightCallout %}
In specific circumstances, you can use {% include lighting/console_button.html content="Slash" %} to represent division. In the context of intensity setting, you can type any number after the {% include lighting/console_button.html content="/" %} and it will divide the current intensity of the light by that value. Additionally, if you are running this command on a group, the division will happen individually per light.
<br><br>
In this example, each light will be divided by whatever 50% is to them. If you have two lights in a group, one a 50% and one at 10%, light 1 will receive a new intensity of 25% and light 2 would receive an intensity of 5%.
{% endcapture %}


{% capture halfLight %}
{% include lighting/console_command.html content="1, /, 5, Enter" noLegend=true noTip=true %}
{% include callout.html type="success" content=halfLightCallout %}
{% endcapture %}

{% include faq/panel.html panelUID='halfPercent' title='Half the current intensity of a light' body=halfLight linkUID='' startOpen='false' %}

{% include faq/closing.html%}



## On Keyboard
{% include lighting/console_button.html content="Slash" %} is mapped to `/` on a QWERTY keyboard.