document.addEventListener('DOMContentLoaded', function() {

    const videoData = [
      {
        "url": "https://www.youtube.com/embed/pNEaKPWa_58",
        "title": "FAQ: Interview",
        "description": "Lying in the SSB interview Here's why it's a terrible idea?",
        "duration": "25sec",
        "image":"faq.webp",
        "type":"faq"
      },
      {
        "url": "https://www.youtube.com/embed/VlTHgrOTDgo",
        "title": "Top 5 Mistakes in PPDT Test",
        "description": "Top 5 Mistakes in SSB PPDT Test & How to Overcome Them | Essential Tips for Success",
        "duration": "2:30 min",
        "image":"faq2.webp",
        "type":"ppdt"
      },
      // {
      //   "url": "https://www.youtube.com/embed/mn-kkuS_GGA",
      //   "title": "Hari Hari | DAKAIT X Aniket Raturi X 2FISTD | Nature Visuals",
      //   "description": "Description about the following video here..",
      //   "duration": "5min",
      //   "image":"image2.webp",
      //   "type":"srt"
      // },
      // {
      //   "url": "https://www.youtube.com/embed/mn-kkuS_GGA",
      //   "title": "Hari Hari | DAKAIT X Aniket Raturi X 2FISTD | Nature Visuals",
      //   "description": "Description about the following video here..",
      //   "duration": "5min",
      //   "image":"image2.webp",
      //   "type":"gd"
      // },
      // {
      //   "url": "https://www.youtube.com/embed/mn-kkuS_GGA",
      //   "title": "Hari Hari | DAKAIT X Aniket Raturi X 2FISTD | Nature Visuals",
      //   "description": "Description about the following video here..",
      //   "duration": "5min",
      //   "image":"image2.webp",
      //   "type":"wat"
      // },
      // {
      //   "url": "https://www.youtube.com/embed/mn-kkuS_GGA",
      //   "title": "Hari Hari | DAKAIT X Aniket Raturi X 2FISTD | Nature Visuals",
      //   "description": "Description about the following video here..",
      //   "duration": "5min",
      //   "image":"image2.webp",
      //   "type":"ppdt"
      // },
      // {
      //   "url": "https://www.youtube.com/embed/mn-kkuS_GGA",
      //   "title": "Hari Hari | DAKAIT X Aniket Raturi X 2FISTD | Nature Visuals",
      //   "description": "Description about the following video here..",
      //   "duration": "5min",
      //   "image":"image2.webp",
      //   "type":"wat"
      // },
      // {
      //   "url": "https://www.youtube.com/embed/mn-kkuS_GGA",
      //   "title": "Hari Hari | DAKAIT X Aniket Raturi X 2FISTD | Nature Visuals",
      //   "description": "Description about the following video here..",
      //   "duration": "5min",
      //   "image":"image2.webp",
      //   "type":"srt"
      // },
      // {
      //   "url": "https://www.youtube.com/embed/mn-kkuS_GGA",
      //   "title": "Hari Hari | DAKAIT X Aniket Raturi X 2FISTD | Nature Visuals",
      //   "description": "Description about the following video here..",
      //   "duration": "5min",
      //   "image":"image2.webp",
      //   "type":"ppdt"
      // }
      // Add more video objects here following the same format
    ];
  
    function setYoutubeVideo(url) {
      const embedElement = document.querySelector(".video-container");
      embedElement.innerHTML = `<iframe id="youtube-video" width="560" height="315" src="${url}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;
    }
  
    function generateVideoList() {
    ppdt();
    srt();
    wat();
    gd();
    }
    function generateVideoList() {
      
      videoData.forEach(video => {
        var videoListElement = document.querySelector(`.${video.type}ListContainer`);
        // videoListElement.innerHTML = ""; // Clear existing content
        const listItem = `
          <div class="listItem">
            <div class="listLeft">
              <img class="thumbnail" src="./utils/images/${video.image}" alt="${video.title} Thumbnail" />
            </div>
            <div class="listRight">
              <p class="title">${video.title}</p>
              <p class="description">${video.description}</p>
              <p class="status">${video.duration}</p>
            </div>
          </div>
        `;
    
        const listItemElement = document.createElement('div');
        listItemElement.classList.add("listItem");
        listItemElement.innerHTML = listItem; // Set innerHTML using the template literal
    
        listItemElement.addEventListener("click", () => {
          setYoutubeVideo(video.url);
          // Scroll to top smoothly
          window.scrollTo({ top: 0, behavior: 'smooth' });
        });      videoListElement.appendChild(listItemElement);
      });
    }
    
    // Call the function to generate the list on page load
    generateVideoList();
    setYoutubeVideo("https://www.youtube.com/embed/VlTHgrOTDgo")
  
  });