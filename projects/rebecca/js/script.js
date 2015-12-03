$ (document).ready (function () {
    var open = false;
    $ ('.quick_search').on ('click', function () {
        if (open == false) {
            $ ('.dropdown-navbar').addClass ('dropdown-open');
            $ ('.background-black').css ('display', 'block');
            $ ('.background-black').animate ({
                opacity: 0.2
            });
            open = true;
        } else if (open) {
            $ ('.dropdown-navbar').removeClass ('dropdown-open');
            $ ('.background-black').animate ({
                opacity: 0.0
            }, function () {
                $ ('.background-black').css ('display', 'none');
            });
            open = false;
        }
    });


    $ (document).on ('scroll', function () {
        if ($ (this).scrollTop () > 380) {
            $ ('.navbar-container').addClass ('navbar-sticky');
        } else {
            $ ('.navbar-container').removeClass ('navbar-sticky');
        }
    });
});
