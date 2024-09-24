// Add Slider & Angle control to the layer

// Add below code to position of layer

a = effect("Angle Control")("Angle");
d = effect("Slider Control")("Slider");
x = Math.cos(degreesToRadians(a));
y = Math.sin(degreesToRadians(a)); 
value+[x*d,y*d];
