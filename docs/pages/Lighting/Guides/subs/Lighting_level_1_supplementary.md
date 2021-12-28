---
title: Level 1 Supplementary Shortcuts
sidebar: Lighting_sidebar
permalink: Lighting_level_1_supplementary.html
folder: Lighting
draft: true
toc: true
# summary: 
keywords: [supplementary, shortcuts, guides]
# authors: []
# last_updated: Month Day, Year
tags: [guide, lighting, supplement]
customPageType: supplement
---

## Useful Buttons and Shortcuts to Learn
Most of these shortcuts are quite easy to remember because they just make sense. Once you realize that you can use them, you'll never want to not (or at least that's what I thought).

### Go To Cue
Type in the name of the cue you want to see and immediately go to it

Try:
{% include lighting/console_command.html content="Go To Cue, 0.2, Enter" noLegend=true noTip=true %}
<br>
More info on the {% include lighting/console_button.html content="Go To Cue" %} button [here](Lighting_keyboard_gotocue.html).

### Implied target selection for repeated commands
That’s a lot of words. Basically, what it means is if you select a target (such as a channel or group) and do multiple things, you don’t have to retype the target each time.

For example, if you were changing the intensity of a group, you only have to type Group the first time. Each subsequent command (so long as the group is still in the command line), you only have to specify what changed:

{% include lighting/console_command.html content="Group, 30, At, Full, Enter" noLegend=true noTip=true %}<br>

Then...
{% include lighting/console_command.html content="At, 60, Enter" noLegend=true noTip=true %}<br>

Then...
{% include lighting/console_command.html content="At, 50, Enter" noLegend=true noTip=true %}


### Update
When fixing cues that have already been recorded, instead of having to retype the entire record command, simply use:
{% include lighting/console_command.html content="Update, Enter" noLegend=true noTip=true %}
<br>
When you do this, you will not be prompted to confirm you want to override the cue.

More info on the {% include lighting/console_button.html content="Update" %} button [here](Lighting_keyboard_update.html).

### Shift + Update
Quickly save your showfile. The same as going through the file browser and clicking File > Save 
Note: This creates a save of the current showfile, if you want to create a new showfile, like you would with “Save As”, you still need to go through the file browser

### Undo / Redo
Made a mistake and accidentally deleted a cue, overwrote the wrong cue or deleted the entirety of your cue list? Luckily, the console keeps a log of every action you take. Simply click Undo and a window will appear on the monitors. Use the arrow cues on the regular keyboard to select how many actions you want to undo (represented by gold colouring)

If right after undoing you decide that you actually did the right thing, you can click the redo button that appears to undo the undo.

Warning: Whenever you save your showfile, you lose the ability to undo any action that occurred before the save
<br>
More info on the {% include lighting/console_button.html content="Undo / Redo" %} button [here](Lighting_keyboard_undo_redo.html).


### RemDim
If you want to quickly blackout everything but one light or group of lights, this is extremely handy. Simply select the lights you want to keep on, then type RemDim and hit enter.

For example:

{% include lighting/console_command.html content="20, RemDim, Enter" noLegend=true noTip=true %}
<br>
More info on the {% include lighting/console_button.html content="RemDim" %} button [here](Lighting_keyboard_remdim.html).


### Softkeys
{% include lighting/console_button.html content="Softkeys" %} are buttons that only exist in certain contexts. While they do have a physical presence on the keyboard, their functionality is ‘softly’ defined and changes depending on the command you type. Softkeys share the same key as the encoder pages, which is why when changing encoder modes you have to hold down the Encoder Page key.

You can see the current function of each softkey in the bottom right of your main monitor. If the green light on {% include lighting/console_button.html content="More SK" %} is lit, that means, like the encoder properties from earlier, there are more possible buttons than there is physical space on the board. Press More SK to cycle between all the options.

These guides won’t cover every softkey because there are literally hundreds of them, but if you see a button in the future that you can’t find on the keyboard, it’s probably a softkey.
