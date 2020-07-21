import React from 'react';

import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp} from '@fortawesome/free-solid-svg-icons';
import $ from 'jquery';

/*
    FadeIn when scrolling down
    FadeOut when reaching top
*/
$(window).scroll(function() {
    if ($(this).scrollTop()) {
        $('#scrollup:hidden').stop(true, true).fadeIn();
    } else {
        $('#scrollup').stop(true, true).fadeOut();
    }
});

const ScrollUp = () => {
    return (
        <Button id="scrollup">
            <a href="#about" className="scroll-link">
                <FontAwesomeIcon icon={faAngleUp} />
            </a>
        </Button>
    );
}

export default ScrollUp;