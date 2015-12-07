<?php
require_once('magpierss-0.72/rss_fetch.inc');
	$ulr =$_GET['url'];
	$rss =fetch_rss($url);
	
	echo "Channel Title:".$rss->channel['title']."<p>";
	echo "<ul>";
	foreach($rss->item as $item){
		$href=$item['link'];
		$title=$item['title'];
		echo "<li><a href=$href>$titleM/a></li>";
		
	}
	echo "</ul>";
?>