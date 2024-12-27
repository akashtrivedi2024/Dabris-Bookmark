document.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll(".tab-button");
    const sections = document.querySelectorAll(".bookmark-section");
    const themeSwitcher = document.getElementById("themeSwitcher");
    const analytics = {
        activeTabs: 0,
        bookmarks: 0,
        timeSpent: 0,
    };

    // Tab Navigation
    tabs.forEach((tab, index) => {
        tab.addEventListener("click", () => {
            document.querySelector(".tab-button.active").classList.remove("active");
            document.querySelector(".bookmark-section.active").classList.remove("active");

            tab.classList.add("active");
            sections[index].classList.add("active");
        });
    });

    // Theme Switching
    themeSwitcher.addEventListener("click", () => {
        document.body.classList.toggle("dark-theme");
    });

    // Search Web
    window.searchWeb = () => {
        const query = document.getElementById("searchBox").value;
        if (query) {
            window.open(`https://www.google.com/search?q=${encodeURIComponent(query)}`, "_blank");
        }
    };

    // Voice Search Placeholder
    window.voiceSearch = () => {
        alert("Voice search coming soon!");
    };

    // Assistant
    window.askAssistant = () => {
        const input = document.getElementById("assistantInput").value;
        const response = document.getElementById("assistantResponse");

        if (input.toLowerCase().includes("help")) {
            response.innerText = "How can I assist you further?";
        } else {
            response.innerText = "Processing your request...";
        }
    };

    // Analytics Update
    setInterval(() => {
        analytics.timeSpent += 1;
        document.getElementById("activeTabs").innerText = analytics.activeTabs;
        document.getElementById("bookmarkCount").innerText = analytics.bookmarks;
        document.getElementById("timeSpent").innerText = analytics.timeSpent;
    }, 60000);
});
