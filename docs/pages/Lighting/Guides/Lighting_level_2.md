---
title: Level 2 Skills
keywords: [lighting, overview, getting started]
sidebar: Lighting_sidebar
permalink: Lighting_level_2.html
folder: Lighting
authors: [Ben MacDonald]
summary:  This guide covers some advanced topics that were simplified for level 1. It will also get into a little but of lighting and technical theory.
draft: true
tags: [Lighting, Guide]
customPageType: guide
last_updated: September 30, 2021
---
## Advanced Recording and Playback
In the last guide, you learned to record a cue by setting the lighting state and then typing record. This will still be the most common way you record cues, however, there is some magic you can learn to help out in a variety of other situations. 

### Quirks of Record

TODO 

A light is considered to have manual data if you have changed it from its current background state (ie, applying sneak to the channel would cause it to change). You can quickly check if a light is manual by checking its entry on the live table (Tab 1). If the number below the channel is red. Then it's manual. For more information on what those colours mean, see the [Live Table Colour Guide](404.html)


What this means is even if a light is on, it won't necessarily get recorded
### Recording to places other than Cues
On the board, cues are actually something called a "Target". Targets have the special property that allows you to record stuff to them. There are a bunch of other targets as well, which are conveniently grouped in the same general area on the console. Here's a few of them listed:

- {% include console_button.html content="Group" %}
- {% include console_button.html content="Preset" %}
- {% include console_button.html content="Sub" %} (or submaster)
- {% include console_button.html content="Focus Palette" %} (or any other palette)

Cue is, of course, the most common of the targets for show building. It actually has a shorthand form.
{% include console_command.html content="Record, 1, Enter" noLegend=true noTip=true %}
will automatically add in the {% include console_button.html content="Cue" %} argument for you.

In this section, however, we will not be using the shorthand form, you will have to manually declare what target you are saving to.

Lets start with submasters:
#### Recording to submasters
A very handy property of submasters, is that they appear as a controllable element on the fader bays (the rows of sliders beside the board). You can use these to quickly recall common looks with slight variation (see [Absolute Basics](./Lighting_level_0.html#Using_the_Faders)). The id of a fader is shown on the fader displays (it will show something along the lines of `S123`). When you want to record a sub. Simply type:
{% include console_command.html content="Record, Sub, Numbers, Enter" noLegend=true noTip=true %}

Keep in mind the board will assume you are recording the look when the submaster is at 100%, there is no way to specify otherwise.

Just like with cues, you can also label, edit, and delete submasters. Although trying to use {% include console_button.html content="Update" %} on a submaster (or any other target that isn't cue for that matter), might result in some unexpected behaviour

{% include note.html content="The label will appear on the display in line with the fader that controls it. While you can also put notes on subs, there is no practical way to quickly view that stored information." %}

Remember that submasters act on a scale. If you record a light at 50%, and then set the fader that controls it to 50%, that light will scale down to 25%.

You might have noticed that the board doesn't stop you from entering the id of a submaster that isn't visible on the fader bays. This is because only four pages of submasters are visible at the time. See the [using faders](404.html) section lower down to learn how to control what fader pages you can fee. Faders and submasters have a couple of weird quirks so may sure to read through that section if you intend on using them.

#### Recording to groups
Groups are another super useful target to know how to record to. You will use groups literally all the time whether you realize or not because they are so useful. 

There is another way to record groups as well. See the explicit recording guide at the end of the advanced recording session.

#### Recording to palettes and preset
Palettes are special groups that contain property information for a set of lights. For example, you could make a focus palette that contains the pan and tilt information of a million different moving lights so that you can quickly recall those positions later.

Presets are a special palette that instead of storing just one group of properties, stores all non-intensity properties for a set of lights.

The other benefit of palettes is when you use them in a cue. If you update the palette later, those new positions will propagate through any cue using the palette automatically. 

At Scarlett, we use palettes most commonly for colour and focus positions. For example, one year we attached a projector to our moving light frame. Because the projection surfaces moved around, we used focus palettes to automatically update the positions the mover needed to travel to across the entire cue list with just 1 command.

To record to a palette, just like before, use:
{% include console_command.html content="Record, Pallette, Number, Enter" noLegend=true noTip=true %}
{% include note.html content="Make sure to only select one type of palette in your command." %}

{% include warning.html content="Unless you are doing very funky things, you almost certainly want to use explicit recording for palettes. See below." %}

### Explicit Recording
By default, recording a group, cue or any other target will save data for any channel with a manually set property. 

So when you don't want or need the data for every light, you can choose to manually pick which lights you want. This is especially useful for palettes. For example, if you record a palette for the colour of the cyc, you only want to store that data for the cyc lights. 

To use explicit recording, simply prepend the channels you want to target before the record keyword. You can use the exact same syntax as you would for changing the lighting intensity, and that includes groups as well. Here are a few examples.

{% include console_command.html content="Channel, 1, Thru, 10, Record, Cue, 1, Enter" noLegend=true noTip=true %}

{% include console_command.html content="Channel, 1, +, Group, 30, Record, Preset, 88, Enter" noLegend=true noTip=true %}

### Blind Recording
Blind recording is a very scary concept at first. So let's get all the scary notes of blind mode out of the way first.

Blind mode lets you modify cues and other targets without having to actually set the lights on stage. You can edit literally anything that stores light data. However, when in blind mode **Changes are saved immediately**. There is no update or rerecord, **As soon as execute a command, any and all changes that command mode are saved**.

Yeah, that sounds scary, but it's really not so bad after you get used to it. Plus, if you ever make a mistake, you can usually rectify it by using [The Undo and Redo commands](/Lighting_level_1_supplementary.html#Undo_/_Redo).

To enter blind mode, simply hit {% include console_button.html content="Blind" %}. There are 3 visual cues to know if you are in Blind mode: You'll see the button light up blue, the command line will say `Blind` at the start, and the live table will have a slightly bluer background.

{% capture BlindLiveEscape %}
{% include console_button.html content="Live" %}
{% endcapture %}

{% include warning.html content="If you are in Blind mode and you don't think you have any good reason to be in blind mode, hit {{BlindLiveEscape}} to return to normal. Because saves are instant in blind mode, it is very easy to accidentally destroy work." %}

For this section of the guide, only basic cue editing will be covered, more complex blind mode usages will be covered in the [supplementary material for this level](./Lighting_level_2_supplementary.html#Complex_Blind_Mode_Usages), as well as in the next level.





## Cue Management and Timing

  ### Discrete Timing

  ### Multipart Cues

## Patching Lights

## 3 Point Lighting

## More useful buttons to learn
- Copy to / Move to
- Recall from
- Next/Last


## Technical Theory

  ### DMX
  Universes, Cables, Address Vs Channels (technical definition)

  Why each cable goes where


{% include stub.html %}

- 3 Point lighting
- "Warm"/"Cool"/"Top"

- Other lighting theories
  - Colour/"Mood"
  - Colour Theory, Lighting Set/Props
  
- More logistical lighting board controls
  - Focus palettes
  - Colour Palettes
  - ... Palettes
  - Query
  - Copy to/Move to with other targets
  - Recall from
  - Next/Last
- Recording only specific channel data to targets
- DMX, Universes, Addresses, Channels vs Addresses
- Why each cable goes where
- Settings Universe/Address for a light (on the grid)
- The way universes are set up at scarlett (a vs b)
- Patching Lights
  - Attributes
  - Database
