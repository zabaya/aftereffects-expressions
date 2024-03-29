// Go to Layer > New > Shape Layer. Name the new shape layer “Text Box”.
// Add a rectangle to the Text Box layer and add a fill. (Through the menu, then the rectangle will be automaticly centered.)
// Align the Text Layer to the center of the comp.

// Paste this in the Size of the rectangle (the +40 is a margin)

s=thisComp.layer("textLayer1");
w=s.sourceRectAtTime().width +40;
h=s.sourceRectAtTime().height +40;

[w,h]

// Paste this in Position of the rectangle (not the Layer Position)

s=thisComp.layer("textLayer1");
w=s.sourceRectAtTime().width/2;
h=s.sourceRectAtTime().height/2;
l=s.sourceRectAtTime().left;
t=s.sourceRectAtTime().top;

[w+l,h+t]
