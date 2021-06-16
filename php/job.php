<?php
require __DIR__.'/../vendor/autoload.php';

use Sendpulse\RestApi\ApiClient;
use Sendpulse\RestApi\Storage\FileStorage;

define('MB', 1048576);

// API credentials from https://login.sendpulse.com/settings/#api
define('API_USER_ID', '07622b2939bd98a17aae1f777de53904');
define('API_SECRET', '642ebc4f446a3377ca47150a12419a15');
$SPApiClient = new ApiClient(API_USER_ID, API_SECRET, new FileStorage());


$post = (!empty($_POST) ? true : false);
if($post) {
  $name = $_POST['name'];
  $phone = $_POST['phone'];
  $mail = $_POST['mail'];
  $subject = $_POST['subject'];
  $description = $_POST['description'];
  $link = $_POST['link'];
  $file = $_FILES['file'];
  $mes = 
  "\n\nИмя:\n\n"
  .$name.
  "\n\nТелефон: "
  .$phone.
  "\n\nПочта:\n\n"
  .$mail.
  "\n\nО себе:\n\n"
  .$description.
  "\n\nСсылка на резюме:\n\n"
  .$link.
  "\n\nФайл резюме:\n\n"
  .$file.

  $error = '';
  if(!$error) {
    $eml = array(
      'html'    => '<p>'.$mes.'</p>',
      'text'    => $mes,
      'subject' => $subject,
      'from'    => array(
        'name'  => 'Vacancy',
        'email' => 'no-reply@nedvex.ru'
      ),
      'to'      => array(
        array(
          'name'  => 'Content manager',
          'email' => 'a.averyanova@nedvex.ru'
        )
      )
    );

    if ($_FILES['file'] && $_FILES['file']['size'] > 20*MB) {
      echo 'Error: file greater then 20MB';
    }
    if ($_FILES['file']['name']){
      $eml['attachments'] = array($_FILES['file']['name'] => file_get_contents($_FILES['file']['tmp_name']));
    }
    $send = $SPApiClient->smtpSendMail($eml);

    if($send) {echo 'OK';}
  }
  else {echo '<div class="err">'.$error.'</div>';}
}
?>
