---
title: Encoder Wheels
sidebar: Lighting_sidebar
permalink: Lighting_keyboard_encoderwheels.html
folder: Lighting
# draft: true
# toc: true
summary: The Encoder Wheels are used to modify the values of parameters for a light, they provide a view high degree of precision without having to type long commands. The are very similar to the Manual Wheel, which is used to control the intensity of a light.
# keywords: []
authors: [Ben MacDonald]
last_updated: August 21, 2021
# tags: []
---

## Usage
Like the manual wheel, {% include console_button.html content="Encoder Wheels" %} require a selected light in the command line before you can control properties. When a light or group is selected, a list of properties will appear in the encoder display of the monitor. Only properties that the selected light has will appear in the encoder display.

When no light is selected every unique property from your current lighting patch will be displayed.

There are six categories of encoder properties. To switch between them, see [Encoder Pages](./Lighting_keyboard_encoderpages.html).

The {% include console_button.html content="Encoder Wheels" %} are also clickable. When you click an {% include console_button.html content="Encoder Wheel" %}, you append the property it manipulate to your current command line. See the Lesser Used Examples.

## Examples
<!-- Leave the linkID blank if you want to be able to open multiple sections at once.
Otherwise, only one panel can be open at a time per linkUID.
panelUID must be unique to all other faq panels on this page -->

{% include faq/opening.html linkUID='' %}

{% capture FocusMover %}
You could accomplish this by manipulating the <code>Pan</code> and <code>Tilt</code> parameters of the light using the encoder wheels to quickly and precisely target the actor. If the actor starts moving around, this has the added benefit of enabling you to try and track them.
{% endcapture %}


{% include faq/panel.html panelUID='FocusMover' title='Focus a moving light on an actor on stage' body=FocusMover linkUID='' startOpen='true' %}

{% capture UpdateCyc %}
Using the {% include console_button.html content="Encoder Wheels" %}, you could select problematic LED(s) and manipulate the <code>Red</code> colour property to quickly and precisely lower its percentage without fussing about in the Colour Picker tab.
{% endcapture %}


{% include faq/panel.html panelUID='UpdateCyc' title='Update the colour of a led (such as the cyc)' body=UpdateCyc linkUID='' startOpen='false' %}


{% include faq/closing.html%}


### Lesser Used / Specific Examples

<!-- Leave the linkID blank if you want to be able to open multiple sections at once.
Otherwise, only one panel can be open at a time per linkUID.
panelUID must be unique to all other faq panels on this page -->

{% include faq/opening.html linkUID='' %}

{% capture TypeEncoderProperty %}
To paste the name of the property into your command line, press down on the encoder bound to your desired property and quickly release.<br><br>For this to work, your encoder must be bound to a property, which can be done by selecting a channel or group and then repeating the above instructions.

<br><br>After appending the property, you can modify it by providing a numerical value and then hitting {% include console_button.html content="Enter" %}.
{% endcapture %}

{% include faq/panel.html panelUID='TypeEncoderProperty' title='Append a parameter controlled by an encoder wheel to the command line' body=TypeEncoderProperty linkUID='' startOpen='false' %}

{% capture FancyCycleLight %}
You've learned that a light you're working with has a mode with automatically cycles between colours at a set speed. Chances are that mode is accessible from the Encoder Hold-Down Menu. Select the light in question, hold down the encoder for the property you think the mode is behind. If you are correct, your softkey options will update and one will say <code>Mode</code>. Click that while still holding down the encoder to change modes.<br><br>

Changing modes can also be done from the encoder menu. Open the encoder menu by clicking the upwards triangle close to the bottom left of the monitor which show parameter names just above the command line. Then, navigate through the menus to find the parameter you want to change the mode of. You know a parameter has different modes if it has a button in its section that says <code>Mode</code>. Click it to cycle through the different options, or hit <code>Expand</code> to pop up more options on the right half of the window and select one from there.

{% include tip.html content="Most complicated hold-down buttons and hidden menus can also be accessed from the monitor in the encoder display menu. Make sure to take a look around at what information is present." %}

{% endcapture %}

{% include faq/panel.html panelUID='FancyCycleLight' title='Use encoders to change the parameter mode of more customizable lights' body=FancyCycleLight linkUID='' startOpen='false' %}

{% include faq/closing.html %}

## On Keyboard
The {% include console_button.html content="Encoder Wheels" %} are not mapped to a key.

