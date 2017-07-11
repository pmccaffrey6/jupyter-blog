jupyter-blog
---------------------

This repo shows a configuration that allows for blogging using Jupyter notebooks and pelican. Thus, I make use of the excellent [pelican-ipynb](https://github.com/danielfrg/pelican-ipynb) plugin.

## Setting Up This Environment With Docker


## Storing And Working With Blog Content
This repo exists as a general purpose build environment and example for blogging with pelican and jupyter. As such, the intention here is that many different blogs can run this build pipeline over their respective assets. In my personal case, I have my blog content in a private repo which I just mount onto this container.

As such, the it's better to avoid the default tree structure of pelican wherein both the `content` and `output` folders are co-located alongside pelican's conf files etc... By avoiding this, you can easily manage this repo for building alongside your own separate public or private repo for content.

Thus, it's best to mount your blog content in a separate root directory and reference it in your pelican commands. I use `~/blog-content` and, therefore, the pelican command to build the assets is like so:

`pelican ~/blog-content/content -s /jupyter-blog/pelicanconf.py -o ~/blog-content/output`

### Creating Blog Posts From Jupyter Notebooks:
1. Create any notebooks you want in the `content` folder. Again, this is `~/blog-content/content`
> Remember to create corresponding `.ipynb-meta` files.


## A Few Notes About Theming In Pelican

### Importing and Modifying Theme Structure
This blog uses the wonderful [martin-pelican](https://github.com/cpaulik/martin-pelican) theme. It's been copied into this repo and committed here because it contains several specific changes that aren't in master. The majority of these are just customizations of the various Jinja templates.

One other important change is the consequence of the transition to pelican v 3.7 which introduced a backwards-incompatible change to how pages were referenced in jinja. Where traditionally, templates could use `pages` and `PAGES` interchangeably (e.g. `{% for pg in PAGES %}`), 3.7 requires them to use only `pages` (lowercase) when iterating over static pages, you can read more about more about that  [here](http://docs.getpelican.com/en/latest/faq.html#since-i-upgraded-pelican-my-pages-are-no-longer-rendered). Long story short, the `martin-pelican` theme templates used here have that alteration.

In general, adding/changing themes in Pelican is pretty simple, you can create your own or pull from a rather large selection of wonderful pre-made themes which you can browse at the [pelican-themes](https://github.com/getpelican/pelican-themes) GitHub repo. All that's required to incorporate a theme is to acquire the appropriate static assets. Themes come with their own Jinja templates which you can use or change at will. The simplest way to get a theme's static assets is just to clone the `pelican-themes` github repo and then either:

* use the `pelican-themes` utility to load the theme like so: `pelican-themes -i <path-to-theme>` and confirm that it was loaded  with `pelican-themes -l`. Then you can refer to it's theme name directly in your `pelicanconf.py` like so: `THEME ="martin-pelican"`.

* just directly refer to the assets by their full path in your `pelicanconf.py`. This would be something like `THEME = "/jupyter-blog/themes/martin-pelican"`

Following that, customizing your theme is as simple as modifying the various Jinja templates and creating and referring to variables in your `pelicanconf.py`.

### Other Tips
When using the `pelican-ipynb` plugin, there are a few other stylistic modifications that are recommended. In this repo, these are included in a `custom.css` file imported in the `base.html` template. The modifications include reducing the font-size of the `code_cell`s and hiding the `prompt` elements.
