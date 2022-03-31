<?php

$name=$_POST['name'];
$email=$_POST['email'];
$message=$_POST['message'];

$company='Univerzal-Lisac d.o.o.';

$subject='Dolazni web upit! | '.$name;
$subjectClient='Upit zaprimljen | '.$company;

if(!empty($name)||!empty($email)||!empty($message)){
  $to='liker.luka@gmail.com';//!!NEMOJ ZABORAVITI PROMIJENITI U TVRTKIN!!
  $headers='From: '.$email;
  $messageUpit='Zaprimljen je novi web upit od klijenta '.$name.':\n'.$message;

  $toClient=$email;
  $headersClient='From: '.$to;
  $messageClient="Poštovani, Vaš upit je zaprimljen. U nastavku možete vidjeti Vašu poruku: \n".$message."\n"."Na upit ćemo odgovoriti u najkraćem mogućem roku.";

  mb_language('uni');
  mb_internal_encoding('utf-8');
  mb_send_mail($to,$subject,$messageUpit,$headers);
  mb_send_mail($toClient,$subjectClient,$messageClient,$headersClient);
}