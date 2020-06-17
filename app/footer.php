
            </main>
            <!-- Main | End -->

            <!-- Footer | Start -->
            <footer class="page__footer">
                <div class="grid-container">
                    <!-- Form Contact | Start -->
                    <h1 class="page__footer__title">Contact us</h1>
                    <?php echo do_shortcode('[contact-form-7 id="39" autocomplete="off"]'); ?>

                    <!--
                    <form action="" class="form_contact_us" autocomplete="off">

                        <input class="form_contact_us__input" type="text" placeholder="Name" required>
                        <input class="form_contact_us__input" type="email" placeholder="Email" required>
                        <textarea class="form_contact_us__message" name="" required id="" cols="30" rows="3" placeholder="Message"></textarea>
                        <button type="submit" class="button form_contact_us__button" style="width: 100%;">Send</button>
                    </form>
                    -->
                    <!-- Form Contact | End -->

                    <!-- Socials | Start -->
                    <div class="footer_socials">
                        <a href="" class="footer_socials__link">
                            <i class="fab fa-facebook-f"></i>
                        </a>
                        <a href="" class="footer_socials__link">
                            <i class="fab fa-twitter"></i>
                        </a>
                        <a href="" class="footer_socials__link">
                            <i class="fab fa-youtube"></i>
                        </a>
                        <a href="" class="footer_socials__link">
                            <i class="fab fa-instagram"></i>
                        </a>
                    </div>
                    <!-- Socials | End -->
                </div>
            </footer>
            <!-- Footer | End -->

        </div>
        <!-- Page container | End -->
        <?php wp_footer(); ?>
    </body>
</html>
