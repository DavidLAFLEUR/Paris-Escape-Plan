// function filtre card
function admSelectCheck(nameSelect) {
  // si  il ya selection
  var preElements = document.getElementsByClassName("prettyprint");
  if (nameSelect) {
    if (nameSelect.value == "start") {
      // reaparition des article
      for (var i = 0; i < preElements.length; i++) {
        preElements[i].style.display = "block";
      }
    } else {
      for (var i = 0; i < preElements.length; i++) {
        //si la class prettyprint contiend la valeur du select diplsay none ou block
        preElements[i].style.display = preElements[i].classList.contains(
          nameSelect.value
        )
          ? "block"
          : "none";
      }
    }
  }
}

const gmarkers1 = [];
const infowindow = new google.maps.InfoWindow({
  content: "",
});

//NATURE -->

const vincenne =
  "<div style='float:left'><img class ='imgCarte' src='../ImgNature/vincenne.jpg'></div><div style='float:right; padding: 10px;'><b>Bois de vincenne</b><br/>Parc situé dans l'est de Paris. <br/> Ville, Paris</div>";
const lourcq =
  "<div style='float:left'><img class ='imgCarte' src='../ImgNature/canal.jpg'></div><div style='float:right; padding: 10px;'><b>Canal de Lourcq</b><br/>Le canal de l’Ourcq est un canal du Bassin parisien <br/> Ville, Paris</div>";
const maisonJardinage =
  "<div style='float:left'><img class ='imgCarte' src='../ImgNature/jardinage.jpg'></div><div style='float:right; padding: 10px;'><b>Maison du jardinage</b><br/>Jardins partagés, jardins pédagogiques<br/>Permis de végétaliser, jardins solidaires<br/> Ville, Paris</div>";
const mars =
  "<div style='float:left'><img class ='imgCarte' src='../ImgNature/champsDeMars.jpg'></div><div style='float:right; padding: 10px;'><b>Champs de Mars</b><br/>Un vaste jardin public, entièrement ouvert  <br/> Ville, Paris</div>";
const jardinLuxembourg =
  "<div style='float:left'><img  class ='imgCarte' src='../ImgNature/luxembourf.jpg'></div><div style='float:right; padding: 10px;'><b>Jardin du Luxembourg</b><br/>Horaire de fermeture du Jardin du Luxembourg. <br/>Pendant la durée du couvre-feu à 18h, <br/>l'heure de fermeture du jardin est maintenue à 17h30.<br/> Ville, Paris</div>";
const boulogne =
  "<div style='float:left'><img  class ='imgCarte' src='../ImgNature/boulogne'></div><div style='float:right; padding: 10px;'><b>Bois de Boulogne</b><br/>Le bois de Boulogne est une étendue boisée <br/>située dans le 16 arrondissement <br/>Couvrant une superficie de 846 hectares .<br/> Ville, Paris</div>";

//DETENTE ->.

const dansLeNoir =
  "<div style='float:left'><img class='imgCarte' src='../ImgDetente/dansLeNoir.jpg'></div><div style='float:right; padding: 10px;'><b>Séance dans le Noir</b><br/> Un lieu insolite, au cœur de Paris, loin du rythme trépidant de la ville. <br/>Les massages sont faits sur-mesure  <br/> les praticiens s'adaptent constamment aux demandes des clients <br/> Ville, Paris</div>";
const bulleFLottante =
  "<div style='float:left'><img class='imgCarte' src='../ImgDetente/flottaison.jpg'></div><div style='float:right; padding: 10px;'><b>Bulle Flottante</b><br/>Relaxation, méditation, bien-êtreTentez l'expérience!<br/> Déconnectez-vous, récupérez physiquement  <br/>pour découvrir la fabuleuse bulle flottante<br/> Ville, Paris</div>";
const barZen =
  "<div style='float:left'><img class ='imgCarte' src='../ImgDetente/sieste.jpg'></div><div style='float:right; padding: 10px;'><b>Bar Zen</b><br/> Matinée de folie, coup de barre après manger  <br/> et le sentiment que l’on ne passera jamais l’après-midi <br/> si on ne ferme pas les yeux 10 min, ça vous parle ?  <br/> Déconnectez-vous. Libérez votre esprit. <br/> Ville, Paris</div>";
const brocante =
  "<div style='float:left'><img class ='imgCarte' src='../ImgDetente/brocante.jpg'></div><div style='float:right; padding: 10px;'><b>Brocante</b><br/>Brocantes, vide-greniers et marchés éphémères<br/> Paris vous donnent envie ?<br/> Ville, Paris</div>";
const jacuzzi =
  "<div style='float:left'><img class ='imgCarte' src='../ImgDetente/jacuzzi.jpg'></div><div style='float:right; padding: 10px;'><b>Jacuzzi</b><br/>Un jacuzzi privatif, un sauna rien que pour vous,<br/> un bar privé avec réfrigérateur et un lit de plage, <br/>le tout dans l’ambiance de votre choix. <br/> Ville, Paris</div>";

// FOOD ->

const piment =
  "<div style='float:left'><img class ='imgCarte' src='../ImgFood/food1.jpg'></div><div style='float:right; padding: 10px;'><b>Trois fois plus de piments</b><br/> Avis aux palais attirés par la surenchère <br/> de sensations épicées . <br/> Ville, Paris</div>";
const Luz =
  "<div style='float:left'><img class ='imgCarte' src='../ImgFood/food2.jpg''></div><div style='float:right; padding: 10px;'><b>Luz verde</b><br/> « Top Chef » mène à tout,  <br/>même aux tacos ! Millésime 2017, <br/>Alexis Delassaux s’est lancé à donf dans les galettes de maïs, <br/> - du lundi au samedi - <br/> Ville, Paris</div>";
const paul =
  "<div style='float:left'><img class ='imgCarte' src='../ImgFood/food3.jpg''></div><div style='float:right; padding: 10px;'><b>Le 6 Paul Bert</b><br/>Après avoir vu défiler des chefs prometteurs, <br/> a cave à manger du king de la rue Paul-Bert .<br/> Ville, Paris</div>";
const grille =
  "<div style='float:left'><img class ='imgCarte' src='../ImgFood/food4.jpg''></div><div style='float:right; padding: 10px;'><b>Avec leur grillé</b><br/> Fred Peneau et Marie Carcassone   <br/>redorent clairement le blason <br/>du salade-tomate- oignon  <br/> Ville, Paris</div>";
const adar =
  "<div style='float:left'><img class ='imgCarte' src='../ImgFood/resto.jpeg''></div><div style='float:right; padding: 10px;'><b>Restaurant Adar</b><br/> Le Passage des Panoramas, nouveau <br/>passage obligé pour les jeunes chefs stars ?  <br/>Ultime bon plan :la maison fait <br/>aussi des sandwichs à emporter. <br/> Ville, Paris</div>";
const sezame =
  "<div style='float:left'><img class ='imgCarte' src='../ImgFood/sezame.jpeg''></div><div style='float:right; padding: 10px;'><b>Restaurant sezame</b><br/> Nous prenons les mesures nécessaires <br/>afin de maintenir la livraison de vos plats préférés <br/>dans les meilleures conditions de protection<br/>pour vous <br/> Ville, Paris</div>";

//CULTURE -->

const parfum =
  "<div style='float:left'><img class ='imgCarte' src='../ImgCulture/museeParfum.jpg'></div><div style='float:right; padding: 10px;'><b>Musée Parfum</b><br/> Inédit à Paris, le Musée du Parfum  <br/>propose un concept muséal unique et expose de manière didactique toutes <br/> les étapes  <br/> qui donnent vie à ce mythique objet de luxe et objet de notre quotidien . <br/> Ville, Paris</div>";
const gallery =
  "<div style='float:left'><img class ='imgCarte' src='../ImgCulture/muséeCulture.jpg'></div><div style='float:right; padding: 10px;'><b>Expostion</b><br/> Pour la première exposition   <br/> orchestrée dans ce lieu de 800 m2 <br/> Ville, Paris</div>";
const streetArt =
  "<div style='float:left'><img class ='imgCarte' src='../ImgCulture/streetArt.jpg'></div><div style='float:right; padding: 10px;'><b>Street Art Exposition</b><br/>Au sud de Paris, le 13e arrondissement <br/> regorge de fresques de street art. <br/> Ville, Paris</div>";
const jardinDesPlantes =
  "<div style='float:left'><img class ='imgCarte' src='../ImgCulture/jardinDesPlante.jpg'></div><div style='float:right; padding: 10px;'><b>Jardin des Plantes </b><br/> Jardin alpin, écologique, roseraie,   <br/>Partez à la découverte des onze jardins<br/> qui composent un Jardin des Plantes unique  <br/> Ville, Paris</div>";
const sculpture =
  "<div style='float:left'><img class ='imgCarte' src='../ImgCulture/chatParis.jpeg'></div><div style='float:right; padding: 10px;'><b>Chat de Geluck</b><br/>En ces temps de crise sanitaire<br/>voici une expo XXL en plein air gratuite de surcroît <br/>qui devrait vous offrir un grand bol d’art frais. <br/> Ville, Paris</div>";
const biblio =
  "<div style='float:left'><img class ='imgCarte' src='../ImgCulture/bilbio.jpg'></div><div style='float:right; padding: 10px;'><b>Bibliothèque Historique</b><br/>La Bibliothèque historique <br/>de la ville d paris est une bibliothèque publique<br/>spécialisée dans l'histoire de Paris  <br/> Ville, Paris</div>";

// Our markers

const markers1 = [
  //Nature
  [vincenne, "Bois de vincenne", 48.8403499, 2.4363478, "nature"],
  [lourcq, "Canal de Lourcq", 48.935773, 2.3580232, "nature"],
  [maisonJardinage, "Maison Du Jardinage", 48.8362891, 2.3829078, "nature"],
  [mars, "Champs de Mars,", 48.8578883, 2.2974414, "nature"],
  [jardinLuxembourg, "Jardin du Luxembourg", 48.84687, 2.33717, "nature"],
  [boulogne, "Bois de Boulogne", 48.8640928, 2.2482579, "nature"],

  //detente
  [dansLeNoir, "Dans le noir ", 48.8664533, 2.3442977, "detente"],
  [
    bulleFLottante,
    "Bulle Flottante",
    48.84931182861328,
    2.36824631690979,
    "detente",
  ],
  [barZen, "Bar Zen", 48.8677184, 2.3353527, "detente"],
  [jacuzzi, "Jacuzzi", 48.896333, 2.291332, "detente"],
  [brocante, "Brocante", 48.848758697509766, 2.3785629272460938, "detente"],

  //food
  [piment, "Trois fois plus de piments", 48.8672804, 2.3545663, "food"],
  [Luz, "Luz verde", 48.8803935, 2.3376028, "food"],
  [paul, "Le 6 Paul Bert", 48.8511962890625, 2.3844802379608154, "food"],
  [grille, "Le Grillé", 48.86887741088867, 2.3358967304229736, "food"],
  [adar, "Adar", 48.87087631225586, 2.341618776321411, "food"],
  [sezame, "Sezame", 48.945194244384766, 2.3518362045288086, "food"],

  //culture
  [parfum, "Musée du Parfum", 48.8714648, 2.3302801, "culturel"],
  [gallery, "Exposition", 48.84931182861328, 2.36824631690979, "culturel"],
  [streetArt, "Street Art", 48.829408, 2.3620275, "culturel"],
  [
    jardinDesPlantes,
    "jardin Des Plantes",
    48.8447151184082,
    2.356781005859375,
    "culturel",
  ],
  [
    sculpture,
    "Sculpture Géante",
    48.86857604980469,
    2.3112874031066895,
    "culturel",
  ],
  [biblio, "Bibliotheque", 48.856529, 2.360995, "culturel"],
];

/**
 * Function to init map
 */

function initialize() {
  const center = new google.maps.LatLng(48.85837, 2.294481); // centrage de la map
  let mapOptions = {
    zoom: 11,
    center: center,
    mapTypeId: google.maps.MapTypeId.TERRAIN, // mode terrain ou salelitte
  };
  // appel de la function addMarker et boucle sur tableau pour recuper info tableau
  map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
  for (i = 0; i < markers1.length; i++) {
    addMarker(markers1[i]);
  }
}

// marker

/**
 * Function qui ajoute les marker dans la map
 */

function addMarker(marker) {
  const category = marker[4]; //le theme
  const title = marker[1]; //le titre
  const pos = new google.maps.LatLng(marker[2], marker[3]); // latitute et longitude
  const content = marker[0]; //varible qui contient les info en html
  // creation d'un marker avec toutes les info
  marker1 = new google.maps.Marker({
    title: title,
    position: pos,
    category: category,
    map: map,
  });
  gmarkers1.push(marker1);
  // push dans un tableau propre l'object marker1 afin de pouvoir travailler dessus

  //Click sur marker
  google.maps.event.addListener(
    marker1,
    "click",
    (function (marker1, content) {
      return function () {
        infowindow.setContent(content); // infowindow pour afficher la bulle
        infowindow.open(map, marker1);
        map.panTo(this.getPosition());
        map.setZoom(15); // niveau du zoom
        map.setMapTypeId("terrain"); // mode
      };
    })(marker1, content)
  );
}

/**
 * filtre
 */

filterMarkers = function (category) {

  let bounds = new google.maps.LatLngBounds();
  // boucle sur tableau  gmarkers1
  for (i = 0; i < gmarkers1.length; i++) {
    marker = gmarkers1[i];

    //
    if (marker.category === category || category.length === 0) {
      marker.setVisible(true); // affichage marker
      bounds.extend(marker.getPosition()); // recup position
      map.setZoom(12); // niveau du zoom
      map.setMapTypeId("terrain"); // plan terrain ou satelitte
    } else if (category === "start") {
      // reset affichage  si aucune selection
      marker.setVisible(true); // affichage marker
      bounds.extend(marker.getPosition());
      map.setZoom(12);
      map.setMapTypeId("terrain");
    }
    // si la categorie ne match pas passage en visible(false)
    else {
      marker.setVisible(false);
      map.setZoom(12);
    }
    map.fitBounds(bounds);
  }
};

// appel de la function initalisation de la map
initialize();

// animation css selection element
const titre = document.querySelector("h1");
const txt = document.querySelector(".pHome");
const btn = document.querySelector("#btnHome");
const imgLaptop = document.querySelector(".laptop");
const allItems = document.querySelectorAll("li");

// regle css propre a la librairy GSAP
const TL1 = new TimelineMax({ paused: true });
TL1.from(titre, 1, { y: -100, opacity: 0 })
  .from(txt, 1, { opacity: 0 }, "-=0.4")
  .from(btn, 1, { opacity: 0 }, "-=0.5")
  .from(imgLaptop, 1, { x: 100, opacity: 0 }, "-=0.5")
  .staggerFrom(allItems, 1, { y: -50, opacity: 0 }, 0.1, "-=1");

TL1.play();
