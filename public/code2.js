gdjs.endCode = {};
gdjs.endCode.localVariables = [];
gdjs.endCode.GDNewSpriteObjects1= [];
gdjs.endCode.GDNewSpriteObjects2= [];
gdjs.endCode.GDNewSprite2Objects1= [];
gdjs.endCode.GDNewSprite2Objects2= [];
gdjs.endCode.GDNewSprite3Objects1= [];
gdjs.endCode.GDNewSprite3Objects2= [];
gdjs.endCode.GDNewSprite4Objects1= [];
gdjs.endCode.GDNewSprite4Objects2= [];
gdjs.endCode.GDtimeObjects1= [];
gdjs.endCode.GDtimeObjects2= [];


gdjs.endCode.mapOfGDgdjs_9546endCode_9546GDNewSprite3Objects1Objects = Hashtable.newFrom({"NewSprite3": gdjs.endCode.GDNewSprite3Objects1});
gdjs.endCode.mapOfGDgdjs_9546endCode_9546GDNewSprite3Objects1Objects = Hashtable.newFrom({"NewSprite3": gdjs.endCode.GDNewSprite3Objects1});
gdjs.endCode.mapOfGDgdjs_9546endCode_9546GDNewSprite4Objects1Objects = Hashtable.newFrom({"NewSprite4": gdjs.endCode.GDNewSprite4Objects1});
gdjs.endCode.mapOfGDgdjs_9546endCode_9546GDNewSprite4Objects1Objects = Hashtable.newFrom({"NewSprite4": gdjs.endCode.GDNewSprite4Objects1});
gdjs.endCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs.endCode.GDNewSprite3Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs.endCode.GDNewSprite4Objects1);
{for(var i = 0, len = gdjs.endCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.endCode.GDNewSprite3Objects1[i].getBehavior("Effect").enableEffect("Effect", false);
}
}{for(var i = 0, len = gdjs.endCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.endCode.GDNewSprite4Objects1[i].getBehavior("Effect").enableEffect("Effect", false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs.endCode.GDNewSprite3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.endCode.mapOfGDgdjs_9546endCode_9546GDNewSprite3Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "level1", true);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs.endCode.GDNewSprite3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.endCode.mapOfGDgdjs_9546endCode_9546GDNewSprite3Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.endCode.GDNewSprite3Objects1 */
{for(var i = 0, len = gdjs.endCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.endCode.GDNewSprite3Objects1[i].getBehavior("Effect").enableEffect("Effect", true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs.endCode.GDNewSprite4Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.endCode.mapOfGDgdjs_9546endCode_9546GDNewSprite4Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "main", true);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs.endCode.GDNewSprite4Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.endCode.mapOfGDgdjs_9546endCode_9546GDNewSprite4Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.endCode.GDNewSprite4Objects1 */
{for(var i = 0, len = gdjs.endCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.endCode.GDNewSprite4Objects1[i].getBehavior("Effect").enableEffect("Effect", true);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("time"), gdjs.endCode.GDtimeObjects1);
{for(var i = 0, len = gdjs.endCode.GDtimeObjects1.length ;i < len;++i) {
    gdjs.endCode.GDtimeObjects1[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getLastVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2))));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "Y", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "level1", true);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "A", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "main", true);
}}

}


};

gdjs.endCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.endCode.GDNewSpriteObjects1.length = 0;
gdjs.endCode.GDNewSpriteObjects2.length = 0;
gdjs.endCode.GDNewSprite2Objects1.length = 0;
gdjs.endCode.GDNewSprite2Objects2.length = 0;
gdjs.endCode.GDNewSprite3Objects1.length = 0;
gdjs.endCode.GDNewSprite3Objects2.length = 0;
gdjs.endCode.GDNewSprite4Objects1.length = 0;
gdjs.endCode.GDNewSprite4Objects2.length = 0;
gdjs.endCode.GDtimeObjects1.length = 0;
gdjs.endCode.GDtimeObjects2.length = 0;

gdjs.endCode.eventsList0(runtimeScene);
gdjs.endCode.GDNewSpriteObjects1.length = 0;
gdjs.endCode.GDNewSpriteObjects2.length = 0;
gdjs.endCode.GDNewSprite2Objects1.length = 0;
gdjs.endCode.GDNewSprite2Objects2.length = 0;
gdjs.endCode.GDNewSprite3Objects1.length = 0;
gdjs.endCode.GDNewSprite3Objects2.length = 0;
gdjs.endCode.GDNewSprite4Objects1.length = 0;
gdjs.endCode.GDNewSprite4Objects2.length = 0;
gdjs.endCode.GDtimeObjects1.length = 0;
gdjs.endCode.GDtimeObjects2.length = 0;


return;

}

gdjs['endCode'] = gdjs.endCode;
