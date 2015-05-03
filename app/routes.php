<?php

// Home
$app->get('/', function() use ($app) {
    $c = new wedding\joeandlisa\Controllers\IndexController();
    return $c->indexAction($app);
});
