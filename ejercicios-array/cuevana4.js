const todaspelis = [
    {
      nombre: "Cars",
      publicada: "30 / 4 / 2006",
      image:
        "https://m.media-amazon.com/images/M/MV5BZWIxMmI5MTItYzZlZC00MzE0LWI5MDktZTMyM2I3ZjMyZDllXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_.jpg",
    },
    {
      nombre: "Dead Silence",
      publicada: "30 / 4 / 2005",
      image:
        "https://m.media-amazon.com/images/M/MV5BMTQwMTIzMTYyOV5BMl5BanBnXkFtZTYwOTI3MTk2._V1_.jpg",
    },
    {
      nombre: "No Country For Old Men",
      publicada: "30 / 4 / 2002",
      image:
        "https://m.media-amazon.com/images/M/MV5BMjA5Njk3MjM4OV5BMl5BanBnXkFtZTcwMTc5MTE1MQ@@._V1_.jpg",
    },
    {
      nombre: "Interstellar",
      publicada: "30 / 2 / 2000",
      image:
        "https://m.media-amazon.com/images/M/MV5BMDFhNzU4MTMtYzZmNS00ZDEzLTg2MjQtYmUzZDA1ZWU4OTkzXkEyXkFqcGdeQXVyNDQ2MTMzODA@._V1_.jpg",
    },
    {
      nombre: "Spider-Man",
      publicada: "20 / 9 / 2018",
      image:
        "https://m.media-amazon.com/images/M/MV5BNGQ5YjE0NWYtNDRmNS00MzEyLTgzOWUtZTdiMDk5ZThiZmZkXkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_FMjpg_UX1000_.jpg",
    },
    {
      nombre: "Back To The Future",
      publicada: "20 | 2 | 1981",
      image:
        "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
    },
    {
      nombre: "The 24 Hour War",
      publicada: "1 | 11 | 2012",
      image:
        "https://m.media-amazon.com/images/M/MV5BYTA1Y2JlNGQtM2UyMi00OTUyLThmYzEtNDIxYWQ3OGMxOWFiXkEyXkFqcGdeQXVyMjg1NjIxODQ@._V1_.jpg",
    },
    {
      nombre: "Nomadland",
      publicada: "23 | 6 | 2019",
      image:
        "https://m.media-amazon.com/images/M/MV5BMDRiZWUxNmItNDU5Yy00ODNmLTk0M2ItZjQzZTA5OTJkZjkyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg",
    },
  ];
  
  function pelis() {
    const list = document.getElementById("film");
    todaspelis.map((item) => {
      const nombre = document.createElement("h1");
      const publicada = document.createElement("p");
      const image = document.createElement("img");
      const listelement = document.createElement("li");
  
      nombre.textContent = item.nombre;
      publicada.textContent = `se estreno el ${item.publicada}`;
      image.src = item.image;
  
      listelement.appendChild(image);
      listelement.appendChild(nombre);
      listelement.appendChild(publicada);
      list.appendChild(listelement);
    });
  }