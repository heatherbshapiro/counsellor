$(document).ready(function () {

    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        } else {
            //x.innerHTML = "Geolocation is not supported by this browser.";
        }
    }

    function showPosition(position) {
        // got lat and lang. Send to the service
        console.log("Coordds"+data)
        var data = position.coords;
        /*
        $.ajax({
            url: "/services",
            data: data,
            success: onDataResult,
            dataType: 'json'
        });
        */
        
    }
    
    function onDataResult(result)
    {
        // add to the map and the page
    }

    function toggle(itemClass) {
        var items = $(itemClass);
        items.each(function (index, value) {
            if ($(this).hasClass('showing')) {
                $(this).removeClass('showing').addClass('hiding');
            } else {
                $(this).removeClass('hiding').addClass('showing');
            }

        })
    }
    
    /*
    Get position 
    */ 
    getLocation();
    
    $('.financial').click(function (e) {
        toggle('.financial-item');

    })

    $('.budget').click(function (e) {
        toggle('.budget-item');
    })

    $('.housing').click(function (e) {
        toggle('.housing-item');
    })
    $('.signin').click(function (e) {
        toggle('.signin-item');
    })

})