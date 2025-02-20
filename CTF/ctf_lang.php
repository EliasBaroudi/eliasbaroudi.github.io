<?php

$handle = fopen('path/to/file.php', 'r');
$content = fread($handle, filesize('path/to/file.php'));
fclose($handle);
echo nl2br(htmlspecialchars($content));

?>
