# Politiken RSS viewer

This started as a (semi-)real-life example, which allowed me to play around with a bit of `async`/`await` and `fetch`. I had read through some of the great examples over at [Google's Web Fundamentals](https://developers.google.com/web/fundamentals/primers/async-functions) and wanted to try it out for myself.  
I set it up to fetch Politiken's “Latest news” RSS feed and, once I had that up and running, I thought: _“why not try out some of that fancy new CSS Grid I've been hearing so much about?”_ So I did, and it sort of turned into this proof of concept of how we might build our existing layout in a lot fewer lines of code, using CSS Grid.

Now it's a place for me to experiment and see how far I can go, before I bump up against a limitation. For example, I still haven't figured out a way to dynamically make the last item in the grid span all the remaining columns, if the number of grid items doesn't add up with the number of available columns. This is something that's easily solved with flexbox, but only if the main layout is based on flexbox instead of CSS Grid.
