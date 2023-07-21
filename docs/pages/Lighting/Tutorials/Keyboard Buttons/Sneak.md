---
title: Sneak
sidebar: Lighting_sidebar
permalink: Lighting_keyboard_sneak.html
folder: Lighting
# draft: true
# toc: true
summary: Shift allows you to gradually transition a lights property to another value
# keywords: []
authors: ["Ben MacDonald"]
last_updated: January 3, 2022
# tags: []
---

## Usage
Like what would happen in a cue list, you can use {% include lighting/console_button.html content="Shift" %} to slowly transition a light's property or properties to another value over a timed interval. 

{% include lighting/console_button.html content="Sneak" %} also has less common usages. See the examples below:
## Examples

<!-- Leave the linkID blank if you want to be able to open multiple sections at once.
Otherwise, only one panel can be open at a time per linkUID.
panelUID must be unique to all other faq panels on this page -->

{% include faq/opening.html linkUID='' %}

{% capture sneakDefault %}
{% include lighting/console_command.html content="1, At, Full, Sneak, Enter" noLegend=true noTip=true %}
{% include callout.html type="success" content="This example will change channel 1's intensity from its current value to full. Without additional parameters, the time it takes for the intensity to change will come from sneak's default interval. This can be configured in the system settings, but typically it is 5 seconds." %}

<br><br>
If you want to sneak to a different intensity value, you can do so by replacing the {% include lighting/console_button.html content="Full" %} keyword with a percentage (for example, {% include lighting/inline_console_command.html content="1, At, 57, Sneak, Enter" andAsWord=false %}
)

<br><br>
If you want the sneak interval to be different than the default, you can do so with with the next example.

{% endcapture %}

{% include faq/panel.html panelUID='sneakDefault' title='Slowly change the intensity of a light to a new value' body=sneakDefault linkUID='' startOpen='true' %}

{% capture sneakIntervalCallout %}
This command is very similar to the one in the previous example. The part important to us here though is present after the {% include lighting/console_button.html content="Sneak" %} parameter. Entering {% include lighting/inline_console_command.html content="Time, Numbers" andAsWord=false %} tells the console to run the sneak function over that many seconds. You can make this as long or as short as you like!
{% endcapture %}


{% capture sneakInterval %}
{% include lighting/console_command.html content="1, At, Full, Sneak, Time, 10, Enter" noLegend=true noTip=true %}
{% include callout.html type="success" content=sneakIntervalCallout %}

{% endcapture %}

{% include faq/closing.html%}

## Specific / Less Used Examples

<!-- Leave the linkID blank if you want to be able to open multiple sections at once.
Otherwise, only one panel can be open at a time per linkUID.
panelUID must be unique to all other faq panels on this page -->

{% include faq/opening.html linkUID='' %}

{% capture sneakParameter %}
{% include lighting/console_command.html content="1, {Pan}, At, 50, Sneak, Enter" noLegend=true noTip=true %}
{% include callout.html type="success" content="This command will sneaks the light's `Pan` Property to 50 over the default sneak interval. For this command to work, channel 1 must have a `Pan` property." %}


{% endcapture %}

{% include faq/panel.html panelUID='sneakParameter' title='Sneak non-intensity parameters' body=sneakParameter linkUID='' startOpen='true' %}

{% capture sneakPalette %}
{% include lighting/console_command.html content="1, Color Palette, 5, Sneak, Enter" noLegend=true noTip=true %}
{% include callout.html type="success" content="This command will sneak channel 1 into colour palette 5. For this to work, the following must be true.<br>1) Channel 1 must have a colour parameter<br>2) Colour data for channel 1 must be stored in colour palette 5." %}

{% endcapture %}

{% include faq/panel.html panelUID='sneakPalette' title='Sneak lights into palette properties' body=sneakPalette linkUID='' startOpen='false' %}

{% capture sneakBackground %}
{% include lighting/console_command.html content="1, Sneak, Enter" noLegend=true noTip=true %}
{% include callout.html type="success" content="This command will sneak the light to its background state over the default interval. The background state is defined by a combination of currently active cues, faders and other data. If there is no background state, it goes to home." %}

{% endcapture %}


{% include faq/panel.html panelUID='sneakBackground' title='Sneak lights into their background state' body=sneakBackground linkUID='' startOpen='false' %}

{% capture sneakAllNonIntensity %}
{% include lighting/console_command.html content="1, Sneak, Sneak, Enter" noLegend=true noTip=true %}
{% include callout.html type="success" content="This command sneaks all the light's non-intensity parameters to the background state. Like the previous example, if there is no background state, those properties go to home." %}

{% endcapture %}

{% include faq/panel.html panelUID='sneakAllNonIntensity' title='Sneak a lights non-intensity parameters into their background state' body=sneakAllNonIntensity linkUID='' startOpen='false' %}

{% include faq/closing.html%}


## On Keyboard
{% include lighting/console_button.html content="Sneak" %} is mapped to `N` on a QWERTY keyboard