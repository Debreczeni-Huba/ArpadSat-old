const header2 = document.querySelector('.header2');
const restat = document.querySelector('.restat');
const restat2 = document.querySelector('.restat2');
function respat() {
	header2.classList.add('active-checkresp');
	restat.classList.add('active-checkresp');
	restat2.classList.add('active-checkresp');
}

function respat2() {
	restat.classList.remove('active-checkresp');
	restat2.classList.remove('active-checkresp');
	header2.classList.remove('active-checkresp');
}