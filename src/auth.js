// auth.js

const clientId = "47c200312a434a9db75bec9b963c3b03"; 
const redirectUri = "http://localhost/FABIOLA/spotify-app-main";
const scopes = [
    "user-read-private",
    "user-read-email",
    "playlist-read-private",
    "playlist-read-collaborative"
];

function getSpotifyAuthUrl() {
    var authUrl = "https://accounts.spotify.com/authorize";
    var url = authUrl +
        "?response_type=code" +
        "&client_id=" + encodeURIComponent(clientId) +
        "&scope=" + encodeURIComponent(scopes.join(" ")) +
        "&redirect_uri=" + encodeURIComponent(redirectUri);
    return url;
}

function redirectToSpotifyLogin() {
    var authUrl = getSpotifyAuthUrl();
    window.location.href = authUrl;
}

async function handleSpotifyRedirect() {
    var params = new URLSearchParams(window.location.search);
    var code = params.get("code");

    if (code) {
        try {
            // Envía el código al servidor para intercambiarlo por un token
            var response = await fetch("/web/token.php?code=" + code);
            var data = await response.json();

            if (data.access_token) {
                console.log("Token de acceso: " + data.access_token);
                localStorage.setItem("spotify_access_token", data.access_token);
                alert("Se ha iniciado sesión exitosamente");

                // Limpia la URL para evitar reutilizar el código
                window.history.replaceState({}, document.title, "/FABIOLA/spotify-app-main");
            } else {
                console.error("Error en el token:", data);
            }
        } catch (error) {
            console.error("Error:", error);
        }
    }
}

// Exporta las funciones para usarlas en el HTML
export { redirectToSpotifyLogin, handleSpotifyRedirect };
