This project can be found at https://garethbevansoftware.github.io/BrewDogSearch/.

## Current Progress
User requirements
* As a user I want the application to show me beers using three different views (tabs):
    * beers that pair with pizza
    * beers that pair with steak
    * all available beers
    * You should be able to scroll vertically in a category, paginate through the beers using swipe gestures: up->down,
down->up
> The tabs for the 3 different food types have been implemented, however currently the list isn't filtered when swapping between tabs.

* As a user I want to easily navigate around the app and:
    * For each beer in a view see the name, a picture and the abv
    * Transition between views/tabs using swipe gestures: le->right, right->le 
> This has been implemented as is working correctly
* As a user I want to select a beer and see the following information:
    * picture
    * name
    * tagline
    * abv
    * Description (collapsed if too long)
    * food_pairing (collapsed if too long)
> A modal has been implemented to show the above information. All the information above is shown. There are a couple of style issues here and the description isn't collapsing if too long.
* As a user I want to be able to add items to the cart:
    1. The cart should maintain state for the entire session of the application.
    2. The cart should be viewable by sliding the bottom drawer up
    3. If there are multiple items in the cart, it should be possible to scroll through the items
    4. !! The api provided does not have prices for the items so feel free to use abv values instead of prices
> Redux has been implemented to store the Cart information app wide, and a drawer for the shopping cart has been implemented.Displayiung the shopping cart is still outstanding
* As a user I want to be able to delete items from the cart:
    1. These changes should be reflected in the cart view
    2. The price calculation should be updated dynamically.
> The code for adding and removing objects from the cart is in place, it just needs to be hooked up
* As a user I want to sort the beers in each view/tab between:
    * abv_ascending
    * abv_descending,
    * name_ascending,
    * name_descending
>This needs to be implemented
