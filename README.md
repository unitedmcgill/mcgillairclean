-----------------------
GitHub & New Project
-----------------------
Start with coreui or dblogic!
update asset images
rm -rf .git
git init
git add .
git commit -m "Initial commit"
git remote add origin <repo-address>
git push -u origin master


------------------------
Angular CLI
------------------------
npm install -g angular-cli


------------------------
Angular CLI new project
------------------------
ng new project


------------------------
Angular CLI debug
------------------------
ng serve


------------------------
Angular CLI production
------------------------
ng serve --prod


------------------------------------
Angular CLI giving your CLI a Server
------------------------------------
create a folder in the root of the project called nodeserver

create a package.json in the nodeserver folder
{
    "name": "ng2-startingline",
    "version": "1.0.0",
    "dependencies": {
        "express": "4.13.4"
    }
}

create a server.js file in the nodeserver
var express = require('express'),
    path = require('path'),
    fs = require('fs');

var app = express();
var staticRoot = __dirname + '/';

app.set('port', (process.env.PORT || 3000));

app.use(express.static(staticRoot));

app.use(function(req, res, next){

    // if the request is not html then move along
    var accept = req.accepts('html', 'json', 'xml');
    if(accept !== 'html'){
        return next();
    }

    // if the request has a '.' assume that it's for a file, move along
    var ext = path.extname(req.path);
    if (ext !== ''){
        return next();
    }

    fs.createReadStream(staticRoot + 'index.html').pipe(res);

});

//app.all('/*', function(req, res, next) {
//    res.sendFile('index.html', { root: __dirname + '/' });
//});

app.listen(app.get('port'), function() {
    console.log('app running on port', app.get('port'));
});

Add the following commands to the main project's package.json
,
    "build:nodeserver": "ng build && cp nodeserver\/* dist",
    "build:nodeserver-prod": "ng build -prod && cp nodeserver\/* dist",
    "serve-build" : "npm run build:nodeserver && cd dist && node server.js",
    "serve-build-prod": "npm run build:nodeserver-prod && cd dist && node server.js"

The first commands run the normal ng build and copies the assets into the dist folder
node run build:nodeserver

The second command does the same only for production
node run build:nodeserver-prod

The last two commands run the application using the node server in dev or production mode
npm run serve-build
npm run serve-build-prod


------------------------------------------
Build ng application for production
IIS Rewrite for Angular2 to serve from IIS
------------------------------------------
1) ng build
In the dist folder, create a web.config file with the following:

<configuration>
    <system.webServer>
        <rewrite>
            <rules>
                <rule name="angularjs routes"
                        stopProcessing="true">
                    <match url=".*" />
                    <conditions logicalGrouping="MatchAll">
                        <add input="{REQUEST_FILENAME}" 
                            matchType="IsFile" negate="true" />
                        <add input="{REQUEST_FILENAME}" 
                            matchType="IsDirectory" negate="true" />
                        <add input="{REQUEST_URI}" 
                            pattern="^/(api)" negate="true" />
                    </conditions>
                    <action type="Rewrite" url="/" />
                </rule>
            </rules>
        </rewrite>
    </system.webServer>
</configuration>

Then copy the contents of dist to wwwroot on the IIS machine *Exclude app.config.json if different between
dev and prod.  Done.

-----------------------
Bootstrap ng2-bootstrap
-----------------------
npm install ng2-bootstrap bootstrap --save

open src/app/app.module.ts and add
import { AlertModule } from 'ng2-bootstrap/ng2-bootstrap';
...

@NgModule({
   ...
   imports: [AlertModule, ... ],
    ... 
})

open angular-cli.json and insert a nwe etyr into the styles array
      "styles": [
        "styles.css",
        "../node_modules/bootstrap/dist/css/bootstrap.min.css"
      ],

open src/app/app.component.html and add
<alert type="success">hello</alert>


-----------------------------------
Font Awsome (fontawsome) Angular 2
-----------------------------------
npm install font-awesome --save

open angular-cli.json
,
                "../node_modules/font-awesome/css/font-awesome.css"
...
"addons": [
    "../node_modules/font-awesome/fonts/*.+(otf|eot|svg|ttf|woff|woff2)" 
]


-----------------------------
ng2-responsive
-----------------------------
npm i ng2-responsive --save


------------------------------
CoreUI
------------------------------
copy angular2_cli_starter to directory
npm install
ng serve


-------------------------------
Update CoreUI
-------------------------------
make a copy of the project folder
upgrade node
	Download from nodejs site
upgrade npm
	npm install npm@latest -g
upgrade angular/cli
	npm uninstall -g @angular/cli
	npm cache clean	
	npm install -g @angular/cli@latest
	npm install -g typescript@latest
Make sure the latest core-ui folder works
	delete everything from core-ui
	Unzip the project files from coreui on github into core-ui
	in the project folder for coreui and/or starter each:
	rmdir /S/Q node_modules dist
	npm install --save-dev @angular/cli@latest
	npm install
Do a diff between package.json in coreui and project folder
	Update project's package.json to match pieces from new coreui package.json
	Update angular-cli.json file with new coreui version
	rmdir /S/Q node_modules dist
	npm install
	ng serve (cross fingers)
