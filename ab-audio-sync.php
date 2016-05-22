<?php
/*
Plugin Name: A/B Audio Sync
Plugin URI: https://github.com/01000101/wordpress-ab-audio-sync
Description: Allows A/B comparison of 2 audio streams as a WordPress plugin
Version: 0.2
Author: Joshua Cornutt
Author URI: https://joscor.com
License: MIT
*/


class ABAudioSync{

  function init(){

  }

  function front_scripts(){
    wp_enqueue_script('jquery');
    wp_enqueue_script('ab-audio-sync', plugins_url('ab-audio-sync.js', __FILE__), array('jquery'));
  }

}

add_action( 'init', array('ABAudioSync', 'init') );
add_action( 'wp_enqueue_scripts', array('ABAudioSync', 'front_scripts') );
