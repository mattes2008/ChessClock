function add (time, player) {


	let result

	if (!isNaN(time)) {

	time = parseInt(time)
	data[player].timer.s = data[player].timer.s + time

		if (data[player].timer.s>59) {

			data[player].timer.m = data[player].timer.m + Math.floor(data[player].timer.s/60)
			data[player].timer.s = data[player].timer.s%60

		}

		result = player + ": " + data[player].timer.m + "m " + data[player].timer.s + "s"


	} else {
		result = "time must be an integer"
	}

	display1(data.sp1.timer.s, data.sp1.timer.m)
	display2(data.sp2.timer.s, data.sp2.timer.m)
	return result

}




function remove (time, player) {


	let result

	if (!isNaN(time)) {

		time = parseInt(time)
		data[player].timer.s = data[player].timer.s - time

		if (data[player].timer.s>59) {

			data[player].timer.m = data[player].timer.m + Math.floor(data[player].timer.s/60)
			data[player].timer.s = data[player].timer.s%60

		}

		if (data[player].timer.s<0) {

			data[player].timer.m = data[player].timer.m - (1+(Math.floor(Math.abs(data[player].timer.s)/60)))
			if (data[player].timer.m<0) {
				data[player].timer.s = 60 - Math.abs(data[player].timer.s)%60
			}

		}

		result = player + ": " + data[player].timer.m + "m " + data[player].timer.s + "s"


	} else {
		result = "time must be an integer"
	}

	display1(data.sp1.timer.s, data.sp1.timer.m)
	display2(data.sp2.timer.s, data.sp2.timer.m)
	return result

}




function set (player, s, m) {

	let result

	s = parseInt(s)
	m = parseInt(m)

	if (!isNaN(m)) {

		if (player==="add") {
			data.plus = m
			result = "additional: " + data.plus
		} else {
			data[player].timer.m = m
			data[player].timer.s = s

			if (data[player].timer.s>59) {
				data[player].timer.m = data[player].timer.m + Math.floor(data[player].timer.s/60)
				data[player].timer.s = data[player].timer.s%60
			}

			result = player + ": " + data[player].timer.m + "m " + data[player].timer.s + "s"

		}

	} else {
		result = "time must be an integer"
	}

	display1(data.sp1.timer.s, data.sp1.timer.m)
	display2(data.sp2.timer.s, data.sp2.timer.m)
	return result

}




function giveup (player) {

	stopp(player)

	if (player==="sp1") {
		return "player1 gave up - player2 won"
	} else if (player==="sp2") {
		return "player2 gave up - player1 won"
	}

}




function quit () {

	main()
	return "game has been canceled"

}