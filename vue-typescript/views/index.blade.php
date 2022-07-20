<div id="app"></div>

@php
$manifest = file_get_contents(getPath("/public/vite/manifest.json"));
$manifest = json_decode($manifest, true);
@endphp

@foreach ($manifest as $file)
    <script src='{{ publicPath("vite/" . $file["file"]) }}'></script>
@endforeach