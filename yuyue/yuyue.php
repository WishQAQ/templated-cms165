<?php
require_once("../include/common.inc.php");

//$validate = $_REQUEST['validate'];
//if(empty($validate)) $validate=='';
//else $validate = strtolower($validate);
//$svali = GetCkVdValue();
/*if($validate=='' || $validate!=$svali){
	echo '<script language="JavaScript">window.alert("��֤�벻��ȷ");location.href="yuyue.html"</script>';
	exit();
}*/
$validate = $_REQUEST['validate'];
if(empty($validate)) $validate=='';
else $validate = strtolower($validate);
$svali = GetCkVdValue();
$ip = GetIP();
$validate = empty($validate) ? '' : strtolower(trim($validate));
$svali = strtolower(GetCkVdValue());
if(($validate=='' || $validate != $svali) && preg_match("/6/",$safe_gdopen)){
  ResetVdValue();
  echo '<script language="JavaScript">window.alert("��֤�벻��ȷ");location.href="/message/"</script>';
  exit();
}
$ip = GetIP();
if(!isset($uname) || $uname==''){
	echo '<script language="JavaScript">window.alert("����������");location.href="/message/"</script>';
	exit();	
}
if(!isset($tel) || $tel==''){
	echo '<script language="JavaScript">window.alert("������绰����");location.href="/message/"</script>';
	exit();	
}
if(!isset($content) || $content==''){
	echo '<script language="JavaScript">window.alert("��������������");location.href="/message/"</script>';
	exit();	
}
$date=date("Y-m-d");
$inQuery = "INSERT INTO `#@__yuyue` (`name`, `hometel`, `ill`,`ip`,`date`) VALUES ('$uname', '$tel', '$content', '$ip', '$date');
;";

if(!$dsql->ExecuteNoneQuery($inQuery)){
	$gerr = $dsql->GetError();
	$dsql->Close();
	ShowMsg("��������ʱ��������ϵ����Ա��".$gerr,"-1");
	exit();
}
echo '<script language="JavaScript">window.alert("���������ύ�ɹ�,���ȷ������");location.href="/message/"</script>';
?>