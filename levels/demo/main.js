const LevelNoteNum=367,LevelSpeed=1.5,audio=new Audio("https://music.163.com/song/media/outer/url?id=37722198.mp3");function LevelInit(){document.body.appendChild(audio),audio.load(),LevelArea=new Area,first(),audio.addEventListener("canplaythrough",LevelStart)}function LevelStart(){audio.removeEventListener("canplaythrough",LevelStart),setFrameoutF(function(){audio.play()},75/(LevelSpeed*GlobalSpeed)),start()}function first(){setFrameout(function(){LevelArea.TapMake(76)},1020),setFrameout(function(){LevelArea.TapMake(60)},1704),setFrameout(function(){LevelArea.TapMake(50)},2428),setFrameout(function(){LevelArea.TapMake(50)},2933),setFrameout(function(){LevelArea.TapMake(50)},3493),setFrameout(function(){LevelArea.TapMake(50)},4030),setFrameout(function(){LevelArea.TapMake(50)},4643),setFrameout(function(){LevelArea.TapMake(50)},5320),setFrameout(function(){LevelArea.TapMake(40)},6181),setFrameout(function(){LevelArea.TapMake(40)},6720),setFrameout(function(){LevelArea.TapMake(40)},7220),setFrameout(function(){LevelArea.TapMake(24)},7874),setFrameout(function(){LevelArea.TapMake(24)},8410),setFrameout(function(){LevelArea.TapMake(24)},8954),setFrameout(function(){LevelArea.TapMake(24)},9527),setFrameout(function(){LevelArea.TapMake(50)},10276),setFrameout(function(){LevelArea.TapMake(50)},11071),setFrameout(function(){LevelArea.TapMake(50)},11603),setFrameout(function(){LevelArea.TapMake(50)},12202),setFrameout(function(){LevelArea.TapMake(50)},12751),setFrameout(function(){LevelArea.TapMake(50)},13479),setFrameout(function(){LevelArea.TapMake(24)},14271),setFrameout(function(){LevelArea.TapMake(24)},14804),setFrameout(function(){LevelArea.TapMake(24)},15325),setFrameout(function(){LevelArea.TapMake(24)},15871),setFrameout(function(){LevelArea.TapMake(24)},16400),setFrameout(function(){LevelArea.TapMake(60)},17032),setFrameout(function(){LevelArea.TapMake(60)},17611),setFrameout(function(){LevelArea.TapMake(76)},18250),setFrameout(function(){LevelArea.TapMake(40)},18951),setFrameout(function(){LevelArea.TapMake(76)},19603),setFrameout(function(){LevelArea.TapMake(76)},20198),setFrameout(function(){LevelArea.TapMake(76)},20807),setFrameout(function(){LevelArea.TapMake(24)},21573),setFrameout(function(){LevelArea.TapMake(24)},22147),setFrameout(function(){LevelArea.TapMake(40)},22804),setFrameout(function(){LevelArea.TapMake(40)},23348),setFrameout(function(){LevelArea.TapMake(40)},23873),setFrameout(function(){LevelArea.TapMake(40)},24403),setFrameout(function(){LevelArea.TapMake(50)},25397),setFrameout(function(){LevelArea.TapMake(60)},26003),setFrameout(function(){LevelArea.TapMake(50)},26885),setFrameout(function(){LevelArea.TapMake(24)},27604),setFrameout(function(){LevelArea.TapMake(24)},28201),setFrameout(function(){LevelArea.TapMake(76)},28828),setFrameout(function(){LevelArea.TapMake(50)},29476),setFrameout(function(){LevelArea.TapMake(60)},30273),setFrameout(function(){LevelArea.TapMake(60)},30802),setFrameout(function(){LevelArea.TapMake(40)},31797),setFrameout(function(){LevelArea.TapMake(24)},32404),setFrameout(function(){LevelArea.TapMake(76)},33004),setFrameout(function(){LevelArea.TapMake(76)},33504),setFrameout(function(){LevelArea.TapMake(76)},34006),setFrameout(function(){LevelArea.TapMake(76)},34605),setFrameout(function(){LevelArea.TapMake(76)},35154),setFrameout(function(){LevelArea.TapMake(60)},35875),setFrameout(function(){LevelArea.TapMake(24)},36672),setFrameout(function(){LevelArea.TapMake(24)},37202),setFrameout(function(){LevelArea.TapMake(50)},37804),setFrameout(function(){LevelArea.TapMake(40)},38427),setFrameout(function(){LevelArea.TapMake(60)},39074),setFrameout(function(){LevelArea.TapMake(50)},39844),setFrameout(function(){LevelArea.TapMake(50)},40404),setFrameout(function(){LevelArea.TapMake(24)},41005),setFrameout(function(){LevelArea.TapMake(40)},41875),setFrameout(function(){LevelArea.TapMake(40)},42381),setFrameout(function(){LevelArea.TapMake(40)},43074),setFrameout(function(){LevelArea.TapMake(60)},43878),setFrameout(function(){LevelArea.TapMake(40)},44582),setFrameout(function(){LevelArea.TapMake(76)},45204),setFrameout(function(){LevelArea.TapMake(50)},45805),setFrameout(function(){LevelArea.TapMake(60)},46415),setFrameout(function(){LevelArea.TapMake(60)},47082),setFrameout(function(){LevelArea.TapMake(76)},47751),setFrameout(function(){LevelArea.TapMake(60)},48405),setFrameout(function(){LevelArea.TapMake(60)},48973),setFrameout(function(){LevelArea.TapMake(60)},49548),setFrameout(function(){LevelArea.TapMake(60)},50279),setFrameout(function(){LevelArea.TapMake(60)},50879),setFrameout(function(){LevelArea.TapMake(24)},51603),setFrameout(function(){LevelArea.TapMake(24)},52124),setFrameout(function(){LevelArea.TapMake(60)},52746),setFrameout(function(){LevelArea.TapMake(24)},53473),setFrameout(function(){LevelArea.TapMake(24)},53974),setFrameout(function(){LevelArea.TapMake(24)},54751),setFrameout(function(){LevelArea.TapMake(24)},55284),setFrameout(function(){LevelArea.TapMake(24)},55872),setFrameout(function(){LevelArea.TapMake(50)},56677),setFrameout(function(){LevelArea.TapMake(76)},57380),setFrameout(function(){LevelArea.TapMake(24)},58e3),setFrameout(function(){LevelArea.TapMake(50)},58998),setFrameout(function(){LevelArea.TapMake(50)},59503),setFrameout(function(){LevelArea.TapMake(50)},60018),setFrameout(function(){LevelArea.TapMake(50)},60546),setFrameout(function(){LevelArea.TapMake(50)},61204),setFrameout(function(){LevelArea.TapMake(50)},61724),setFrameout(function(){LevelArea.TapMake(50)},62272),setFrameout(function(){LevelArea.TapMake(50)},62787),setFrameout(function(){LevelArea.TapMake(60)},63572),setFrameout(function(){LevelArea.TapMake(60)},64080),setFrameout(function(){LevelArea.TapMake(60)},64672),setFrameout(function(){LevelArea.TapMake(76)},65379),setFrameout(function(){LevelArea.TapMake(76)},65904),setFrameout(function(){LevelArea.TapMake(24)},66602),setFrameout(function(){LevelArea.TapMake(24)},67169),setFrameout(function(){LevelArea.TapMake(60)},67876),setFrameout(function(){LevelArea.TapMake(76)},68700),setFrameout(function(){LevelArea.TapMake(76)},69203),setFrameout(function(){LevelArea.TapMake(50)},70070),setFrameout(function(){LevelArea.TapMake(50)},70604),setFrameout(function(){LevelArea.TapMake(50)},71150),setFrameout(function(){LevelArea.TapMake(50)},71777),setFrameout(function(){LevelArea.TapMake(50)},72302),setFrameout(function(){LevelArea.TapMake(60)},73002),setFrameout(function(){LevelArea.TapMake(60)},73572),setFrameout(function(){LevelArea.TapMake(76)},74278),setFrameout(function(){LevelArea.TapMake(24)},75072),setFrameout(function(){LevelArea.TapMake(24)},75578),setFrameout(function(){LevelArea.TapMake(24)},76692),setFrameout(function(){LevelArea.TapMake(24)},77205),setFrameout(function(){LevelArea.TapMake(50)},78101),setFrameout(function(){LevelArea.TapMake(50)},78636),setFrameout(function(){LevelArea.TapMake(50)},79150),setFrameout(function(){LevelArea.TapMake(50)},79746),setFrameout(function(){LevelArea.TapMake(76)},80404),setFrameout(function(){LevelArea.TapMake(76)},80924),setFrameout(function(){LevelArea.TapMake(76)},81473),setFrameout(function(){LevelArea.TapMake(76)},82003),setFrameout(function(){LevelArea.TapMake(50)},82804),setFrameout(function(){LevelArea.TapMake(24)},84204),setFrameout(function(){LevelArea.TapMake(76)},85205),setFrameout(function(){LevelArea.TapMake(76)},85804),setFrameout(function(){LevelArea.TapMake(76)},86354),setFrameout(function(){LevelArea.TapMake(40)},87079),setFrameout(function(){LevelArea.TapMake(60)},87751),setFrameout(function(){LevelArea.TapMake(76)},88406),setFrameout(function(){LevelArea.TapMake(76)},89002),setFrameout(function(){LevelArea.TapMake(40)},89618),setFrameout(function(){LevelArea.TapMake(24)},90251),setFrameout(function(){LevelArea.TapMake(50)},90879),setFrameout(function(){LevelArea.TapMake(24)},91605),setFrameout(function(){LevelArea.TapMake(24)},92203),setFrameout(function(){LevelArea.TapMake(24)},92748),setFrameout(function(){LevelArea.TapMake(76)},93476),setFrameout(function(){LevelArea.TapMake(50)},94274),setFrameout(function(){LevelArea.TapMake(50)},94781),setFrameout(function(){LevelArea.TapMake(76)},95439),setFrameout(function(){LevelArea.TapMake(76)},95950),setFrameout(function(){LevelArea.TapMake(60)},96652),setFrameout(function(){LevelArea.TapMake(76)},97381),setFrameout(function(){LevelArea.TapMake(40)},98002),setFrameout(function(){LevelArea.TapMake(40)},98597),setFrameout(function(){LevelArea.TapMake(40)},99174),setFrameout(function(){LevelArea.TapMake(24)},99873),setFrameout(function(){LevelArea.TapMake(40)},100578),setFrameout(function(){LevelArea.TapMake(24)},101203),setFrameout(function(){LevelArea.TapMake(60)},101805),setFrameout(function(){LevelArea.TapMake(60)},102351),setFrameout(function(){LevelArea.TapMake(60)},103080),setFrameout(function(){LevelArea.TapMake(50)},103778),setFrameout(function(){LevelArea.TapMake(60)},104402),setFrameout(function(){LevelArea.TapMake(60)},105350),setFrameout(function(){LevelArea.TapMake(40)},106002),setFrameout(function(){LevelArea.TapMake(40)},106601),setFrameout(function(){LevelArea.TapMake(50)},107605),setFrameout(function(){LevelArea.TapMake(24)},108205),setFrameout(function(){LevelArea.TapMake(24)},108749),setFrameout(function(){LevelArea.TapMake(50)},109476),setFrameout(function(){LevelArea.TapMake(24)},110195),setFrameout(function(){LevelArea.TapMake(60)},110801),setFrameout(function(){LevelArea.TapMake(50)},111404),setFrameout(function(){LevelArea.TapMake(50)},111951),setFrameout(function(){LevelArea.TapMake(24)},112678),setFrameout(function(){LevelArea.TapMake(40)},113368),setFrameout(function(){LevelArea.TapMake(40)},114007),setFrameout(function(){LevelArea.TapMake(40)},114601),setFrameout(function(){LevelArea.TapMake(24)},115221),setFrameout(function(){LevelArea.TapMake(60)},115844),setFrameout(function(){LevelArea.TapMake(24)},116550),setFrameout(function(){LevelArea.TapMake(24)},117086),setFrameout(function(){LevelArea.TapMake(24)},117613),setFrameout(function(){LevelArea.TapMake(24)},118270),setFrameout(function(){LevelArea.TapMake(24)},118805),setFrameout(function(){LevelArea.TapMake(24)},119404),setFrameout(function(){LevelArea.TapMake(24)},120275),setFrameout(function(){LevelArea.TapMake(24)},120785),setFrameout(function(){LevelArea.TapMake(24)},121477),setFrameout(function(){LevelArea.TapMake(76)},122255),setFrameout(function(){LevelArea.TapMake(40)},122978),setFrameout(function(){LevelArea.TapMake(40)},123502),setFrameout(function(){LevelArea.TapMake(50)},124582),setFrameout(function(){LevelArea.TapMake(60)},125203),setFrameout(function(){LevelArea.TapMake(60)},125748),setFrameout(function(){LevelArea.TapMake(50)},126614),setFrameout(function(){LevelArea.TapMake(50)},127185),setFrameout(function(){LevelArea.TapMake(60)},127874),setFrameout(function(){LevelArea.TapMake(60)},128402),setFrameout(function(){LevelArea.TapMake(60)},129395),setFrameout(function(){LevelArea.TapMake(60)},129902),setFrameout(function(){LevelArea.TapMake(50)},131090),setFrameout(function(){LevelArea.TapMake(50)},131603),setFrameout(function(){LevelArea.TapMake(50)},132147),setFrameout(function(){LevelArea.TapMake(50)},132684),setFrameout(function(){LevelArea.TapMake(50)},133204),setFrameout(function(){LevelArea.TapMake(50)},133722),setFrameout(function(){LevelArea.TapMake(50)},134272),setFrameout(function(){LevelArea.TapMake(50)},134800),setFrameout(function(){LevelArea.TapMake(24)},135800),setFrameout(function(){LevelArea.TapMake(24)},136403),setFrameout(function(){LevelArea.TapMake(40)},137493),setFrameout(function(){LevelArea.TapMake(40)},138003),setFrameout(function(){LevelArea.TapMake(40)},138546),setFrameout(function(){LevelArea.TapMake(60)},139222),setFrameout(function(){LevelArea.TapMake(40)},139975),setFrameout(function(){LevelArea.TapMake(76)},140675),setFrameout(function(){LevelArea.TapMake(76)},141185),setFrameout(function(){LevelArea.TapMake(60)},141956),setFrameout(function(){LevelArea.TapMake(50)},142702),setFrameout(function(){LevelArea.TapMake(76)},143781),setFrameout(function(){LevelArea.TapMake(76)},144403),setFrameout(function(){LevelArea.TapMake(76)},144948),setFrameout(function(){LevelArea.TapMake(76)},145469),setFrameout(function(){LevelArea.TapMake(76)},146005),setFrameout(function(){LevelArea.TapMake(76)},146567),setFrameout(function(){LevelArea.TapMake(76)},147077),setFrameout(function(){LevelArea.TapMake(76)},147581),setFrameout(function(){LevelArea.TapMake(40)},148805),setFrameout(function(){LevelArea.TapMake(40)},149447),setFrameout(function(){LevelArea.TapMake(50)},150078),setFrameout(function(){LevelArea.TapMake(24)},151080),setFrameout(function(){LevelArea.TapMake(40)},151785),setFrameout(function(){LevelArea.TapMake(76)},152672),setFrameout(function(){LevelArea.TapMake(50)},153372),setFrameout(function(){LevelArea.TapMake(50)},154277),setFrameout(function(){LevelArea.TapMake(50)},154844),setFrameout(function(){LevelArea.TapMake(60)},155905),setFrameout(function(){LevelArea.TapMake(24)},156585),setFrameout(function(){LevelArea.TapMake(76)},157481),setFrameout(function(){LevelArea.TapMake(24)},158156),setFrameout(function(){LevelArea.TapMake(60)},159187),setFrameout(function(){LevelArea.TapMake(60)},159775),setFrameout(function(){LevelArea.TapMake(60)},160301),setFrameout(function(){LevelArea.TapMake(60)},160801),setFrameout(function(){LevelArea.TapMake(60)},161351),setFrameout(function(){LevelArea.TapMake(40)},162273),setFrameout(function(){LevelArea.TapMake(40)},162902),setFrameout(function(){LevelArea.TapMake(40)},163404),setFrameout(function(){LevelArea.TapMake(40)},163950),setFrameout(function(){LevelArea.TapMake(40)},164495),setFrameout(function(){LevelArea.TapMake(40)},165003),setFrameout(function(){LevelArea.TapMake(40)},165503),setFrameout(function(){LevelArea.TapMake(40)},167076),setFrameout(function(){LevelArea.TapMake(40)},167752),setFrameout(function(){LevelArea.TapMake(40)},168292),setFrameout(function(){LevelArea.TapMake(40)},168806),setFrameout(function(){LevelArea.TapMake(40)},169395),setFrameout(function(){LevelArea.TapMake(76)},170009),setFrameout(function(){LevelArea.TapMake(76)},170602),setFrameout(function(){LevelArea.TapMake(76)},171185),setFrameout(function(){LevelArea.TapMake(40)},172088),setFrameout(function(){LevelArea.TapMake(40)},172597),setFrameout(function(){LevelArea.TapMake(40)},173127),setFrameout(function(){LevelArea.TapMake(40)},173687),setFrameout(function(){LevelArea.TapMake(76)},175046),setFrameout(function(){LevelArea.TapMake(50)},175846),setFrameout(function(){LevelArea.TapMake(50)},176362),setFrameout(function(){LevelArea.TapMake(50)},176862),setFrameout(function(){LevelArea.TapMake(24)},177683),setFrameout(function(){LevelArea.TapMake(24)},178491),setFrameout(function(){LevelArea.TapMake(24)},179069),setFrameout(function(){LevelArea.TapMake(24)},179602),setFrameout(function(){LevelArea.TapMake(60)},180203),setFrameout(function(){LevelArea.TapMake(60)},180737),setFrameout(function(){LevelArea.TapMake(50)},181550),setFrameout(function(){LevelArea.TapMake(76)},182381),setFrameout(function(){LevelArea.TapMake(76)},183077),setFrameout(function(){LevelArea.TapMake(24)},183871),setFrameout(function(){LevelArea.TapMake(24)},184381),setFrameout(function(){LevelArea.TapMake(40)},185008),setFrameout(function(){LevelArea.TapMake(40)},185550),setFrameout(function(){LevelArea.TapMake(50)},186279),setFrameout(function(){LevelArea.TapMake(76)},186998),setFrameout(function(){LevelArea.TapMake(76)},187501),setFrameout(function(){LevelArea.TapMake(76)},188502),setFrameout(function(){LevelArea.TapMake(76)},189003),setFrameout(function(){LevelArea.TapMake(76)},189580),setFrameout(function(){LevelArea.TapMake(60)},190193),setFrameout(function(){LevelArea.TapMake(60)},190734),setFrameout(function(){LevelArea.TapMake(60)},191284),setFrameout(function(){LevelArea.TapMake(50)},191899),setFrameout(function(){LevelArea.TapMake(76)},192652),setFrameout(function(){LevelArea.TapMake(76)},193152),setFrameout(function(){LevelArea.TapMake(76)},193818),setFrameout(function(){LevelArea.TapMake(24)},194635),setFrameout(function(){LevelArea.TapMake(24)},195153),setFrameout(function(){LevelArea.TapMake(40)},196204),setFrameout(function(){LevelArea.TapMake(40)},196725),setFrameout(function(){LevelArea.TapMake(60)},197583),setFrameout(function(){LevelArea.TapMake(60)},198150),setFrameout(function(){LevelArea.TapMake(60)},198667),setFrameout(function(){LevelArea.TapMake(60)},199197),setFrameout(function(){LevelArea.TapMake(60)},199778),setFrameout(function(){LevelArea.TapMake(60)},200302),setFrameout(function(){LevelArea.TapMake(40)},201034),setFrameout(function(){LevelArea.TapMake(24)},202604),setFrameout(function(){LevelArea.TapMake(24)},203119),setFrameout(function(){LevelArea.TapMake(24)},204551),setFrameout(function(){LevelArea.TapMake(60)},205203),setFrameout(function(){LevelArea.TapMake(24)},205803),setFrameout(function(){LevelArea.TapMake(60)},206415),setFrameout(function(){LevelArea.TapMake(76)},207075),setFrameout(function(){LevelArea.TapMake(76)},207879),setFrameout(function(){LevelArea.TapMake(76)},208407),setFrameout(function(){LevelArea.TapMake(24)},209007),setFrameout(function(){LevelArea.TapMake(76)},209617),setFrameout(function(){LevelArea.TapMake(60)},210277),setFrameout(function(){LevelArea.TapMake(60)},211073),setFrameout(function(){LevelArea.TapMake(60)},211604),setFrameout(function(){LevelArea.TapMake(24)},212205),setFrameout(function(){LevelArea.TapMake(40)},212811),setFrameout(function(){LevelArea.TapMake(76)},213475),setFrameout(function(){LevelArea.TapMake(24)},214142),setFrameout(function(){LevelArea.TapMake(76)},214806),setFrameout(function(){LevelArea.TapMake(76)},215404),setFrameout(function(){LevelArea.TapMake(76)},215948),setFrameout(function(){LevelArea.TapMake(50)},216752),setFrameout(function(){LevelArea.TapMake(60)},217479),setFrameout(function(){LevelArea.TapMake(24)},218282),setFrameout(function(){LevelArea.TapMake(76)},219091),setFrameout(function(){LevelArea.TapMake(76)},219604),setFrameout(function(){LevelArea.TapMake(76)},220597),setFrameout(function(){LevelArea.TapMake(40)},221203),setFrameout(function(){LevelArea.TapMake(40)},221721),setFrameout(function(){LevelArea.TapMake(40)},222292),setFrameout(function(){LevelArea.TapMake(40)},222804),setFrameout(function(){LevelArea.TapMake(40)},223374),setFrameout(function(){LevelArea.TapMake(40)},223875),setFrameout(function(){LevelArea.TapMake(40)},224386),setFrameout(function(){LevelArea.TapMake(60)},225399),setFrameout(function(){LevelArea.TapMake(24)},226281),setFrameout(function(){LevelArea.TapMake(40)},227097),setFrameout(function(){LevelArea.TapMake(40)},227601),setFrameout(function(){LevelArea.TapMake(50)},228589),setFrameout(function(){LevelArea.TapMake(60)},229502),setFrameout(function(){LevelArea.TapMake(60)},230079),setFrameout(function(){LevelArea.TapMake(24)},231077),setFrameout(function(){LevelArea.TapMake(24)},231609),setFrameout(function(){LevelArea.TapMake(24)},232354),setFrameout(function(){LevelArea.TapMake(24)},232900),setFrameout(function(){LevelArea.TapMake(24)},233400),setFrameout(function(){LevelArea.TapMake(60)},234278),setFrameout(function(){LevelArea.TapMake(24)},235045),setFrameout(function(){LevelArea.TapMake(50)},235876),setFrameout(function(){LevelArea.TapMake(24)},236550),setFrameout(function(){LevelArea.TapMake(50)},237478),setFrameout(function(){LevelArea.TapMake(24)},238279),setFrameout(function(){LevelArea.TapMake(40)},239076),setFrameout(function(){LevelArea.TapMake(76)},239756),setFrameout(function(){LevelArea.TapMake(24)},240417),setFrameout(function(){LevelArea.TapMake(24)},241002),setFrameout(function(){LevelArea.TapMake(24)},241546),setFrameout(function(){LevelArea.TapMake(24)},242604),setFrameout(function(){LevelArea.TapMake(24)},243123),setFrameout(function(){LevelArea.TapMake(76)},244060),setFrameout(function(){LevelArea.TapMake(76)},244596),setFrameout(function(){LevelArea.TapMake(76)},245098),setFrameout(function(){LevelArea.TapMake(76)},247702)}