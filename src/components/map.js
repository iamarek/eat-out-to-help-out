import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from '../../public/marker.png';
import { useEffect } from 'react';

const MapMarker = ({ title }) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div style={{ position: 'relative', width: '30px' }}>
            <img src={Marker} height="30px" width="30px" onClick={() => setIsOpen(prevState => !prevState)}/>
            {isOpen && <div style={{ zIndex: '2', position: 'absolute', left: '100%', top: '0px', fontSize: '24px', width: '150px', background: 'white'}}>{title}</div>}
        </div>
    )
}

const styles = [
    {
        "featureType": "all",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "saturation": 36
            },
            {
                "color": "#333333"
            },
            {
                "lightness": 40
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#ffffff"
            },
            {
                "lightness": 16
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#fefefe"
            },
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#fefefe"
            },
            {
                "lightness": 17
            },
            {
                "weight": 1.2
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#f5f5f5"
            },
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#f5f5f5"
            },
            {
                "lightness": 21
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#dedede"
            },
            {
                "lightness": 21
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "lightness": 17
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "lightness": 29
            },
            {
                "weight": 0.2
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "lightness": 18
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "lightness": 16
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#f2f2f2"
            },
            {
                "lightness": 19
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "hue": "#00aeff"
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#c7e5fd"
            },
            {
                "lightness": 17
            }
        ]
    }
]

const MapSimple = ({ markersData, hasSpace }) => {
    
    const [mapConfig, setMapConfig] = useState({
        center: {
            lat: 54.3456975,
            lng: 17.1190122
        },
        zoom: 8,
    });

    const apiIsLoaded = (map, maps) => {
        var bounds = new maps.LatLngBounds()

        markersData.forEach(({lat, lng}) => {
            bounds.extend({
                lat: parseFloat(lat),
                lng: parseFloat(lng)
            });
        })

        map.fitBounds(bounds);

        if (markersData.length <= 1) {
            map.setZoom(9);
        }
    }
    console.log({ markersData })
    return (
        <div style={{ height: '100vh'}}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: '' }}
                yesIWantToUseGoogleMapApiInternals
                onGoogleApiLoaded={({ map, maps }) => apiIsLoaded(map, maps)}
                defaultCenter={mapConfig.center}
                options={() => {return {styles}}}
                defaultZoom={mapConfig.zoom} >
                    {markersData.map(marker => (
                        <MapMarker
                            key={`${marker.lat}-${marker.lng}-${marker.title}`}
                            lat={marker.lat}
                            lng={marker.lng}
                            title={marker.title}
                            />
                    ))}
            </GoogleMapReact>
        </div>
    )
}

export default MapSimple;