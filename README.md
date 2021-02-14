# ZoAuth

<img src= "https://zoauth.tk/ZoAuth%20logo%20color%20changed%20resized.jpg">

<a href= "https://www.npmjs.com/package/zoauth"><img src= "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Npm-logo.svg/800px-Npm-logo.svg.png" width= "100px"></a>

<a href= ""><img src= "https://img.shields.io/badge/Build-Stable-blue"></a>  <a href= ""><img src= "https://img.shields.io/badge/Coverage-100%25%0A-blue"></a>  <a href= ""><img src= "https://img.shields.io/badge/Dependencies-Express%2C%20Axios%2C%20NodeMon%2C%20QueryString-blue"></a>  <a href= "https://www.npmjs.com/package/zoauth"><img src= "https://img.shields.io/badge/NPM-v14%2E15%2E4-blue"></a>  <a href= ""><img src= "https://img.shields.io/badge/Downloads-Enough%20for%20you%20to%20be%20happy-blue"></a>  <a href= "https://github.com/Zo-Bro-23/zoauth/discussions/"> <img src= "https://img.shields.io/badge/Social%20media-GitHub%20Discussions-blue?logo=github"></a>

Hi! I'm Zohan Subhash and I'm a twelve-year-old, not to say that I'm much proud of that fact. I love to code and ***I*** am the sole person behind the whole [ZoAuth](https://zoauth.tk) project. Here's a photo of me:

<img src= "https://zoauth.tk/My%20pic.jpg" width= "650px">

Now that we have established who I am, let's get started...

- [ZoAuth](#zoauth)
  - [Installation](#installation)
  - [Demo app](#demo-app)
- [Tutorial](#tutorial)
  - [API reference](#api-reference)
    - [Function list](#function-list)
      - [zoauth.setCredentials(cred)](#zoauthsetcredentialscred)
      - [zoauth.getAuthUrl(company, options)](#zoauthgetauthurlcompany-options)
      - [zoauth.getToken(company, params, config)](#zoauthgettokencompany-params-config)
      - [zoauth.getDetails(company, options, config)](#zoauthgetdetailscompany-options-config)
      - [zoauth.getApi(url, options, config, except)](#zoauthgetapiurl-options-config-except)
      - [zoauth.postApi(url, data, options, config, except)](#zoauthpostapiurl-data-options-config-except)
      - [zoauth.runAuthServer(resolve, reject, port)](#zoauthrunauthserverresolve-reject-port)
      - [zoauth.expressApp](#zoauthexpressapp)
      - [zoauth.demoApp()](#zoauthdemoapp)
      - [zoauth.company.function](#zoauthcompanyfunction)
        - [-setCredentials()](#-setcredentials)
        - [-getAuthUrl()](#-getauthurl)
        - [-getToken()](#-gettoken)
        - [-getDetails()](#-getdetails)
    - [Module presented as a JSON object](#module-presented-as-a-json-object)
    - [Module quick reference](#module-quick-reference)
      - [zoauth.setCredentials(cred)](#zoauthsetcredentialscred-1)
        - [``` cred: required```](#-cred-required)
      - [zoauth.getAuthUrl(company, options)](#zoauthgetauthurlcompany-options-1)
        - [``` company: required```](#-company-required)
        - [``` options: optional```](#-options-optional)
      - [zoauth.getDetails(company, options, config)](#zoauthgetdetailscompany-options-config-1)
        - [``` company: required```](#-company-required-1)
        - [``` options: required```](#-options-required)
        - [``` config: optional```](#-config-optional)
      - [zoauth.getApi(url, options, config, except)](#zoauthgetapiurl-options-config-except-1)
        - [``` url: required```](#-url-required)
        - [``` options: required, unless except is truthy```](#-options-required-unless-except-is-truthy)
        - [``` config: optional```](#-config-optional-1)
        - [``` except: optional, unless options.access_token is not specified```](#-except-optional-unless-optionsaccess_token-is-not-specified)
      - [zoauth.postApi(url, data, options, config, except)](#zoauthpostapiurl-data-options-config-except-1)
        - [``` url: required```](#-url-required-1)
        - [``` data: required```](#-data-required)
        - [``` options: required, unless except is truthy```](#-options-required-unless-except-is-truthy-1)
        - [``` config: optional```](#-config-optional-2)
        - [``` except: optional, unless options.access_token is not specified```](#-except-optional-unless-optionsaccess_token-is-not-specified-1)
      - [zoauth.runAuthServer(resolve, reject, port)](#zoauthrunauthserverresolve-reject-port-1)
        - [``` resolve: required```](#-resolve-required)
        - [``` reject: optional (Note: If an error occurs, unhandled promise rejection will be called)```](#-reject-optional-note-if-an-error-occurs-unhandled-promise-rejection-will-be-called)
        - [``` port: optional```](#-port-optional)
      - [zoauth.expressApp](#zoauthexpressapp-1)
      - [zoauth.demoApp()](#zoauthdemoapp-1)
      - [zoauth.company.function()](#zoauthcompanyfunction-1)
        - [```company: required```](#company-required)
        - [```function: required```](#function-required)
  - [Supported companies](#supported-companies)
    - [Amazon](#amazon)
    - [Discord](#discord)
    - [Facebook](#facebook)
    - [Google](#google)
    - [GitHub](#github)
    - [Microsoft](#microsoft)

ZoAuth is an easy to use authentication sdk and library... It intergrates many OAuth services like Facebook, Google, Microsoft, etc. and makes it really easy to implement OAuth. I swear, two lines of code and you're done. Feel free to clone our GitHub [repo](https://github.com/Zo-Bro-23/zoauth) and to join in our discussions to share your own tips and tricks... And ***this*** is the official docs for how to use this beautiful, simple, yet powerful tool. But before we start, I want to acknowledge something. I am so glad that I sat and coded while my friends were playing Fortnite, 'coz, well, here I am today! The reason I built ZoAuth was so that authentication would become easy. Something that everyone could do, not just the pros. And I don't ***want*** others to go through what I went through to get started with OAuth. You need to first find the proper documentation — and this took atleast half-an-hour — then you had to try and get it to work. I want others to ***not*** suffer. And there's one more thing. If your head is spinning by the time you finish reading this, there's something wrong with you. Blame yourself and not the module. Because unlike most of the docs out there, this one is easy to understand. So don't put all on me.

<img src= "https://zoauth.tk/meme-sdk.png" width= "512px">

## Installation

Let's get started. I'm assuming that you have NodeJS installed and a new project set up. If not, go [here](https://nodejs.dev/learn) to learn all about how to get started with node. Now that you've initialized a project, it's time to install my module.
```javascript
npm i zoauth
```
Or, if you want to install the latest edge version — as you would want to do if you have enrolled for my beta testing program — go along and add the ```@test``` tag for ```npm i```.
```javascript
npm i zoauth@test
```

Now that the ZoAuth module is installed, let's require it from your code. Make a new javascript file called ```index.js``` and write the following code:

```javascript
const zoauth = require('zoauth')
```
And you're done. You can do whatever heck you wanna do! But most people reading this don't know what functions to call, you might say. Well, what is a tutorial ***and*** an API Reference there for, but that?

## Demo app

Now let's really get started, write some code, and impress your friends. (or kids, I don't know how old you are) But before we do that, I want to guys to see the power of this thing, firsthand. So go ahead and check out the demo web app that I have built using ZoAuth, some basic html, and nothing else. Click [here](https://demo.zoauth.tk) to see the demo app.

Now that you have seen the demo app, I want to show you the code behind it. It's uploaded to GitHub right [here](https://github.com/Zo-Bro-23/zoauth-demoApp), but I also added it as a function to the module, just in case. Please feel free to clone the code from GitHub and use it to do whatever you want to do. Like the UI? Did it myself.

I don't really know why I addded this as a function to the package, but I did. So you can just add the following code to your ```index.js``` to see the demo app work instead if you want to. It's just an https redirect.

```javascript
const zoauth = require('zoauth')
zoauth.demoApp()
```
And on your terminal,

```
node index.js
```

And how did you like ***that***, huh? I'm not gonna spoil the surprise for you. Go try it out yourself. Come on. I ain't budging till you try it out.

<div style= "background-color: black; height:512px; display: block;">
</div>

Saw it? Ok, so I've been obsessed about ASCII art for around a week now. From when I was a kid, I ***loved*** it. It never occured to me to try making it. I always wanted to leave it to the experts. But then I realised a few days back that there would be websites that do this. And there was. Damn good sites. Check this out.

<img src= "https://zoauth.tk/logo.jpg" width= "512px">

Neat huh? Can you even ***believe*** that it's ASCII and not just a drawing? I literally ***love*** the black background! It signifies ***class***. Of course, if you were my dad or if you were from the 1800's, you wouldn't like it. I don't know why, but I'm just ***so*** used to the dark theme. By the way, you should try out the ```Night owl``` theme on ```VS Code```. It's genuinely ***awesome***. Thought I should give them some credit. Ok, sorry. I was getting distracted. Back to the point. Yeah open up your browser and go to ```http://localhost:5210```. And ***don't*** ask me why I chose that port. It's a ***goddamn*** lucky number, man! Yeah anyway, check out the demo app. See what I meant earlier when I talked about the UI? Here's a photo for the noobs who can't even bother write two lines of code.

<img src= "https://zoauth.tk/screenshot.png">

Why do I have so many browser extensions? Because I never really bother deleting the ones I never use. It's one of those perks of owning a Ryzen 7. You don't really have to ***ever*** worry about something going slow. I also never close my browsing tabs. I have ***literally*** a thousand tabs open right now, without counting other applications like ```VS Code```. Ok, now that you no what my module can do, let's really get deep into it.

# Tutorial

Ok. Let's start right at the start. What ***do*** you ***really*** want to do with OAuth? Sign users in, get access tokens, and call some API's right? Ok. You can do all that and much more with ZoAuth. Here's some example code with an express server. Actually, it's the exact same code that I used for the demo app, except that I used many more companies back there. Now I know what you're going to ask. How can such a simple code do such a complicated task? Simple. Because ***I*** made the package.

```javascript
const zoauth = require('zoauth')
const express = require('express')
const app = express()

app.get('/', (req, resp) => {
    resp.redirect(zoauth.google.getAuthUrl())
    })
app.get('/callback/google', (req, resp) => {
    zoauth.google.getToken({code: req.query.code})
        .then(response => {
            zoauth.google.getDetails(response)
                .then(res => {
                    resp.send(res.name)
                    })
        })
})

app.listen(5210, () => {console.log(`
@@@@@@@@@@@@@          @@@@@@@@                           
@@@        @@@         @      @                            
@@       @@@                  @                          
      @@@           @@@@@@@@@@@@@@@                          
    @@@             @@           @@                          
  @@@               @@    @@@    @@                          
@@@@@@@@@@@@@@@@@@  @@     @     @@                          
@@@@@@@@@@@@@@@@@@  @@@@@@@@@@@@@@@                          
`)})
```

Go to ```http://localhost:5210``` and try logging in with Google. Don't know your password? Never mind. Click ```forgot password```. Wait, what?? You don't know the answer to ***any*** of your security questions? How ***is*** that possible???

<img src= "https://zoauth.tk/meme-login-oauth-version.png" width= "512 px">

Ok. Now ***do*** you want the full reference list of all the possible functions so that you can exploit me to the core? Here we go...

## API reference

### Function list

#### zoauth.setCredentials(cred)

***```returns null```***

Pass on a ```cred``` JSON object with the credentials in the form of 
```javascript
{company1: {
    client_id: "Blah blah blah",
    other_details: "In the same format"
},
company2: {
    same_thing: "Come on, man!"
}}
```

#### zoauth.getAuthUrl(company, options)

***```returns String```***

Get the auth url for a ```company``` string parameter with optional ```options``` to add on to the request body. All the ```options``` will get added on as query parameters. See [list](#supported-companies) of supported OAuth  providers.

#### zoauth.getToken(company, params, config)

***```returns Promise```***

Get the ```access_token```, ```refresh_token```, etc. for a ```company``` string parameter along with the ```code``` and other details in the ```params``` object. Extra axios configuration can be added on with the ```config``` parameter. See [list](#supported-companies) of supported OAuth  providers.

#### zoauth.getDetails(company, options, config)

***```returns Promise```***

Same as the ```getToken()```, except that instead of the ```code```, you'll be passing on the tokens. Just pass on the whole object man, nobody really cares. All we want is the ```access_token``` though. Add extra configuration through the ```config``` parameter. See [list](#supported-companies) of supported OAuth  providers.

#### zoauth.getApi(url, options, config, except)

***```returns Promise```***

Pass on a ```url``` with the authorization tokens inside the ```options``` object, and we'll call that API endpoint with the necessary ```config```uration. Note: Unless ```except``` is a truthy value, an error will be called if options doesn't contain an access_token. See [list](#supported-companies) of supported OAuth  providers.

#### zoauth.postApi(url, data, options, config, except)

***```returns Promise```***

Same thing. We'll call the ```url``` with the ```data``` along with authorization tokens from ```options```, with the ```config```uration. Note: Unless ```except``` is a truthy value, an error will be called if options doesn't contain an access_token. See [list](#supported-companies) of supported OAuth  providers.

Now come the fun ones...

#### zoauth.runAuthServer(resolve, reject, port)

***```returns null```***

Runs a auth server with literally ***all*** supported companies. It calls the ```resolve``` callback function after the whole auth process. You'll receive the following JSON object as a parameter for this callback function ```r => {console.log(resp)}```:

```javascript
resp: {
  data: {"the access and refresh tokens along with other data"},
  company: "company",
  responseObject: "an express response object that you can use to resolve the server request",
  requestObject: "an express request object that you can use to get details about the server request"
}
```

If you provide an optional ```reject``` callback function, you'll get a similar object in that function if something goes wrong. The ```data``` object will then contain the ```error``` message along with the ```error_description```. Note: The values inside the ```data``` object may vary according to the company. You can also optionally specify the port After running the server,

```http://localhost:5210/company``` redirects the user to the ```company```'s OAuth page and ```http://localhost:5210/callback/company``` takes the token from the ```company```'s page and calls the callback with the received data. See [list](#supported-companies) of supported OAuth  providers.

#### zoauth.expressApp

***```returns Object```***

If you want to add extra endpoints to the already running ```authServer```, then you can do ```zoauth.expressApp.get([...])``` instead of ```app.get([...])``` to prevent the ```Port already busy``` error.

#### zoauth.demoApp()

***```returns null```***

That one's easy. Runs the demo app at ```http://localhost:5210```. And don't worry. It doesn't take up any space in the package. Chill, man. I'm definitely ***so*** ***not*** abusing your broadband whenever you do ```npm i zoauth```. The file just takes up like 8KB. I think I understood why I included this function — so that I can show you the ASCII art. The function just redirects you to the real demo app, which is hosted at [https://demo.zoauth.tk](https://demo.zoauth.tk)

#### zoauth.company.function

***```returns null``` for ```setCredentials```, ```String``` for ```getAuthUrl```, and ```Promise``` for ```getTken``` and ```getDetails```***

This is a different function structure just in case you like it better. Replace ```company``` with the disired company, and replace ```function``` with any one of these four functions:

##### -setCredentials()
##### -getAuthUrl()
##### -getToken()
##### -getDetails()

### Module presented as a JSON object

```javascript
const zoauth = require('zoauth)
```

```javascript
zoauth === {
    getAuthUrl: [function],
    setCredentials: [function],
    getToken: [function],
    getDetails: [function],
    runAuthServer: [function],
    demoApp: [function],
    getApi: [function],
    postApi: [function],
    expressApp: [object],
    amazon: {
        getAuthUrl: [function],
        setCredentials: [function],
        getToken: [function],
        getDetails: [function]
    },
    facebook: {
        getAuthUrl: [function],
        setCredentials: [function],
        getToken: [function],
        getDetails: [function]
    },
    discord: {
        getAuthUrl: [function],
        setCredentials: [function],
        getToken: [function],
        getDetails: [function]
    },
    github: {
        getAuthUrl: [function],
        setCredentials: [function],
        getToken: [function],
        getDetails: [function]
    },
    google: {
        getAuthUrl: [function],
        setCredentials: [function],
        getToken: [function],
        getDetails: [function]
    },
    microsoft: {
        getAuthUrl: [function],
        setCredentials: [function],
        getToken: [function],
        getDetails: [function]
    }
}
```

### Module quick reference

#### zoauth.setCredentials(cred)

##### ``` cred: required```

#### zoauth.getAuthUrl(company, options)

##### ``` company: required```
##### ``` options: optional```

#### zoauth.getDetails(company, options, config)

##### ``` company: required```
##### ``` options: required```
##### ``` config: optional```

#### zoauth.getApi(url, options, config, except)

##### ``` url: required```
##### ``` options: required, unless except is truthy```
##### ``` config: optional```
##### ``` except: optional, unless options.access_token is not specified```

#### zoauth.postApi(url, data, options, config, except)

##### ``` url: required```
##### ``` data: required```
##### ``` options: required, unless except is truthy```
##### ``` config: optional```
##### ``` except: optional, unless options.access_token is not specified```

#### zoauth.runAuthServer(resolve, reject, port)

##### ``` resolve: required```
##### ``` reject: optional (Note: If an error occurs, unhandled promise rejection will be called)```
##### ``` port: optional```

#### zoauth.expressApp

```
```

#### zoauth.demoApp()

```
```

#### zoauth.company.function()

##### ```company: required```
##### ```function: required```

## Supported companies

### Amazon
### Discord
### Facebook
### Google
### GitHub
### Microsoft

But don't worry. I'm planning to add a new company ***every*** week! So this list should start growing in no time at all! But what about Apple? Some of you with the iPhones might ask. Well, ***THEY GODDAMN CHARGE A HUNDRED BUCKS A MONTH!!!*** And they're ***so*** condescending! I went to thier developer page and they were like, "Go make iPhones apps first, before trying to do OAuth." I, swear! But, yeah. I too am disappointed that I couldn't include Apple. Anyways, it was nice meeting you and I hope I'll be able to help you in some way or other in the future. Like I said, feel obliged to report any bugs or issues and I'll try to get them fixed as soon as possible. PS: Unless my mom bans coding for some time.