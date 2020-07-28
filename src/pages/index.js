import React, { useState } from "react"
import JSONData from "../../content/restaurants.json"
import { useEffect } from "react"
import MapSimple from "../components/map"

export default function Home() {
  return (
    <div>
      <MapSimple markersData={JSONData}/>
    </div>
  )
}
