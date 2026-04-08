const API_KEY = "AIzaSyAZL9gU6nAHLLy4RA00T8LdqjwAddZUPgQ";
const CHANNEL_ID = "UCtsoONeSvOP-RznVk0iYOGw";

async function loadVideos() {
  const res = await fetch(
    `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=6`
  );

  const data = await res.json();
  const container = document.getElementById("videos");

  data.items.forEach(video => {
    if(video.id.videoId){
      container.innerHTML += `
        <div class="video">
          <iframe width="300" height="200"
            src="https://www.youtube.com/embed/${video.id.videoId}">
          </iframe>
          <p>${video.snippet.title}</p>
        </div>
      `;
    }
  });
}

loadVideos();
