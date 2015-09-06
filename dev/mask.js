	'use strict';

	require.config({
	    paths: {
	        raphael: '../raphael'
	        //you will need eve if you use the nodeps version
	        /*eve: '../bower_components/eve/eve'*/
	    }
	});

	require(['raphael'], function(Raphael){


	var rsr = Raphael('mask', 612, 792, 0, 0);

	var mask = [
	{"stroke":"none","type":"path","path":"M9160 28643 c-146 -11 -348 -60 -474 -115 -245 -107 -426 -294 -532 -549 l-35 -86 -97 -12 c-221 -29 -561 -93 -832 -157 -969 -231 -2118 -728 -2930 -1268 -678 -451 -1250 -1040 -1640 -1690 l-53 -88 -46 8 c-25 5 -93 9 -151 8 -87 0 -119 -5 -187 -28 -264 -88 -524 -342 -838 -816 -257 -390 -441 -764 -530 -1079 -67 -239 -89 -421 -82 -672 5 -203 21 -312 72 -488 l33 -114 -139 -900 c-77 -496 -139 -904 -139 -907 0 -4 -29 -10 -65 -12 -169 -14 -285 -136 -369 -389 -97 -292 -133 -697 -122 -1379 9 -608 49 -1173 107 -1539 40 -251 82 -418 225 -886 238 -778 258 -908 339 -2265 22 -362 32 -488 65 -800 16 -151 39 -390 50 -530 24 -309 43 -465 76 -630 130 -649 482 -1408 1616 -3484 295 -538 417 -753 697 -1224 874 -1471 928 -1574 1361 -2634 398 -970 523 -1235 815 -1713 488 -799 1007 -1390 1505 -1710 318 -204 761 -364 1215 -439 263 -43 369 -50 745 -47 470 4 1680 4 2150 0 376 -3 482 4 745 47 767 126 1346 433 1848 979 265 288 508 605 753 985 372 576 528 888 874 1755 229 574 369 892 545 1240 192 378 365 682 880 1545 324 543 475 809 792 1395 1076 1990 1380 2648 1507 3263 43 205 59 340 91 737 9 105 29 314 45 465 34 324 42 428 75 985 54 902 89 1200 191 1600 39 153 51 196 159 550 209 686 241 879 297 1810 19 328 16 1199 -5 1405 -62 595 -213 887 -470 907 l-62 5 -139 903 c-76 497 -136 914 -134 927 3 12 19 75 36 139 94 357 85 755 -28 1146 -119 412 -480 1048 -837 1474 -169 202 -361 344 -539 401 -75 23 -239 31 -324 14 l-46 -8 -53 88 c-306 505 -711 967 -1196 1365 -587 482 -1537 989 -2489 1329 -547 195 -1192 353 -1718 421 l-97 12 -36 89 c-124 299 -363 508 -688 602 -258 75 -591 84 -947 27 -98 -15 -112 -15 -210 0 -203 33 -452 45 -630 32z m1121 -714 c425 -17 597 -59 794 -192 116 -79 204 -187 205 -253 1 -114 -445 -257 -950 -305 -314 -30 -1077 19 -1431 91 -264 54 -329 104 -280 214 29 66 75 120 172 200 148 121 282 191 424 221 145 30 639 42 1066 24z m-2241 -816 c67 -125 165 -198 346 -257 154 -51 211 -56 799 -67 620 -11 1945 -4 2135 12 315 27 560 148 639 316 22 48 26 51 55 47 17 -2 94 -11 171 -20 484 -54 1090 -204 1515 -373 467 -187 1409 -727 1864 -1068 188 -142 330 -266 511 -447 251 -252 475 -525 650 -795 l67 -104 -35 -106 c-66 -197 -86 -314 -94 -546 -9 -271 27 -615 93 -884 84 -341 229 -631 478 -950 107 -139 308 -345 408 -421 99 -74 256 -153 363 -182 110 -29 307 -30 417 -1 l77 20 6 -26 c4 -14 107 -412 231 -884 123 -472 224 -865 224 -875 1 -29 -104 -402 -113 -402 -4 0 -33 16 -63 35 -194 124 -467 250 -758 350 l-210 72 -27 105 c-54 206 -118 335 -192 389 -56 40 -125 40 -188 1 -74 -48 -174 -168 -264 -318 -10 -15 -17 -13 -76 25 -106 66 -322 165 -484 221 -203 69 -397 118 -674 167 l-45 8 -22 105 c-54 259 -143 372 -292 372 -114 0 -248 -75 -410 -227 l-92 -87 -342 21 c-766 46 -1369 73 -2093 92 -486 13 -1799 16 -2036 5 l-155 -8 -99 124 c-54 67 -99 124 -101 126 -5 7 -186 32 -278 38 -123 8 -232 -7 -303 -42 -62 -30 -83 -56 -111 -143 -38 -113 87 -101 -1051 -101 -1730 0 -2828 -41 -3480 -129 l-144 -20 -116 118 c-179 180 -303 259 -425 268 -53 4 -68 1 -116 -24 -113 -59 -178 -195 -236 -489 -3 -19 -20 -25 -151 -49 -319 -59 -727 -172 -937 -258 l-100 -40 -35 44 c-20 24 -69 79 -110 122 -210 218 -384 178 -525 -124 -24 -51 -57 -134 -72 -183 l-29 -88 -185 -93 c-102 -51 -240 -115 -308 -144 -113 -47 -329 -131 -339 -131 -2 0 -35 66 -73 146 l-70 147 230 881 c127 484 232 886 234 892 3 7 28 4 78 -9 108 -30 304 -29 413 2 212 60 352 149 552 352 273 277 522 655 623 944 108 309 170 698 170 1060 0 249 -28 442 -94 634 l-33 97 51 80 c190 296 373 521 656 805 282 284 435 411 755 631 383 264 1194 717 1552 867 444 187 1131 359 1658 415 72 7 131 14 132 15 1 0 16 -25 33 -56z m-5341 -3092 c24 -10 68 -39 97 -64 208 -184 170 -646 -87 -1075 -235 -391 -544 -808 -764 -1029 -152 -153 -197 -178 -325 -178 -75 0 -93 4 -152 32 -134 63 -223 195 -223 328 0 173 134 433 574 1118 226 353 368 565 429 642 81 101 178 191 236 220 62 30 150 32 215 6z m14774 0 c95 -41 253 -219 434 -491 207 -310 548 -856 645 -1032 81 -147 151 -311 168 -393 51 -247 -217 -492 -461 -422 -77 23 -130 61 -246 179 -339 345 -808 1041 -912 1356 -74 222 -81 445 -19 610 27 73 122 171 188 195 63 22 149 21 203 -2z m-7421 -3493 c45 -26 109 -106 153 -192 l30 -58 140 7 c507 24 1667 22 2335 -5 846 -34 1750 -80 2154 -109 l239 -17 69 87 c123 157 253 259 329 259 45 0 95 -27 135 -74 67 -78 89 -144 102 -305 l7 -94 180 -42 c320 -76 765 -200 1098 -306 104 -33 190 -59 191 -57 2 2 22 41 45 87 105 212 194 251 307 135 65 -66 90 -136 100 -282 l7 -98 101 -39 c362 -136 699 -299 906 -438 60 -40 133 -110 180 -173 131 -174 240 -542 226 -759 -11 -182 -102 -658 -311 -1635 -92 -431 -96 -446 -196 -790 -150 -511 -206 -763 -229 -1023 -14 -160 -12 -561 5 -932 19 -418 19 -527 -4 -725 -32 -278 -65 -445 -123 -630 -98 -315 -231 -524 -544 -857 -135 -144 -309 -360 -435 -538 l-84 -119 -1 -136 c-2 -176 -23 -250 -92 -319 -53 -52 -101 -71 -184 -71 -65 0 -180 28 -268 65 l-63 27 -22 -24 c-447 -478 -816 -804 -1250 -1099 -43 -30 -83 -57 -88 -60 -5 -4 1 -28 13 -55 14 -31 24 -77 27 -126 5 -70 3 -83 -22 -133 -34 -70 -135 -157 -250 -215 -76 -39 -89 -42 -157 -42 -86 1 -154 23 -238 76 l-55 35 -45 -43 c-282 -266 -414 -381 -800 -697 -641 -524 -803 -636 -1293 -889 -399 -206 -763 -332 -1197 -415 -231 -43 -592 -85 -747 -85 -95 0 -103 -4 -103 -50 0 -87 -93 -169 -271 -239 l-84 -33 -50 17 c-199 69 -315 163 -315 257 0 46 3 45 -180 53 -503 21 -1058 140 -1510 322 -263 106 -708 344 -964 515 -298 200 -1104 858 -1428 1166 -65 62 -123 112 -130 112 -7 0 -26 -9 -43 -21 -95 -65 -219 -94 -317 -74 -120 24 -306 162 -349 259 -30 70 -28 158 5 232 14 31 26 60 26 63 0 4 -53 43 -117 87 -366 246 -713 541 -1066 904 l-193 199 -79 -30 c-141 -55 -265 -72 -347 -47 -55 16 -121 78 -146 135 -31 73 -45 175 -39 280 l5 92 -91 128 c-148 207 -307 402 -445 545 -195 201 -339 392 -424 563 -128 255 -201 544 -244 965 -18 176 -17 315 7 885 16 404 7 739 -25 930 -39 226 -62 316 -219 860 -88 304 -174 669 -291 1240 -202 981 -224 1128 -195 1318 26 174 80 341 157 484 89 165 167 237 392 362 240 133 465 236 737 337 l133 49 0 69 c0 163 47 283 134 343 102 70 176 25 276 -169 24 -46 44 -84 45 -86 2 -2 88 24 191 57 309 98 783 230 1064 296 85 20 171 40 191 45 l36 10 6 102 c7 123 25 186 73 260 44 67 103 108 156 108 83 0 206 -95 336 -258 l70 -88 99 7 c484 36 648 45 1503 84 843 39 1031 45 1585 54 487 8 1269 1 1575 -14 l135 -7 35 67 c38 74 108 158 155 187 41 25 108 23 157 -4z m7997 -9403 c-21 -343 -95 -661 -246 -1064 -80 -213 -135 -337 -269 -601 -234 -463 -561 -996 -895 -1461 -159 -221 -311 -379 -694 -723 -501 -449 -686 -655 -915 -1021 -202 -323 -369 -701 -778 -1770 -343 -894 -522 -1304 -709 -1625 -183 -313 -595 -954 -716 -1114 -367 -483 -759 -770 -1262 -924 -852 -261 -2110 -326 -3000 -156 -469 90 -772 210 -1130 449 -501 334 -983 846 -1531 1625 -571 811 -654 993 -944 2065 -214 791 -362 1143 -698 1655 -188 287 -361 519 -857 1150 -702 892 -884 1157 -1123 1635 -362 725 -564 1402 -591 1978 -5 112 -4 136 7 132 8 -3 181 -120 386 -260 l372 -255 12 -134 c27 -284 95 -469 219 -593 107 -108 214 -147 393 -146 99 1 172 10 280 37 22 6 78 -40 470 -388 l445 -395 7 -106 c10 -169 53 -285 153 -420 79 -108 197 -206 320 -267 148 -74 450 -138 653 -138 l77 0 75 -98 c396 -516 926 -949 1545 -1262 619 -314 1301 -508 2119 -605 131 -16 146 -20 258 -71 137 -63 259 -98 399 -115 223 -27 473 40 692 186 l48 32 112 -5 c208 -9 480 24 767 94 186 44 273 71 500 151 665 235 1150 474 1505 741 387 292 716 628 974 997 35 50 65 92 67 94 1 1 52 -9 112 -23 245 -59 468 -49 617 26 104 54 202 172 255 309 33 86 70 278 70 364 l0 53 476 440 476 440 75 -35 c171 -79 348 -95 463 -41 196 90 311 312 380 733 l11 71 282 319 282 320 7 -70 c3 -39 2 -133 -3 -210z","fill":"#000"},
	]{"stroke":"none","type":"path","path":"M7245 19683 c-794 -21 -1673 -92 -2215 -178 l-36 -6 7 -72 c18 -191 106 -353 289 -535 189 -188 386 -331 605 -437 350 -169 585 -202 1750 -246 345 -13 1474 -16 1688 -4 l137 7 0 714 0 713 -32 5 c-44 7 -455 25 -818 36 -259 8 -1123 10 -1375 3z","fill":"#000"},
	{"stroke":"none","type":"path","path":"M11400 19684 c-211 -6 -865 -35 -897 -40 l-33 -5 0 -713 0 -714 128 -7 c201 -12 1345 -9 1687 4 1087 41 1345 74 1660 209 339 146 721 459 871 714 45 78 90 214 99 299 l7 66 -33 6 c-107 19 -520 70 -739 91 -678 66 -1130 86 -1960 90 -371 2 -727 2 -790 0z","fill":"#000"},
	{"stroke":"none","type":"path","path":"M3576 19224 c-358 -90 -652 -166 -654 -168 -8 -8 20 -237 48 -391 101 -559 342 -1308 707 -2200 47 -115 89 -214 94 -219 4 -5 92 56 196 136 343 262 577 423 872 599 177 106 577 312 726 374 389 162 778 231 1359 242 499 10 2253 -21 2499 -43 l67 -7 0 100 0 100 -197 6 c-108 4 -336 7 -507 7 -171 0 -552 7 -846 15 -294 8 -744 15 -1000 15 -893 1 -1123 31 -1455 190 -235 113 -428 256 -693 515 -259 252 -421 496 -512 775 -21 63 -42 115 -46 116 -5 2 -301 -72 -658 -162z","fill":"#000"},
	{"stroke":"none","type":"path","path":"M15665 19378 c-2 -7 -19 -56 -36 -108 -75 -229 -215 -463 -393 -660 -77 -86 -280 -275 -380 -357 -120 -96 -302 -214 -418 -271 -332 -161 -563 -191 -1453 -192 -253 0 -701 -7 -995 -15 -294 -8 -673 -15 -841 -15 -168 0 -394 -3 -502 -7 l-197 -6 0 -100 0 -100 68 7 c238 22 1984 53 2477 43 551 -10 939 -76 1290 -217 508 -204 1048 -530 1655 -997 102 -79 188 -143 191 -143 8 0 165 384 271 665 324 853 503 1492 564 2013 8 74 14 135 12 137 -2 2 -289 76 -638 165 -349 89 -643 163 -653 166 -9 3 -19 -1 -22 -8z","fill":"#000"},
	{"stroke":"none","type":"path","path":"M2035 18831 c-60 -16 -142 -40 -182 -54 -275 -100 -461 -274 -519 -487 -22 -80 -25 -309 -6 -420 31 -174 91 -370 153 -493 69 -135 120 -212 617 -917 212 -300 862 -1140 883 -1140 13 0 264 322 261 334 -2 6 -72 180 -157 386 -374 913 -492 1253 -674 1937 -121 455 -127 480 -176 693 -49 217 -32 204 -200 161z","fill":"#000"},
	{"stroke":"none","type":"path","path":"M17676 18738 c-71 -319 -231 -925 -336 -1278 -112 -376 -238 -715 -534 -1444 -80 -198 -146 -364 -146 -369 0 -11 251 -327 260 -327 7 0 181 217 362 450 346 447 953 1303 1079 1523 136 238 208 505 211 786 2 210 -40 335 -157 459 -95 103 -212 177 -371 237 -76 29 -230 70 -296 80 l-44 7 -28 -124z","fill":"#000"},
	{"stroke":"none","type":"path","path":"M8040 17215 c-1045 -36 -1186 -55 -1705 -229 -916 -309 -1561 -774 -2145 -1545 l-64 -85 155 -150 c574 -559 1138 -1041 1819 -1552 608 -457 962 -657 1476 -834 379 -131 976 -272 1314 -311 116 -13 471 -16 538 -5 l42 8 0 2347 0 2348 -67 7 c-144 14 -976 14 -1363 1z","fill":"#000"},
	{"stroke":"none","type":"path","path":"M10700 17219 c-102 -3 -195 -7 -207 -8 l-23 -1 0 -2349 0 -2349 43 -8 c23 -4 130 -7 237 -7 311 1 538 35 993 149 897 226 1281 411 2047 988 712 536 1186 941 1777 1517 l213 207 -87 114 c-356 469 -758 837 -1208 1106 -432 258 -1067 497 -1500 566 -239 38 -392 47 -1147 71 -488 15 -813 17 -1138 4z","fill":"#000"},
	{"stroke":"none","type":"path","path":"M18029 15388 c-115 -178 -308 -448 -559 -783 l-262 -350 6 -150 c5 -122 19 -834 29 -1483 l2 -122 78 45 c146 86 275 230 365 410 95 190 130 374 172 890 11 138 25 295 30 350 6 55 17 206 25 335 19 314 72 613 154 878 10 34 18 62 16 62 -1 0 -27 -37 -56 -82z","fill":"#000"},
	{"stroke":"none","type":"path","path":"M1810 15457 c0 -1 14 -49 30 -107 73 -255 125 -548 135 -770 3 -74 10 -178 16 -230 5 -52 20 -241 34 -420 47 -609 79 -775 196 -1000 93 -180 216 -312 368 -393 l71 -38 0 256 c0 246 13 959 25 1326 l5 176 -137 179 c-286 375 -559 751 -682 942 -46 71 -61 90 -61 79z","fill":"#000"},
	{"stroke":"none","type":"path","path":"M3615 14680 c-55 -49 -103 -98 -107 -107 -3 -10 -14 -149 -23 -310 l-18 -292 204 -238 c669 -782 1220 -1353 2224 -2303 171 -161 336 -318 367 -348 l57 -55 123 55 c201 90 398 167 865 337 602 219 735 257 1053 305 293 45 474 58 803 59 l307 1 0 89 0 89 -32 -8 c-51 -11 -412 -8 -528 5 -267 30 -485 75 -810 166 -661 187 -1299 451 -1815 752 -704 410 -1588 1054 -2361 1720 -111 95 -203 173 -205 173 -2 -1 -49 -41 -104 -90z","fill":"#000"},
	{"stroke":"none","type":"path","path":"M16009 14619 c-493 -427 -1108 -906 -1574 -1226 -892 -613 -1433 -889 -2282 -1167 -619 -203 -994 -277 -1413 -278 -113 -1 -220 2 -237 6 l-33 8 0 -89 0 -89 303 -1 c504 -2 924 -57 1297 -170 261 -79 1172 -423 1442 -544 l90 -41 57 54 c31 30 218 209 416 399 990 947 1459 1436 2136 2227 224 262 226 265 223 306 -2 22 -11 158 -19 301 l-15 260 -93 88 c-50 48 -99 92 -108 97 -13 7 -53 -23 -190 -141z","fill":"#000"},
	{"stroke":"none","type":"path","path":"M3481 12904 c-25 -97 -31 -125 -45 -219 -50 -327 -39 -939 29 -1544 11 -102 19 -139 32 -152 18 -17 905 -754 1303 -1082 118 -97 217 -177 220 -177 3 0 21 26 39 58 125 207 386 496 608 675 l113 90 -182 191 c-300 315 -702 712 -893 880 -364 322 -718 701 -1094 1171 -57 72 -108 134 -112 139 -4 5 -12 -9 -18 -30z","fill":"#000"},
	{"stroke":"none","type":"path","path":"M16330 12840 c-223 -278 -557 -663 -725 -839 -55 -57 -206 -199 -335 -316 -291 -263 -1147 -1126 -1129 -1138 91 -66 285 -236 370 -324 94 -96 224 -258 305 -379 42 -63 78 -114 81 -114 3 0 1037 862 1393 1162 l135 113 12 110 c83 780 82 1379 -5 1755 l-18 74 -84 -104z","fill":"#000"},
	{"stroke":"none","type":"path","path":"M9265 11213 c-485 -37 -1287 -304 -1848 -614 l-127 -71 62 -70 c147 -167 406 -388 608 -520 310 -203 859 -413 1215 -463 104 -15 282 -19 348 -9 l37 7 -2 855 -3 856 -40 12 c-44 12 -187 22 -250 17z","fill":"#000"},
	{"stroke":"none","type":"path","path":"M10505 11210 c-38 -5 -82 -13 -97 -19 l-28 -11 0 -854 0 -855 57 -7 c95 -12 308 3 435 30 259 55 613 183 883 318 250 126 574 379 802 627 l82 88 -157 86 c-338 185 -661 317 -1092 448 -393 120 -691 170 -885 149z","fill":"#000"},
	{"stroke":"none","type":"path","path":"M6534 10161 c-49 -33 -132 -97 -184 -144 -145 -129 -215 -213 -408 -497 -51 -74 -133 -191 -183 -259 -49 -68 -86 -127 -82 -131 4 -4 71 -63 148 -131 303 -269 582 -481 1175 -891 783 -541 1045 -680 1480 -787 230 -56 578 -108 870 -131 74 -5 152 -12 173 -15 l37 -5 0 784 0 785 -32 5 c-18 3 -78 13 -133 22 -239 38 -561 138 -930 287 -401 162 -666 289 -891 424 -268 161 -658 457 -832 631 -62 61 -114 112 -116 112 -1 0 -43 -27 -92 -59z","fill":"#000"},
	{"stroke":"none","type":"path","path":"M13210 10138 c-160 -173 -578 -494 -891 -684 -257 -156 -944 -456 -1311 -573 -145 -46 -350 -97 -463 -115 -55 -9 -115 -19 -132 -22 l-33 -5 0 -785 0 -786 28 6 c15 3 70 8 122 11 136 9 421 42 563 65 575 92 869 212 1412 573 549 366 1171 816 1400 1012 166 143 335 297 335 305 0 4 -64 97 -143 206 -78 110 -178 251 -221 314 -113 164 -187 250 -301 352 -86 77 -267 209 -284 207 -3 0 -40 -37 -81 -81z","fill":"#000"}
	];

});

	// Iterate through the regions & change Yorkshire's fill colour to gold
	for (var i = 0, len = mask.length; i <= len; i++) {

	    var el = mask[i];

	    el.mouseover(function() {
	        this.toFront();
	        this.attr({
	            cursor: 'pointer',
	            fill: '#990000',
	            stroke: '#fff',
	            'stroke-width': '2'
	        });
	        this.animate({
	            scale: '1.2'
	        }, 200);
	    });
	    el.mouseout(function() {
	        this.animate({
	            scale: '1.05'
	        }, 200);
	        this.attr({
	            fill: '#003366'
	        });
	    });
	    el.click(function() {
	        this.animate({
	            fill: 'green'
	        }, 200);
	    });

	};



