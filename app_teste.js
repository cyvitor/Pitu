
function log() {
    console.log("Testando node");
}

log();

function log2(men) {
    console.log("--> " + men);
}


let add = function (a, b){
	return a + b;
};

let add2 = (a, b) => a + b;

log2(add2(2,2));

