function berlian(row) {
	// segitiga1

  for (var i = 0; i <= row; i++) {
		var tampung = '             ';
    //segitiga siku2atas
		for (var j = row; j >= i; j--) {
			tampung += ' ';
		}
    //segitiga
		for (k = 0; k <= i * 2; k++) {
			tampung += '*';
		}
		console.log(tampung);
	}

	//segitiga2

  //buat baris
	for (var i = 0; i <= row; i++) {
		var result = '             ';
    //segitiga siku2 bawah
		for (var j = 0; j <= i; j++) {
			result += ' ';
		}
    // segitiga bawah
		for (k = row * 2; k >= i * 2; k--) {
			result += '*';
		}

		console.log(result);
	}
}

berlian(10);
