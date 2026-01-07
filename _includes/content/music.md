## Music

<div style="text-align: center;">
<div id="soundcloud-tracks" class="project-cards"></div>
<!--<div>
    <iframe class="widget soundcloud playlist" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/soundcloud%253Aplaylists%253A2022564879&color=%2365849f&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=false" style="margin: 1.6em 0 0; overflow: hidden; border: 0"></iframe><div style="font-size: 10px; color: #888888;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/dinir" title="Dinir" target="_blank" style="color: #888888; text-decoration: none;">Dinir</a> · <a href="https://soundcloud.com/dinir/sets/spotlight" title="Try These First" target="_blank" style="color: #888888; text-decoration: none;">Try These First</a></div>
</div>-->
<h3><a href="https://soundcloud.com/dinir" target="_blank">Check out more tracks</a></h3>
</div>

<script>
    async function loadTracks () {
        // Fetch from SC-LatestTracksFinder repository (change YOUR_USERNAME)
        const response = await fetch('https://raw.githubusercontent.com/dinir/SC-LatestTracksFinder/main/tracks.json')
        const data = await response.json()
    
        let html = ''
        data.tracks.forEach(track => {
            html += `
                <article>
                    <h3>${track.title}</h3>
                    <iframe
                        class="widget soundcloud"
                        src="${track.embed_url}"
                        style="margin: 0; overflow: hidden; border: 0"
                    >
                    </iframe>
                </article>
            `
        })
    
        document.getElementById('soundcloud-tracks').innerHTML = html
    }
    
    loadTracks()
</script>
