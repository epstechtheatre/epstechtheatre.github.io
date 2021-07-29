---
title: Level 0 (Absolute Basics)
keywords: [lighting, overview, getting started, guide, basics]
sidebar: Lighting_sidebar
permalink: Lighting_level_0.html
folder: Lighting
authors: [Ben MacDonald, Katie Drysdale]
summary: The most basic of what you need to know in order to interact with our lighting grid. It utilizes our existing setup but does not explain any theory behind why you do what you do.
draft: true
---

{% include note.html content="This page is very specifically tailored to the lighting network present at Dr. E.P. Scarlett, I highly recommend students from other schools that are just starting out take everything with a grain of salt, or go through the guide with a mentor so they can make corrections as they need to." %}


## Before you begin
If you did any lighting work in your previous school, you might have used a lighting board with a bunch of sliders, where each slider controlled one light (or one colour of a multicoloured light). This is called an analogue lighting board. 

At Scarlett, we have a digital lighting board. The main difference is, unlike an analogue board, our control system is an application running on a computer. This means that, among other things, we can utilize the power of automation to create and run our shows. No preparing the sliders for the next cue or fretting over a cue sheet with all the different slider positions. In a theatre like ours that has upwards of 50 active lights, having a digital system becomes a necessity.

This is everything you need to know about the absolute basics of controlling the lights in our theatre.

{% include warning.html content="You may want to ask for another more experienced tech to help you out with these steps to make sure you don’t miss anything" %}

### What does the lighting board actually do?
In its simplest form, it is a playlist. When designing the show you create ‘looks’, which are basically just combinations of lights that look nice together and amplify the action and mood of the scene on stage. There are a lot of different looks we have to swap between throughout a show, so we add these looks to the playlist (or cuelist as it’s called). Then, when running the show, we don’t have to redo all the work of setting up a look, we can just hit a single button and the cue is loaded.
Parts of the lighting board
The board is really just a specialized computer. The main part (the scary looking part) is the board itself. We call it the console. It has a bunch of buttons with words that don’t make sense and sliders that have digital displays. That’s the only part that’s different to just a regular computer. The rest is just monitors and a less scary looking keyboard and mouse. You will be using both parts when controlling lights.

## Power
### Turning on and off the console
Press the {% include console_button.html content="Power" %} button in the top left corner of the board and then wait. This will take a while, upwards of 2 minutes. When it’s ready, the displays on the board will show useful information that you might not understand yet. You will also be able to control the lights.

{% include warning.html content="Make sure you warm up the lights before using them. This will keep bulbs from breaking, which can happen if they get too hot too fast. See the <a alt='Warming Up Lights' href='#warming-up-lights'>Warming Up Lights</a> section" %}

To turn off the console, you have a few options:

The first way (which is the easiest) is to just press the power button. This will pop up a screen on the monitor asking if you really want to shut down, either use the mouse to hit ‘OK’, or just click the power button one last time.

The second way is done from the monitors, 
Using the mouse, click the upwards facing triangle in the bottom right corner of the screen. If you don’t see one, the panel might already be open, in which case there will be a downwards facing triangle somewhere in the lower third of the right-hand part of the screen

In the screen that says “Browser: file”, just below “> File”, click “Power Off”

{% include tip.html content="You’ll be using this file browser a lot, so it’s a good idea to learn it now" %}

## Showfile

{% include note.html content="Depending on who you are doing this with, you may want to skip this section for the time being.You should learn it eventually, but if you just need to learn how to control lights, this section is not useful presently" %}

A showfile is basically just like any other document on a computer. Just like you might have different word documents for different assignments or images in your phone, a showfile is just a bunch of data related to a certain show. If you’re in the wrong file, you won’t have the right cues, or even worse, you could accidentally erase someone else’s cues. 

### Loading Showfiles
It’s good practice to first save whatever file you’re in. Do this by either clicking {% include console_button.html content="Shift" %} and {% include console_button.html content="Update" %} at the same time, or by going to the file browser, clicking “File”, then clicking “Save”

If you can’t see the browser and you are confident you should be able to, click the {% include console_button.html content="About" %} key a few times. If that still doesn’t resolve it, refer to [Troubleshooting](./Lighting_troubleshooting_landing_page.html)


Once you have saved, go to the browser, go to “File”, click “Open”, and then click “Show File Archive”. You should see a bunch of folders. For demonstration purposes, click “!Mainfile”, then double click MAINFILE…..esf.

{% include note.html content="If you haven’t saved recently, the board will ask if you want to save first, if you hit save, you will have to relocate the file in the browser. Otherwise, the board will just ask you if you are sure you want to open the file, click ‘OK’" %}

### Creating New Showfiles
A new showfile should be created for each unique project you work on. For example, if you work on a play in the winter, and there is another play in the spring, the spring cues should be in a new showfile. This helps with organization and clutter.

{% include tip.html content="For small projects, especially classwork where there are multiple groups, you can use cue lists as an alternative to showfiles. We will get into them later as they are more complicated, but for now think of them like holding multiple cue lists inside of the same showfile" %}

This may seem counter intuitive, but we hardly ever create brand new showfiles from scratch. There is a lot of set up work involved to do that, so instead, we just copy the main one (it’s called MAINFILE). To copy the mainfile, we first need to open it up. So let’s do that now, using the instructions in the last step, open the MAINFILE in the file browser.

Once it’s open, we can copy it. Go back to the browser, click “File”, click “Save As”, double click “Show File Archive” and it should ask you to type a name, you can use the keyboard for this. When you’re done, hit enter (either on the keyboard or the console).

{% include important.html content="Another tech may tell you to save your file under a different location for organizational purposes. You should listen to them" %}

The name you entered should appear at the top middle of the monitors. If it doesn’t you might still be in the mainfile. Go to the file browser, and open the one you just created. It should be under the “Show File Archive” directory.

## Controlling Lights
### First Steps
So far, we’ve just talked about logistical stuff. It’s necessary, but it’s boring, so let’s play with lights.

Each light in the theatre has been assigned a number. We call them channels. This allows the computer to send out information regarding what channels should be on. You don’t need to memorize the numbers lights are assigned, in fact I strongly recommend you don’t.

To turn a channel on or off, we follow these steps
1. What light do we want to change
2. What’s its number?
3. What do we want to change it to?

For this, we will be using the command line. If you have any coding experience, this will probably feel pretty natural to you, but it’s not hard to pick up otherwise.

Go ahead and try this command right now:

{% include console_command.html content="20, At, Full, Enter" noLegend=true noTip=false %}

You should see a light turn on. 

Now try the same command, but instead of pressing “Full”, type a number between 0 and 100, then hit enter. You should see the same light turn on, but at a different intensity

Lastly, try spinning the {% include console_button.html content="Silver Knob" %}  on the right hand side of the console up and down. You should see the light get brighter and dimmer depending on which way you spin it. This is called the manual control knob.

Congrats! You now know the basics to turning lights on and off. Before you go any further, let’s talk about warming up.

### Warming up lights
The lights in the theatre are old. Old lights don’t like temperature changes, so to stop them from exploding we warm them up first. It’s not hard to do this, but you will have to wait for a few minutes for the lights to actually get warm. 

To do this, all you have to do is go into cue 0.2. Do this by clicking the {% include console_button.html content="Go" %} button until the number in the highlighted number in the bottom left corner of the console screen says 0.2. All the lights should dimly turn on. Wait in this for no less than 3 minutes.

{% include note.html content="The reason we didn’t have to warm up the light in the last step is because it was an LED. Unlike conventional lights with a glass bulb, LEDs are pretty good at not exploding under rapid temperature change (they also don’t heat up as much)" %}

### Practical Use
So far you’ve turned a single light on and off. Let’s expand on that a little. First, so we aren’t blindly typing channel numbers, let’s find a list of what channel controls what light. This is where our lighting board really shines.

### Tabs and Monitor Control
For this, we will primarily be using the monitors, close to the bottom of each monitor you should see a plus button typically on the right-hand side of a list of names. This is the tab navigator. The easiest way to think of the tabs is like a web browser. You can switch between tabs by left-clicking on them, and you can have the same tab open multiple times. To open a new tab, click the plus button and it will pop up a bunch of options on the monitor you clicked the plus on. To close a tab, click onto it, then hit escape, or right-click on the tab in the navigator and hit close. Each tab has a number, which identifies what type it is.

There are a lot of tabs for you to pick, but you will only really be using about 4 of the options. 
Those are:
- Live Table (In the left-hand column) (Tab 1)
- PSD (In the center column) (Tab 2)
- Magic Sheet Browser (In the center column) (Tab 3)
- Color Picker (In the right-hand column) (Tab 27)

#### The Live Table
This shows the current state of every light the board is controlling, most useful for quickly glancing at whether or not a channel is on. Like the PSD, at least one instance of this tab must always be open.

#### The PSD (Playback Show Display)
When you record cues, they will appear here, when running a show, this is the file you have open. It contains all the useful information for show playback. You can never completely close this; at least one instance of this tab must always be open.

#### The Magic Sheet
Read below...

#### The Color Picker
For our multicoloured LEDs, this is the easiest way to change their colour.
#### The Magic Sheet
This is the most graphical way to control lights in the theatre. It works like a web page, and puts everything into nice looking and labelled boxes and buttons. Most experienced lighting designers (even in the industry) use magic sheets to some extent. To use ours, first open the magic sheet tab (Make sure you don’t accidentally open Tab 14). We have a couple magic sheets that we like to use. The one that is used most often and the one the guide will be using is the one that looks like this:
{% include image.html file="./Lighting/magic-sheet.png" alt="Picture of the Magic Sheet" max-width="600" %}

{% include tip.html content="This may already be open as a tab, if it is the tab will say something along the lines of <u><i>3 Live MS “Main Lights”</i></u> right in the navigator" %}

The map shows a simplified display of the theatre. You can click buttons to directly select lights (the same as if you were to type the number into the command line, like we did above). Some buttons select multiple lights at the same time, more on that in a moment. At the top of the sheet, there are a few tabs that say “Main Lights”, “Secondary Lights”, “Effects”, and “Macros”. Make sure to check out the tabs to familiarize yourself with the information provided, but don’t worry about the last two for now, they will be explained on another wiki page.

Once you have selected a light, you can use the {% include console_button.html content="Full" %}, {% include console_button.html content="Out" %}, and {% include console_button.html content="At" %}, syntax just like you were above. 

### Controlling multiple lights at the same time
{% include important.html content="Make sure you have warmed up before continuing with the guide" %}

Now that we can see where every light is we can start doing some more practical design work.

Only changing one light per action ends up being slow and inefficient, especially when working under a time crunch, like right before a show. We can use extensions to the syntax you already know to select multiple lights. Try this command now.

{% include console_command.html content="1, Thru, 10, At, Full, Enter" noLegend=true noTip=true %}

You should see every front light turn on at full brightness. {% include console_button.html content="Thru" %} selects every light between 2 numbers you provide (in the example above, you selected all lights between 1 and 10, including channel 1 and channel 10). 

<br>

You can also discretely select multiple channels:

{% include console_command.html content="1, +, 3, +, 5, At, 30, Enter" noLegend=true noTip=true %}

<br>

Both choices have their obvious pros and cons. The pro of thru being you can quickly select hundreds of channels with one command, and the benefit of discrete being you can select multiple channels with wildly different numbers.

<br>

There are three other ways to select multiple lights as well:

#### Groups
Groups are predefined sets of channels. For example, you could have every light pointed at downstage left in a group, so instead of having to memorize that channels 3, 5 and 13 are pointed there, you could just type Group 4. Try this command:

{% include console_command.html content="Group, 1, At, 50, Enter" noLegend=true noTip=true %}

You should see every single light in the theatre turn on at 50%.

I personally use groups more often than selecting individual channels. You can imaging that in large venues like the Jubilee with hundreds of lights, selecting each light one-by-one isn't feasible

#### Selecting Directly From the Magic Sheet
I briefly mentioned before that you can click buttons on the magic sheet to select channels. Well you can also click multiple channels at the same time to do exactly the same as if you were typing it in the command line. The larger labels for groups of buttons are, you guessed it, group selectors.

#### Using the Faders
Faders (the black slidey thing to the side of the console) are basically just fancy groups. Instead of having to type in the group name every time, you can just move the slider up or down. Plus, it also acts like a scale. If you want to turn a group on at 50%, you move the corresponding slider 50% up the track. These are great in shows when you have groups that you always use at slightly different intensity levels. They are also great in improv shows because they offer a lot of control very quickly.

## Conclusion
That is about all you need to know in order to interact with lights. Now you can move onto the levelled guides. Level 1 will, among other things cover recording cues like you would for a show.

Take a break, grab something to drink, and when you're ready [Continue to next level](./Lighting_level_1.md)
