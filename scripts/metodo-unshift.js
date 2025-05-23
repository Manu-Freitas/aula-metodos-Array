let playlist = ['Funk', 'Hip-Hop', 'Pop'];

console.log("Antes do unshift");
console.table(playlist);

// Adicionando um novo estilo na playlist
playlist.unshift = ("Rock");

console.log("Depois do unshift:");
console.table(playlist);

