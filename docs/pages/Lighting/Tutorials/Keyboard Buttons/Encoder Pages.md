---
title: Encoder Pages
sidebar: Lighting_sidebar
permalink: Lighting_keyboard_encoderpages.html
folder: Lighting
# draft: true
# toc: true
summary: The Encoder Pages are used to change the properties that the Encoder Wheels manipulate.
# keywords: []
authors: [Ben MacDonald]
last_updated: December 31, 2021
# tags: []
---

{% include note.html content="Details on the Encoder Display button are lower down on this page." %}


There are six property categories:

- {% include lighting/console_button.html content="Intensity" %}
- {% include lighting/console_button.html content="Focus" %}
- {% include lighting/console_button.html content="Color" %}
- {% include lighting/console_button.html content="Shutter" %}
- {% include lighting/console_button.html content="Image" %}
- and {% include lighting/console_button.html content="Form" %}

### Intensity
Typically only contains one property: The Brightness of the Light. Brightness is always controllable by the {% include lighting/console_button.html content="Manual Wheel" %}.

### Focus
Contains the `Pan` and `Tilt` properties of moving lights. Also contains lesser used properties like `Position Speed`, which controls the maximum speed of the light when moving.

### Color
Contains individual diode colours, like on the cyc, as well as scroller frames. Both linear and non-linear properties exist here. Non-linear properties are control the exact same was as linear properties.

### Shutter
Not super common with traditional lights. Lights that have mechanized shutters can use this page.

### Image
Not super command with traditional lights. Contains properties that manipulate the `Gobos`, `Animation Frames`, and `Refraction Patterns`.

### Form
Contains properties such as `Strobe`, `Edge`, and `Zoom`.

## Usage
To select a page, hold down {% include lighting/console_button.html content="Encoder Display" %} and then click the key for the page you want to select.
{% capture note1 %}
If you aren't using a keyboard with the {% include lighting/console_button.html content="Encoder Display" %} button, you do not need to hold it down to select an encoder page.
{% endcapture %}

{% include note.html content=note1 %}

You can also use these buttons to directly add the name of the property to your current command. Hold down {% include lighting/console_button.html content="Shift" %} and click the key.
## Examples

{% include note.html content="The following examples only reference the <code>Color</code> property, however, like any command, any parameter can be substituted, so long as the channels you are applying the command to have a parameter of that type." %}


<!-- Leave the linkID blank if you want to be able to open multiple sections at once.
Otherwise, only one panel can be open at a time per linkUID.
panelUID must be unique to all other faq panels on this page -->

{% include faq/opening.html linkUID='' %}

{% capture changeColour %}
You want change to the colour page to manipulate the cyc. Use {% include lighting/console_button.html content="Encoder Display" %} and {% include lighting/console_button.html content="Color" %}
{% endcapture %}


{% include faq/panel.html panelUID='changeColour' title='Change the colour of an LED using the encoders' body=changeColour linkUID='' startOpen='true' %}

{% capture homeCallout %}
It is crucial that you hold down {% include lighting/console_button.html content="Shift" %} and {% include lighting/console_button.html content="Colour" %} at the same time. This allows you to paste that parameter into the command line. Alternatively, you can do this by selecting the <code>Color</code> property on the monitor.
{% endcapture %}

{% capture homePrefixCallout %}
We will accomplish this by entering the <code>Color</code> property into the command line, and using the {% include lighting/console_button.html content="Home" %} method to reset those parameters.
{% endcapture %}


{% capture homeColour %}

{% include callout.html type="success" content=homePrefixCallout %}

{% include lighting/console_command.html content="1, Shift & Colour, Home, Enter" noLegend=true noTip=true andAsWord=true %}
{% include callout.html type="info" content=homeCallout %}

{% endcapture %}


{% include faq/panel.html panelUID='homeColour' title='Reset the colour properties of an LED to their home state' body=homeColour linkUID='' startOpen='false' %}


{% include faq/closing.html%}

## On Keyboard
None of the Encoder Pages are mapped to a key. However, you can change pages from within the Encoder Display menu on the monitor. You can also directly select properties from this area.