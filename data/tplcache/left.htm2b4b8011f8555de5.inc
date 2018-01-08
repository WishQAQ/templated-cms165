<?php
$z[0]=Array("field","",66,125);
$z[0][4]['name']="typeid";
$z[0][4]['function']="GetTopTypename(@me)";
$z[1]=Array("field","if(@me=='1')@me='ABOUT';else if(@me=='2')@me='COURSE';else if(@me=='3')@me='NEWS';else if(@me=='4')@me='ACTIVITES';else if(@me=='5')@me='SERVER';else if(@me=='6')@me='CONTACT';else if(@me=='16')@me='DYNAMIC';else if(@me=='17')@me='MESSAGE';else if(@me=='25')@me='MYBOBO';",131,479);
$z[1][4]['name']="typeid";
$z[1][4]['runphp']="yes";
$z[1][4]['function']="GetTopid(@me)";
$z[2]=Array("channel","\r\n		<a href='[field:typeurl/]'>[field:typename/]</a>\r\n		",545,704);
$z[2][4]['type']="son";
$z[2][4]['currentstyle']="<a href='~typelink~' class='cur'>~typename~</a>";
$z[3]=Array("global","",950,983);
$z[3][4]['name']="dede_nyleftcontact";

?>