const LevelNoteNum=36,LevelSpeed=1.3,LevelMusic=new Audio(url("levels/demo2/music.mp3"));function LevelInit(){LevelArea=new Area,first()}function LevelStart(){LevelMusic.addEventListener("ended",()=>{setTimeout(end,1e3)}),setFrameoutF(function(){LevelMusic.play()},75/(LevelSpeed*GlobalSpeed))}function first(){setFrameout(function(){LevelArea.newHoldT(60)},54),setFrameout(function(){LevelArea.newHoldT(24)},387),setFrameout(function(){LevelArea.newHoldT(76)},719),setFrameout(function(){LevelArea.newHoldT(60)},1052),setFrameout(function(){LevelArea.newHoldT(76)},1384),setFrameout(function(){LevelArea.newHoldT(60)},1718),setFrameout(function(){LevelArea.newHoldT(24)},2053),setFrameout(function(){LevelArea.newHoldT(50)},2386),setFrameout(function(){LevelArea.newHoldT(76)},2719),setFrameout(function(){LevelArea.newHoldT(40)},3052),setFrameout(function(){LevelArea.newHoldT(50)},3386),setFrameout(function(){LevelArea.newHoldT(50)},3720),setFrameout(function(){LevelArea.newHoldT(24)},4053),setFrameout(function(){LevelArea.newHoldT(60)},4387),setFrameout(function(){LevelArea.newHoldT(24)},4719),setFrameout(function(){LevelArea.newHoldT(40)},5050),setFrameout(function(){LevelArea.newHoldT(76)},5380),setFrameout(function(){LevelArea.newHoldT(40)},5719),setFrameout(function(){LevelArea.newHoldT(50)},6052),setFrameout(function(){LevelArea.newHoldT(40)},6386),setFrameout(function(){LevelArea.newHoldT(76)},6718),setFrameout(function(){LevelArea.newDrag(76)},6893),setFrameout(function(){LevelArea.newDrag(76)},7054),setFrameout(function(){LevelArea.newHoldT(40)},7386),setFrameout(function(){LevelArea.newHoldT(76)},7716),setFrameout(function(){LevelArea.newHoldT(76)},8053),setFrameout(function(){LevelArea.newHoldT(50)},8386),setFrameout(function(){LevelArea.newHoldT(76)},8718),setFrameout(function(){LevelArea.newHoldT(60)},9053),setFrameout(function(){LevelArea.newHoldT(76)},9384),setFrameout(function(){LevelArea.newHoldT(76)},9709),setFrameout(function(){LevelArea.newHoldT(50)},10049),setFrameout(function(){LevelArea.newDrag(50)},10226),setFrameout(function(){LevelArea.newDrag(50)},10347),setFrameout(function(){LevelArea.newDrag(50)},10365),setFrameout(function(){LevelArea.newDrag(50)},10376)}