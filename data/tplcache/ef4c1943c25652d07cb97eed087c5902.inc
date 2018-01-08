<li><span>[field:pubdate runphp='yes']
      $a="".strftime('%m/%d',@me)."";
      $b=strftime('%m/%d',@me);
      $ntime = time();
      $day3 = 3600 * 24 * 3;
      if(($ntime - @me) < $day3) @me = $a;
      else @me =$b;
    [/field:pubdate]</span><div class="pf"><a href="[field:arcurl/]" title="[field:fulltitle/]">[field:title/]</a><br />[field:info/]...</div></li>