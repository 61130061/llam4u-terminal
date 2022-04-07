import { bootLog } from './BootLog';
import { whoami } from './TextArt';

const help = `
This terminal can run many basic linux commands such as 'cd' and 'ls'. Every single command is built from scratch and it open-source! You can clone it from <a href='https://github.com/61130061/llam4u-terminal' target='_blank' class='font-bold text-yellow-500 hover:text-yellow-400 underline underline-offset-1 hover:underline-offset-2'>GitHub</a>.
\xa0
<span>🔖 </span>There are <span class='font-bold'>3 shortcuts<span> for your to use:
├ tab (command prediction)
├ crtl + L (clear termial)
└ crtl + C (clear input section without running the command)
\xa0
<span>📬 </span>There are <span class='font-bold'>7 commands<span> that you can use:
├ help
├ whoami
├ cat
├ open
├ ls
├ clear 
└ cd 
`

export const commandsArr = ['help', 'whoami', 'cat', 'open', 'ls', 'clear', 'cd']

const bye = `
\xa0
Saving session... completed.
\xa0
[Process completed]
`

const catREADME = `
`

const catContact = `
\xa0
┏━━━┓╋╋╋╋╋┏┓╋╋╋╋╋╋┏┓
┃┏━┓┃╋╋╋╋┏┛┗┓╋╋╋╋┏┛┗┓
┃┃╋┗╋━━┳━╋┓┏╋━━┳━┻┓┏┛
┃┃╋┏┫┏┓┃┏┓┫┃┃┏┓┃┏━┫┃
┃┗━┛┃┗┛┃┃┃┃┗┫┏┓┃┗━┫┗┓
┗━━━┻━━┻┛┗┻━┻┛┗┻━━┻━┛
\xa0
<span class='text-red-400'>Email</span>: <a class='hover:underline hover:underline-offset-2 hover:text-red-400' href='mailto: h.warunyu@gmail.com'>h.warunyu@gmail.com</a>
<span class='text-sky-400'>Twitter</span>: <a class='hover:underline hover:underline-offset-2 hover:text-sky-400' href='https://twitter.com/Llam4u'>@Llam4u</a>
<span class='text-blue-400'>LinkedIn</span>: <a class='hover:underline hover:underline-offset-2 hover:text-blue-400' href='https://www.linkedin.com/in/h-warunyu/'>https://www.linkedin.com/in/h-warunyu/</a> 
<span class='text-slate-100'>Github</span>: <a class='hover:underline hover:underline-offset-2 hover:text-slate-100' href='https://www.github.com/61130061'>https://www.github.com/61130061</a>
\xa0
Lets Work Together!
`

const catProfilePic = `
───────────────────────────────
──────────▄▄▄▄▄▄▄▄▄▄▄──────────
─────▄▄▀▀▀▀──────────▀▀▄▄──────
───▄▀───────────────────▀▀▄────
──█────────────────────────█───
─█─────────────────────▄▀▀▀▀▀█▄
█▀────────────────────█────▄███
█─────────────────────█────▀███
█─────▄▀▀██▀▄─────────█───────█
█────█──████─█─────────▀▄▄▄▄▄█─
█────█──▀██▀─█───────────────█─
█────█───────█──────────────▄▀─
█────▀▄─────▄▀──▄▄▄▄▄▄▄▄▄───█──
█──────▀▀▀▀▀────█─█─█─█─█──▄▀──
─█──────────────▀▄█▄█▄█▀──▄▀───
──█──────────────────────▄▀────
───▀▀▀▄──────────▄▄▄▄▄▄▀▀──────
────▄▀─────────▀▀──▄▀──────────
──▄▀───────────────█───────────
─▄▀────────────────█──▄▀▀▀█▀▀▄─
─█────█──█▀▀▀▄─────█▀▀────█──█─
▄█────▀▀▀────█─────█────▀▀───█─
█▀▄──────────█─────█▄────────█─
█──▀▀▀▀▀█▄▄▄▄▀─────▀█▀▀▀▄▄▄▄▀──
█───────────────────▀▄─────────
`

const catDockbar = `
# DockBar
\xa0
DockBar is just a simple app that show messages icon on your status bar when you have unread messages.
This app is very useful for people who hides their macos dock and doesn't want to forget that they got unread messages.
\xa0
&lt;p float="left"&gt;
\xa0\xa0&lt;img src="Figure/Example_1.png" width="400" /&gt;
\xa0\xa0&lt;img src="Figure/Example_2.png" width="400" /&gt;
&lt;/p&gt;
\xa0
\xa0
## Installation
You can download the lastest dmg from [Release Page](https://github.com/61130061/DockBar/releases)
\xa0
\xa0
## Usage
1. Open DockBar app
2. Look at your status bar! The message icon will turn green when you have unread messages.
\xa0
\xa0
## TODO List
- [x] Hide dock icon
- [x] Open Messages app via menu bar
- [ ] Check update
- [ ] User can set how often to check new messages
- [ ] User can set the color of their icon
- [ ] Test on Apple Silicon chip
\xa0
\xa0
This is README.md file of this project.
You can visit this project on <a class='underline underline-offset-1 hover:underline-offset-2 hover:text-blue-400' href='https://github.com/61130061/DockBar'>https://github.com/61130061/DockBar</a>
`

const catWepins = `
# WEPINS ![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)
\xa0
WEPINS is just the prototype of the Web-services for Python AI model in NodeJS. In this prototype, we use Yolo object detection to be the example of python processing. 
\xa0
![website](Doc/website.gif)
\xa0
## Installation
I assume you have macOS Catalina 10.15.5 with [brew](https://brew.sh/) and [Python3.7.7](https://www.python.org/downloads/).
\xa0
Install Node.
'''sh
$ brew update
$ brew install node
'''
\xa0
Install Python library.
'''bsh
$ pip install numpy
$ pip install opencv-python
'''
Clone the repository
'''sh
$ git clone https://github.com/61130061/WEPINS.git
'''
Then install the packages and run 'app.js'
'''sh
$ npm install
$ node app.js
'''
\xa0
## Using the web app
coming...
\xa0
## Tech
* [NodeJS](https://nodejs.org/) - evented I/O for the backend
* [ExpressJS](https://expressjs.com/)
* [python](https://www.python.org/downloads/) - AI processing
* [bootstrap](https://getbootstrap.com/) - Frontend UI
\xa0
## Future
* Upload image to NodeJS server via frontend html website.
* Run python file via NodeJS server.
* Show the output of the python file on the website.
\xa0
## License
MIT
\xa0
\xa0
This is README.md file of this project.
You can visit this project on <a class='underline underline-offset-1 hover:underline-offset-2 hover:text-blue-400' href='https://github.com/61130061/WEPINS'>https://github.com/61130061/WEPINS</a>
`

const catReadme = `
# Llam4u Terminal
\xa0
Terminal style portfolio responsive website.
\xa0
> Llam4u | start on 2 Apr 2022
\xa0
Check out the website here.
\xa0
![Llam4u Terminal](./docs/screen_shot.png)
\xa0
I have been using terminal for a while since I started to learn coding.
I decided to build my portfolio website as a terminal website as realistic as I can.
This website was built with pure React JS and Tailwind CSS and of course it is responsive website.
That means it work on mobile phone as well as.
There is no picture on this website.  I am planning to add more command in the future but right there are some for you guys to play with.
\xa0
\xa0
## Usage
\xa0
### Install
Just clone and install it as you used to.
'''bash
clone 
yarn install
'''
\xa0
### Quick Start
This is my portfolio website.
If you familiar with linux command, you can full around as you want.
If you not quite familiar with this kind of thing, you can follow the structure below to know me more.
1. Type ''whoami'' and press enter! Read my profile.
2. Type ''cd Projects''  and press enter to navigate to projects folder.
3. Type ''open [file name]'' to open each of my project.
4. Hire me.
\xa0
Isn't it that simple?
\xa0
### Command
On the website there are several commands that you can play with.
I'm planning to add more in the future.
- help
- whoami
- cat
- open
- ls
- clear
- cd
\xa0
### Shortcut
This is all essential shortcuts that you can use to make your life more easier.
- tab
- crtl + L
- crtl + c
\xa0
## TODO List
- [ ] Navigate function through multiple folder (ex. open ~/Projects/DockBar.git)
- [ ] Theme color setting
- [ ] bye command
\xa0
## Contributing
Feel free to pull requests or log issues as you please.
\xa0
Help me make it more realistic!
\xa0
\xa0
This is README.md file of this project.
You can visit this project on <a class='underline underline-offset-1 hover:underline-offset-2 hover:text-blue-400' href='https://github.com/61130061/llam4u-terminal'>https://github.com/61130061/llam4u-terminal</a>

`

const usageCat = `
You can use 'cat' to read what inside the file.
usage: cat [filename]
`

const usageOpen = `
You can use 'open' to open link in the file.
usage: open [filename]
`


export const outside = {
   'DockBar.git': 'https://github.com/61130061/DockBar',
   'WEPINS.git': 'https://github.com/61130061/WEPINS',
   'README.md': false,
}

export const disk = {
   Desktop: {
      //'blog.html': 'show boot.log',
      'contact.sh': 'contact.sh',
      'profile_pic.png': 'profile_pic.png',
   },
   Projects: {
      'DockBar.git': 'DockBar.git',
      'WEPINS.git': 'WEPINS.git'
   },
   'boot.log': 'boot.log',
   'README.md': 'README.md',
}


export function getResult (showCommand) {
   switch (showCommand[0]) {
      case 'help':
         return help.split(/\r?\n/);
      case 'usage':
         switch (showCommand[1]) {
            case 'cat':
               return usageCat.split(/\r?\n/);
            case 'open':
               return usageOpen.split(/\r?\n/);
         }
      case 'open not available':
         return `open: The file ${showCommand[1]} cannot be opened right now (you may use <span class='font-bold text-blue-500'>cat</span> to read what inside a file)`.split(/\r?\n/);
      case 'open directory':
         return `open: ${showCommand[1]}: Is a directory (you may use <span class='font-bold text-blue-500'>cd</span> instead of open to navigate to a directory)`.split(/\r?\n/);
      case 'open not found':
         return `open: The file ${showCommand[1]} does not exist`.split(/\r?\n/);
      case 'show ls':
         const final = showCommand[1];
         for (let i=0; i<final.length; i++) {
            if (final[i].split('.').length === 1) {
               const keep = final[i];
               final[i] = `<span class='font-bold text-indigo-500'>`+keep+`</span>`
            }
         }
         return final;
      case 'whoami':
         return whoami;
      case 'whoami error':
         return `usage: whoami`.split(/\r?\n/);
      case 'cat README.md':
         return catReadme.split(/\r?\n/);
      case 'cat boot.log':
         return bootLog.split(/\r?\n/);
      case 'cat boot.log':
         return bootLog.split(/\r?\n/);
      case 'cat directory':
         return `cat: ${showCommand[1]}: Is a directory`.split(/\r?\n/);
      case 'cat not found':
         return `cat: ${showCommand[1]}: No such file or directory`.split(/\r?\n/);
      case 'cat DockBar.git':
         return catDockbar.split(/\r?\n/);
      case 'cat WEPINS.git':
         return catWepins.split(/\r?\n/);
      case 'cat profile_pic.png':
         return catProfilePic.split(/\r?\n/);
      case 'cat contact.sh':
         return catContact.split(/\r?\n/);
      case 'cd not found':
         return `cd: no such file or directory: ${showCommand[1]}`.split(/\r?\n/);
      case 'cd not directory':
         return `cd: not a directory: ${showCommand[1]}`.split(/\r?\n/);
      case 'not found':
         return `zsh: command not found: ${showCommand[1]}`.split(/\r?\n/);
      case 'nothing':
         return [];
      default:
         return ['zsh: There are some error on website or this function are not available right now.'];
   }
}
