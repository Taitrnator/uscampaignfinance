import React from "react"
import {
    ComposableMap,
    ZoomableGroup,
    Geographies,
    Geography,
    Markers,
    Marker
} from "react-simple-maps"

const mapStyles = {
    width: "100%",
    height: "auto",
}

const UsMap = () => (
    <div style={{ width: "100%" }}>
        <ComposableMap
            width={900}
            height={600}
            projection="albersUsa"
            projectionConfig={{ scale: 900 }}
            style={mapStyles}
        >
            <ZoomableGroup>
                <Geographies
                    disableOptimization
                    geography="https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/examples/albers-usa/static/states.json"
                >
                    {(geos, proj) =>
                        geos.map((geo, i) => (
                            <Geography
                                key={geo.properties.ID_1}
                                cacheId={geo.properties.ID_1}
                                geography={geo}
                                projection={proj}
                                style={{
                                    default: {  fill: "#CFD8DC",
                                                stroke: "#607D8B",
                                                strokeWidth: 0.75,},
                                    hover:   {  fill: "#607D8B",
                                                stroke: "#607D8B",
                                                strokeWidth: 0.75,
                                                outline: "none"}
                                }}
                            />
                        ))
                    }
                </Geographies>
            </ZoomableGroup>
        </ComposableMap>
    </div>
)

export default UsMap