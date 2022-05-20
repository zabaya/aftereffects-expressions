// Animates text on markers, and if no markers on frames. 

anim = thisProperty;
numMarkers = marker.numKeys;
delayDur = framesToTime(5);
delay = (textIndex - 1) * delayDur;

// if no markers on frames. 

if (numMarkers > 0) {
	delay = textIndex <= numMarkers ? marker.key(textIndex).time : marker.key(numMarkers).time
	 }
 
anim.valueAtTime(time - delay)
