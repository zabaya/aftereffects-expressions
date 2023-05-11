2D Layer
diameter=width;
pi=Math.PI;
circumference=diameter*pi;
rot=360/circumference;
Xpos=thisLayer.transform.position[0];
scalePercent=thisLayer.transform.scale[0]/100;
rot*Xpos/scalePercent


CC Sphere in one dimension:
diameter=effect("CC Sphere")("Radius")
pi=Math.PI;
circumference=diameter*pi;
rot=360/circumference;
Xpos=thisLayer.transform.position[0];
scalePercent=thisLayer.transform.scale[0]/100;
rot*Xpos/scalePercent


CC Sphere coming towards camera:
diameter=effect("CC Sphere")("Radius")
pi=Math.PI;
circumference=diameter*pi;
rot=360/circumference;
Xpos=thisLayer.transform.position[0];
scalePercent=thisLayer.transform.scale[0]/100;
rot*Xpos/scalePercent*-1
