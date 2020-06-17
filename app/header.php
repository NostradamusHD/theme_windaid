<!doctype html>
<html <?php language_attributes(); ?>>
    <head>
        <meta charset="<?php bloginfo('charset'); ?>" />
        <meta name="viewport"
              content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="shortcut icon" type="image/x-icon" href="<?= get_theme_file_uri('/static/images/favicon.ico')?>">
        <?php wp_head() ?>
    </head>

    <body <?php body_class(); ?> >
        <!-- Page container | Start -->
        <div class="page" id="page">

            <!-- Header | Start -->
            <div class="page__header">
                <header class="header">
                    <!-- HeaderSlider | Start -->
                    <div class="header__slider header__slider--bgcolor swiper-container" id="header-slider">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide swiper-slide--bg_image1">
                            </div>
                            <div class="swiper-slide swiper-slide--bg_image2">
                            </div>
                            <div class="swiper-slide swiper-slide--bg_image3">
                            </div>
                        </div>
                    </div>
                    <!-- HeaderSlider | End -->

                    <!-- TopBar | Start -->
                    <div class="header__top-bar">
                        <div class="grid-container">
                            <div class="grid-x border-divider-bottom padding-vertical-1">
                                <div class="cell small-6 hide-for-large">
                                    <div class="header__logo">
                                        <img src="<?= get_theme_file_uri('/static/images/logo-white.png')?>" class="header__logo__img">
                                    </div>
                                </div>
                                <div class="cell auto">
                                    <div class="languaje">
                                        <span class="languaje__select">English</span>
                                        <i class="fal fa-angle-down languaje__icon"></i>
                                        <div class="languaje__options">
                                            <span class="languaje__options__items">Spanish</span>
                                            <span class="languaje__options__items">English</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="cell small-2 medium-1 hide-for-large d-flex-end">
                                    <button class="menu_button" type="button" id="menu_button">
                                        <span class="burger"></span>
                                    </button>
                                </div>
                                <div class="cell large-10 show-for-large">
                                    <nav class="header__nav">
                                        <div class="header__nav__email">
                                            <i class="fal fa-envelope"></i> info@windaid.org
                                        </div>
                                        <ul class="header__nav__menu">
                                            <li>
                                                <a href="#" class="header__nav__menu__link">
                                                    <i class="fab fa-facebook-f"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" class="header__nav__menu__link">
                                                    <i class="fab fa-twitter"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" class="header__nav__menu__link">
                                                    <i class="fab fa-youtube"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" class="header__nav__menu__link">
                                                    <i class="fab fa-instagram"></i>
                                                </a>
                                            </li>
                                        </ul>
                                        <?php
                                            /* MENU SOCIAL
                                            wp_nav_menu( array(
                                                'menu'    => 'menu-social',
                                                'container'         => 'ul',
                                                'menu_class'        => 'header__nav__menu',
                                            ));
                                            */
                                        ?>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- TopBar | End -->

                    <!-- Menu Primary | Start -->
                    <div class="header__menu">
                        <div class="grid-container width-100 height-100">
                            <div class="grid-x align-center-middle width-100 height-100">
                                <div class="cell large-3 show-for-large">
                                    <div class="header__logo">
                                        <img src="<?= get_theme_file_uri('/static/images/logo-white.png')?>" class="header__logo__img">
                                    </div>
                                </div>

                                <!-- Menu Header | Start -->
                                <ul class="menu_primary cell small-12 large-auto">
                                    <?php
                                        $menu = get_menu_custom('menu-header');

                                        foreach ($menu as $item) :
                                            //print_r($item);
                                            //echo $item->title;
                                            echo '<li class="menu_primary__item"><a href="'.$item->url.'" class="menu_primary__link">'.$item->title.'</a></li>';
                                        endforeach;
                                    ?>
                                </ul>
                                <!-- Menu Header | End -->

                                <a href="" class="button_donate">
                                    <i class="fab fa-paypal"></i> Donate
                                </a>

                                <!-- Menu Social | Start -->
                                <ul class="menu_social hide-for-large">
                                    <li class="menu_social__item">
                                        <a href="" class="menu_social__link">
                                            <i class="fab fa-facebook-f"></i>
                                        </a>
                                    </li>
                                    <li class="menu_social__item">
                                        <a href="" class="menu_social__link">
                                            <i class="fab fa-twitter"></i>
                                        </a>
                                    </li>
                                    <li class="menu_social__item">
                                        <a href="" class="menu_social__link">
                                            <i class="fab fa-youtube"></i>
                                        </a>
                                    </li>
                                    <li class="menu_social__item">
                                        <a href="" class="menu_social__link">
                                            <i class="fab fa-instagram"></i>
                                        </a>
                                    </li>
                                </ul>
                                <!-- Menu Social | End -->
                            </div>
                        </div>
                    </div>
                    <!-- Menu Primary | End -->

                    <!-- Caption | Start -->
                    <div class="header__caption">
                        <div class="grid-container">
                            <div class="grid-x">
                                <div class="cell">
                                    <h1 class="header__caption__title">Welcome to windaid institute!</h1>
                                    <p class="header__caption__text">
                                        WindAid Institute provides volunteer projects in Peru fro people taking a gap year, carrer break, returement or time out from education, employment or training.
                                    </p>
                                    <a href="" class="header__caption__button">Apply Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Caption | End -->
                </header>
            </div>
            <!-- Header | End -->

            <!-- Main | Start -->
            <main class="page__main">
