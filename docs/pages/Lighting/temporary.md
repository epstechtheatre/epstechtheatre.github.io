---
title: Lighting Crash Course
permalink: LCCx913ha.html
search: exclude
authors: [Ben MacDonald, Katie Drysdale]
summary: A very specific information set for information you said you wanted to know
private: true
noedit: true
draft: true
---



## Prelude
This is going to be very out of order just so you know. It covers a lot of random information that is fragmented and may feel out of place. Regardless, I wanted to give a quick rundown on some of the component of this page. Above this paragraph is a table of contents to help organize everything, each line is a hyperlink that jumps straight to that section.

Also, if I mention console buttons or commands there will probably be a box that looks vaguely like {% include console_button.html content="this" %}. Tap or hover your mouse over the words to see where that button is on the console keyboard. For example, hovering over this next box will show you where the {% include console_button.html content="Effect" %} button is.

## Basics
You know how to turn the board on and how to get it running. So I will skip over that. Instead, I will start from controlling lights and speed my way to targets and cues and stuff I am predicting you might need to know for this project

### Controlling Lights, Bare Minimum
(This paragraph is theory, don't think too much about it) Computers don't like words very much, so they work in numbers. Each light has 2 numbers associated with it. The first is called the address. The address is the physical location of the light. Typically, that is what plug it is connected to. We don't use this number very often, because something like '43' has no logical organization to it. Instead we use the second number, the channel number. Think of the channel number like an alias used for organizational purpose. Each light has a unique channel ID.

When we want to control a light, you type in it's channel to the command line, and then an instruction. For example, to set the intensity of a channel 1 to 75%, we would do
{% include console_command.html content="1, at, 7, 5, Enter" noLegend=true noTip=true %}
{% include note.html content="'At' basically means \"everything after me is a percentage value\",<br>'Enter', just like your calculator means \"I am done typing and ready for you to process this\"" %}

How do you get the channel? Simple. Look to the magic sheet! The magic sheet is an easy to read directory for every single light in the theatre, but that explain in the next section.

Other special keywords you can do there include {% include console_button.html content="Full" %} which means 100% and  {% include console_button.html content="Out" %} which means 0%.

The other way to set intensity for a channel is by using the wheel. After selecting a channel (where selecting means typing in a channels number and pressing enter), spinning the wheel up and down will increase and decrease its intensity.

{% include tip.html content="By default, when starting from a clean command line, the board will automatically add 'channel' to the start. This is actually a good check because if it doesn't do this you might be in the wrong mode. Read below. "%}

Sometimes you may follow these instructions verbatim and it won't work. Typically this is because you have accidentally found your way into Blind mode. The easiest way to fix this is by hitting {% include console_button.html content="Live" %} (this may cause some of the monitors to change tabs)

You may have also started from a non-cleared command line. Just like on a calculator, you have to hit {% include console_button.html content="Clear" %} before started a new command.

At this point, you should be able to blindly turn single lights on and off with relative easy. Now, let's turn on multiple lights purposefully!

### Controlling Lights, Magic Sheet
In the last section I mentioned the magic sheet, to get to it, you'll need to open a new tab on the computer, unless a magic sheet tab is already open, in which case you can switch to it like you switch tabs in chrome. If it isn't, look for the plus button beside the list of open tabs, then look for magic sheet. After that, select Main Lights.

You had some experience with the old magic sheet, this is a new one that I made last year. It serves the same purpose, just in a more condensed manner. If you don't like it, hit "Theatre Map" in the top right to switch to the old layout (and hit "New Magic Sheet" in the top right to get back. If you can see the button, use the scroll wheel to zoom in and out and hold the right mouse button and drag the mouse to pan around).

I will be describing the new magic sheet, as that is the one I am familiar with. Each circle represents a light in the theatre. Each circle has a number that represents the channel's ID. The circle brightens and darkens with the intensity of the light. The rectangles beside the circles are group selectors (which I will get to). You can click on the circles to paste its ID into the command line so you can change it's intensity and give it other instructions. Also take note of the tabs at the top of the sheet, which reveal more lights and other useful tools.

### Controlling Lights, Multi select
Controlling one light at a time works but is slow and we can do better. There are 3 buttons that will help us here: {% include console_button.html content="+" %}, {% include console_button.html content="Thru" %}, and {% include console_button.html content="Group" %}. Here's how they work. 

**Plus** lets you select as many individual channels as you want. for example, you can do "1 + 11 + 412 + 56 at Full" to set each one of those channels to 100%.

**Thru** lets you select all the channels between a range of two channel IDs. For example, you can do "1 thru 10" to select channels 1, 2, 3, 4,...10. You can chain Plus with Thru to select multiple ranges of lights\

**Group** (the trickier one) is a pre-programed list of lights. Like channels, every group has a unique ID. Some nice to know groups are the following (note that you can see these on the new magic sheet): Group 2: All Front Lights, Group 3: All Top Lights, Group 30: Cycs,
<br>
The one thing to remember is that all commands must end with Enter

### Controlling Lights, non-intensity parameters
Some lights, like the cyc, the mover, and the scrollers have more than just on and off functions. To control these, we are going to use the {% include console_button.html content="Encoder Wheels" %}. Because there are a lot of different parameters, they are categorized into six types on six pages: 
- Focus, 
- Colo(u)r, 
- Intensity (Labelled as 'custom' on the console), 
- Form, 
- Image, 
- and Shutter. 

To swap between the pages, use the six {% include console_button.html content="Encoder Page" %} buttons When you select a light (or group of the same type of light), that has a non-intensity parameter, the encoders will have some text appear on the screen below them. For example, the cycs will have some encoder information on the 'color' page and the mover will have information on the 'focus' page.
{% include tip.html content="You will only see text under the encoders when you have lights selected, if you haven't pressed enter yet, you won't see anything" %}
Spin those wheels and watch the lights change.

There is another way to control the colour of lights as well. For this, we will be using the Colour Picker. Just like how you opened the Magic Sheet tab, repeat, but this time select "Colour Picker" (it is purple and in the right-hand column). Then, simply select some lights (with a colour parameter) and click anywhere on the spectrum.

The best way to learn this is by playing around so don't be afraid to go wild.


## Recording Cues
Firstly, you want to make sure you're recording your cues into a file where you'll be able to find them again. The easiest way to do this is to make a new cuelist if you're starting from scratch. (here's how to do that). Otherwise, remember where you save it (i don't actually know how to find it, but theoretically that would also be explained here)

The next step is to make the light look the way that you want. This is the fun part - do whatever you want, and make it really super cool. The super cool part is important. 

Finally, you need to actually save it to a cue. Cue's like channels, and groups, also all have a unique identifier. Recording a cue means you record intensity, colours, mover positions, and everything else you have done. All you need to do for this is type 
{% include console_command.html content="Record, Cue, Number, Enter" noTip=true noLegend=true %}

{% include warning.html content="Your class is using a certain saving scheme for your cuelists, check with claire and ask her to show you either how to get into a separate cue list, or a unique showfile" %}

Number your cues chronologically in the order they'll be in during the final performance. You can label them directly after creating them by hitting {% include console_button.html content="Label" %} before the clearing the command line, then using the actual English keyboard to type the name. If the command line has been cleared since you recorded the cue, you can still label them! Just specify the cue, so the command will be 
{% include console_command.html content="Cue, Number, Label, Enter" noTip=true noLegend=true %}

{% include note.html content="You can also give cues partial numbers (ex. 1.5). This is helpful if you realize you want to add a scene when you've already finished programming your show." %}

### Updating existing cues
If you come back to a cue some time in the future and find you don't like it anymore, theres a very easy way to make updates to it. All you need to do is make sure you are currently in the cue you want to change, then just start changing lights. Once you have everything you like. Hit {% include console_button.html content="Update" %} or enter the record command using the ID of the cue you are updating. (You don't need to reenter a label if you have one, the board does that automatically.)

### Playing back cues
This is really easy, use the {% include console_button.html content="Go" %} and {% include console_button.html content="Stop" %} buttons to go forwards and backwards in the cuelist. In the bottom right of the screen, the IDs of the currently active cue and the next cue can be seen. Check the next section on using the PSD 

## Using the monitors
The monitors on the console are a way to show more information than what is possible on the command line alone. They also allow for more diverse control.

I mentioned the magic sheet and the colour picker, those are two tabs that help program. There are a few more tabs that you should be familiar with.

Two tabs will always be open, they are the Playback Show Display (PSD) and the Live Table.

The PSD shows the currently active cuelist, as you playback the show, the highlighted cue will travel downwards. This is also where you can see the labels if you made any.

The Live Table shows raw lighting information. It's basically a magic sheet except less pretty to look at.

### Navigating the tabs
Treat it like a web browser. Going to a new webpage is clicking the plus at the end of the tab list. To close a tab, press escape, when you have the tab you want to close active. If you right click on a tab, you can see a few more options which are specific to the tab you selected.

{% include warning.html content="Some tabs put the console into 'Blind Mode'. Check to see if the blue light on the Blind button goes on. Make sure to press Live before entering commands! "%}


## Effects
Alright this is the last section. Luckily effects aren't that hard. Here is the command for adding an effect to a group

{% include console_command.html content="Group, Number, Effect, Number, Enter" %}

Here's what that means: Apply some effect to some group.

Just like everything else in the board, Effects have a unique ID which can be referenced, know that ID and you can add it to a channel or list of channels.

You can see some pre-built effects by going to the effects tab on the new magic sheet.

What if the effects provided don't quite give you what your looking for? Maybe you want it to be bigger or faster (or vise versa). Luckily theirs an easy way to do that. Just like you can target a light by typing in any number, if you type {% include console_button.html content="Effect" %} first, then a number, you can select any Effect.

This will open the Effect Editor on one of the monitors. You'll also see a few things on the encoders: Rate, and Size.

Rate controls the speed, in percentage.
Size controls the size, in percentage. Turns those up or down and you can see the effect increase and decrease

{% include warning.html content="You need to save the effects into a cue for them to be activated in a show. If you make a change to the size or rate after you have recorded the effect, you need to update that cue for your changes to save" %}

Theres a lot of stuff on the effects tab in the magic sheet, you probably won't understand of lot of it. The rule of thumb is this: 
If you have a channel or group in the command line and you add an effect, it will start the effect on the channels you selected
If you have an empty command line and you add an effect, it will open the effect editor

### Stopping effects
Two ways to do this:

1) Enter the group or channels you want to stop the effect on. Type Effect, Enter

2) Go the the effect tab in the magic sheet and click one of the stop effect buttons, there are two: One will ask you to enter the ID of a group or channel that you want to stop the effect on (then hit enter), the other will ask you for the ID of the effect you want to stop.

## Turning off the board
1) Save your showfile
   
Hold {% include console_button.html content="Shift" %} and hit {% include console_button.html content="Update" %}

2) Click the {% include console_button.html content="Power" %} button a few times until the monitors show the ETC splash screen. After this, cover up the board and it will shutdown in a minute

{% include note.html content="You do not need to touch the power switch on the back of the console, in fact, please don't. "%}

## Conclusion
This was really hastily put together so I am really sorry if there are mistakes. I will update this over time and eventually finish the entire wiki so this page will eventually get replaced by finished content. If you have questions, there should be a few techs who are also in your class. Maybe you can steal them for a minute.

Also, if you want to write a page or two about anything relating to the Shows (Lighting, Sound, Props, Set, Stage Management, Costume, Etc.), let me know!

Best of Luck!