# Ng6Tut - by Zane Ives

This was made with a tutorial from [DesignCourse yt](https://youtu.be/z4JUm0Bq9AM)

- I took rough notes, so as to try and do a lot of the work from memory.
- I struggled quite a bit with the users$ object. For some reason, it didn't want to work with ngFor. Once I changed it to "any" type (and fixed my div tags), it managed to work
- I copy pasted the CSS (and realized my div tags were in the wrong place)
- Also the Navigation end didn't work out the box. Had to modify it to `router.events.subscribe(() => this.currentURL=this.router.url);` to get it to work.

All in all, I think I learnt quite a bit with regards to observables and routing, as well as a bit from ActivatedRoute and Navigation end.

😁