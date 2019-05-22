var wms_layers = [];

        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: '<a href=""></a>',
                url: 'http://a.tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });var format_Limite_Colombia_1 = new ol.format.GeoJSON();
var features_Limite_Colombia_1 = format_Limite_Colombia_1.readFeatures(json_Limite_Colombia_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Limite_Colombia_1 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_Limite_Colombia_1.addFeatures(features_Limite_Colombia_1);var lyr_Limite_Colombia_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Limite_Colombia_1, 
                style: style_Limite_Colombia_1,
                title: '<img src="styles/legend/Limite_Colombia_1.png" /> Limite_Colombia'
            });var format_Departamentos_ENP_2 = new ol.format.GeoJSON();
var features_Departamentos_ENP_2 = format_Departamentos_ENP_2.readFeatures(json_Departamentos_ENP_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Departamentos_ENP_2 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_Departamentos_ENP_2.addFeatures(features_Departamentos_ENP_2);var lyr_Departamentos_ENP_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Departamentos_ENP_2, 
                style: style_Departamentos_ENP_2,
                title: '<img src="styles/legend/Departamentos_ENP_2.png" /> Departamentos_ENP'
            });var format_CubrimientoMunicipal_3 = new ol.format.GeoJSON();
var features_CubrimientoMunicipal_3 = format_CubrimientoMunicipal_3.readFeatures(json_CubrimientoMunicipal_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CubrimientoMunicipal_3 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_CubrimientoMunicipal_3.addFeatures(features_CubrimientoMunicipal_3);var lyr_CubrimientoMunicipal_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CubrimientoMunicipal_3, 
                style: style_CubrimientoMunicipal_3,
                title: '<img src="styles/legend/CubrimientoMunicipal_3.png" /> Cubrimiento Municipal'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Limite_Colombia_1.setVisible(true);lyr_Departamentos_ENP_2.setVisible(true);lyr_CubrimientoMunicipal_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Limite_Colombia_1,lyr_Departamentos_ENP_2,lyr_CubrimientoMunicipal_3];
lyr_Limite_Colombia_1.set('fieldAliases', {'nombre_dep': 'nombre_dep', });
lyr_Departamentos_ENP_2.set('fieldAliases', {'nombre_dep': 'nombre_dep', 'No_Encuest': 'No_Encuest', });
lyr_CubrimientoMunicipal_3.set('fieldAliases', {'DEPT': 'DEPT', 'MUNICIPIO': 'MUNICIPIO', 'No_Encuest': 'No_Encuest', });
lyr_Limite_Colombia_1.set('fieldImages', {'nombre_dep': 'TextEdit', });
lyr_Departamentos_ENP_2.set('fieldImages', {'nombre_dep': 'TextEdit', 'No_Encuest': 'Range', });
lyr_CubrimientoMunicipal_3.set('fieldImages', {'DEPT': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'No_Encuest': 'Range', });
lyr_Limite_Colombia_1.set('fieldLabels', {'nombre_dep': 'inline label', });
lyr_Departamentos_ENP_2.set('fieldLabels', {'nombre_dep': 'inline label', 'No_Encuest': 'inline label', });
lyr_CubrimientoMunicipal_3.set('fieldLabels', {'DEPT': 'inline label', 'MUNICIPIO': 'inline label', 'No_Encuest': 'inline label', });
lyr_CubrimientoMunicipal_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});