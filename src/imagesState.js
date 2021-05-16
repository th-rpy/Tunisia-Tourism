const arrImgs = [
  {
    src: "https://wallpapercave.com/wp/wp2030689.jpg",
    thumbnail: "https://wallpapercave.com/wp/wp2030689.jpg",
    thumbnailWidth: 3200,
    thumbnailHeight: 1800,
    tags: [{ value: "Nature", title: "Nature | Sea | Sun" }],
    caption: "Sfax | Medina",
  },
  {
    src: "https://wallpapercave.com/wp/wp2030696.jpg",
    thumbnail: "https://wallpapercave.com/wp/wp2030696.jpg",
    thumbnailWidth: 3200,
    thumbnailHeight: 1800,
    tags: [{ value: "Nature", title: "Nature | Sea | Sun" }],
    caption: "Sfax | Medina",
  },
  {
    src: "https://wallpapercave.com/wp/wp2030710.jpg",
    thumbnail: "https://wallpapercave.com/wp/wp2030710.jpg",
    thumbnailWidth: 3200,
    thumbnailHeight: 1800,
    tags: [{ value: "Nature", title: "Nature | Sea | Sun" }],
    caption: "Sfax | Medina",
  },
  {
    src: "https://wallpapercave.com/wp/wp2030759.jpg",
    thumbnail: "https://wallpapercave.com/wp/wp2030759.jpg",
    thumbnailWidth: 3200,
    thumbnailHeight: 1800,
    tags: [{ value: "Nature", title: "Nature | Sea | Sun" }],
    caption: "Sfax | Medina",
  },
  {
    src: "https://wallpapercave.com/wp/wp2030762.jpg",
    thumbnail: "https://wallpapercave.com/wp/wp2030762.jpg",
    thumbnailWidth: 3200,
    thumbnailHeight: 1800,
    tags: [{ value: "Nature", title: "Nature | Sea | Sun" }],
    caption: "Sfax | Medina",
  },
  {
    src:
      "https://tickettoadventures.files.wordpress.com/2018/05/fotor_152283390628396.jpg",
    thumbnail:
      "https://tickettoadventures.files.wordpress.com/2018/05/fotor_152283390628396.jpg",
    thumbnailWidth: 3200,
    thumbnailHeight: 1800,
    tags: [{ value: "Nature", title: "Nature | Sea | Sun" }],
    caption: "Sfax | Medina",
  },
  {
    src: "https://wallpapercave.com/wp/wp2030764.jpg",
    thumbnail: "https://wallpapercave.com/wp/wp2030764.jpg",
    thumbnailWidth: 3200,
    thumbnailHeight: 1800,
    tags: [{ value: "Nature", title: "Nature | Sea | Sun" }],
    caption: "Sfax | Medina",
  },
  {
    src:
      "https://tickettoadventures.files.wordpress.com/2018/05/fotor_152234256288838.jpg",
    thumbnail:
      "https://tickettoadventures.files.wordpress.com/2018/05/fotor_152234256288838.jpg",
    thumbnailWidth: 3200,
    thumbnailHeight: 1800,
    tags: [{ value: "Nature", title: "Nature | Sea | Sun" }],
    caption: "Sfax | Medina",
  },
  {
    src:
      "https://tickettoadventures.files.wordpress.com/2018/05/fotor_152313369167964.jpg",
    thumbnail:
      "https://tickettoadventures.files.wordpress.com/2018/05/fotor_152313369167964.jpg",
    thumbnailWidth: 3200,
    thumbnailHeight: 1800,
    tags: [{ value: "Nature", title: "Nature | Sea | Sun" }],
    caption: "Sfax | Medina",
  },
  {
    src:
      "https://tickettoadventures.files.wordpress.com/2018/05/fotor_1523998138339661.jpg",
    thumbnail:
      "https://tickettoadventures.files.wordpress.com/2018/05/fotor_1523998138339661.jpg",
    thumbnailWidth: 3200,
    thumbnailHeight: 1800,
    tags: [{ value: "Nature", title: "Nature | Sea | Sun" }],
    caption: "Sfax | Medina",
  },
  {
    src:
      "https://tickettoadventures.files.wordpress.com/2018/05/fotor_152239984665123.jpg",
    thumbnail:
      "https://tickettoadventures.files.wordpress.com/2018/05/fotor_152239984665123.jpg",
    thumbnailWidth: 3200,
    thumbnailHeight: 1800,
    tags: [{ value: "Nature", title: "Nature | Sea | Sun" }],
    caption: "Sfax | Medina",
  },
  {
    src:
      "https://www.planetware.com/wpimages/2020/02/tunisia-in-pictures-beautiful-places-to-photograph-amphitheatre-el-djem.jpg",
    thumbnail:
      "https://www.planetware.com/wpimages/2020/02/tunisia-in-pictures-beautiful-places-to-photograph-amphitheatre-el-djem.jpg",
    thumbnailWidth: 3200,
    thumbnailHeight: 1800,
    tags: [{ value: "Nature", title: "Nature | Sea | Sun" }],
    caption: "Sfax | Medina",
  },
  {
    src:
      "https://www.planetware.com/wpimages/2020/02/tunisia-in-pictures-beautiful-places-to-photograph-sidi-bou-said.jpg",
    thumbnail:
      "https://www.planetware.com/wpimages/2020/02/tunisia-in-pictures-beautiful-places-to-photograph-sidi-bou-said.jpg",
    thumbnailWidth: 3200,
    thumbnailHeight: 1800,
    tags: [{ value: "Nature", title: "Nature | Sea | Sun" }],
    caption: "Sfax | Medina",
  },
  {
    src:
      "https://www.planetware.com/wpimages/2020/02/tunisia-in-pictures-beautiful-places-to-photograph-matmata-caves.jpg",
    thumbnail:
      "https://www.planetware.com/wpimages/2020/02/tunisia-in-pictures-beautiful-places-to-photograph-matmata-caves.jpg",
    thumbnailWidth: 3200,
    thumbnailHeight: 1800,
    tags: [{ value: "Nature", title: "Nature | Sea | Sun" }],
    caption: "Sfax | Medina",
  },
  {
    src:
      "https://www.planetware.com/wpimages/2020/02/tunisia-in-pictures-beautiful-places-to-photograph-djebel-ressas-mountains.jpg",
    thumbnail:
      "https://www.planetware.com/wpimages/2020/02/tunisia-in-pictures-beautiful-places-to-photograph-djebel-ressas-mountains.jpg",
    thumbnailWidth: 3200,
    thumbnailHeight: 1800,
    tags: [{ value: "Nature", title: "Nature | Sea | Sun" }],
    caption: "Sfax | Medina",
  },
  {
    src:
      "https://www.planetware.com/wpimages/2020/02/tunisia-in-pictures-beautiful-places-to-photograph-bulla-regia.jpg",
    thumbnail:
      "https://www.planetware.com/wpimages/2020/02/tunisia-in-pictures-beautiful-places-to-photograph-bulla-regia.jpg",
    thumbnailWidth: 3200,
    thumbnailHeight: 1800,
    tags: [{ value: "Nature", title: "Nature | Sea | Sun" }],
    caption: "Sfax | Medina",
  },
  {
    src:
      "https://www.planetware.com/wpimages/2020/02/tunisia-in-pictures-beautiful-places-to-photograph-djerba-island.jpg",
    thumbnail:
      "https://www.planetware.com/wpimages/2020/02/tunisia-in-pictures-beautiful-places-to-photograph-djerba-island.jpg",
    thumbnailWidth: 3200,
    thumbnailHeight: 1800,
    tags: [{ value: "Nature", title: "Nature | Sea | Sun" }],
    caption: "Sfax | Medina",
  },
  {
    src:
      "https://www.planetware.com/wpimages/2020/02/tunisia-in-pictures-beautiful-places-to-photograph-the-water-temple.jpg",
    thumbnail:
      "https://www.planetware.com/wpimages/2020/02/tunisia-in-pictures-beautiful-places-to-photograph-the-water-temple.jpg",
    thumbnailWidth: 3200,
    thumbnailHeight: 1800,
    tags: [{ value: "Nature", title: "Nature | Sea | Sun" }],
    caption: "Sfax | Medina",
  },
  {
    src:
      "https://www.planetware.com/wpimages/2020/02/tunisia-in-pictures-beautiful-places-to-photograph-ksar-ouled-soltane.jpg",
    thumbnail:
      "https://www.planetware.com/wpimages/2020/02/tunisia-in-pictures-beautiful-places-to-photograph-ksar-ouled-soltane.jpg",
    thumbnailWidth: 3200,
    thumbnailHeight: 1800,
    tags: [{ value: "Nature", title: "Nature | Sea | Sun" }],
    caption: "Sfax | Medina",
  },
  {
    src:
      "https://www.planetware.com/wpimages/2020/02/tunisia-in-pictures-beautiful-places-to-photograph-cape-angela.jpg",
    thumbnail:
      "https://www.planetware.com/wpimages/2020/02/tunisia-in-pictures-beautiful-places-to-photograph-cape-angela.jpg",
    thumbnailWidth: 3200,
    thumbnailHeight: 1800,
    tags: [{ value: "Nature", title: "Nature | Sea | Sun" }],
    caption: "Sfax | Medina",
  },
  {
    src:
      "https://www.planetware.com/wpimages/2020/02/tunisia-in-pictures-beautiful-places-to-photograph-zaghouan-aqueduct.jpg",
    thumbnail:
      "https://www.planetware.com/wpimages/2020/02/tunisia-in-pictures-beautiful-places-to-photograph-zaghouan-aqueduct.jpg",
    thumbnailWidth: 3200,
    thumbnailHeight: 1800,
    tags: [{ value: "Nature", title: "Nature | Sea | Sun" }],
    caption: "Sfax | Medina",
  },
  {
    src:
      "https://carthagemagazine.com/wp-content/uploads/2020/01/Sousse-Tunisia.jpg",
    thumbnail:
      "https://carthagemagazine.com/wp-content/uploads/2020/01/Sousse-Tunisia.jpg",
    thumbnailWidth: 3200,
    thumbnailHeight: 1800,
    tags: [{ value: "Nature", title: "Nature | Sea | Sun" }],
    caption: "Sfax | Medina",
  },
  {
    src:
      "https://image.shutterstock.com/image-photo/beautiful-sunset-sousse-tunisia-cityscape-600w-560089576.jpg",
    thumbnail:
      "https://image.shutterstock.com/image-photo/beautiful-sunset-sousse-tunisia-cityscape-600w-560089576.jpg",
    thumbnailWidth: 3200,
    thumbnailHeight: 1800,
    tags: [{ value: "Nature", title: "Nature | Sea | Sun" }],
    caption: "Sfax | Medina",
  },
  {
    src:
      "https://p.bookcdn.com/data/Photos/r1536x554/3232/323250/323250406.JPEG",
    thumbnail:
      "https://p.bookcdn.com/data/Photos/r1536x554/3232/323250/323250406.JPEG",
    thumbnailWidth: 3200,
    thumbnailHeight: 1800,
    tags: [{ value: "Nature", title: "Nature | Sea | Sun" }],
    caption: "Sfax | Medina",
  },
  {
    src: "https://wallpapercave.com/wp/wp2030665.jpg",
    thumbnail: "https://wallpapercave.com/wp/wp2030665.jpg",
    thumbnailWidth: 3200,
    thumbnailHeight: 1800,
    tags: [{ value: "Nature", title: "Nature | Sea | Sun" }],
    caption: "Sfax | Medina",
  },
  {
    src: "https://wallpapercave.com/wp/wp2030675.jpg",
    thumbnail: "https://wallpapercave.com/wp/wp2030675.jpg",
    thumbnailWidth: 3200,
    thumbnailHeight: 1800,
    tags: [{ value: "Nature", title: "Nature | Sea | Sun" }],
    caption: "Sfax | Medina",
  },
];

const images = {
  "Tunis 1": arrImgs,
  "Tunis 2": arrImgs,
  "Sfax 1": arrImgs,
  "Sfax 2": arrImgs,
  "Nabeul 1": arrImgs,
  "Nabeul 2": arrImgs,
  Sousse: arrImgs,
  "Ben Arous": arrImgs,
  Ariana: arrImgs,
  Kairouan: arrImgs,
  Bizerte: arrImgs,
  Monastir: arrImgs,
  Mednine: arrImgs,
  Kasserine: arrImgs,
  "Sidi Bouzid": arrImgs,
  Mahdia: arrImgs,
  Jendouba: arrImgs,
  Manouba: arrImgs,
  Gabès: arrImgs,
  Gafsa: arrImgs,
  Beja: arrImgs,
  Kef: arrImgs,
  Siliana: arrImgs,
  Zaghouan: arrImgs,
  Kebili: arrImgs,
  Tataouine: arrImgs,
  Tozeur: arrImgs,
};

const captionStyle = {
  backgroundColor: "rgba(0, 0, 0, 0.8)",
  maxHeight: "240px",
  overflow: "hidden",
  position: "absolute",
  bottom: "0",
  width: "100%",
  color: "white",
  padding: "2px",
  fontSize: "90%",
};

const customTagStyle = {
  wordWrap: "break-word",
  display: "inline-block",
  backgroundColor: "white",
  height: "auto",
  fontSize: "75%",
  fontWeight: "600",
  lineHeight: "1",
  padding: ".2em .6em .3em",
  borderRadius: ".25em",
  color: "black",
  verticalAlign: "baseline",
  margin: "2px",
};

const States = {
  "Tunis 1": 1056,
  "Tunis 2": 1056,
  "Sfax 1": 955,
  "Sfax 2": 955,
  "Nabeul 1": 787,
  "Nabeul 2": 787,
  Sousse: 675,
  "Ben Arous": 631,
  Ariana: 576,
  Kairouan: 570,
  Bizerte: 568,
  Monastir: 548,
  Mednine: 479,
  Kasserine: 439,
  "Sidi Bouzid": 429,
  Mahdia: 410,
  Jendouba: 401,
  Manouba: 379,
  Gabès: 374,
  Gafsa: 337,
  Beja: 303,
  Kef: 243,
  Siliana: 223,
  Zaghouan: 176,
  Kebili: 157,
  Tataouine: 149,
  Tozeur: 107,
};

module.exports = { images, captionStyle, customTagStyle, States };
