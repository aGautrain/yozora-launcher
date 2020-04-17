# yozora-launcher

**Clone and run for a quick way to see Electron in action.**

This is a minimal Electron application based on the [Quick Start Guide](https://electronjs.org/docs/tutorial/quick-start) within the Electron documentation.

**Use this app along with the [Electron API Demos](https://electronjs.org/#get-started) app for API code examples to help you get started.**

A basic Electron application needs just these files:

- `package.json` - Points to the app's main file and lists its details and dependencies.
- `main.js` - Starts the app and creates a browser window to render HTML. This is the app's **main process**.
- `index.html` - A web page to render. This is the app's **renderer process**.

You can learn more about each of these components within the [Quick Start Guide](https://electronjs.org/docs/tutorial/quick-start).

## To Use

To clone and run this repository you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
git clone https://github.com/aGautrain/yozora-launcher
# Go into the repository
cd yozora-launcher
# Install dependencies
npm install
# Run the app
npm start
```


## Resources for Learning Electron

- [electronjs.org/docs](https://electronjs.org/docs) - all of Electron's documentation
- [electronjs.org/community#boilerplates](https://electronjs.org/community#boilerplates) - sample starter apps created by the community
- [electron/electron-quick-start](https://github.com/electron/electron-quick-start) - a very basic starter Electron app
- [electron/simple-samples](https://github.com/electron/simple-samples) - small applications with ideas for taking them further
- [electron/electron-api-demos](https://github.com/electron/electron-api-demos) - an Electron app that teaches you how to use Electron
- [hokein/electron-sample-apps](https://github.com/hokein/electron-sample-apps) - small demo apps for the various Electron APIs

## License

[CC0 1.0 (Public Domain)](LICENSE.md)


# Project structure

For size convenience, some files have not been uploaded in this repository.  

You are expected to provide  

* /Tutorial_English.mp4  
* /Tutoriel_Francais.mp4  
* /Launcher.mp4  
* /Demo

Game must be provided in /Demo folder, for executing it launcher will search
for a file called DemoProject.exe on your hard drive

If game is not well located, when clicking PLAY button, nothing will happen

# Build .exe

Don't forget to run following commands :  
* npm install
* npm install electron-packager -g


> electron-packager . Yozora --overwrite  

A folder Yozora-win32-x64 containing Yozora.exe will be created !
