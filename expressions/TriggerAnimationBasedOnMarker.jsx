// Copy this in the properties from the layer that you want to trigger based on markers. 
// If you want to use this on a composition paste the expression on time-remap.

L = thisLayer;
n = 0;

if (L.marker.numKeys > 0) {
  n = L.marker.nearestKey(time).index;

  if (L.marker.key(n).time > time) {
    n--;
  }
}

if (n == 0) {
  valueAtTime(0);
} else {
  t = time - L.marker.key(n).time;

  valueAtTime(t);
}
