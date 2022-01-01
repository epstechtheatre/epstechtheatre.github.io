---
title: Undo / Redo
sidebar: Lighting_sidebar
permalink: Lighting_keyboard_undo_redo.html
folder: Lighting
# draft: true
# toc: true
summary: Undo and Redo can be used to undo and redo most actions taken when using the console. Undo history is cleared on save or power off.
# keywords: []
authors: ["Ben MacDonald"]
last_updated: January 1, 2022
# tags: []
---

## Usage
Type {% include lighting/console_button.html content="Undo" %} to open the command history. Then, use the up and down arrow keys to select how many commands you want to undo. Commands highlighted in gold will be undone in order of most to least recent.

If you realize immediately after that you want to redo your commands click the redo button on the monitor **Before clearing your command line.**

{% include lighting/console_button.html content="Undo" %} can also be used for operations taken in blind mode.
## Examples
<!-- Leave the linkID blank if you want to be able to open multiple sections at once.
Otherwise, only one panel can be open at a time per linkUID.
panelUID must be unique to all other faq panels on this page -->

{% include faq/opening.html linkUID='' %}

{% capture openPanel %}
Press {% include lighting/console_button.html content="Undo" %} once. Make sure not to terminate your command.
{% endcapture %}

{% include faq/panel.html panelUID='openPanel' title='Open the Undo Panel' body=openPanel linkUID='' startOpen='true' %}

{% capture undoCommand %}
{% include lighting/console_button.html content="Undo, Undo, Enter" %}
{% include callout.html type="success" content="This will undo the command entered right before the undo command" %}
{% endcapture %}

{% include faq/panel.html panelUID='undoCommand' title='Undo the last command' body=undoCommand linkUID='' startOpen='false' %}

{% capture undoMultiple %}
Open the panel by pressing {% include lighting/console_button.html content="Undo" %}.

Then, use the {% include lighting/console_button.html content="Page Up" %} and {% include lighting/console_button.html content="Page Down" %} buttons on the console or a connected keyboard to grow or shrink your selection region. Any command highlighted in orange when you click {% include lighting/console_button.html content="Enter" %} will be undid in order of bottom (most recent) to top (least recent).

{% include note.html content="If you attempt to undo more than one command, the console may ask you to confirm you want to run the command." %}
{% endcapture %}

{% include faq/panel.html panelUID='undoMultiple' title='Undo multiple previous commands' body=undoMultiple linkUID='' startOpen='false' %}

{% capture redoCommand %}
If you want to redo a command you just undid. <b>You must ensure that you do not close the Undo Panel in between undoing and attempting to redo the command.</b> Then, using a mouse, click the <code>Redo</code> button on the Undo Panel, and use the same instructions as in the previous example to select the number of commands you want to undo.
{% include warning.html content="If you close the Undo Panel. The console may clear your undo history, which would prevent you from redoing the command." %}
{% endcapture %}

{% include faq/panel.html panelUID='redoCommand' title='Redo a command' body=redoCommand linkUID='' startOpen='false' %}

{% include faq/closing.html%}


## Limitations
The {% include lighting/console_button.html content="Undo" %} command cannot be used for changes made to a magic sheet. However, change snapshots can be made by clicking the "Save" button in the bottom left of the screen when editing a magic sheet. When using snapshots, you will be able to {% include lighting/console_button.html content="Undo" %} back to the last snapshot.

## On Keyboard
{% include lighting/console_button.html content="Undo" %} is mapped to `CTRL + X` on a QWERTY keyboard.