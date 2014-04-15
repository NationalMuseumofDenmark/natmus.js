# What is this?

The National Museum of Denmark keeps all of its assets and metadata in an asset management system called Cumulus. It is used to keep track of the digitization effort, licensing and many other things pertaining to keeping a digital collection. Cumulus exposes its data for internal and external products, programmers and hobbyists in a [RESTful API called CIP](http://samlinger.natmus.dk/CIP/doc/CIP.html). The SDK described in this document wraps the CIP API for use in a JavaScript project.

## CIP.js and NatMus.js
CIP.js lets you connect to any CIP endpoint. In order to connect you need to supply a *site configuration*: something that describes how the CIP is set up and is specific to the given CIP endpoint. If that endpoint happens to be the National Museum of Denmark, we've already got you covered with NatMus.js, so you should be good to go.

The CIP.js source code is annotated with documentation in the JSDoc format. Look in the `doc/` folder of the ZIP for some pretty-printed versions.

### Getting the files
If you want to interface with the collections of the National Museum of Denmark you should download the packaged and minified version of the library from the [cip+natmus.js.zip file](http://natmus.demo.bitblueprint.com/natmus.js/cip%2bnatmus.js.zip), extract it and you're ready for loading it into your project.

### Loading the library
 and make sure natmus.js is loaded in your HTML file, like this:

    <script href="/dist/cip+natmus.min.js"></script>

Where '/dist/cip+natmus.min.js' is the path to the cip+natmus.min.js you just downloaded, have a look at the examples to see how it's done.

That's it!

### Authenticating
In order to use the CIP endpoint you have to authenticate. You should have a set of credentials ready, consisting of a username and a password. 

First, instantiate a `CIPClient`, passing the relevant site configuration to the constructor, like so:

    nm = new CIPClient(NatmusConfig);

That will put a `CIPClient` object into the `nm` variable. Open a session to the CIP endpoint by using the `session_open` function:

    nm.session_open(username, password, callback)

CIP.js uses asynchronous calls, so you have to provide a *callback* that will be executed once the CIP server has acknowledged the connection. You can do it either by defining the function called `callback` in the previous example, or you could make one inline:

    nm.session_open(username, password, function() {
        console.log('Connected to the CIP');
    })

That will print "Connected to the CIP" on the JS console as soon as you're connected. Great, now we can get to work!

Please Note: It can be a security consern to expose a username and password in a client-side appilcation like this, if the for example the user has write permissions to assets and metadata in Cumulus.

### Listing catalogs and tables
Cumulus uses a notion of a 'catalog' to denote a separate collection of something. That could be a collection of prehistoric artifacts, or photos from the freedom fighters during World War 2. You can list the available catalogs with the `get_catalogs` function in `CIPClient`.

Like with the authentication you have to provide a callback for it to call once it has finished getting the catalogs from the server -- better get used to it, because we'll deal with callbacks throughout this tutorial.

Say we're inside the callback of the `session_open` function. `nm` is the `CIPClient` object. We can then list the catalogs like so:

    nm.get_catalogs( function(catalogs) {
    
    })

Notice how we're defining the callback as an inline function. The callback to `get_catalogs` should expect one argument containing a list of `CIPCatalog` objects. Say we want to print the names of all the catalogs on the endpoint, we could do this:

    nm.get_catalogs( function(catalogs) {
        for (i in catalogs) {
            console.log(catalogs[i].name);
        }
    })

Refer to the JSDoc for all properties and methods on the `CIPCatalog` object.

All catalogs contain a number of tables. In all catalogs there is a table called *AssetStore* which contains all the *assets* of that table. (Assets are museum slang for "things" that are in the catalog.) You most likely want to use the AssetStore, so keep that in mind. On a `CIPCatalog` you can get the tables by using the `get_tables` function in the same fashion as `get_catalogs` on the `CIPClient` object, that is:

    catalog.get_tables(function(tables) { ... })
    
`tables[0]` will always be the AssetStore, so you most likely want to use that.

### Searching
Finally, you can search in tables and catalogs by using the `search` function. Say you have a `CIPTable` in the `table` variable, you'd do like this:

    table.search(term, function(results) { ... })
    
`results` will be a `CIPSearchResult` object which allows you to iterate over the (possibly thousands) of results in your search. The reason why we're doing it this way and not just giving you all of the results at once is to save traffic to the CIP endpoint and memory on the client in case you don't actually *need* all of the search results.

You get a list of `CIPAsset` objects by running the `get` function on a `CIPSearchResult` (as usual you have to make a callback function to get the list). Optionally pass in a number of assets to return; by default `get` returns 100.

# Build instructions
If you want to build this project (processing the source files, building and bundling the documentation), this is how you do it:

Make sure you have [Google's Closure Compiler](https://developers.google.com/closure/compiler/), [Node.js](http://nodejs.org/) and [JSDoc](http://usejsdoc.org/) installed before proceeding.

Clone this repository onto you machine.

    git clone git@github.com:NationalMuseumofDenmark/natmus.js.git

Navigate into the newly clones repository and review build.sh to change the path to jsdoc.js to one that matches your system.

    nano build.sh

Run build.sh

    ./build.sh
