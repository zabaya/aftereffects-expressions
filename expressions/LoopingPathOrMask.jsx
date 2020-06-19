// pingpong

if (numKeys >1 && time > key(numKeys).time){
  t1 = key(1).time;
  t2 = key(numKeys).time;
  span = t2 - t1;
  delta = time - t2;
  seg = Math.floor(delta/span);
  t = delta%span;
  valueAtTime((seg%2) ? (t1 + t) : (t2 - t));
}else
  value

// after the first keyframe

if (numKeys > 1 && time > key(numKeys).time){
  t1 = key(1).time;
  t2 = key(numKeys).time;
  span = t2 - t1;
  delta = time - t2;
  seg = Math.floor(delta/span);
  t = delta%span;
  valueAtTime((seg%2) ? (t1 + t) : (t2 - t));
}else
  value


// Normal

if (numKeys >1 && time > key(numKeys).time){
  t1 = key(1).time;
  t2 = key(numKeys).time;
  span = t2 - t1;
  delta = time - t2;
  t = delta%span;
  valueAtTime(t1 + t)
}else
  value
  
  
