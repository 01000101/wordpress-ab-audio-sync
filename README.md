# WordPress A/B Audio Sync

WordPress plugin that provides A/B audio comparison. This is a fork of the, now unmaintained,
"hm-audio-sync" project.

## Instructions

* Download the plugin and unzip to your wp-content/plugins directory
* Alternatively, just upload the zip file via the WordPress plugins UI
* Activate plugin via Wordpress admin
* Include the following elements on your page or post

```html
<audio id="audio-sync-a" src="PATH_TO_AUDIO_A" preload="preload" controls="controls"></audio>
<audio id="audio-sync-b" src="PATH_TO_AUDIO_B" preload="preload" controls="controls"></audio>
<button id="audio-btn-sync-play">Play</button>
<button id="audio-btn-sync-a">Audio A</button>
<button id="audio-btn-sync-b">Audio B</button>
```

Replace `PATH_TO_AUDIO_A` and `PATH_TO_AUDIO_B`, of course with your own
files. File type will be dependent on browser support. 
This has been tested with MP3 and WAV audio files with no issues on Google Chrome.

The plugin will look for HTML elements with IDs of "audio-sync-a" and "audio-sync-b".
If found, it will wire the buttons to control the playback and A/B switching of the audio
files.
