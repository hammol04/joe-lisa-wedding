<?php

namespace wedding\joeandlisa\Controllers;

class IndexController {

    public function indexAction($app)
    {
        return $app['twig']->render('base.html.twig', array(
            "page" => array(
                "title"     => "home",
                "head"  => $app['twig']->render('head.html.twig'),
                "nav"   => $app['twig']->render('nav.html.twig'),
                "content"   => $app['twig']->render('index.html.twig'),
                "css"       => $app['twig']->render('css.html.twig'),
                "js"        => $app['twig']->render('js.html.twig')
            )
        ));
    }

    public function stuffAction($app)
    {
        return $app['twig']->render('base.html.twig', array(
            "page" => array(
                "title"     => "stuff",
                "head"  => $app['twig']->render('head.html.twig'),
                "nav"   => $app['twig']->render('nav.html.twig'),
                "content"   => $app['twig']->render('stuff.html.twig'),
                "css"       => $app['twig']->render('css.html.twig'),
                "js"        => $app['twig']->render('js.html.twig')
            )
        ));
    }
}