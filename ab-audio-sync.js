var DEBUG = false;

var audioA;
var audioB;
var btnPlay;
var btnA;
var btnB;

// Ignore pages that do not contain the correct set of IDs
jQuery(document).ready( function(){
  audioA = document.getElementById('audio-sync-a');
  audioB = document.getElementById('audio-sync-b');
  btnPlay = jQuery('#audio-btn-sync-play');
  btnA = jQuery('#audio-btn-sync-a');
  btnB = jQuery('#audio-btn-sync-b');

  if( audioA === null || audioB === null ) {
    debug('#audio-sync-a or #audio-sync-b was not found');
  } else if( btnPlay.length != 1 ) {
    debug('#audio-btn-sync-play was not found');
  } else if( btnA.length != 1 || btnB.length != 1 ) {
    debug('#audio-btn-sync-a or #audio-btn-sync-b was not found');
  } else {
    debug('Starting ABAudioSync()');
    btnA.attr('disabled', 'true');
    btnB.attr('disabled', 'true');
    ABAudioSync();
  }
});

function ABAudioSync(){
  var firstRun = true;

  audioA.volume = 1;
  audioB.volume = 0;

  debug('btnPlay: ' + btnPlay);

  btnPlay.click( function(){
    debug('btnPlay clicked (firstRun=' + firstRun + ')');
    if( audioA.paused || firstRun ){
      jQuery(this).text('Pause');
      syncTime();
      audioA.play();
      audioB.play();
      btnA.removeAttr('disabled');
      btnB.removeAttr('disabled');
      if( firstRun )
        btnA.attr('disabled','true');
      firstRun = false;
    } else {
      audioA.pause();
      audioB.pause();
      syncTime();
      jQuery(this).html('Play');
      btnA.attr('disabled', 'true');
      btnB.attr('disabled', 'true');
    }
  });

  // Start A, Stop B
  btnA.click( function(){
    // debug('btnA clicked');
    audioA.volume = 1.0;
    audioB.volume = 0.0;
    btnA.attr('disabled','true');
    btnB.removeAttr('disabled');
    firstRun = false;
  });

  // Start B, Stop A
  btnB.click( function(){
    // debug('btnB clicked');
    audioB.volume = 1.0;
    audioA.volume = 0.0;
    btnA.removeAttr('disabled');
    btnB.attr('disabled','true');
    firstRun = false;
  });
}

function debug(msg) {
  if( DEBUG )
    console.log(msg);
}

function syncTime(){
    audioA.currentTime = audioB.currentTime;  
}
