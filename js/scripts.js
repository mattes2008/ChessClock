let data = {

	plus: 70,
	started: false,
	sp1: {

		color: "white",
		timer: {

			m: 1,
			s: 30,
		},
		name: "",
	},
	sp2: {

		color: "black",
		timer: {

			m: 1,
			s: 30,
		},
		name: "",
	},
	set: {

		m: 7,
		s: 6,
		pls: 6,

	},
	activePlayer: "sp1",
	onOff: false,
	timer1: "",
	timer2: "",

}




let confiuration = JSON.parse(localStorage.getItem("configs"))




document.addEventListener("keyup", function () {

	if (data.onOff) {

		if (data.activePlayer==="sp1") {
			if (data.plus>59) {
				let c = Math.floor(data.plus / 60)
				let d = data.plus % 60

				data.sp1.timer.s = data.sp1.timer.s + d
				data.sp1.timer.m = data.sp1.timer.m + c
			} else {
				data.sp1.timer.s = data.sp1.timer.s + data.plus
			}

			if (data.sp1.timer.s>59) {
				data.sp1.timer.m = data.sp1.timer.m + Math.floor(data.sp1.timer.s/60)
				data.sp1.timer.s = data.sp1.timer.s%60
			}
			display1(data.sp1.timer.s, data.sp1.timer.m)
			data.activePlayer = "sp2"
		} else if (data.activePlayer==="sp2") {
			if (data.plus>59) {
				let c = Math.floor(data.plus / 60)
				let d = data.plus % 60

				data.sp2.timer.s = data.sp2.timer.s + d
				data.sp2.timer.m = data.sp2.timer.m + c
			} else {
				data.sp2.timer.s = data.sp2.timer.s + data.plus
			}

			if (data.sp2.timer.s>59) {
				data.sp2.timer.m = data.sp2.timer.m + Math.floor(data.sp2.timer.s/60)
				data.sp2.timer.s = data.sp2.timer.s%60
			}
			display2(data.sp2.timer.s, data.sp2.timer.m)
			data.activePlayer = "sp1"
		}

	}

}, false)



function changePlayer () {

	if (data.onOff) {

		if (data.activePlayer==="sp1") {
			if (data.plus>59) {
				let c = Math.floor(data.plus / 60)
				let d = data.plus % 60

				data.sp1.timer.s = data.sp1.timer.s + d
				data.sp1.timer.m = data.sp1.timer.m + c
			} else {
				data.sp1.timer.s = data.sp1.timer.s + data.plus
			}

			if (data.sp1.timer.s>59) {
				data.sp1.timer.m = data.sp1.timer.m + Math.floor(data.sp1.timer.s/60)
				data.sp1.timer.s = data.sp1.timer.s%60
			}
			display1(data.sp1.timer.s, data.sp1.timer.m)
			data.activePlayer = "sp2"
		} else if (data.activePlayer==="sp2") {
			if (data.plus>59) {
				let c = Math.floor(data.plus / 60)
				let d = data.plus % 60

				data.sp2.timer.s = data.sp2.timer.s + d
				data.sp2.timer.m = data.sp2.timer.m + c
			} else {
				data.sp2.timer.s = data.sp2.timer.s + data.plus
			}

			if (data.sp2.timer.s>59) {
				data.sp2.timer.m = data.sp2.timer.m + Math.floor(data.sp2.timer.s/60)
				data.sp2.timer.s = data.sp2.timer.s%60
			}
			display2(data.sp2.timer.s, data.sp2.timer.m)
			data.activePlayer = "sp1"
		}

	}

}




function reload () {

	document.getElementById("sp1Name").innerHTML = data.sp1.name + "&nbsp;&nbsp;&nbsp;&#9818;"
	document.getElementById("sp2Name").innerHTML = data.sp2.name + "&nbsp;&nbsp;&nbsp;&#9818;"

	if (data.sp1.color==="white") {
		document.getElementById("sp1Name").setAttribute("style", "color: white")
		document.getElementById("sp2Name").setAttribute("style", "color: black")
	} else if (data.sp1.color==="black") {
		document.getElementById("sp1Name").setAttribute("style", "color: black")
		document.getElementById("sp2Name").setAttribute("style", "color: white")
	}

}




function change () {

	if (data.sp1.color==="white") {
		data.sp1.color = "black"
		data.sp2.color = "white"
		data.activePlayer = "sp2"
	} else if (data.sp1.color==="black") {
		data.sp1.color = "white"
		data.sp2.color = "black"
		data.activePlayer = "sp1"
	}

	reload ()

}




function timer1 () {

	if (data.activePlayer==="sp1") {

		data.sp1.timer.s--

		if (data.sp1.timer.s<0) {

			data.sp1.timer.m--
			data.sp1.timer.s = 59

		}

		display1(data.sp1.timer.s, data.sp1.timer.m)

	}

}




function timer2 () {

	if (data.activePlayer==="sp2") {

		data.sp2.timer.s--

		if (data.sp2.timer.s<0) {

			data.sp2.timer.m--
			data.sp2.timer.s = 59

		}

		display2(data.sp2.timer.s, data.sp2.timer.m)

	}

}




function startStopp () {

	data.onOff = !data.onOff
	data.started = false
	document.getElementById("change").classList.add("invisible")

	if (data.onOff) {
		data.sp1.clock = setInterval(timer1, 1000)
		data.sp2.clock = setInterval(timer2, 1000)
	} else if (!data.onOff) {
		clearInterval(data.sp1.clock)
		clearInterval(data.sp2.clock)
	}

}




function display1 (s, m) {

	if (s<10) {
		s = "0" + s
	}

	if (s<1 && m<1) {
		document.getElementById("sp1").innerHTML = m + ":" + s + "&nbsp;&#9872;"
		clearInterval(data.sp1.clock)
		clearInterval(data.sp2.clock)
		data.onOff = false
	} else {
		document.getElementById("sp1").innerHTML = m + ":" + s
	}

}




function display2 (s, m) {

	if (s<10) {
		s = "0" + s
	}

	if (s<1 && m<1) {
		document.getElementById("sp2").innerHTML = m + ":" + s + "&nbsp;&#9872;"
		clearInterval(data.sp1.clock)
		clearInterval(data.sp2.clock)
		data.onOff = false
	} else {
		document.getElementById("sp2").innerHTML = m + ":" + s
	}

}




function setTime (s, m, p) {

	data.sp1.timer.s = parseInt(s)
	data.sp1.timer.m = parseInt(m)
	data.sp2.timer.s = parseInt(s)
	data.sp2.timer.m = parseInt(m)
	data.plus = parseInt(p)
	data.onOff = false
	document.getElementById("change").classList.remove("invisible")

	data.sp1.name = document.getElementById("nameInput1").value
	data.sp2.name = document.getElementById("nameInput2").value

	data.activePlayer = "sp1"

	reload ()

	document.getElementById("clocks").classList.remove("hidden")
	document.getElementById("main").classList.add("hidden")

	display1(data.sp1.timer.s, data.sp1.timer.m)
	display2(data.sp2.timer.s, data.sp2.timer.m)

	if (data.sp1.color==="black") {
		change()
	}

}




function main () {

	clearInterval(data.sp1.clock)
	clearInterval(data.sp2.clock)
	document.getElementById("clocks").classList.add("hidden")
	document.getElementById("main").classList.remove("hidden")

	data.onOff = false

}




function stopp (src) {

	data[src].timer.s = 0
	data[src].timer.m = 0

	if (src==="sp1") {
		data.sp1.timer.s = 0
		data.sp1.timer.m = 0
		display1(data.sp1.timer.s, data.sp1.timer.m)
	} else if (src==="sp2") {
		data.sp2.timer.s = 0
		data.sp2.timer.m = 0
		display2(data.sp2.timer.s, data.sp2.timer.m)
	}

	data.onOff = false

}