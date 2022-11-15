$( '#rst_testimonial_theme_style').on('change', function() {

            if($(this).val() == ''){

                $("#grid_theme_field").css('display', 'none');
                $("#slider_theme_field").css('display', 'none');

            }

            if($(this).val() == 1){

                $("#grid_theme_field").css('display', 'none');
                $("#slider_theme_field").css('display', '');

            }

            if($(this).val() == 2){
                $("#grid_theme_field").css('display', '');
                $("#slider_theme_field").css('display', 'none');
            }
        });
