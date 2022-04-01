(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



// stage content:
(lib.hafta3odev1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AH0AAQAADPiTCSQiSCTjPAAQjOAAiSiTQiSiSAAjPQAAjOCSiSQCSiSDOAAQDPAACSCSQCTCSAADOg");
	this.shape.setTransform(49.05,51.05);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("AlhFhQiSiSAAjPQAAjOCSiTQCTiRDOgBQDPABCSCRQCTCTAADOQAADPiTCSQiSCSjPAAQjOAAiTiSg");
	this.shape_1.setTransform(49.05,51.05);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CC0000").s().p("AlhFhQiSiSAAjPQAAjOCSiTQCTiRDOgBQDPABCSCRQCTCTAADOQAADPiTCSQiSCSjPAAQjOAAiTiSg");
	this.shape_2.setTransform(450.05,148.95);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(1,1,1).p("An9n9IP7AAIAAP7Iv7AAg");
	this.shape_3.setTransform(449,449);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#33FF00").s().p("An9H+IAAv7IP7AAIAAP7g");
	this.shape_4.setTransform(449,449);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#66FF00").s().p("An9H+IAAv7IP7AAIAAP7g");
	this.shape_5.setTransform(151,449);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0000FF").s().p("An9H+IAAv7IP7AAIAAP7g");
	this.shape_6.setTransform(51,449);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1,p:{x:49.05,y:51.05}},{t:this.shape,p:{x:49.05,y:51.05}}]}).to({state:[{t:this.shape_1,p:{x:149,y:49.95}},{t:this.shape,p:{x:149,y:49.95}}]},9).to({state:[{t:this.shape_1,p:{x:250,y:49.95}},{t:this.shape,p:{x:250,y:49.95}}]},10).to({state:[{t:this.shape_1,p:{x:350,y:49.95}},{t:this.shape,p:{x:350,y:49.95}}]},10).to({state:[{t:this.shape_1,p:{x:450.05,y:49.95}},{t:this.shape,p:{x:450.05,y:49.95}}]},10).to({state:[{t:this.shape_2,p:{y:148.95}},{t:this.shape,p:{x:450.05,y:148.95}}]},10).to({state:[{t:this.shape_2,p:{y:250.95}},{t:this.shape,p:{x:450.05,y:250.95}}]},10).to({state:[{t:this.shape_2,p:{y:349.95}},{t:this.shape,p:{x:450.05,y:349.95}}]},10).to({state:[{t:this.shape_4,p:{x:449}},{t:this.shape_3,p:{x:449,y:449}}]},10).to({state:[{t:this.shape_4,p:{x:352}},{t:this.shape_3,p:{x:352,y:449}}]},10).to({state:[{t:this.shape_4,p:{x:251}},{t:this.shape_3,p:{x:251,y:449}}]},10).to({state:[{t:this.shape_5},{t:this.shape_3,p:{x:151,y:449}}]},10).to({state:[{t:this.shape_6,p:{y:449}},{t:this.shape_3,p:{x:51,y:449}}]},10).to({state:[{t:this.shape_6,p:{y:348.05}},{t:this.shape_3,p:{x:51,y:348.05}}]},10).to({state:[{t:this.shape_6,p:{y:250.05}},{t:this.shape_3,p:{x:51,y:250.05}}]},10).to({state:[{t:this.shape_6,p:{y:148.05}},{t:this.shape_3,p:{x:51,y:148.05}}]},10).to({state:[{t:this.shape_6,p:{y:148.05}},{t:this.shape_3,p:{x:51,y:148.05}}]},10).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(248.1,249,252.9,252);
// library properties:
lib.properties = {
	id: '52009DC2999D1B46A7257F9B2332F46B',
	width: 500,
	height: 500,
	fps: 24,
	color: "#252128",
	opacity: 1.00,
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['52009DC2999D1B46A7257F9B2332F46B'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;