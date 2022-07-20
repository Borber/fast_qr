var searchIndex = JSON.parse('{\
"fast_qr":{"doc":"Example","t":[4,13,13,13,13,2,2,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,4,11,11,11,11,11,11,11,11,11,0,11,11,11,11,11,11,11,11,11,11,11,0,11,11,11,11,11,11,11,11,11,0,13,13,13,13,13,13,3,4,13,4,13,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,12,12,13,3,4,4,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12],"n":["ECL","H","L","M","Q","QRBuilder","QRCode","V01","V02","V03","V04","V05","V06","V07","V08","V09","V10","V11","V12","V13","V14","V15","V16","V17","V18","V19","V20","V21","V22","V23","V24","V25","V26","V27","V28","V29","V30","V31","V32","V33","V34","V35","V36","V37","V38","V39","V40","Version","alignment_patterns_grid","borrow","borrow","borrow_mut","borrow_mut","clone","clone","clone_into","clone_into","convert","fmt","fmt","from","from","from_matrix","get","information","into","into","max_bytes","missing_bits","qr","to_owned","to_owned","to_string","try_from","try_from","try_into","try_into","type_id","type_id","svg","Circle","Diamond","Horizontal","IoError","RoundedSquare","Square","SvgBuilder","SvgError","SvgError","SvgShape","Vertical","background_color","borrow","borrow","borrow","borrow_mut","borrow_mut","borrow_mut","build_mat","cmp","dot_color","eq","fmt","from","from","from","into","into","into","margin","new","partial_cmp","shape","to_file","to_str","try_from","try_from","try_from","try_into","try_into","try_into","type_id","type_id","type_id","0","0","EncodedData","QRBuilder","QRCode","QRCodeError","SpecifiedVersion","V01","V02","V03","V04","V05","V06","V07","V08","V09","V10","V11","V12","V13","V14","V15","V16","V17","V18","V19","V20","V21","V22","V23","V24","V25","V26","V27","V28","V29","V30","V31","V32","V33","V34","V35","V36","V37","V38","V39","V40","borrow","borrow","borrow","borrow_mut","borrow_mut","borrow_mut","build","ecl","fmt","fmt","from","from","from","into","into","into","mask_nb","new","new","print","try_from","try_from","try_from","try_into","try_into","try_into","type_id","type_id","type_id","version","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"],"q":["fast_qr","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","fast_qr::convert","fast_qr::convert::svg","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","fast_qr::convert::svg::SvgError","","fast_qr::qr","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","fast_qr::qr::QRCode","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],"d":["Error Correction Coding has 4 levels","High, 30%","Low, 7%","Medium, 15%","Quartile, 25%","","","Version n°01","Version n°02","Version n°03","Version n°04","Version n°05","Version n°06","Version n°07","Version n°08","Version n°09","Version n°10","Version n°11","Version n°12","Version n°13","Version n°14","Version n°15","Version n°16","Version n°17","Version n°18","Version n°19","Version n°20","Version n°21","Version n°22","Version n°23","Version n°24","Version n°25","Version n°26","Version n°27","Version n°28","Version n°29","Version n°30","Version n°31","Version n°32","Version n°33","Version n°34","Version n°35","Version n°36","Version n°37","Version n°38","Version n°39","Version n°40","Enum containing all possible QRCode versions","Returns <strong>alignments</strong> positions","","","","","","","","","Converts QRCode matrix to usable","","","Returns the argument unchanged.","Returns the argument unchanged.","Returns version based on size of matrix","Computes the <strong>best version</strong> according to <code>mode</code>, <code>ecl</code> and `len``","Returns the <strong>version information</strong> we need to put for QRCodes …","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Returns the <strong>max bytes</strong> that can contain a QRCode for a …","Returns QRCode’s <strong>missing padding bits count</strong> at the very …","Wrappers to create QRCode","","","","","","","","","","Conversion to SVGs","Circle Shape","Diamond Shape","Horizontal Shape","Error while writing to file","RoundedSquare Shape","Square Shape","Builder for svg, can set shape, margin, background_color, …","Error when converting to svg","Error while creating svg","Different possible Shapes","Vertical Shape","Changes background color (default: #ffffff)","","","","","","","Generates resulting svg for a matrix","","Changes margin (default: #000000)","","","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Changes margin (default: 4)","Creates a Builder instance","","Changes shape (default: Square)","Saves the svg for a qr code to a file","Return a string containing the svg for a qr code","","","","","","","","","","","","If data if too big to be encoded (refer to …","Builder for <code>QRCode</code> struct","Enum containing all 40 QRCode versions","Contains different error when QRCode could not be created","Specified version too low to contain data","QRCode Version n°01, being 21x21","QRCode Version n°02, being 25x25","QRCode Version n°03, being 29x29","QRCode Version n°04, being 33x33","QRCode Version n°05, being 37x37","QRCode Version n°06, being 41x41","QRCode Version n°07, being 45x45","QRCode Version n°08, being 49x49","QRCode Version n°09, being 53x53","QRCode Version n°10, being 57x57","QRCode Version n°11, being 61x61","QRCode Version n°12, being 65x65","QRCode Version n°13, being 69x69","QRCode Version n°14, being 73x73","QRCode Version n°15, being 77x77","QRCode Version n°16, being 81x81","QRCode Version n°17, being 85x85","QRCode Version n°18, being 89x89","QRCode Version n°19, being 93x93","QRCode Version n°20, being 97x97","QRCode Version n°21, being 101x101","QRCode Version n°22, being 105x105","QRCode Version n°23, being 109x109","QRCode Version n°24, being 113x113","QRCode Version n°25, being 117x117","QRCode Version n°26, being 121x121","QRCode Version n°27, being 125x125","QRCode Version n°28, being 129x129","QRCode Version n°29, being 133x133","QRCode Version n°30, being 137x137","QRCode Version n°31, being 141x141","QRCode Version n°32, being 145x145","QRCode Version n°33, being 149x149","QRCode Version n°34, being 153x153","QRCode Version n°35, being 157x157","QRCode Version n°36, being 161x161","QRCode Version n°37, being 165x165","QRCode Version n°38, being 169x169","QRCode Version n°39, being 173x173","QRCode Version n°40, being 177x177","","","","","","","Computes a QRCode with given parameters","Changes the Encoding Level","","","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Changes the mask, should very rarely be used","Creates an instance of QRBuilder with default parameters","Creates a new QRCode from a ECL / version","Prints the matrix to the terminal","","","","","","","","","","Changes the version","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],"i":[0,1,1,1,1,0,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,2,1,2,1,2,1,2,1,2,0,1,2,1,2,2,2,2,1,2,2,2,0,1,2,1,1,2,1,2,1,2,0,3,3,3,4,3,3,0,0,4,0,3,5,5,3,4,5,3,4,5,3,5,3,4,5,3,4,5,3,4,5,5,3,5,5,5,5,3,4,5,3,4,5,3,4,6,7,8,0,0,0,8,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,8,10,9,8,10,9,10,10,8,9,8,10,9,8,10,9,10,10,9,9,8,10,9,8,10,9,8,10,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50],"f":[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,[[["",0]]],[[["",0]],["",0]],[[["",0]],["",0]],[[["",0]],["",0]],[[["",0]],["",0]],[[["",0]],["ecl",4]],[[["",0]],["version",4]],[[["",0],["",0]]],[[["",0],["",0]]],null,[[["",0],["formatter",3]],["result",6]],[[["",0],["formatter",3]],["result",6]],[[]],[[]],[[]],[[["mode",4],["ecl",4],["usize",0]],["option",4]],[[["",0]],["u32",0]],[[]],[[]],[[["",0]],["usize",0]],[[["",0]],["usize",0]],null,[[["",0]]],[[["",0]]],[[["",0]],["string",3]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[["",0]],["typeid",3]],[[["",0]],["typeid",3]],null,null,null,null,null,null,null,null,null,null,null,null,[[["",0]],["",0]],[[["",0]],["",0]],[[["",0]],["",0]],[[["",0]],["",0]],[[["",0]],["",0]],[[["",0]],["",0]],[[["",0]],["",0]],[[["",0]],["string",3]],[[["",0],["svgshape",4]],["ordering",4]],[[["",0]],["",0]],[[["",0],["svgshape",4]],["bool",0]],[[["",0],["formatter",3]],["result",6]],[[]],[[]],[[]],[[]],[[]],[[]],[[["",0],["usize",0]],["",0]],[[],["svgbuilder",3]],[[["",0],["svgshape",4]],["option",4,[["ordering",4]]]],[[["",0],["svgshape",4]],["",0]],[[["",0],["qrcode",4],["str",0]],["result",4,[["svgerror",4]]]],[[["",0],["qrcode",4]],["string",3]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[["",0]],["typeid",3]],[[["",0]],["typeid",3]],[[["",0]],["typeid",3]],null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,[[["",0]],["",0]],[[["",0]],["",0]],[[["",0]],["",0]],[[["",0]],["",0]],[[["",0]],["",0]],[[["",0]],["",0]],[[["",0]],["result",4,[["qrcode",4],["qrcodeerror",4]]]],[[["",0],["ecl",4]],["",0]],[[["",0],["formatter",3]],["result",6]],[[["",0],["formatter",3]],["result",6]],[[]],[[]],[[]],[[]],[[]],[[]],[[["",0],["usize",0]],["",0]],[[["string",3]],["qrbuilder",3]],[[["option",4,[["ecl",4]]],["option",4,[["version",4]]],["option",4,[["usize",0]]]],["result",4,[["qrcodeerror",4]]]],[[["",0]]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[["",0]],["typeid",3]],[[["",0]],["typeid",3]],[[["",0]],["typeid",3]],[[["",0],["version",4]],["",0]],null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],"p":[[4,"ECL"],[4,"Version"],[4,"SvgShape"],[4,"SvgError"],[3,"SvgBuilder"],[13,"IoError"],[13,"SvgError"],[4,"QRCodeError"],[4,"QRCode"],[3,"QRBuilder"],[13,"V01"],[13,"V02"],[13,"V03"],[13,"V04"],[13,"V05"],[13,"V06"],[13,"V07"],[13,"V08"],[13,"V09"],[13,"V10"],[13,"V11"],[13,"V12"],[13,"V13"],[13,"V14"],[13,"V15"],[13,"V16"],[13,"V17"],[13,"V18"],[13,"V19"],[13,"V20"],[13,"V21"],[13,"V22"],[13,"V23"],[13,"V24"],[13,"V25"],[13,"V26"],[13,"V27"],[13,"V28"],[13,"V29"],[13,"V30"],[13,"V31"],[13,"V32"],[13,"V33"],[13,"V34"],[13,"V35"],[13,"V36"],[13,"V37"],[13,"V38"],[13,"V39"],[13,"V40"]]}\
}');
if (window.initSearch) {window.initSearch(searchIndex)};