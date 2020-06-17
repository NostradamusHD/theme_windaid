<section class="section section_article">
    <div class="grid-container">
        <div class="grid-x grid-margin-x">
            <!-- Single | Start -->
            <div class="cell large-9">
                <div class="single-content">
                    <?php
                        the_content();
                        global $project_id;
                        $project_id = $id;
                    ?>
                    <!-- SLIDER
                    <div class="article__slider swiper-container" id="article_slider">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide">
                                <img src="<?/*= get_theme_file_uri('/static/images/impact-image-2.png')*/?>" alt="" class="image_cover">
                                <a href="<?/*= get_theme_file_uri('/static/images/impact-image-2.png') */?>" data-fancybox="images" class="slide_search_plus">
                                    <i class="fal fa-search-plus"></i>
                                </a>
                            </div>
                            <div class="swiper-slide">
                                <img src="<?/*= get_theme_file_uri('/static/images/impact-image-3.png')*/?>" alt="" class="image_cover">
                                <a href="<?/*= get_theme_file_uri('/static/images/impact-image-3.png') */?>" data-fancybox="images" class="slide_search_plus">
                                    <i class="fal fa-search-plus"></i>
                                </a>
                            </div>
                            <div class="swiper-slide">
                                <img src="<?/*= get_theme_file_uri('/static/images/impact-image-4.png')*/?>" alt="" class="image_cover">
                                <a href="<?/*= get_theme_file_uri('/static/images/impact-image-4.png') */?>" data-fancybox="images" class="slide_search_plus">
                                    <i class="fal fa-search-plus"></i>
                                </a>
                            </div>
                        </div>
                        <button class="article__slider__button left" id="slider_left">
                            <i class="fal fa-angle-left"></i>
                        </button>
                        <button class="article__slider__button right" id="slider_right">
                            <i class="fal fa-angle-right"></i>
                        </button>
                    </div>-->
                </div>
            </div>
            <!-- Single | End -->

            <!-- Aside | Start -->
            <div class="cell large-3">
                <aside class="aside">
                    <h2 class="aside__title">
                        Follow us on Twitter
                    </h2>
                    <div class="aside__twitter">
                        <a class="twitter-timeline"
                           href="https://twitter.com/TwitterDev"
                           data-width="100%"
                           data-height="100%">
                            Tweets by @TwitterDev
                        </a>
                    </div>
                    <h2 class="aside__title">
                        Other Projects
                    </h2>
                    <ul class="recommended">
                        <?php
                            $args = array('post_type' => 'projects', 'post_per_page' => 4);
                            $loop = new WP_Query($args);

                            if($loop->have_posts()):
                                while ($loop->have_posts()) : $loop->the_post();
                                    if($project_id !== $id):
                        ?>
                                        <li class="recommended__item">
                                            <span class="recommended__icon">
                                                <i class="fal fa-arrow-right"></i>
                                            </span>
                                            <a href="<?= the_permalink(); ?>" class="recommended__link">
                                                <?= the_title()?>
                                            </a>
                                        </li>
                        <?php
                                    endif;
                                 endwhile;
                            else:
                        ?>
                            <p>No results</p>
                        <?php
                            endif;
                        ?>
                    </ul>
                </aside>
            </div>
            <!-- Aside | End -->
        </div>
    </div>
</section>
