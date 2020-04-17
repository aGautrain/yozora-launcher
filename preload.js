// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.

const child = require('child_process').exec;
const englishVideoPath = "Tutorial_English.mp4";
const frenchVideoPath = "Tutoriel_Francais.mp4";
let gamePath = "resources/app/Demo/DemoProject.exe";

const path = require("path");
const gameAbsolutePath = path.resolve(gamePath);
const remote = require('electron').remote;

const gameExecutableName = 'DemoProject.exe';
let gameDeducedPath = '';

// Fonction récursive qui cherche dans tous les dossiers
function walkSync(currentDirPath, callback) {
    var fs = require('fs'),
        path = require('path');
    fs.readdirSync(currentDirPath).forEach(function (name) {
		if (name !== 'node_modules') {
			var filePath = path.join(currentDirPath, name);
			var stat = fs.statSync(filePath);
			if (stat.isFile()) {
				callback(filePath, stat);
			} else if (stat.isDirectory()) {
				walkSync(filePath, callback);
			}
		}
    });
}

// On l'exécute sur le répertoire en cours à la recherche de l'exécutable du jeu
walkSync('./', function(filePath, stat) {
    if (filePath.includes(gameExecutableName)) {
		gameDeducedPath = path.resolve(filePath);
	}
});


console.log(gameDeducedPath);


window.addEventListener('DOMContentLoaded', () => {
	
  const replaceText = (selector, text) => {
    const element = document.getElementById(selector)
    if (element) element.innerText = text
  }

  for (const type of ['chrome', 'node', 'electron']) {
    replaceText(`${type}-version`, process.versions[type])
  }
  
  const bckgVideo = document.getElementById('background-video');
  
  window.addEventListener('keyup', (e) => {
	  if (e && e.key === "Escape") {
		  const video = document.querySelector('#tuto');
		  video.pause();
		  video.currentTime = 0;
		  video.style.display = 'none';
		  if (bckgVideo) {
			  bckgVideo.play();
		  }
	  }
  });
  
  
  const video = document.querySelector('#tuto');
  
  document.getElementById('btn-StartGame').addEventListener('click', () => {
	  
	let game = gameAbsolutePath;
	if (gameDeducedPath && gameDeducedPath.length) {
		game = gameDeducedPath;
	}
	child(game, (err, data) => {
		if(err){
		   console.error(err);
		   return;
		}
		
		const win = remote.getCurrentWindow();
		if (win) {
			win.close();
		}
	});
	
	
	
  });
  
  document.getElementById('btn-tutoFr').addEventListener('click', (e) => {
	  e.target.blur();
	  const video = document.querySelector('#tuto');
	  video.src = frenchVideoPath;
	  video.currentTime = 0;
	  
	  if (bckgVideo) {
		bckgVideo.pause();
	  }
	  
	  video.style.display = 'block';
	  video.play();
  });
  
  document.getElementById('btn-tutoEng').addEventListener('click', (e) => {
	  e.target.blur();
	  const video = document.querySelector('#tuto');
	  video.src = englishVideoPath;
	  video.currentTime = 0;
	  
	  if (bckgVideo) {
		bckgVideo.pause();
	  }
	  
	  video.style.display = 'block';
	  video.play();
  });
  
  document.querySelector('video').addEventListener('ended', () => {
	  const video = document.querySelector('#tuto');
	  video.style.display = 'none';
	  video.currentTime = 0;
	  
	  if (bckgVideo) {
		bckgVideo.play();
	  }
  });
})
