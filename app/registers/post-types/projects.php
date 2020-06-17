<?php

function projects_post_type() {

    $labels = array(
        'name' => 'Proyectos',
        'singular_name' => 'Proyecto',
        'add_new' => 'Añadir proyecto',
        'all_items' => 'Todos los proyectos',
        'add_new_item' => 'Agregar proyecto',
        'edit_item' => 'Editar',
        'new_item' => 'Nuevo',
        'view_item' => 'Ver proyecto',
        'search_item' => 'Buscar Proyecto',
        'not_found' => 'No se encontró el recurso',
        'not_found_in_trash' => 'No existe el recurso en la papelera',
        'parent_item_colon' => 'Parent Item'
    );
    $args = array(
        'labels' => $labels,
        'public' => true,
        'has_archive' => true,
        'publicly_queryable' => true,
        'query_var' => true,
        'rewrite' => true,
        'capability_type' => 'post',
        'hierarchical' => false,
        'supports' => array(
            'title',
            'editor',
            'excerpt',
            'thumbnail',
            'revisions',
        ),
        'taxonomies' => array('category', 'post_tag'),
        'menu_position' => 5,
        'exclude_from_search' => false
    );
    register_post_type('projects',$args);
}
add_action( 'init', 'projects_post_type' );
