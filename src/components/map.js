import React, { useState, useEffect } from "react"
import ReactMapGL, { Marker, Popup } from "react-map-gl"
import * as parkDate from "../../content/skateboard-parks.json"
import restaurantsData from "../../content/restaurants.json"
import MarkerIcon from "../../static/marker.png"

const ControlPanel = () => {
    return (
        <div className="control-panel">
            <h3>Create and Style Clusters</h3>
            <p>
                Use Mapbox GL JS' built-in functions to visualize points as
                clusters.
            </p>
            <div className="source-link">
                <a
                    href="https://github.com/visgl/react-map-gl/tree/5.2-release/examples/clusters"
                    target="_new"
                >
                    View Code ↗
                </a>
            </div>
        </div>
    )
}

export const clusterLayer = {
    id: "clusters",
    type: "circle",
    source: "earthquakes",
    filter: ["has", "point_count"],
    paint: {
        "circle-color": [
            "step",
            ["get", "point_count"],
            "#51bbd6",
            100,
            "#f1f075",
            750,
            "#f28cb1",
        ],
        "circle-radius": ["step", ["get", "point_count"], 20, 100, 30, 750, 40],
    },
}

export const clusterCountLayer = {
    id: "cluster-count",
    type: "symbol",
    source: "earthquakes",
    filter: ["has", "point_count"],
    layout: {
        "text-field": "{point_count_abbreviated}",
        "text-font": ["DIN Offc Pro Medium", "Arial Unicode MS Bold"],
        "text-size": 12,
    },
}

export const unclusteredPointLayer = {
    id: "unclustered-point",
    type: "circle",
    source: "earthquakes",
    filter: ["!", ["has", "point_count"]],
    paint: {
        "circle-color": "#11b4da",
        "circle-radius": 4,
        "circle-stroke-width": 1,
        "circle-stroke-color": "#fff",
    },
}

const MapSimple = ({ markersData, hasSpace }) => {
    const [viewport, setViewport] = useState({
        latitude: 51.546826,
        longitude: -0.012137,
        width: "100vw",
        height: "100%",
        zoom: 12,
    })
    const [selectedPark, setSelectedPark] = useState(null)

    useEffect(() => {
        const listener = e => {
            if (e.key === "Escape") {
                setSelectedPark(null)
            }
        }
        window.addEventListener("keydown", listener)

        return () => {
            window.removeEventListener("keydown", listener)
        }
    }, [])
    console.log({ restaurantsData })
    return (
        <div className="map-wrapper2">
            <ReactMapGL
                {...viewport}
                mapboxApiAccessToken="pk.eyJ1IjoiYXJrYWRpdXN6Y2hhdHlzIiwiYSI6ImNrZDZmdDRwdjAxN3kyeW5uaHI4MzAyZGQifQ.rSqnkPW6fYXW0pyQ9MOEOg"
                mapStyle="mapbox://styles/arkadiuszchatys/ckd6gt5mm04xf1hmr2fzm8i9h"
                onViewportChange={viewport => {
                    setViewport(viewport)
                }}
            >
                {restaurantsData.map(restaurant => (
                    <Marker
                        key={restaurant.title}
                        latitude={restaurant.lat}
                        longitude={restaurant.lng}
                    >
                        <button
                            className="marker-btn"
                            onClick={e => {
                                e.preventDefault()
                                setSelectedPark(restaurant)
                            }}
                        >
                            <img
                                src={MarkerIcon}
                                alt="Skate Park Icon"
                                width="30px"
                                height="30px"
                            />
                        </button>
                    </Marker>
                ))}

                {selectedPark ? (
                    <Popup
                        latitude={selectedPark.lat}
                        longitude={selectedPark.lng}
                        onClose={() => {
                            setSelectedPark(null)
                        }}
                    >
                        <div>
                            <h2>{selectedPark.title}</h2>
                            <p>{selectedPark.address}</p>
                        </div>
                    </Popup>
                ) : null}
            </ReactMapGL>
        </div>
    )
}

export default MapSimple
