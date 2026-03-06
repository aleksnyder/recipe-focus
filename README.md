## RecipeFocus Extension

This Firefox browser extension helps cut through to the chase when browsing food blogs. It is born out of my frustration in having to scroll through a prolix life story before getting to the recipe card that I really want to check out.

### How it Works

The extension quickly checks for the presence of a few common `div` classes and `itemtypes` that are used on recipe cards. If it finds a single recipe on the page, it displays it at the top in a cloned element with the rest of the page dimmed in the background.

It preserves the formatting, images, and styling of the original recipe card as closely as possible; it doesn't try to "sanitize" or reformat the recipe.


### Developing & Contributing

Fork this repo and load it as an unpacked extension. Push your changes and submit a pull request. I will quickly review and get back to you or accept!

- Open about:debugging#/runtime/this-firefox in your address bar.
- Enable the developer mode at top right.
- Click `Load Temporary Add-on` and select the `src` folder that contains `manifest.json`.
- It's installed and running! Load a long-winded recipe page to test it out ([example](https://damndelicious.net/2019/04/15/red-beans-and-rice/))
- As you make changes, just hit "Reload" on the Extensions settings page to reload the plugin.