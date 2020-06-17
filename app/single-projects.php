<?php

get_header('secondary');

if( have_posts()) : the_post();

    get_template_part('template-parts/pages/general');
endif;

get_footer();

