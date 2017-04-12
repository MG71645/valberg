<?

$adminemail="sales@rusdoors.kz";
$adminemail2="rusdoors.kz@mail.ru";
$adminemail3="mg71645@gmail.com";

$headers = 'From: admin@rusdoors.kz' . "\r\n" .
   'Reply-To: admin@rusdoors.kz' . "\r\n" .
   'X-Mailer: PHP/' . phpversion();


$date=date("d.m.y");
$time=date("H:i");
$backurl="javascript:history.back(1)";





$name=$_POST['name'];
$phone=$_POST['phone'];
$trigger=$_POST['trigger'];


$ref = htmlspecialchars(trim($_COOKIE["ref"]));
$reftext = rawurldecode(trim($_COOKIE["stext"]));

$source = htmlspecialchars(trim($_COOKIE["source"]));
$medium = htmlspecialchars(trim($_COOKIE["medium"]));
$term = rawurldecode(trim($_COOKIE["term"]));
$campaign = htmlspecialchars(trim($_COOKIE["campaign"]));





$msg="
    Имя: $name
    Телефон: $phone
    Откуда: $trigger
    
    Сайт-источник: $ref $source
    Ключевое слово: $term $reftext
";





mail("$adminemail", "$date $time Сообщение от $name", "$msg", $headers);
mail("$adminemail2", "$date $time Сообщение от $name", "$msg", $headers);
mail("$adminemail3", "$date $time Сообщение от $name", "$msg", $headers);





$f = fopen("message.txt", "a+");

fwrite($f," \n $date $time Сообщение от $name");

fwrite($f,"\n $msg ");

fwrite($f,"\n ---------------");

fclose($f);





echo "<p>Спасибо! Наш оператор свяжется с вами в течении 30 минут</p>";

?>