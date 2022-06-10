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
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.gizlibuton3 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#00FF00").s().p("EgYwAgbMAAAhA1MAxhAAAMAAABA1gAvEcDIfPAAMAAAg3JI/PAAg");
	this.shape.setTransform(-0.025,0.025);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-158.5,-207.4,317,414.9);


(lib.gizlibuton2 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#666600").s().p("A1KVLMAAAgqVMAqVAAAMAAAAqVgAu6O6Ie7AAIAA3RI+7AAg");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-135.5,-135.5,271,271);


(lib.gizlibuton = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#252525").ss(1,1,1).p("APUPZI+nAAIAA+x");
	this.shape.setTransform(2.275,7.75);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("A1+V/MAAAgr9MAr9AAAMAAAAr9gAvQQwIe7AAIAAgJIAA+xI+nAAIgUAAg");
	this.shape_1.setTransform(-0.025,-0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-140.7,-140.7,281.4,281.4);


(lib.Button6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.text = new cjs.Text("İLETİŞİM", "bold 32px 'Times New Roman'");
	this.text.textAlign = "center";
	this.text.lineHeight = 37;
	this.text.lineWidth = 188;
	this.text.parent = this;
	this.text.setTransform(0,-14.7);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({color:"#FFFFFF"},0).wait(2));

	// Zemin
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#00FF00","#000000"],[0,1],0,0,0,0,0,103.1).s().p("AvnD6IAAnzIfPAAIAAHzg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#00FF00","#000000"],[0,1],0.8,-19.1,0,0.8,-19.1,110).s().p("AvnD6IAAnzIfPAAIAAHzg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#00FF00","#000000"],[0,1],0.1,22.1,0,0.1,22.1,110.6).s().p("AvnD6IAAnzIfPAAIAAHzg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-100,-25,200,50);


(lib.Button53 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.text = new cjs.Text("Memleket", "bold 32px 'Times New Roman'");
	this.text.textAlign = "center";
	this.text.lineHeight = 37;
	this.text.lineWidth = 188;
	this.text.parent = this;
	this.text.setTransform(0,-14.7);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({color:"#FFFFFF"},0).wait(2));

	// Zemin
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#00FF00","#000000"],[0,1],0,0,0,0,0,103.1).s().p("AvnD6IAAnzIfPAAIAAHzg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#00FF00","#000000"],[0,1],0.8,-19.1,0,0.8,-19.1,110).s().p("AvnD6IAAnzIfPAAIAAHzg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#00FF00","#000000"],[0,1],0.1,22.1,0,0.1,22.1,110.6).s().p("AvnD6IAAnzIfPAAIAAHzg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-100,-25,200,50);


(lib.Button52 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.text = new cjs.Text("GAL", "bold 32px 'Times New Roman'");
	this.text.textAlign = "center";
	this.text.lineHeight = 37;
	this.text.lineWidth = 188;
	this.text.parent = this;
	this.text.setTransform(0,-14.7);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({color:"#FFFFFF"},0).wait(2));

	// Zemin
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#00FF00","#000000"],[0,1],0,0,0,0,0,103.1).s().p("AvnD6IAAnzIfPAAIAAHzg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#00FF00","#000000"],[0,1],0.8,-19.1,0,0.8,-19.1,110).s().p("AvnD6IAAnzIfPAAIAAHzg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#00FF00","#000000"],[0,1],0.1,22.1,0,0.1,22.1,110.6).s().p("AvnD6IAAnzIfPAAIAAHzg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-100,-25,200,50);


(lib.Button51 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.text = new cjs.Text("KMYO", "bold 32px 'Times New Roman'");
	this.text.textAlign = "center";
	this.text.lineHeight = 37;
	this.text.lineWidth = 188;
	this.text.parent = this;
	this.text.setTransform(0,-14.7);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({color:"#FFFFFF"},0).wait(2));

	// Zemin
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#00FF00","#000000"],[0,1],0,0,0,0,0,103.1).s().p("AvnD6IAAnzIfPAAIAAHzg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#00FF00","#000000"],[0,1],0.8,-19.1,0,0.8,-19.1,110).s().p("AvnD6IAAnzIfPAAIAAHzg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#00FF00","#000000"],[0,1],0.1,22.1,0,0.1,22.1,110.6).s().p("AvnD6IAAnzIfPAAIAAHzg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-100,-25,200,50);


(lib.Button5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.text = new cjs.Text("LİNKLER", "bold 32px 'Times New Roman'");
	this.text.textAlign = "center";
	this.text.lineHeight = 37;
	this.text.lineWidth = 188;
	this.text.parent = this;
	this.text.setTransform(0,-14.7);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({color:"#FFFFFF"},0).wait(2));

	// Zemin
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#00FF00","#000000"],[0,1],0,0,0,0,0,103.1).s().p("AvnD6IAAnzIfPAAIAAHzg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#00FF00","#000000"],[0,1],0.8,-19.1,0,0.8,-19.1,110).s().p("AvnD6IAAnzIfPAAIAAHzg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#00FF00","#000000"],[0,1],0.1,22.1,0,0.1,22.1,110.6).s().p("AvnD6IAAnzIfPAAIAAHzg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-100,-25,200,50);


(lib.Button42 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.text = new cjs.Text("Müzık", "bold 32px 'Times New Roman'");
	this.text.textAlign = "center";
	this.text.lineHeight = 37;
	this.text.lineWidth = 188;
	this.text.parent = this;
	this.text.setTransform(0,-14.7);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({color:"#FFFFFF"},0).wait(2));

	// Zemin
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#00FF00","#000000"],[0,1],0,0,0,0,0,103.1).s().p("AvnD6IAAnzIfPAAIAAHzg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#00FF00","#000000"],[0,1],0.8,-19.1,0,0.8,-19.1,110).s().p("AvnD6IAAnzIfPAAIAAHzg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#00FF00","#000000"],[0,1],0.1,22.1,0,0.1,22.1,110.6).s().p("AvnD6IAAnzIfPAAIAAHzg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-100,-25,200,50);


(lib.Button41 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.text = new cjs.Text("F1", "bold 32px 'Times New Roman'");
	this.text.textAlign = "center";
	this.text.lineHeight = 37;
	this.text.lineWidth = 188;
	this.text.parent = this;
	this.text.setTransform(0,-14.7);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({color:"#FFFFFF"},0).wait(2));

	// Zemin
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#00FF00","#000000"],[0,1],0,0,0,0,0,103.1).s().p("AvnD6IAAnzIfPAAIAAHzg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#00FF00","#000000"],[0,1],0.8,-19.1,0,0.8,-19.1,110).s().p("AvnD6IAAnzIfPAAIAAHzg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#00FF00","#000000"],[0,1],0.1,22.1,0,0.1,22.1,110.6).s().p("AvnD6IAAnzIfPAAIAAHzg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-100,-25,200,50);


(lib.Button4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.text = new cjs.Text("HOBİLER", "bold 32px 'Times New Roman'");
	this.text.textAlign = "center";
	this.text.lineHeight = 37;
	this.text.lineWidth = 188;
	this.text.parent = this;
	this.text.setTransform(0,-14.7);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({color:"#FFFFFF"},0).wait(2));

	// Zemin
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#00FF00","#000000"],[0,1],0,0,0,0,0,103.1).s().p("AvnD6IAAnzIfPAAIAAHzg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#00FF00","#000000"],[0,1],0.8,-19.1,0,0.8,-19.1,110).s().p("AvnD6IAAnzIfPAAIAAHzg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#00FF00","#000000"],[0,1],0.1,22.1,0,0.1,22.1,110.6).s().p("AvnD6IAAnzIfPAAIAAHzg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-100,-25,200,50);


(lib.Button36 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.text = new cjs.Text("Ödev 6", "bold 32px 'Times New Roman'");
	this.text.textAlign = "center";
	this.text.lineHeight = 37;
	this.text.lineWidth = 188;
	this.text.parent = this;
	this.text.setTransform(0,-14.7);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({color:"#FFFFFF"},0).wait(2));

	// Zemin
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#00FF00","#000000"],[0,1],0,0,0,0,0,103.1).s().p("AvnD6IAAnzIfPAAIAAHzg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#00FF00","#000000"],[0,1],0.8,-19.1,0,0.8,-19.1,110).s().p("AvnD6IAAnzIfPAAIAAHzg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#00FF00","#000000"],[0,1],0.1,22.1,0,0.1,22.1,110.6).s().p("AvnD6IAAnzIfPAAIAAHzg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-100,-25,200,50);


(lib.Button35 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.text = new cjs.Text("Ödev 5", "bold 32px 'Times New Roman'");
	this.text.textAlign = "center";
	this.text.lineHeight = 37;
	this.text.lineWidth = 188;
	this.text.parent = this;
	this.text.setTransform(0,-14.7);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({color:"#FFFFFF"},0).wait(2));

	// Zemin
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#00FF00","#000000"],[0,1],0,0,0,0,0,103.1).s().p("AvnD6IAAnzIfPAAIAAHzg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#00FF00","#000000"],[0,1],0.8,-19.1,0,0.8,-19.1,110).s().p("AvnD6IAAnzIfPAAIAAHzg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#00FF00","#000000"],[0,1],0.1,22.1,0,0.1,22.1,110.6).s().p("AvnD6IAAnzIfPAAIAAHzg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-100,-25,200,50);


(lib.Button34 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.text = new cjs.Text("Ödev 4", "bold 32px 'Times New Roman'");
	this.text.textAlign = "center";
	this.text.lineHeight = 37;
	this.text.lineWidth = 188;
	this.text.parent = this;
	this.text.setTransform(0,-14.7);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({color:"#FFFFFF"},0).wait(2));

	// Zemin
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#00FF00","#000000"],[0,1],0,0,0,0,0,103.1).s().p("AvnD6IAAnzIfPAAIAAHzg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#00FF00","#000000"],[0,1],0.8,-19.1,0,0.8,-19.1,110).s().p("AvnD6IAAnzIfPAAIAAHzg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#00FF00","#000000"],[0,1],0.1,22.1,0,0.1,22.1,110.6).s().p("AvnD6IAAnzIfPAAIAAHzg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-100,-25,200,50);


(lib.Button33 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.text = new cjs.Text("Ödev 3", "bold 32px 'Times New Roman'");
	this.text.textAlign = "center";
	this.text.lineHeight = 37;
	this.text.lineWidth = 188;
	this.text.parent = this;
	this.text.setTransform(0,-14.7);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({color:"#FFFFFF"},0).wait(2));

	// Zemin
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#00FF00","#000000"],[0,1],0,0,0,0,0,103.1).s().p("AvnD6IAAnzIfPAAIAAHzg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#00FF00","#000000"],[0,1],0.8,-19.1,0,0.8,-19.1,110).s().p("AvnD6IAAnzIfPAAIAAHzg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#00FF00","#000000"],[0,1],0.1,22.1,0,0.1,22.1,110.6).s().p("AvnD6IAAnzIfPAAIAAHzg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-100,-25,200,50);


(lib.Button32 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.text = new cjs.Text("Ödev 2", "bold 32px 'Times New Roman'");
	this.text.textAlign = "center";
	this.text.lineHeight = 37;
	this.text.lineWidth = 188;
	this.text.parent = this;
	this.text.setTransform(0,-14.7);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({color:"#FFFFFF"},0).wait(2));

	// Zemin
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#00FF00","#000000"],[0,1],0,0,0,0,0,103.1).s().p("AvnD6IAAnzIfPAAIAAHzg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#00FF00","#000000"],[0,1],0.8,-19.1,0,0.8,-19.1,110).s().p("AvnD6IAAnzIfPAAIAAHzg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#00FF00","#000000"],[0,1],0.1,22.1,0,0.1,22.1,110.6).s().p("AvnD6IAAnzIfPAAIAAHzg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-100,-25,200,50);


(lib.Button31 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.text = new cjs.Text("Ödev 1", "bold 32px 'Times New Roman'");
	this.text.textAlign = "center";
	this.text.lineHeight = 37;
	this.text.lineWidth = 188;
	this.text.parent = this;
	this.text.setTransform(0,-14.7);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({color:"#FFFFFF"},0).wait(2));

	// Zemin
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#00FF00","#000000"],[0,1],0,0,0,0,0,103.1).s().p("AvnD6IAAnzIfPAAIAAHzg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#00FF00","#000000"],[0,1],0.8,-19.1,0,0.8,-19.1,110).s().p("AvnD6IAAnzIfPAAIAAHzg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#00FF00","#000000"],[0,1],0.1,22.1,0,0.1,22.1,110.6).s().p("AvnD6IAAnzIfPAAIAAHzg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-100,-25,200,50);


(lib.Button3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.text = new cjs.Text("ÖDEVLER", "bold 32px 'Times New Roman'");
	this.text.textAlign = "center";
	this.text.lineHeight = 37;
	this.text.lineWidth = 188;
	this.text.parent = this;
	this.text.setTransform(0,-14.7);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({color:"#FFFFFF"},0).wait(2));

	// Zemin
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#00FF00","#000000"],[0,1],0,0,0,0,0,103.1).s().p("AvnD6IAAnzIfPAAIAAHzg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#00FF00","#000000"],[0,1],0.8,-19.1,0,0.8,-19.1,110).s().p("AvnD6IAAnzIfPAAIAAHzg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#00FF00","#000000"],[0,1],0.1,22.1,0,0.1,22.1,110.6).s().p("AvnD6IAAnzIfPAAIAAHzg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-100,-25,200,50);


(lib.Button23 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.text = new cjs.Text("Memleketım", "bold 32px 'Times New Roman'");
	this.text.textAlign = "center";
	this.text.lineHeight = 37;
	this.text.lineWidth = 188;
	this.text.parent = this;
	this.text.setTransform(0,-14.7);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({color:"#FFFFFF"},0).wait(1).to({color:"#000000"},0).wait(1));

	// Zemin
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#00FF00","#000000"],[0,1],0,0,0,0,0,103.1).s().p("AvnD6IAAnzIfPAAIAAHzg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#00FF00","#000000"],[0,1],0.8,-19.1,0,0.8,-19.1,110).s().p("AvnD6IAAnzIfPAAIAAHzg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#00FF00","#000000"],[0,1],0.1,22.1,0,0.1,22.1,110.6).s().p("AvnD6IAAnzIfPAAIAAHzg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-100,-25,200,50);


(lib.Button22 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.text = new cjs.Text("RedBull", "bold 32px 'Times New Roman'");
	this.text.textAlign = "center";
	this.text.lineHeight = 37;
	this.text.lineWidth = 188;
	this.text.parent = this;
	this.text.setTransform(0,-14.7);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({color:"#FFFFFF"},0).wait(2));

	// Zemin
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#00FF00","#000000"],[0,1],0,0,0,0,0,103.1).s().p("AvnD6IAAnzIfPAAIAAHzg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#00FF00","#000000"],[0,1],0.8,-19.1,0,0.8,-19.1,110).s().p("AvnD6IAAnzIfPAAIAAHzg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#00FF00","#000000"],[0,1],0.1,22.1,0,0.1,22.1,110.6).s().p("AvnD6IAAnzIfPAAIAAHzg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-100,-25,200,50);


(lib.Button21 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.text = new cjs.Text("Fotoğraflarım", "bold 32px 'Times New Roman'");
	this.text.textAlign = "center";
	this.text.lineHeight = 37;
	this.text.lineWidth = 194;
	this.text.parent = this;
	this.text.setTransform(-0.05,-14.55);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({x:0,color:"#FFFFFF"},0).wait(1).to({x:-0.05,y:-15,lineWidth:198},0).wait(1));

	// Zemin
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#00FF00","#000000"],[0,1],0,0,0,0,0,103.1).s().p("AvnD6IAAnzIfPAAIAAHzg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#00FF00","#000000"],[0,1],0.8,-19.1,0,0.8,-19.1,110).s().p("AvnD6IAAnzIfPAAIAAHzg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#00FF00","#000000"],[0,1],0.1,22.1,0,0.1,22.1,110.6).s().p("AvnD6IAAnzIfPAAIAAHzg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-100.8,-25,201.6,50);


(lib.Button2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.text = new cjs.Text("GALERİ", "bold 32px 'Times New Roman'");
	this.text.textAlign = "center";
	this.text.lineHeight = 37;
	this.text.lineWidth = 188;
	this.text.parent = this;
	this.text.setTransform(0,-14.7);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({color:"#FFFFFF"},0).wait(2));

	// Zemin
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#00FF00","#000000"],[0,1],0,0,0,0,0,103.1).s().p("AvnD6IAAnzIfPAAIAAHzg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#00FF00","#000000"],[0,1],0.8,-19.1,0,0.8,-19.1,110).s().p("AvnD6IAAnzIfPAAIAAHzg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#00FF00","#000000"],[0,1],0.1,22.1,0,0.1,22.1,110.6).s().p("AvnD6IAAnzIfPAAIAAHzg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-100,-25,200,50);


(lib.Button1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.text = new cjs.Text("HAKKIMDA", "bold 32px 'Times New Roman'");
	this.text.textAlign = "center";
	this.text.lineHeight = 37;
	this.text.lineWidth = 188;
	this.text.parent = this;
	this.text.setTransform(0,-14.7);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({color:"#FFFFFF"},0).wait(2));

	// Zemin
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#00FF00","#000000"],[0,1],0,0,0,0,0,103.1).s().p("AvnD6IAAnzIfPAAIAAHzg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#00FF00","#000000"],[0,1],0.8,-19.1,0,0.8,-19.1,110).s().p("AvnD6IAAnzIfPAAIAAHzg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#00FF00","#000000"],[0,1],0.1,22.1,0,0.1,22.1,110.6).s().p("AvnD6IAAnzIfPAAIAAHzg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-100,-25,200,50);


(lib.mcAltMenu5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop()
	}
	this.frame_1 = function() {
		this.gizlibuton.addEventListener("mouseover",Gizle.bind(this));
		
		function Gizle ()
		{
			
			this.gotoAndStop(0);	
		
		}
		
		
		this.buton51.addEventListener("click", fl_ClickToGoToWebPage51);
		
		function fl_ClickToGoToWebPage51() {
			window.open("https://kmyo.kastamonu.edu.tr/index.php/tr/", "_blank");
		}
		
		
		this.buton52.addEventListener("click", fl_ClickToGoToWebPage52);
		
		function fl_ClickToGoToWebPage52() {
			window.open("https://gungorenanadolulisesi.meb.k12.tr/", "_blank");
		}
		
		
		this.buton53.addEventListener("click", fl_ClickToGoToWebPage53);
		
		function fl_ClickToGoToWebPage53() {
			window.open("http://www.rize.bel.tr/", "_blank");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// gizlibuton
	this.gizlibuton = new lib.gizlibuton();
	this.gizlibuton.name = "gizlibuton";
	this.gizlibuton.setTransform(0.1,-33.95);
	this.gizlibuton._off = true;
	new cjs.ButtonHelper(this.gizlibuton, 0, 1, 2, false, new lib.gizlibuton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.gizlibuton).wait(1).to({_off:false},0).wait(1));

	// butonlar
	this.buton51 = new lib.Button51();
	this.buton51.name = "buton51";
	this.buton51.setTransform(0,-50);
	new cjs.ButtonHelper(this.buton51, 0, 1, 2);

	this.buton52 = new lib.Button52();
	this.buton52.name = "buton52";
	new cjs.ButtonHelper(this.buton52, 0, 1, 2);

	this.buton53 = new lib.Button53();
	this.buton53.name = "buton53";
	this.buton53.setTransform(0,50);
	new cjs.ButtonHelper(this.buton53, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.buton53},{t:this.buton52},{t:this.buton51}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-140.6,-174.7,281.4,281.5);


(lib.mcAltMenu4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop()
	}
	this.frame_1 = function() {
		this.gizlibuton2.addEventListener("mouseover",Gizle.bind(this));
		
		function Gizle ()
		{
			
			this.gotoAndStop(0);	
		
		}
		
		this.buton41.addEventListener("click", fl_ClickToGoToWebPage41);
		
		function fl_ClickToGoToWebPage41() {
		 window.location.href = "https://www.formula1.com/";
		}
		
		
		this.buton42.addEventListener("click", fl_ClickToGoToWebPage42);
		
		function fl_ClickToGoToWebPage42() {
			window.open("https://open.spotify.com/user/21n5ajgsr5yjr7ma36n354i7q?si=8bc07753861044a0", "_blank");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// gizlibuton
	this.gizlibuton2 = new lib.gizlibuton2();
	this.gizlibuton2.name = "gizlibuton2";
	this.gizlibuton2.setTransform(-4,-46);
	this.gizlibuton2._off = true;
	new cjs.ButtonHelper(this.gizlibuton2, 0, 1, 2, false, new lib.gizlibuton2(), 3);

	this.timeline.addTween(cjs.Tween.get(this.gizlibuton2).wait(1).to({_off:false},0).wait(1));

	// butonlar
	this.buton41 = new lib.Button41();
	this.buton41.name = "buton41";
	this.buton41.setTransform(0,-25);
	new cjs.ButtonHelper(this.buton41, 0, 1, 2);

	this.buton42 = new lib.Button42();
	this.buton42.name = "buton42";
	this.buton42.setTransform(0,25);
	new cjs.ButtonHelper(this.buton42, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.buton42},{t:this.buton41}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-139.5,-181.5,271,271);


(lib.mcAltMenu3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop()
	}
	this.frame_1 = function() {
		this.gizlibuton3.addEventListener("mouseover",Gizle.bind(this));
		
		function Gizle ()
		{
			
			this.gotoAndStop(0);	
		
		}
		
		
		this.buton31.addEventListener("click", fl_ClickToGoToWebPage31);
		
		function fl_ClickToGoToWebPage31() {
			window.open("http://tahakocal.tech/src/hafta2/hafta2.html?i=1", "_blank");
		}
		
		this.buton32.addEventListener("click", fl_ClickToGoToWebPage32);
		
		function fl_ClickToGoToWebPage32() {
			window.open("http://tahakocal.tech/src/hafta3/hafta3.html?i=1", "_blank");
		}
		
		this.buton33.addEventListener("click", fl_ClickToGoToWebPage33);
		
		function fl_ClickToGoToWebPage33() {
			window.open("http://tahakocal.tech/src/hafta4/hafta4.html?i=1", "_blank");
		}
		
		this.buton34.addEventListener("click", fl_ClickToGoToWebPage34);
		
		function fl_ClickToGoToWebPage34() {
			window.open("http://tahakocal.tech/src/hafta9/hafta9.html?i=1", "_blank");
		}
		
		this.buton35.addEventListener("click", fl_ClickToGoToWebPage35);
		
		function fl_ClickToGoToWebPage35() {
			window.open("http://tahakocal.tech/src/hafta10/hafta10.html?i=1", "_blank");
		}
		
		this.buton36.addEventListener("click", fl_ClickToGoToWebPage36);
		
		function fl_ClickToGoToWebPage36() {
			window.open("http://tahakocal.tech/src/hafta11/hafta11.html?i=1", "_blank");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// gizlibuton
	this.gizlibuton3 = new lib.gizlibuton3();
	this.gizlibuton3.name = "gizlibuton3";
	this.gizlibuton3.setTransform(-4.4,63.5);
	this.gizlibuton3._off = true;
	new cjs.ButtonHelper(this.gizlibuton3, 0, 1, 2, false, new lib.gizlibuton3(), 3);

	this.timeline.addTween(cjs.Tween.get(this.gizlibuton3).wait(1).to({_off:false},0).wait(1));

	// butonlar
	this.buton36 = new lib.Button36();
	this.buton36.name = "buton36";
	this.buton36.setTransform(0,225);
	new cjs.ButtonHelper(this.buton36, 0, 1, 2);

	this.buton35 = new lib.Button35();
	this.buton35.name = "buton35";
	this.buton35.setTransform(0,175);
	new cjs.ButtonHelper(this.buton35, 0, 1, 2);

	this.buton34 = new lib.Button34();
	this.buton34.name = "buton34";
	this.buton34.setTransform(0,125);
	new cjs.ButtonHelper(this.buton34, 0, 1, 2);

	this.buton33 = new lib.Button33();
	this.buton33.name = "buton33";
	this.buton33.setTransform(0,75);
	new cjs.ButtonHelper(this.buton33, 0, 1, 2);

	this.buton31 = new lib.Button31();
	this.buton31.name = "buton31";
	this.buton31.setTransform(0,-25);
	new cjs.ButtonHelper(this.buton31, 0, 1, 2);

	this.buton32 = new lib.Button32();
	this.buton32.name = "buton32";
	this.buton32.setTransform(0,25);
	new cjs.ButtonHelper(this.buton32, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.buton32},{t:this.buton31},{t:this.buton33},{t:this.buton34},{t:this.buton35},{t:this.buton36}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-162.9,-143.9,317,414.9);


(lib.mcAltMenu2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop()
	}
	this.frame_1 = function() {
		this.gizlibuton.addEventListener("mouseover",Gizle.bind(this));
		
		function Gizle ()
		{
			
			this.gotoAndStop(0);	
		
		}
		
		
		this.buton21.addEventListener("click", fl_ClickToGoToWebPage21);
		
		function fl_ClickToGoToWebPage21() {
			window.open("http://tahakocal.tech/src/hafta11/hafta11.html?i=1", "_blank");
		}
		
		this.buton22.addEventListener("click", fl_ClickToGoToWebPage22);
		
		function fl_ClickToGoToWebPage22() {
			window.open("http://tahakocal.tech/src/redbull/hafta11redbull.html?i=1", "_blank");
		}
		
		this.buton23.addEventListener("click", fl_ClickToGoToWebPage23);
		
		function fl_ClickToGoToWebPage23() {
			window.open("http://tahakocal.tech/src/rize/hafta11rize.html?i=1", "_blank");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// gizlibuton
	this.gizlibuton = new lib.gizlibuton();
	this.gizlibuton.name = "gizlibuton";
	this.gizlibuton.setTransform(-1.25,-32.25);
	this.gizlibuton._off = true;
	new cjs.ButtonHelper(this.gizlibuton, 0, 1, 2, false, new lib.gizlibuton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.gizlibuton).wait(1).to({_off:false},0).wait(1));

	// butonlar
	this.buton22 = new lib.Button22();
	this.buton22.name = "buton22";
	new cjs.ButtonHelper(this.buton22, 0, 1, 2);

	this.buton21 = new lib.Button21();
	this.buton21.name = "buton21";
	this.buton21.setTransform(0,-50);
	new cjs.ButtonHelper(this.buton21, 0, 1, 2);

	this.buton23 = new lib.Button23();
	this.buton23.name = "buton23";
	this.buton23.setTransform(0,50);
	new cjs.ButtonHelper(this.buton23, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.buton23},{t:this.buton21},{t:this.buton22}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-142,-173,281.5,281.5);


(lib.mcMenu = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.btn2.addEventListener("mouseover",Ac1.bind(this));
		
		function Ac1 ()
		{
			this.mcAltMenu2.gotoAndStop(1);
			this.mcAltMenu3.gotoAndStop(0);
			this.mcAltMenu4.gotoAndStop(0);
			this.mcAltMenu5.gotoAndStop(0);
			
		}
		
		this.btn3.addEventListener("mouseover",Ac2.bind(this));
		
		function Ac2 ()
		{
			this.mcAltMenu2.gotoAndStop(0);
			this.mcAltMenu3.gotoAndStop(1);
			this.mcAltMenu4.gotoAndStop(0);
			this.mcAltMenu5.gotoAndStop(0);
		
		}
		
		this.btn4.addEventListener("mouseover",Ac3.bind(this));
		
		function Ac3 ()
		{
			this.mcAltMenu2.gotoAndStop(0);
			this.mcAltMenu3.gotoAndStop(0);
			this.mcAltMenu4.gotoAndStop(1);
			this.mcAltMenu5.gotoAndStop(0);
		}
		
		this.btn5.addEventListener("mouseover",Ac4.bind(this));
		
		function Ac4 ()
		{
			this.mcAltMenu2.gotoAndStop(0);
			this.mcAltMenu3.gotoAndStop(0);
			this.mcAltMenu4.gotoAndStop(0);
			this.mcAltMenu5.gotoAndStop(1);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// AltMenu
	this.mcAltMenu2 = new lib.mcAltMenu2();
	this.mcAltMenu2.name = "mcAltMenu2";
	this.mcAltMenu2.setTransform(-300,100);

	this.timeline.addTween(cjs.Tween.get(this.mcAltMenu2).wait(1));

	// UstMenu
	this.mcAltMenu5 = new lib.mcAltMenu5();
	this.mcAltMenu5.name = "mcAltMenu5";
	this.mcAltMenu5.setTransform(300,100);

	this.mcAltMenu4 = new lib.mcAltMenu4();
	this.mcAltMenu4.name = "mcAltMenu4";
	this.mcAltMenu4.setTransform(100,75);

	this.mcAltMenu3 = new lib.mcAltMenu3();
	this.mcAltMenu3.name = "mcAltMenu3";
	this.mcAltMenu3.setTransform(-100,75);

	this.btn6 = new lib.Button6();
	this.btn6.name = "btn6";
	this.btn6.setTransform(500,0);
	new cjs.ButtonHelper(this.btn6, 0, 1, 2);

	this.btn5 = new lib.Button5();
	this.btn5.name = "btn5";
	this.btn5.setTransform(300,0);
	new cjs.ButtonHelper(this.btn5, 0, 1, 2);

	this.btn4 = new lib.Button4();
	this.btn4.name = "btn4";
	this.btn4.setTransform(100,0);
	new cjs.ButtonHelper(this.btn4, 0, 1, 2);

	this.btn3 = new lib.Button3();
	this.btn3.name = "btn3";
	this.btn3.setTransform(-100,0);
	new cjs.ButtonHelper(this.btn3, 0, 1, 2);

	this.btn2 = new lib.Button2();
	this.btn2.name = "btn2";
	this.btn2.setTransform(-300,0);
	new cjs.ButtonHelper(this.btn2, 0, 1, 2);

	this.btn1 = new lib.Button1();
	this.btn1.name = "btn1";
	this.btn1.setTransform(-500,0);
	new cjs.ButtonHelper(this.btn1, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn1},{t:this.btn2},{t:this.btn3},{t:this.btn4},{t:this.btn5},{t:this.btn6},{t:this.mcAltMenu3},{t:this.mcAltMenu4},{t:this.mcAltMenu5}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mcMenu, new cjs.Rectangle(-600,-25,1200,50), null);


// stage content:
(lib.hatfa13odev = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.mcMenu();
	this.instance.setTransform(600,25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(600,175,600,-50);
// library properties:
lib.properties = {
	id: 'ACF0D3117E08A64BAC0D31F319FC9FE2',
	width: 1200,
	height: 350,
	fps: 24,
	color: "#313131",
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
an.compositions['ACF0D3117E08A64BAC0D31F319FC9FE2'] = {
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