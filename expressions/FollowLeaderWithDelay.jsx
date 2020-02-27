// Number of frames

delayFrames = 3;

delay = framesToTime(delayFrames);

thisComp.layer("leader").transform.position.valueAtTime(time-delay)
