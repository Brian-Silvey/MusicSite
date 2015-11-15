SC.initialize({
    client_id: '75f4709735ae050afcaea64eecd3af51'
});

function getMonth(date) {
    var month = date.substring(5,7);
    switch(month) {
        case "01":
            month = "January";
            break;
        case "02":
            month = "February";
            break;
        case "03":
            month = "March";
            break;
        case "04":
            month = "April";
            break;
        case "05":
            month = "May";
            break;
        case "06":
            month = "June";
            break;
        case "07":
            month = "July";
            break;
        case "08":
            month = "August";
            break;
        case "09":
            month = "September";
            break;
        case "10":
            month = "October";
            break;
        case "11":
            month = "November";
            break;
        case "12":
            month = "December";
            break;
        default:
            ;
        }
        return month;
    }

function getYear(date) {
    var year = date.substring(8,10);
    return "20".concat(year);
    }

function embed() {
    // find all sounds of buskers licensed under 'creative commons share alike'
    SC.get('/users/niagaramoon/tracks', {}).then(function(tracks) {
        var track_url = tracks[0].permalink_url;
        var created_at = tracks[0].created_at;
        var track_month = getMonth(created_at);
        var track_year = getYear(created_at);
        $("#firstDate").append(track_month + " " + track_year);
        SC.oEmbed(track_url, {
            auto_play: false,
            element: document.getElementById('firstTrack') 
        });
        track_url = tracks[1].permalink_url;
        created_at = tracks[1].created_at;
        track_month = getMonth(created_at);
        track_year = getYear(created_at);
        $("#secondDate").append(track_month + " " + track_year);
        SC.oEmbed(track_url, { 
            auto_play: false,
            element: document.getElementById('secondTrack') 
        });
        track_url = tracks[2].permalink_url;
        created_at = tracks[2].created_at;
        track_month = getMonth(created_at);
        track_year = getYear(created_at);
        $("#thirdDate").append(track_month + " " + track_year);
        console.log(tracks[2]);
        SC.oEmbed(track_url, { 
            auto_play: false,
            element: document.getElementById('thirdTrack') 
        });
    });
}

$(document).ready(function(){
    // cache the window object
    $window = $(window);
    embed();

    $('section[data-type="background"]').each(function(){
        // declare the variable to affect the defined data-type
        var $scroll = $(this);

        $(window).scroll(function() {
            // HTML5 proves useful for helping with creating JS functions!
            // also, negative value because we're scrolling upwards                            
            var yPos = -($window.scrollTop() / $scroll.data('speed'));

            // background position
            var coords = '50% '+ yPos + 'px';

            // move the background
            $scroll.css({ backgroundPosition: coords });   
        }); // end window scroll
    });  // end section function
}); // close out script

/* Create HTML5 element for IE */
document.createElement("section");
