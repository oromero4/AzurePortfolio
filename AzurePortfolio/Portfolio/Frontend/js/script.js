
    // Get stored count or start at 0
    let visitCount = localStorage.getItem('visitCount') || 0;

    // Increase count
    visitCount++;

    // Store updated count
    localStorage.setItem('visitCount', visitCount);

    // Update the counter on the page
    document.getElementById('visitor-counter').innerText = `Visitors: ${visitCount}`;

