<?php

// Home
$app->get('/', function() use ($app) {
    $c = new uk\co\hammade\Controllers\IndexController();
    return $c->indexAction($app);
});

// Stuff
$app->get('/stuff', function() use ($app) {
    $c = new uk\co\hammade\Controllers\IndexController();
    return $c->stuffAction($app);
});
