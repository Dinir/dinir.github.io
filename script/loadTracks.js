// noinspection JSUnresolvedReference,ExceptionCaughtLocallyJS

async function loadTracks () {
  try {
    // Fetch from SC-LatestTracksFinder repository
    // const response = await fetch('https://cdn.jsdelivr.net/gh/dinir/SC-LatestTracksFinder@main/tracks.json')
    const response = await fetch('https://raw.githubusercontent.com/Dinir/SC-LatestTracksFinder/refs/heads/main/tracks.json')

    if (!response.ok) {
      throw new Error('Failed to load tracks')
    }

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
  } catch (error) {
    document.getElementById('soundcloud-tracks').innerHTML = '<p>Failed to load tracks. Please try again later.</p>'
    console.error('Error loading tracks:', error)
  }
}