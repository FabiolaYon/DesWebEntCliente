<?php

header('Content-Type: application/json');

// Obtén el código de la URL
if (isset($_GET['code'])) {
    $code = $_GET['code'];
} else {
    $code = null;
}

if (!$code) {
    http_response_code(400);
    echo json_encode(["error" => "Falta el parámetro 'code'"]);
    exit;
}

// Configuración de la aplicación Spotify
$clientId = ''; //Client ID
$clientSecret = ''; // Client Secret
$redirectUri = 'http://localhost'; // Redirect URI

// Datos para la solicitud de token
$data = [
    'grant_type' => 'authorization_code',
    'code' => $code,
    'redirect_uri' => $redirectUri,
    'client_id' => $clientId,
    'client_secret' => $clientSecret
];

// Configuración de la solicitud HTTP
$options = [
    'http' => [
        'header'  => "Content-Type: application/x-www-form-urlencoded\r\n",
        'method'  => 'POST',
        'content' => http_build_query($data)
    ]
];

// Realiza la solicitud a Spotify
$context = stream_context_create($options);
$response = file_get_contents('https://accounts.spotify.com/api/token', false, $context);

if ($response === false) {
    http_response_code(500);
    echo json_encode(["error" => "Error al solicitar el token"]);
    exit;
}

// Devuelve la respuesta de Spotify
echo $response;
?>
