import React, { useState } from "react"
import JSONData from "../../content/restaurants.json"
import { useEffect } from "react"
import MapSimple from "../components/map"
import { Helmet } from "react-helmet"

import Logo from "../../static/logo.png"
import "../index.css"
import Search from "../components/search"

export default function Home() {
    return (
        <div>
            <Helmet>
                <link
                    href="https://api.mapbox.com/mapbox-gl-js/v1.11.1/mapbox-gl.css"
                    rel="stylesheet"
                    type="text/css"
                />
                <title>Eat out to help out</title>
            </Helmet>
            <div className="logotype">
                <img src={Logo} />
                <Search />
            </div>

            <div className="map-wrapper">
                <MapSimple markersData={JSONData} />
            </div>

            <footer>
                Icons made by{" "}
                <a
                    href="https://www.flaticon.com/authors/freepik"
                    title="Freepik"
                >
                    Freepik
                </a>{" "}
                from{" "}
                <a href="https://www.flaticon.com/" title="Flaticon">
                    {" "}
                    www.flaticon.com
                </a>
            </footer>
        </div>
    )
}
