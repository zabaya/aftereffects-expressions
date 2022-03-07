// Add Slider & Angle control to the layer

a = effect("Angle Control")("Angle");
d = effect("Slider Control")("Slider");
x = Math.cos(degreesToRadians(a));
y = Math.sin(degreesToRadians(a)); 
value+[x*d,y*d];
