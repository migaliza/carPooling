<?php
  require_once('magpierss-0.72/rss_fetch.inc');
    $url='http://feeds.bbci.co.uk/news/rss.xml?edition=int';
    $rss=fetch_rss($url);
    echo "Channel Title: ".$rss->channel['title']."<p>";
    echo "<ul>";
    foreach($rss->items as $item){
      $href=$item['link'];
      $title=$item['title'];
      $pub   = $item['pubdate'];
      $desc  = $item['description'];
      echo "<li><a href=$href>$title</a></li>";
    }

    echo "</ul>";
?>
