SC.initialize({
    client_id: '75f4709735ae050afcaea64eecd3af51'
});

function embed() {
    // find all sounds of buskers licensed under 'creative commons share alike'
    SC.get('/users/niagaramoon/tracks', {}).then(function(tracks) {
        console.log(tracks);
        var track_url = tracks[0].permalink_url;
        console.log(track_url);
        SC.oEmbed(track_url, { 
            auto_play: true,
            element: document.getElementById('firstTrack') 
        });
        track_url = tracks[1].permalink_url;
        console.log(track_url);
        SC.oEmbed(track_url, { 
            auto_play: true,
            element: document.getElementById('secondTrack') 
        });
        var track_url = tracks[2].permalink_url;
        console.log(track_url);
        SC.oEmbed(track_url, { 
            auto_play: true,
            element: document.getElementById('thirdTrack') 
        });
    });
}

$(document).ready(
    function() {
        embed();
    }
)
