// Options
// Copyright (c) 2010-2014 smart people on ice, LLC.
// All rights reserved.  Must not be reproduced without express written permission of smart people on ice, LLC.
//
// If you can read this you are in violation of the EULA/SLA:
// https://spoi.com/options/EULA

function defineDefaults (reset) {
	// define localstore defaults

	setstor.Version='1.8.164.3';

	if (!setstor.Filtering || reset) {setstor.Filtering='true';}

	if (!setstor.SetView || reset) {setstor.SetView='default';}
	if (!setstor.SetRes || reset) {setstor.SetRes='default';}
	if (!setstor.ChangeResView || reset) {setstor.ChangeResView='false';}
	if (!setstor.KeepWatching || reset) {setstor.KeepWatching='false';}
	if (!setstor.KeepView || reset) {setstor.KeepView='false';}

	if (!setstor.InVideoAds || reset) {setstor.InVideoAds='true';}
	if (!setstor.InVideoAnno || reset) {setstor.InVideoAnno='true';}
	if (!setstor.InVideoCC || reset) {setstor.InVideoCC='true';}

	if (!setstor.AutoPlay || reset) {setstor.AutoPlay='no';}
	if (!setstor.IgnoreTime || reset) {setstor.IgnoreTime='true';}

	if (!setstor.Keys || reset) {setstor.Keys='false';}
	if (!setstor.Volume || reset) {setstor.Volume='default';}
	if (!setstor.ForceCodec || reset) {setstor.ForceCodec='flash';}
	if (!setstor.Speed || reset) {setstor.Speed='default';}
	if (!setstor.Loop || reset) {setstor.Loop='false';}
	if (!setstor.Wmode || reset) {setstor.Wmode='false';}
	if (!setstor.Dash || reset) {setstor.Dash='false';}

	if (!setstor.Scroll || reset) {setstor.Scroll='default';}

	if (!setstor.SetLink || reset) {setstor.SetLink='default';}

	if (!setstor.Cinemize || reset) {setstor.Cinemize='false';}
		if (!setstor.Header || reset) {setstor.Header='false';}
		if (!setstor.Guide || reset) {setstor.Guide='true';}
		if (!setstor.Headline || reset) {setstor.Headline='false';}
		if (!setstor.DescButs || reset) {
			setstor.DescButs='true';
			if (setstor.Cleanup && setstor.Cleanup=='false') {
				setstor.DescButs='false';
			}
		}
		if (!setstor.Description || reset) {setstor.Description='true';}
		if (!setstor.ExpDescription || reset) {setstor.ExpDescription='false';}
		if (!setstor.Comments || reset) {setstor.Comments='true';}
		if (!setstor.CommentShare || reset) {setstor.CommentShare='true';}
		if (!setstor.Sidebar || reset) {setstor.Sidebar='true';}
		if (!setstor.Footer || reset) {setstor.Footer='true';}
		if (!setstor.Playlist || reset) {setstor.Playlist='true';}

	if (!setstor.Cleanup || reset) {setstor.Cleanup='true';}
	if (!setstor.ScrollTop || reset) {setstor.ScrollTop='false';}

	if (!setstor.Frame || reset) {setstor.Frame='false';}
	if (!setstor.Favicon || reset) {setstor.Favicon='true';}
	if (!setstor.Popout || reset) {setstor.Popout='false';}
	if (!setstor.NoCarousel || reset) {setstor.NoCarousel='false';}

	if (!setstor.Swatch || reset) {setstor.Swatch='#222222';}
	if (!setstor.Mood || reset) {setstor.Mood='default';}

	if (!setstor.Hide || reset) {setstor.Hide='true';}
	if (!setstor.ControlsTheme || reset) {setstor.ControlsTheme='default';}

	if (!setstor.DownloadLinks || reset) {setstor.DownloadLinks='true';}
		if (!setstor.Hwebm || reset) {setstor.Hwebm='false';}
		if (!setstor.Hmp4 || reset) {setstor.Hmp4='false';}
		if (!setstor.Hm4a || reset) {setstor.Hm4a='true';}
		if (!setstor.Hflv || reset) {setstor.Hflv='false';}
		if (!setstor.H3gp || reset) {setstor.H3gp='false';}
		if (!setstor.H3d || reset) {setstor.H3d='true';}
		if (!setstor.HThumb || reset) {setstor.HThumb='true';}
		if (!setstor.Ddate || reset) {setstor.Ddate='false';}
		if (!setstor.Dquality || reset) {setstor.Dquality='true';}
		if (!setstor.Duserid || reset) {setstor.Duserid='false';}

	if (!setstor.RSS || reset) {setstor.RSS='false';}

	if (!setstor.Popup || reset) {setstor.Popup='true';}

	if (!setstor.Sites || reset) {setstor.Sites='false';}
		if (!setstor.youtube || reset) {setstor.youtube='true';}
		if (!setstor.youtubeHome || reset) {setstor.youtubeHome='true';}
		if (!setstor.youtubeChannel || reset) {setstor.youtubeChannel='true';}
		if (!setstor.youtubeFeed || reset) {setstor.youtubeFeed='true';}
		if (!setstor.youtubeUser || reset) {setstor.youtubeUser='true';}
		if (!setstor.daily || reset) {setstor.daily='false';}
		if (!setstor.dump || reset) {setstor.dump='false';}
		if (!setstor.escapist || reset) {setstor.escapist='false';}
		if (!setstor.fear || reset) {setstor.fear='false';}
		if (!setstor.funny || reset) {setstor.funny='false';}
		if (!setstor.g4tv || reset) {setstor.g4tv='false';}
		if (!setstor.hulu || reset) {setstor.hulu='false';}
		if (!setstor.vimeo || reset) {setstor.vimeo='false';}
		if (!setstor.meta || reset) {setstor.meta='false';}
		if (!setstor.twitter || reset) {setstor.twitter='false';}
		if (!setstor.others || reset) {setstor.others='false';}
	if (!setstor.eyoutube || reset) {setstor.eyoutube='true';}
		if (!setstor.OpenAtHome || reset) {setstor.OpenAtHome='false';}
	if (!setstor.SSL || reset) {setstor.SSL='false';}

	if (!setstor.SyncSettings) {setstor.SyncSettings='false';}
	if (!setstor.Prof0Name && setstor.Prof0Name!='') {setstor.Prof0Name='Profile 1';}
	if (!setstor.Prof1Name && setstor.Prof1Name!='') {setstor.Prof1Name='Profile 2';}
	if (!setstor.Prof2Name && setstor.Prof2Name!='') {setstor.Prof2Name='Profile 3';}
	if (!setstor.Prof0 && setstor.Prof0!='') {setstor.Prof0='';}
	if (!setstor.Prof1 && setstor.Prof1!='') {setstor.Prof1='';}
	if (!setstor.Prof2 && setstor.Prof2!='') setstor.Prof2='{\"ControlsTheme\":\"light\",\"Frame\":\"true\",\"Hide\":\"true\",\"KeepView\":\"true\",\"Keys\":\"true\",\"OpenAtHome\":\"true\",\"RSS\":\"Feedly\",\"Scroll\":\"size\",\"SetRes\":\"720\",\"SetView\":\"720\",\"Sites\":\"true\"}';
	if (!setstor.twitterURL) {setstor.twitterURL='';}

	if (!setstor.ytCodec) {setstor.ytCodec='Flash';}
	if (!setstor.ytVers) {setstor.ytVers='normal';}
	if (!setstor.ytCookie) {setstor.ytCookie='';}
	if (!setstor.Reverse || reset) {setstor.Reverse='false';}
	if (!setstor.Showadvanced) {setstor.Showadvanced='false';}

	if (reset) {
		// DO NOT DELETE THIS:
		setstor.DownloadLinks = 'never';
	}

	if (setstor.VersionsNote && !setstor.epoch) {
		var currentTime = new Date();
		setstor.epoch = currentTime.toJSON()+' pre';
	}
	if (!setstor.totalpages) {setstor.totalpages=0;}

	// migrate settings
	if (setstor.Speed && setstor.Speed=='2') {setstor.Speed='2.0';}
	if (thisbrowser=='safari' && navigator.userAgent.search('Version/5.1')>-1) {setstor.Wmode='false';}
	if (operanext==true && setstor.Popup=='false') {
		// this should be handled by the extensions screen
		setstor.Popup='true';
	}

	// cleanup
	if (setstor.ytLayout) {setstor.removeItem('ytLayout');}
	if (setstor.AutoPlayEmbed) {setstor.removeItem('AutoPlayEmbed');}

	if (thisbrowser=='chrome' && !setstor.SeenRetired) {
		window.open('chrome-extension:retired.html');
		setstor.SeenRetired='true';
	}
}

function startTabsListener () {
	// handle new or refreshed tabs (chrome)

	function goodURL (taburl) {
		// list all valid domains/urls for showing page-action menu

		var full = false;
		var good = false;

		if (setstor.Sites=='true') {full=true;}

		if (taburl.search('youtube.com')>-1 && (setstor.youtube=='true' || full)) {good=true;}
		if (taburl.search(/vimeo.com\/[0-9]/)>-1 && (setstor.vimeo=='true' || full)) {good=true;}
		if (taburl.search('dailymotion.com/video/')>-1 && (setstor.daily=='true' || full)) {good=true;}
		if (taburl.search('metacafe.com/watch/')>-1 && (setstor.meta=='true' || full)) {good=true;}
		if (taburl.search('g4tv.com/videos/')>-1 && (setstor.g4tv=='true' || full)) {good=true;}
		if (taburl.search('fearnet.com/movies')>-1 && (setstor.fear=='true' || full)) {good=true;}
		if (taburl.search('funnyordie.com/videos')>-1 && (setstor.funny=='true' || full)) {good=true;}
		if (taburl.search('hulu.com/watch')>-1 && (setstor.hulu=='true' || full)) {good=true;}
		if (taburl.search('escapistmagazine.com/videos')>-1 && (setstor.escapist=='true' || full)) {good=true; }
		if (taburl.search('dump.com')>-1 && (setstor.dump=='true' || full)) {good=true;}
		if (taburl.search('twitter.com')>-1 && (setstor.twitter=='true' || full)) {good=true;}
		if ((taburl.search('own3d.tv')>-1 || taburl.search('twitch.tv')>-1 || taburl.search('instagram.com')>-1) && (setstor.others=='true' || full)) {good=true;}
		if (taburl.search('spoi.com/')>-1) {good=true;}

		return good;
	}

	console.log('creating handler for showing popup menu for tabs (chrome)');
	chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
		if (changeInfo.status=='loading' && goodURL(tab.url)==true) {
			// show popup menu for good urls
			chrome.pageAction.show(tabId);
		}
	});
}

// ------------------

var d = document;
var storage = undefined;
var setstor = localStorage;

var thisbrowser = undefined;
var operanext = false;

if (navigator.userAgent.search('Chrome')>-1) {thisbrowser='chrome';}

if (thisbrowser=='chrome') {
	defineDefaults();
	if (chrome.tabs) {startTabsListener();}
}

/* EOF */
