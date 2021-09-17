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
last_updated: September 17, 2021
---

## Advanced Recording and Playback
In the last guide, you learned to record a cue by setting the lighting state and then typing record. This will still be the most common way you record cues, however, there is some magic you can learn to help out in a variety of other situations. 

### Recording to places other than Cues
On the board, cues are actually something called a "Target". Targets have the special property that allows you to record stuff to them. There are a bunch of other targets as well, which are conviently grouped in the same general area on the console. Here's a few of them listed:

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
A very handy property of submasters, is that they appear as a controllable element on the fader bays (the rows of sliders beside the board). You can use these to quickly recall common looks with slight variation (see [Absolute Basics](./Lighting_level_0.html#Using_the_Faders)). The id of a fader is shown on the fader displays (it will show Sxxx). When you want to record a sub. Simply type:
{% include console_command.html content="Record, Sub, Numbers, Enter" noLegend=true noTip=true %}

Keep in mind the board will assume you are recording the look when the submaster is at 100%, there is no way to specify otherwise.

Just like with cues, you can also label, edit, and delete submasters. Although trying to use {% include console_button.html content="Update" %} on a submaster (or any other target that isn't cue for that matter), might result in some unexpected behaviour

{% include note.html content="The label will appear on the display in line with the fader that controls it. While you can also put notes on subs, there is no practical way to quickly view that stored information." %}

Remember that submasters act on a scale. If you record a light at 50%, and then set the fader that controls it to 50%, that light will scale down to 25%.

You might have noticed that the board doesn't stop you from entering the id of a submaster that isn't visible on the fader bays. This is because only four pages of submasters are visible at the time. See the [using faders](404.html) section lower down to learn how to control what fader pages you can fee. Faders and submasters have a couple of weird quirks so may sure to read through that section if you intend on using them.

#### Recording to groups
Groups are another super useful target to know how to record to. You will use groups literally all the time whether you realize or not because they are so useful. 

By default, recording a group will record any channel with a manually set property into the group. What this means is even if a light is on, it may not get recorded. A light is considered to have manual data if you have changed it from its current background state (ie, applying sneak to the channel would cause it to change). You can quickly check if a light is manual by checking its entry on the live table (Tab 1). If the number below the channel is red. Then it's manual. For more information on what those colours mean, see the [Live Table Colour Guide](404.html).

There is another way to record groups as well. See the explicit recording guide at the end of the advanced recording session.

  #### Recording to palettes


  ### Explicit Recording


### Blind Recording

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
