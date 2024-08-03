<!DOCTYPE html>
<html lang="en">

<body>

<h1>Game_Reviews App</h1>

<p>The Game_Reviews app is a web application that allows users to browse and view details of various free-to-play games. It utilizes two APIs: one for fetching a list of games based on categories and one for fetching detailed information about a specific game.</p>

<h2>APIs Used</h2>
<ul>
    <li>
        <strong>Game List API:</strong> <code>https://free-to-play-games-database.p.rapidapi.com/api/games?category={category}</code>
    </li>
    <li>
        <strong>Game Details API:</strong> <code>https://free-to-play-games-database.p.rapidapi.com/api/game?id={id}</code>
    </li>
</ul>

<h2>Installation</h2>
<ol>
    <li>Clone the repository:
        <pre><code>git clone https://github.com/yourusername/Game_Reviews.git
cd Game_Reviews</code></pre>
    </li>
    <li>Install dependencies:
        <pre><code>npm install</code></pre>
    </li>
    <li>Run the application:
        <pre><code>npm start</code></pre>
    </li>
</ol>

<h2>Usage</h2>
<ol>
    <li>Open the application in your browser.</li>
    <li>Click on any category in the navigation bar to view a list of games.</li>
    <li>Click on any game card to view detailed information about the game.</li>
    <li>Use the "Close" button to return to the game list view.</li>
</ol>

</body>
</html>
