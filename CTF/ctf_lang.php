<?php

$handle = fopen('en_lang.php', 'r');
$content = fread($handle, filesize('en_lang.php'));
fclose($handle);
echo nl2br(htmlspecialchars($content));

?>
