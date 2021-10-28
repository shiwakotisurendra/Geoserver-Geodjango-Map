  //initilize map
  var map = L.map("map").setView([28.3949, 84.124], 7);

  var osm = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      "&copy; <a href= 'https://opensteetmap.org/copyright'> Openstreet map</a> contributors",
  });
  osm.addTo(map);

  //   var marker = L.marker([28.3949, 84.124], {
  //     draggable: true,
  //     title: "This is hover test for marker",
  //   })
  //     .addTo(map)
  //     .bindPopup(
  //       "<h1>Nepal </h1><img src='{% static 'ifgi.jpg' %}' />"
  //     )
  //     .openPopup();

  var OpenstreetMap_CH = L.tileLayer(
    "https://tile.osm.ch/Switzeland/{z}/{x}/{y}.png",
    {
      maxZoom: 10,
      attribution:
        "&copy; <a href= 'https://opensteetmap.org/copyright'> Openstreet map</a> contributors",
      bounds: [[45, 5][(48, 11)]],
    }
  );

  var Esri_WorldImagery = L.tileLayer(
    "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
    {
      attribution:
        "Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community",
    }
  );

  //darklayer.addTo(map);

  var CyclOSM = L.tileLayer(
    "https://{s}.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png",
    {
      maxZoom: 20,
      attribution:
        '<a href="https://github.com/cyclosm/cyclosm-cartocss-style/releases" title="CyclOSM - Open Bicycle render">CyclOSM</a> | Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }
  );

  //watercolor.addTo(map);

  var nightearth = L.tileLayer(
    "https://map1.vis.earthdata.nasa.gov/wmts-webmerc/VIIRS_CityLights_2012/default/{time}/{tilematrixset}{maxZoom}/{z}/{y}/{x}.{format}",
    {
      attribution:
        'Imagery provided by services from the Global Imagery Browse Services (GIBS), operated by the NASA/GSFC/Earth Science Data and Information System (<a href="https://earthdata.nasa.gov">ESDIS</a>) with funding provided by NASA/HQ.',
      bounds: [
        [-85.0511287776, -179.999999975],
        [85.0511287776, 179.999999975],
      ],
      minZoom: 1,
      maxZoom: 8,
      format: "jpg",
      time: "",
      tilematrixset: "GoogleMapsCompatible_Level",
    }
  );

  //nightearth.addTo(map);

  var TopoMap = L.tileLayer(
    "https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png",
    {
      maxZoom: 17,
      attribution:
        'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
    }
  );

  //bright.addTo(map);

  //L.control.layers(baseLayers).addTo(map);

  var marker1 = L.marker([51.9688414, 7.5956354]);
  var marker2 = L.marker([51.92, 7.55]);
  var marker3 = L.marker([51.95, 7.56]);

  var markerG1 = L.layerGroup([marker1, marker2, marker3]);

  map.zoomControl.setPosition("topright");

  //positioning map scale
  L.control
    .scale({
      position: "bottomright",
    })
    .addTo(map);

  // adding fullscreen button
  var mapId = document.getElementById("map");
  function fullScreenView() {
    mapId.requestFullscreen();
  }

  // Map coordinate display
  map.on("mousemove", function (e) {
    //console.log(e)
    $(".coordinate").html("Lat:" + e.latlng.lat + "  Long:" + e.latlng.lng);
  });

  // print map
  $(".print-map").click(function () {
    window.print();
  });

  L.control.browserPrint().addTo(map);

  // measure function
  L.control
    .measure({
      primaryLengthUnit: "kilometers",
      secondaryLengthUnit: "miles",
      primaryAreaUnit: "sqmeters",
      secondaryAreaUnit: "hectares",
    })
    .addTo(map);

  //Geojson
  var marker = L.markerClusterGroup();
  var nep = L.geoJSON(data, {
    onEachFeature: function (feature, layer) {
      layer.bindPopup("<h1> Markers </h1>");
    },
  });
  nep.addTo(marker);
  marker.addTo(map);

  //Leaflet Search
  L.Control.geocoder().addTo(map);

  // Leaflet layer control
  var baseMaps = {
    osm: osm,
    "dark map": Esri_WorldImagery,
    Mapnik: CyclOSM,
    TopoMap: TopoMap,
  };

  var overlayers = {
    markers: markerG1,
    Geo: marker,
  };

  L.control.layers(baseMaps, overlayers,{collapsed:false,position:'topleft'}).addTo(map);


  //var geojson = L.geoJson(munsterbound).addTo(map);

  // function geojsonStyle(feature){
  // return{
  //     fillcolor: getcolor(feature.properties.first_dist),
  //     weight: 2,
  //     opacity: 1,
  //     color: 'white',
  //     fillcopacity: 0.7
  // }
  // }

  // function getColor(state_code){
  // if(state_code==='1') {
  //     return '#d47b52';
  // } else if (state_code ==='2'){
  //     return '#5249cf';
  // } else if (state_code ==='3'){
  //     return '#e1367a';
  // } else if (state_code ==='4'){
  //     return '#23aff0';
  // } else if (state_code ==='5'){
  //     return '#b85dcc';
  // } else if (state_code ==='6'){
  //     return '#dbe183';
  // } else if (state_code ==='7'){
  //     return '#23d786';
  // }
  // }

  //map.fitBounds(geojson.getBounds())
  // $.getJSON("{% url 'nepalData' %}",function(data){
  //     //console.log(data);
  //     L.geoJSON(data,{
  //         onEachFeature: function(feature,layer){
  //             var district = feature.properties.first_dist;
  //             console.log(district)
  //             layer.bindPopup('<h5>District: ' + district+'</h5><h5>Area: '+ feature.properties.shape_area+'</h5');
  //         },
  //         style: geojsonStyle,
  //     }).addTo(map);
  // })

  function wmsLayer(layer) {
    var wms = L.Geoserver.wms("http://localhost:8080/geoserver/wms", {
      layers: layer,
      CQL_FILTER: "INCLUDE", //"district=='CHITAWAN'",
      transparent: true,
      /*style: {
        color: "black",
        fillOpacity: "0",
        opacity: "0.5",
        fillColor: getColor('PROVINCE')},*/
      onEachFeature: function (feature, layer) {
        layer.bindPopup(
          "<pre>" +
            JSON.stringify(feature.properties, null, " ").replace(
              /[\{\}"]/g,
              ""
            ) +
            "</pre>"
        );
      },
    });
    wms.addTo(map);
  }

  wmsLayer("geosuren:Nepal_Local");

  var wfs = L.Geoserver.wfs("http://localhost:8080/geoserver/wfs", {
    layers: "geosuren:Nepal_Local",
    CQL_FILTER: "INCLUDE",
    transparent: true,
    style: {
      weight: 2,
      color: "black",
      fillOpacity: "0",
      opacity: "0.5",
    },
    onEachFeature: function (feature, layer) {
      L.marker(feature.properties.geom);
      layer.bindPopup(
        "<pre>" +
          JSON.stringify(feature.properties, null, " ").replace(
            /[\{\}"]/g,
            ""
          ) +
          "</pre>"
      );
      layer.on("mouseover", function (e, feature) {
        layer.bringToFront();
        layer.setStyle({
          weight: 6,
          fillColor: "#666",
          dashArray: "",
          fillOpacity: 1,
        });
        this.openPopup();
      });
      layer.on("mouseout", function (e) {
        layer.setStyle({
          weight: 2,
          color: "black",
          fillOpacity: "0",
          opacity: "0.5",
        });
        this.closePopup();
      });
    },
  });
  // wfs.addTo(map);

  var layerLegend = L.Geoserver.legend("http://localhost:8080/geoserver/wms", {
    layers: "geosuren:Nepal_Local",
    style: `Nepal_LOCAL`,
  });

  layerLegend.addTo(map);