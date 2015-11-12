SC.initialize({
    client_id: 'YOUR_CLIENT_ID'
});

var track_url = 'https://soundcloud.com/niagaramoon/solo-for-two';
SC.oEmbed(track_url, {
    element: document.getElementById('firstTrack')
});
