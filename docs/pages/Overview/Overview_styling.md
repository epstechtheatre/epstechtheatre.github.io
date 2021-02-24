---
title: Styling your page
keywords: 'contributing, pull, merge, github'
sidebar: Overview_sidebar
permalink: /Overview_Contributing_styling.html
summary: There are a lot of neat tricks you can add to pages to make them show information differently. This article goes over the most common uses.
authors:
- Ben MacDonald
last_updated: 'January 15, 2021'
draft: true
---

## Basic styling
These are formatting rules for basic text

| Symbol    | Type          | Example                           |
| --------- |---------------|-----------------------------------|
|  \*       | Italic        | \**Italics*\*                     |
|  \*\*     | Bold          | \*\***Bold**\*\*                  |
|  \*\*\*   | Bold Italics  | \*\*\****Bold Italics***\*\*\*    |
|  \~\~     | Strikeout     | \~\~~~Strikeout~~\~\~             |

Note that the symbols will disappear when displayed on the web
(typing \*italics\* will become *italics*)

The other main way to style text is through headers. Any line that starts with a "#" is turned into a header. You can created multiple levels of headers by added more '#', up to 5 or so. 

{% include warning.html content="You must include a space between the \"#\" and the text of your header, otherwise it will not be formatted correctly" %}

For Example, typing "# Example" on its own line would display as
# Example

And typing "## Example 2" on its own line would display as

## Example 2

{% include callout.html type="info" content="There are two things to note when using headers:<br>First, the size of the text is dependent on the number of '#' used, the more there are, the smaller your text becomes.<br>Second, when you make headers, they will automatically be used to create a table of contents placed at the top of the page. If you have multiple headers with different numbers of '#', make sure that the header with the least amount is the first header on your page, otherwise the table of contents will break." %}


## Add text elements to your page

At the bottom of the last section, there is a special text element. These extra bits and pieces allow you to add more depth to pages and really make stuff stand out. Unfortunately, they do take a bit of extra work to get working, but it still is quite simple.

{% include note.html content="The text you want to have in the text element "%}

- Info blocks
- Images
- Markdown formatting
-