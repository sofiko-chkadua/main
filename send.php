<?php
require 'vendor/autoload.php';

use Sendpulse\RestApi\ApiClient;
use Sendpulse\RestApi\Storage\FileStorage;

// API credentials from https://login.sendpulse.com/settings/#api
define('API_USER_ID', '07622b2939bd98a17aae1f777de53904');
define('API_SECRET', '642ebc4f446a3377ca47150a12419a15');
$SPApiClient = new ApiClient(API_USER_ID, API_SECRET, new FileStorage());


$post = (!empty($_POST) ? true : false);
if($post) {
  $name = $_POST['name'];
  $secondname = $_POST['secondname'];
  $post = $_POST['post'];
  $companyname = $_POST['companyname'];
  $job = $_POST['job'];
  $phone = $_POST['phone'];
  $email = $_POST['email'];
  $mes = "Имя: ".$name."\n\nФамилия: ".$secondname."\n\nМесто работы: ".$post."\n\nНазвание компании: ".$companyname."\n\nДолжность: ".$job."\n\nТелефон: ".$phone."\n\nE-mail: ".$email."\n\n";
  $error = '';
  if(!$error) {
    $eml = array(
      'html'    => '<p>'.$mes.'</p>',
      'text'    => $mes,
      'subject' => 'Nedvex Group: заявка с сайта',
      'from'    => array(
        'name'  => 'Landind',
        'email' => 'no-reply@nedvex.ru'
      ),
      'to'      => array(
        array(
          'name'  => 'Content manager',
          'email' => 'content@nedvex.ru'
        )
      )
    );
    $send = $SPApiClient->smtpSendMail($eml);

    if($send) {echo 'OK';}
  }
  else {echo '<div class="err">'.$error.'</div>';}
}
?>