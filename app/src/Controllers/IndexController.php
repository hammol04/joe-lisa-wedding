<?php
namespace wedding\joeandlisa\Controllers;

class IndexController {

    public function indexAction($app)
    {
        return $app['twig']->render('base.html.twig', array(
            "page" => array(
                "title"     => "home",
                "nav"   => $app['twig']->render('nav.html.twig'),
                "content"   => $app['twig']->render('index.html.twig'),
                "css"       => $app['twig']->render('css.html.twig'),
                "js"        => $app['twig']->render('js.html.twig', array(
                    "jss" => array(
                        "dep/jquery.min.js",
                        "dep/jssor.slider.mini.js",
                        "wedding.js"
                    )
                ))
            )
        ));
    }

    public function hotelsAction($app)
    {
        return $app['twig']->render('base.html.twig', array(
            "page" => array(
                "title"     => "home",
                "nav"   => $app['twig']->render('nav.html.twig'),
                "content"   => $app['twig']->render('hotels.html.twig'),
                "css"       => $app['twig']->render('css.html.twig'),
            )
        ));
    }

    public function taxisAction($app)
    {
        return $app['twig']->render('base.html.twig', array(
            "page" => array(
                "title"     => "home",
                "nav"   => $app['twig']->render('nav.html.twig'),
                "content"   => $app['twig']->render('taxis.html.twig'),
                "css"       => $app['twig']->render('css.html.twig'),
            )
        ));
    }

    public function contactAction($app)
    {
        return $app['twig']->render('base.html.twig', array(
            "page" => array(
                "title"     => "home",
                "nav"   => $app['twig']->render('nav.html.twig'),
                "content"   => $app['twig']->render('contact.html.twig'),
                "css"       => $app['twig']->render('css.html.twig'),
            )
        ));
    }

    public function submitAction($app)
    {
        $to = "jmpelectrical@gmail.com";
        $from = "247hammond@live.com";

        // Send email
        $name = $_GET['name'];
        $coming = $_GET['coming'];
        $comments = $_GET['comments'];

        $message =
            "Name: $name

            Is Coming?: $coming

            Comments: $comments"
        ;

        mail($to, "Wedding Invitation Response", $message, "From: $from");

        return $app['twig']->render('base.html.twig', array(
            "page" => array(
                "title"     => "home",
                "nav"   => $app['twig']->render('nav.html.twig'),
                "content"   => $app['twig']->render('contact.html.twig'),
                "css"       => $app['twig']->render('css.html.twig'),
            )
        ));
    }
}