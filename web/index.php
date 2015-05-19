<?php
require_once __DIR__.'/../vendor/autoload.php';

$app = new Silex\Application();

include __DIR__.'/../app/bootstrap.php';
require __DIR__.'/../app/routes.php';

var_dump((in_array('mod_rewrite', apache_get_modules())));

die(in_array('mod_rewrite', apache_get_modules()));

$app->run();