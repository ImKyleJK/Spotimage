Spotify Quick Scan Research:

The height range of each bar is between 11.00 and 60.00 inclusive, with every 7th pixel being valid (so 11, 18, 25, 32, 39, 46, 53, 60, these eight possible values).
With 23 bars, it looks like the Spotify Code encodes the URI somehow in this format.
I'm not sure how it does that, but perhaps this would be useful to work off of.


https://scannables.scdn.co/uri/plain/[format]/[background-color-in-hex]/[code-color-in-text]/[size]/[spotify-URI]
https://scannables.scdn.co/uri/plain/png/000000/white/640/spotify:track:0F2BxpbxH8Yc3pLub48hrb

The optical bar’s step size can vary between 0 and 7; thus, there can be eight possible values. As I mentioned before, the first and the last bar act as the start and end markers, while the middle bar is a reference for other bars.

Main Colour: #1ED760
