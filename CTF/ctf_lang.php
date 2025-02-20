<?php

$content = file_get_contents('en_lang.php');
echo nl2br(htmlspecialchars($content));

?>
