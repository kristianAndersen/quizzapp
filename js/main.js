document.addEventListener('DOMContentLoaded', function() {

    console.log('domcon loadet')



    // ad a goddang fabric canvas to the mix
    var canvas= window._canvas = new fabric.Canvas('quizzapp');

    //create the yellow background, it is bitching
        var yellowsquare = new fabric.Rect({
            left: -1,
            top: -1,
            width: 541,
            height: 676,
            fill: '#ebb11a'
        });

        canvas.add(yellowsquare);
        yellowsquare.selectable=false;
        //now jazz it up with a gradient
        yellowsquare.setGradient('fill', {
           
            type: 'radial',
           
            r1: (yellowsquare.width / 2)+250,
            r2: 150,
           
            x1: (yellowsquare.width / 2),
            y1: (yellowsquare.height / 2)+50,
           
            x2: (yellowsquare.width / 2),
            y2: (yellowsquare.height / 2)+50,
           
            colorStops: {
                0: '#ebb11a',
                1: '#dc801d'
            }
        });


        fabric.loadSVGFromURL("./img/oddsetlogo-01.svg",function(objects,options)
        {
         
          var loadedObjects = fabric.util.groupSVGElements(objects, options);
          loadedObjects.set({
            left: 20,
            top: 590,
            width:500,
            height:100
          });
          canvas.add(loadedObjects);
        //   /canvas.sendToFront(loadedObjects);
        })


        canvas.on('text:changed', function(opt) {
          
            if(opt.target.name!='subtxt'){
            let textEl = canvas.getActiveObject()
            textEl.set('text', textEl.text.toUpperCase())
            }
        
        });
     

// now for the awesome text stuff
      
        var preheadline = new fabric.IText("GÆT RIGTIGT OG VIND 200 KRONER!", { 
            fontStyle: 'italic',
            fontFamily: "Avenir Next LT Pro Demi Condensed Italic", 
            left: canvas.width/2,
            top: 45,
            width:450,
            fontSize: 24,
            textAlign: "center",
            fill: "#000000",
            hasBorders: false,
            hasControls: false,
            lockMovementX: true,
            lockMovementY: false,
            originX: 'center',
            originY: 'center',
            fixedWidth:500
        });
        
        canvas.add(preheadline)
        canvas.renderAll();

        let headline = new fabric.IText("AWESOME TEAM\n vs \nTEAM AWESOME", {  
            fontStyle: 'italic',
            fontFamily: "Avenir Next LT Pro Heavy Condensed Italic", 
            left: canvas.width/2,
            top: 160,
            width:400,
            height:40,
            fontSize: 60,
            textAlign: "center",
            fill: "#000000",
            hasBorders: false,
            hasControls: false,
            lockMovementX: true,
            lockMovementY: true,
            originX: 'center',
            originY: 'center',
            fixedWidth:400,
            breakWords: true,
            lineHeight : 0.9
        });

        headline.set('fontCharacterStyle', 'Caps');
        canvas.add(headline)
        canvas.renderAll();


        var numtxt1 = new fabric.Textbox("1", { 
            fontStyle: 'italic',
            fontFamily: "Avenir Next LT Pro Heavy Condensed Italic", 
            left: 85,
            top: 350,
            width:160,
            height:40,
            fontSize: 55,
            textAlign: "center",
            fill: "#000000",
            hasBorders: false,
            hasControls: false,
            lockMovementX: true,
            lockMovementY: true,
            originX: 'center',
            originY: 'center',
            fixedWidth:160,
            breakWords: false
        });

        canvas.add(numtxt1)
        canvas.renderAll();
        numtxt1.set('backgroundColor', 'rgba\(0,220,0,0\)');

        var numtxt2 = new fabric.Textbox("2", { 
            fontStyle: 'italic',
            fontFamily: "Avenir Next LT Pro Heavy Condensed Italic", 
            left: 270,
            top: 350,
            width:160,
            height:40,
            fontSize: 55,
            textAlign: "center",
            fill: "#000000",
            hasBorders: false,
            hasControls: false,
            lockMovementX: true,
            lockMovementY: true,
            originX: 'center',
            originY: 'center',
            fixedWidth:160,
            breakWords: false
        });

        canvas.add(numtxt2)
        canvas.renderAll();
        numtxt2.set('backgroundColor', 'rgba\(0,220,0,0\)');

        var numtxt3 = new fabric.Textbox("3", { 
            fontStyle: 'italic',
            fontFamily: "Avenir Next LT Pro Heavy Condensed Italic", 
            left: 450,
            top: 350,
            width:160,
            height:40,
            fontSize: 55,
            textAlign: "center",
            fill: "#000000",
            hasBorders: false,
            hasControls: false,
            lockMovementX: true,
            lockMovementY: true,
            originX: 'center',
            originY: 'center',
            fixedWidth:160,
            breakWords: false
        });

        canvas.add(numtxt3)
        canvas.renderAll();
        numtxt3.set('backgroundColor', 'rgba\(0,220,0,0\)');

        var numtxt4 = new fabric.Textbox("4", { 
            fontStyle: 'italic',
            fontFamily: "Avenir Next LT Pro Heavy Condensed Italic", 
            left: 85,
            top: 500,
            width:160,
            height:40,
            fontSize: 55,
            textAlign: "center",
            fill: "#000000",
            hasBorders: false,
            hasControls: false,
            lockMovementX: true,
            lockMovementY: true,
            originX: 'center',
            originY: 'center',
            fixedWidth:160,
            breakWords: false
        });

        canvas.add(numtxt4)
        numtxt4.set('backgroundColor', 'rgba\(0,220,0,0\)');
        canvas.renderAll();



        var numtxt5 = new fabric.Textbox("5", { 
            fontStyle: 'italic',
            fontFamily: "Avenir Next LT Pro Heavy Condensed Italic", 
            left: 270,
            top: 500,
            width:160,
            height:40,
            fontSize: 55,
            textAlign: "center",
            fill: "#000000",
            hasBorders: false,
            hasControls: false,
            lockMovementX: true,
            lockMovementY: true,
            originX: 'center',
            originY: 'center',
            fixedWidth:160,
            breakWords: false
        });
        canvas.add(numtxt5)
        numtxt5.set('backgroundColor', 'rgba\(0,220,0,0\)');
        canvas.renderAll();


        var numtxt6 = new fabric.Textbox("6", { 
            fontStyle: 'italic',
            fontFamily: "Avenir Next LT Pro Heavy Condensed Italic", 
            left: 450,
            top: 500,
            width:160,
            height:40,
            fontSize: 55,
            textAlign: "center",
            fill: "#000000",
            hasBorders: false,
            hasControls: false,
            lockMovementX: true,
            lockMovementY: true,
            originX: 'center',
            originY: 'center',
            fixedWidth:160,
            breakWords: false
        });

        canvas.add(numtxt6)
        numtxt6.set('backgroundColor', 'rgba\(0,220,0,0\)');
        canvas.renderAll()

//Add subtekst under the numbers

        var subtxt1 = new fabric.Textbox("Danmark vinder med mindst syv mål", { 
            fontStyle: 'italic',
            fontFamily: "Avenir Next LT Pro Demi Condensed Italic", 
            left: 5,
            top: 380,
            width:160,
            fontSize: 15,
            textAlign: "center",
            fill: "#000000",
            hasBorders: false,
            hasControls: false,
            lockMovementX: true,
            lockMovementY: true,
            originX: 'left',
            originY: 'top',
            fixedWidth:160,
            name:'subtxt'
        });

        canvas.add(subtxt1)
        canvas.renderAll()
        subtxt1.set('backgroundColor', 'rgba\(0,220,0,0\)');

        var subtxt2 = new fabric.Textbox("Danmark vinder med mindst syv mål", { 
            fontStyle: 'italic',
            fontFamily: "Avenir Next LT Pro Demi Condensed Italic",  
            left: 190,
            top: 380,
            width:160,
            fontSize: 15,
            textAlign: "center",
            fill: "#000000",
            hasBorders: false,
            hasControls: false,
            lockMovementX: true,
            lockMovementY: true,
            originX: 'left',
            originY: 'top',
            fixedWidth:160,
            name:'subtxt'
        });

        canvas.add(subtxt2)
        subtxt2.set('backgroundColor', 'rgba\(0,220,0,0\)');
        canvas.renderAll()
        
        var subtxt3 = new fabric.Textbox("Danmark vinder med mindst syv mål", { 
            fontStyle: 'italic',
            fontFamily: "Avenir Next LT Pro Demi Condensed Italic",  
            left: 370,
            top: 380,
            width:160,
            fontSize: 15,
            textAlign: "center",
            fill: "#000000",
            hasBorders: false,
            hasControls: false,
            lockMovementX: true,
            lockMovementY: true,
            originX: 'left',
            originY: 'top',
            fixedWidth:160,
            name:'subtxt'
        });

        canvas.add(subtxt3)
        subtxt3.set('backgroundColor', 'rgba\(0,220,0,0\)');
        canvas.renderAll()



        var subtxt4 = new fabric.Textbox("Danmark vinder med mindst syv mål", { 
            fontStyle: 'italic',
            fontFamily: "Avenir Next LT Pro Demi Condensed Italic",   
            left: 5,
            top: 530,
            width:160,
            fontSize: 15,
            textAlign: "center",
            fill: "#000000",
            hasBorders: false,
            hasControls: false,
            lockMovementX: true,
            lockMovementY: true,
            originX: 'left',
            originY: 'top',
            fixedWidth:160,
            name:'subtxt'
        });

        canvas.add(subtxt4)
        subtxt4.set('backgroundColor', 'rgba\(0,220,0,0\)');
        canvas.renderAll()


        var subtxt5 = new fabric.Textbox("Danmark vinder med mindst syv mål", { 
            fontStyle: 'italic',
            fontFamily: "Avenir Next LT Pro Demi Condensed Italic",   
            left: 190,
            top: 530,
            width:160,
            fontSize: 15,
            textAlign: "center",
            fill: "#000000",
            hasBorders: false,
            hasControls: false,
            lockMovementX: true,
            lockMovementY: true,
            originX: 'left',
            originY: 'top',
            fixedWidth:160,
            name:'subtxt'
        });

        canvas.add(subtxt5)
        subtxt5.set('backgroundColor', 'rgba\(0,220,0,0\)');
        canvas.renderAll()


        var subtxt6 = new fabric.Textbox("Danmark vinder med mindst syv mål", { 
            fontStyle: 'italic',
            fontFamily: "Avenir Next LT Pro Demi Condensed Italic",   
            left: 370,
            top: 530,
            width:160,
            fontSize: 15,
            textAlign: "center",
            fill: "#000000",
            hasBorders: false,
            hasControls: false,
            lockMovementX: true,
            lockMovementY: true,
            originX: 'left',
            originY: 'top',
            fixedWidth:160,
            name:'subtxt'
        });


        canvas.add(subtxt6)
        subtxt6.set('backgroundColor', 'rgba\(0,220,0,0\)');
        canvas.renderAll()





        var date = new Date();
var thedate = new Intl.DateTimeFormat('dk-DK').format(date);

var imageSaver = document.getElementById('dl');
imageSaver.addEventListener('click', saveImage, false);
function saveImage(e) {
    this.href =canvas.toDataURL({
    format: 'png',
    multiplier: 2
});


this.download = 'Oddsetquizz_'+thedate+'.png'
console.log("wooo")
}



});