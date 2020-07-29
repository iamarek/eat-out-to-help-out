import React, { useState } from "react"
import JSONData from "../../content/restaurants.json"
import { useEffect } from "react"
import MapSimple from "../components/map"
import { Helmet } from "react-helmet"

import Logo from "../../static/logo.png"
import SocialImg from "../../static/social.jpg"
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
                <title>Eat out TO Help out</title>
                <meta name="title" content="Eat out TO Help out" />
                <meta name="description" content="Eat out to help out map of East London" />

                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://eat-to-help.netlify.app/" />
                <meta property="og:title" content="Eat out TO Help out" />
                <meta property="og:description" content="Eat out to help out map of East London" />
                <meta property="og:image" content={SocialImg} />

                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://eat-to-help.netlify.app/" />
                <meta property="twitter:title" content="Eat out TO Help out" />
                <meta property="twitter:description" content="Eat out to help out map of East London" />
                <meta property="twitter:image" content={SocialImg} />
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
