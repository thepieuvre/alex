// Created by iWeb 3.0.4 local-build-20130718

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWStrokeParts([{rect:new IWRect(-5,5,10,390),url:'Contact_Me_files/stroke.png'},{rect:new IWRect(-5,-5,10,10),url:'Contact_Me_files/stroke_1.png'},{rect:new IWRect(5,-5,390,10),url:'Contact_Me_files/stroke_2.png'},{rect:new IWRect(395,-5,10,10),url:'Contact_Me_files/stroke_3.png'},{rect:new IWRect(395,5,10,390),url:'Contact_Me_files/stroke_4.png'},{rect:new IWRect(395,395,10,10),url:'Contact_Me_files/stroke_5.png'},{rect:new IWRect(5,395,390,10),url:'Contact_Me_files/stroke_6.png'},{rect:new IWRect(-5,395,10,10),url:'Contact_Me_files/stroke_7.png'}],new IWSize(400,400))});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Contact_Me_files/Contact_MeMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');adjustLineHeightIfTooBig('id4');adjustFontSizeIfTooBig('id4');Widget.onload();fixupAllIEPNGBGs();fixAllIEPNGs('Media/transparent.gif');applyEffects()}
function onPageUnload()
{Widget.onunload();}
