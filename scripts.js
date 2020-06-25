function handleTabChange(tabId) {
    const aboutContent = document.getElementById("about-content");
    const linkContent = document.getElementById("link-content");
    const scheduleContent = document.getElementById("schedule-content");

    switch(tabId) {
        case 1:
            aboutContent.style.display = "block";
            linkContent.style.display = "none";
            scheduleContent.style.display = "none";
            break;
        case 2: 
            aboutContent.style.display = "none";
            linkContent.style.display = "block";
            scheduleContent.style.display = "none";
            break;
        case 3: 
            aboutContent.style.display = "none";
            linkContent.style.display = "none";
            scheduleContent.style.display = "block";
            break;
    }
}