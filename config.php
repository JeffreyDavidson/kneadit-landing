<?php

return [
    'production' => false,
    'baseUrl' => '',
    'applicationUrl' => getenv('APPLICATION_URL') ?: 'https://app.getkneadit.app',
    'assetVersion' => substr(hash('sha256',
        file_get_contents(__DIR__.'/source/css/marketing.css')
        .file_get_contents(__DIR__.'/source/js/marketing.mjs')
    ), 0, 12),
    'title' => 'KneadIt',
    'description' => 'Business management built for cottage home bakers.',
    'build' => [
        'destination' => 'public',
    ],
    'collections' => [],
];
