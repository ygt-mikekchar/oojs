# Re-examining OO with JavaScript

A very long blog post exploring Object Oriented concepts using very
basic features of JavaScript.  It is a work in progress.

## Working with the Source

The main text is in oojs.org.  It is an emacs Org mode file.  The main
advantage of using Org mode is that it allows you to embed the code in
the document and run the examples.  If you want to do that you will
need to set up a few things.

  - Install Node.js (any recent version that supports ES6 is fine)
  - Set up NODE_PATH so that emacs knows where to find it:
    `export NODE_PATH=/path/to/this/directory`
  - Install emacs (at least version 24)
  - Run emacs and load oojs.org

I have already checked in the "tangled" source files, but if you
want to update them, do it in the oojs.org and run the
`org-babel-tangle` command (by default bound to C-c C-v t).  This will
extract all of embedded files and save them to the current directory.

To run any of the example code, just place the cursor over the code
fragment in oojs.org and press C-c C-c.

## Contributing

I am always happy to have anyone contribute to any project I'm working
on, no matter how small or how large.  The easiest way to send me
comments is to raise an issue in Github.  Here is a link to
[the canonical repository for this work](https://github.com/ygt-mikekchar/oojs).

Also feel free to send me pull requests.  I don't promise to include
every change that someone sends me, but I will be delighted to look at
anything you find interesting.

## License

JavaScript code in this repository (including excepts in oojs.org) is
licensed under the MIT license.  You will find a copy of the license
in this repository.

The prose in this repository is licensed under
[Creative Commons Attribution 4.0](https://creativecommons.org/licenses/by/4.0/).

Portions of this work were paid for by
[Palatinate Group](https://www.palatinategroup.com/).  I very much
appreciate their support.  As of this writing (March 24, 2018), they
are hiring for several positions, so feel free to contact them if you
are looking for work.

Although I was financially supported by Palatinate Group in this
effort, the views and opinions expressed in this repository are those
of the author and do not necessarily relect the policy of Palatinate
Group or any affiliated entity.
