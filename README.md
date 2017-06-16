# SimpleLegal

![SimpleLegal preview](https://raw.githubusercontent.com/zacarellano/SimpleLegal/master/dist/assets/other/SimpleLegal_preview.png)

SimpleLegal | A coding challenge to create a small web app and play around with the SimpleLegal API.


## Usage
```
git clone https://github.com/zacarellano/SimpleLegal.git
cd SimpleLegal
yarn                              # npm install
yarn start                        # npm run start
touch .env                        # *details below
```
then --> [localhost:8080](http://localhost:8080) for dev server or [localhost:9090](http://localhost:9090) for Node.js server (serves static `bundle.js` + proxies API requests).

*\*note - I wanted to keep SimpleLegal's API key off github, so this project doesn't work without creating an `.env` file in the root directory that follows this format with the correct API token -*
```
API_TOKEN=''
```

## Features / Overview

- The project is set-up similar to the real SimpleLegal web app shown on their website. I only built out the `/invoices` page (per instructions), but the routing does work for other pages such as `/reports` or `/vendors`.

- Because I wasn't on a local server with access to the API, and instead of dealing with CORS issues on the frontend, all API requests come from `https://falcon.simplelegal.com` and are proxied through `http://localhost:9090/api` - this can be found in [`server.js`](./server.js).

- On the main `/invoices` page, an HTTP request is sent to the backend and receives an array of invoices, which is saved in `this.state.invoices` inside `<InvoicesContainer />`. From here, it sends it's state down to children - `<Table />` (which is always shown) and `<Overview />` or `<Details />` depending on the view.

- Inside the `<Table />` component, you have the ability to sort the invoices by `date` (default), `vendor`, `id` (invoice number), `price`, and `status`.

- When the user is located at `/invoices`, the top frame shows an `<Overview />` component that displays a few stats regarding `this.state.invoices` data, such as; top and lowest vendor, total revenue, oldest and newest invoice, and also a count of total, accepted, and approved invoices. ~~The functionality isn't 100% right now (only clicking on 'Top Vendor' works), but eventually, clicking on each `<Stat />` component will filter the `this.state.invoices` array and the `<Table />` component will update accordingly.~~ You can click on each `<Stat />` category / component to filter the list down, or exit out of the filter and see the original `this.state.invoies` by caching the initial API request in `this.state.cache`.

- The functionality is there for this, but the styling is far from it (and I plan to finish it). Anyways, clicking on a single invoice `<Row />` within the `<Table />` component, will take you to a <code>\`/invoices/${id}\`</code> page (e.g. `http://localhost:8080/invoices/inv_5920db49e2aa857757f00ff5672f0c40a0cfcb72`) where you can view additional details about the invoice. Clicking the 'X' in the upper-right corner will take you back to the initial `<Overview />` display.

## Structure
I follow this structure for the most of my React.js projects -

- `webpack.config.babel.js` - the backbone to the project - es6 / babel compilation, CSS modules, postCSS /autoprefixer, webpack-stats generator, sass --> css compilation, webpack-hot-reloader for development and uglifyJS for production builds, etc.

- `server.js` - express / Node.js server running on `http://localhost:9090`

  - `/app` - source code

    - `/containers` - stateful container components that hold state + have all the React.js lifecycle methods

    - `/components` - stateless / functional presentational components that take in props and output HTML (jsx) - I use CSS Modules with sass, and typically each component has its' own directory with this format (however, sometimes there are multiple, smaller components within each directory) -

      - `Sidebar.js`

      - `Sidebar.scss`

    - `\config` - all config files - this project only includes a `routes.js` file that shows what component should be displayed per current route.

    - `data` - any static data - stuff like `app_pages.js` or `table_categories.js`.

    - `helpers` - various files that have helper functions I can import and export out (e.g. `api.js`, `utils.js`, and `stats.js`)

    - `styles` - mainly is `_variables.scss`, which includes all sass variables to be used throughout the project. I've also been starting to use a `_utils.scss` files with common css rules.

  - `/dist` - build code

    - `/assets` - all production-ready assets (e.g. `img`, `css`, `js`, `icons`, and `other` directories)

## Going Forward
I wanted to send in this project (although not 100% complete to at least give a decent idea of what I've been working on), a few things I'd like to finish working on...

- The `<Details />` view isn't styled, or really built-out yet, but the functionality is there. This is will be my top priority.

- ~~When you click a `<Stat />` box on the main `<Overview />` component, only clicking on 'Top Vendors' will filter `this.state.invoices` to show only 'Rosato and Associates' data. I would like to finish this functionality and be able to click on each box, filter the data, and also exit out of the filter by clicking an 'X', to show the initial `this.state.invoices`.~~

- The passing around of state / props / methods could be a little confusing, I'm working on refactoring some code, adding comments, and simplifying what's going on.

- I don't know how responsive CRMs / web apps like this are, but this project isn't very responsive. I'll add some media queries and styling to have it looking nicer on smaller devices.
