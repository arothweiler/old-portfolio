$(document).ready(function() {
    var pic = false;
    $("button").click(function() {
        var bild = "bilder/st_2a.png";
        var erstes_bild = "bilder/st_a.png";
        var audio_files = [
        "sounds/beschnitten/bsound1.mp3",
        "sounds/beschnitten/bsound2.mp3",
        "sounds/beschnitten/bsound3.mp3",
        "sounds/beschnitten/bsound4.mp3",
        "sounds/beschnitten/bsound5.mp3"
        ]
        var random_file = audio_files[Math.floor(Math.random() * audio_files.length)];
        var audio = new Audio(random_file);
        document.getElementById("blocherbild").src = bild;
        audio.onended = function() {
            document.getElementById("blocherbild").src = erstes_bild;
        }
        audio.play();
    })
});
