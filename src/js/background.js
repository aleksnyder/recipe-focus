/*
.recipe-callout,
.tasty-recipes,
.easyrecipe,
.innerrecipe,
.recipe-summary.wide,
.wprm-recipe-container,
.recipe-content,
.simple-recipe-pro,
.mv-recipe-card,
div[itemtype="http://schema.org/Recipe"],
div[itemtype="https://schema.org/Recipe"],
div.recipediv,
.wprm-recipe-container
 */

// When the user clicks on the extension action
browser.action.onClicked.addListener(async (tab) => {
    const prevState = await browser.action.getBadgeText({ tabId: tab.id });
    const nextState = prevState === 'ON' ? 'OFF' : 'ON';

    await browser.action.setBadgeText({ tabId: tab.id, text: nextState });

    if (nextState === 'ON') {
        await browser.scripting.insertCSS({
            files: ['css/recipe-focus.css'],
            target: { tabId: tab.id }
        });
    } else if (nextState === 'OFF') {
        await browser.scripting.removeCSS({
            files: ['css/recipe-focus.css'],
            target: { tabId: tab.id }
        });
    }
});
