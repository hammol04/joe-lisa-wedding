<?php

// Home
$app->get('/', function() use ($app) {
    $c = new wedding\joeandlisa\Controllers\IndexController();
    return $c->indexAction($app);
});

// Hotels
$app->get('/hotels', function() use ($app) {
    $c = new wedding\joeandlisa\Controllers\IndexController();
    return $c->hotelsAction($app);
});

// Taxis
$app->get('/taxis', function() use ($app) {
    $c = new wedding\joeandlisa\Controllers\IndexController();
    return $c->taxisAction($app);
});