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
Like the manual wheel, {% include lighting/console_button.html content="Encoder Wheels" %} require a selected light in the command line before you can control properties. When a light or group is selected, a list of properties will appear in the encoder display of the monitor. Only properties that the selected light has will appear in the encoder display.

When no light is selected every unique property from your current lighting patch will be displayed.

There are six categories of encoder properties. To switch between them, see [Encoder Pages](./Lighting_keyboard_encoderpages.html).

The {% include lighting/console_button.html content="Encoder Wheels" %} are also clickable. When you click an {% include lighting/console_button.html content="Encoder Wheel" %}, you append the property it manipulate to your current command line. See the complex examples.

## Examples
- You are trying to focus of moving light on an actor on stage. You could manipulate the `Pan` and `Tilt` parameters using the encoder wheels to quickly and precisely target them.

- You are told by your lighting designer that the colour on the cyc is too red. You could manipulate the `Red` property of the Cyc to lower it without using the Colour Picker tab.

### Complex Examples
- You want to enter a typed value for the `Pan` value of a light. Make sure you are on the `Focus` page, click down the {% include lighting/console_button.html content="Encoder Wheel" %}, type {% include lighting/console_button.html content="At" %} and a number.

- You've learned that a light you're working with has a mode with automatically cycles between colours at a set speed. Chances are that mode is accessible from the Encoder Hold-Down Menu. Select the light in question, hold down the encoder for the property you think the mode is behind. If you are correct, your softkey options will update and one will say `Mode`. Click that while still holding down the encoder to change modes.

## On Keyboard
The {% include lighting/console_button.html content="Encoder Wheels" %} are not mapped to a key.

{% include tip.html content="Most complicated hold-down buttons and hidden menus can also be accessed from the monitor in the encoder display menu. Have a look around and see what you can find!" %}
