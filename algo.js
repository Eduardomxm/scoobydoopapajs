var sign = (function(txt){
	console.log(txt +"\n")
})
var repeat = 2;
var count = 0;
for (var i = 1; i <= 2; i++) {
	sign('Y la cosa suena RA!');
}

while (repeat > count) {
	sign('scooby doo papa');
	for (var i = 1; i <= 3; i++) {
		sign('Y el');
		for (var j = 1; j <= 5; j++) {
			sign('boom');
		}
		if(i == 3) {
			for (var k = 1; k <= 6; k++) {
				sign('boom');
			}
		}
	}
	sign('Y la cosa suena');
	for (var i = 1; i <= 5; i++) {
		sign('RA!');
	}
	count++;
}