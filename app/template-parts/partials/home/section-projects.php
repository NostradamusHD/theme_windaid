<!-- Section Projects | Start -->
<section class="section section_projects">
    <h2 class="section__title">Our Projects</h2>
    <div class="grid-container">
        <div class="grid-x margin-bottom-2">
            <div class="cell large-6">
                <figure class="section_projects__image">
                    <img src="<?= get_theme_file_uri('/static/images/home-image-4.png')?>" class="image_cover">
                </figure>
            </div>
            <div class="cell large-6">
                <div class="section_projects__text section_projects__text--gray">
                    <h1 class="h3">Lorem Ispun was made popular</h1>
                    <p class="paragrah">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries
                    </p>
                    <a href="" class="button button_theme">Read more</a>
                </div>
            </div>
        </div>
        <div class="grid-x grid-margin-x">
            <?php
                $args = array('post_type' => 'projects', 'post_per_page' => 3);
                $loop = new WP_Query($args);

                if($loop->have_posts()):
                    while ($loop->have_posts()) : $loop->the_post();
            ?>
                <div class="cell large-4">
                    <div class="section_projects__card">
                        <div class="section_projects__card__figure">
                            <?php if ( has_post_thumbnail() ):
                                the_post_thumbnail();
                            ?>

                            <?php endif;?>
                        </div>
                        <div class="section_projects__card__content">
                            <h1 class="h4"><?= the_title(); ?></h1>
                            <p class="text">
                                <?= the_excerpt();?>
                            </p>
                            <a href="<?= the_permalink(); ?>" class="button button_theme">Read more</a>
                        </div>
                    </div>
                </div>
            <?php
                    endwhile;
                endif;

            ?>
        </div>
    </div>
</section>
<!-- Section Projects | End -->
