var layerNames = ["5_Main","5_follow_1"]; 

var origPath = thisProperty;
var origPoints = origPath.points();
var origInTang = origPath.inTangents();
var origOutTang = origPath.outTangents();

for (var i = 0; i < layerNames.length; i++){
    try {
        var L = thisComp.layer(layerNames[i]); // real layer lookup by name
        if (L && L.index != thisLayer.index){
            origPoints[i] = fromCompToSurface(L.toComp(L.anchorPoint));
        }
    } catch (err) {
        // layer not found -> do nothing (keep original point)
    }
}

createPath(origPoints, origInTang, origOutTang, origPath.isClosed());
