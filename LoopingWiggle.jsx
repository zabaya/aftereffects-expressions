// Create variable “freq” to represent wiggle frequency and set it to one wiggle per second.

freq = 1;

// Create variable “amp” to represent wiggle amplitude and set it to 110 pixels.

amp = 110;

// The variable loopTime will represent the lenght of our wiffle loop (3 seconds).

loopTime = 3;

// Leave this

t = time % loopTime;
wiggle1 = wiggle(freq, amp, 1, 0.5, t);
wiggle2 = wiggle(freq, amp, 1, 0.5, t - loopTime);
linear(t, 0,  loopTime, wiggle1, wiggle2)

