jupyter-blog
---------------------

This repo that shows a configuration that allows for blogging through Jupyter notebooks. This was heavily inspired by [this](https://www.dataquest.io/blog/how-to-setup-a-data-science-blog/) great blog post.

## A Few Notes About Theming In Pelican

### Importing and Modifying Theme Structure
This blog uses the wonderful [martin-pelican](https://github.com/cpaulik/martin-pelican) theme. It's been copied into this repo and committed here because it contains several specific changes that aren't in master. The majority of these are just customizations of the various Jinja templates.

One other important change is the consequence of the transition to pelican v 3.7 which introduced a backwards-incompatible change to how pages were referenced in jinja. Where traditionally, templates could use `pages` and `PAGES` interchangeably (e.g. `{% for pg in PAGES %}`), 3.7 requires them to use only `pages` (lowercase) when iterating over static pages, you can read more about more about that  [here](http://docs.getpelican.com/en/latest/faq.html#since-i-upgraded-pelican-my-pages-are-no-longer-rendered). Long story short, the `martin-pelican` theme templates used here have that alteration.

In general, adding/changing themes in Pelican is pretty simple, you can create your own or pull from a rather large selection of wonderful pre-made themes which you can browse at the [pelican-themes](https://github.com/getpelican/pelican-themes) GitHub repo. All that's required to incorporate a theme is to acquire the appropriate static assets. Themes come with their own Jinja templates which you can use or change at will. The simplest way to get a theme's static assets is just to clone the `pelican-themes` github repo and then either:

* use the `pelican-themes` utility to load the theme like so: `pelican-themes -i <path-to-theme>` and confirm that it was loaded  with `pelican-themes -l`. Then you can refer to it's theme name directly in your `pelicanconf.py` like so: `THEME ="martin-pelican"`.

* just directly refer to the assets by their full path in your `pelicanconf.py`. This would be something like `THEME = "/jupyter-blog/themes/martin-pelican"`

Following that, customizing your theme is as simple as modifying the various Jinja templates and creating and referring to variables in your `pelicanconf.py`.

### Other Tips
When using the `pelican-ipynb` plugin, there are a few other stylistic modifications that are recommended. In this repo, these are best `@import`ed as a `custom.css` file. The modifications include reducing the font-size of the `code_cell`s and hiding the `prompt` elements.

## Creating Blog Posts From Jupyter Notebooks:
1. Create any notebooks you want in the `content` folder.
> Remember to create corresponding `.ipynb-meta` files.

2. Edit pelicanconf.py to the lines that activate the `pelican-ipynb` plugin.
3. Run `pelican content`.

## Previewing Output:
Switch to the `output` directory and run `python3 -m http.server`.
