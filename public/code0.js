gdjs.mainCode = {};
gdjs.mainCode.localVariables = [];
gdjs.mainCode.GDNewSpriteObjects1= [];
gdjs.mainCode.GDNewSpriteObjects2= [];
gdjs.mainCode.GDNewSprite2Objects1= [];
gdjs.mainCode.GDNewSprite2Objects2= [];


gdjs.mainCode.mapOfGDgdjs_9546mainCode_9546GDNewSpriteObjects1Objects = Hashtable.newFrom({"NewSprite": gdjs.mainCode.GDNewSpriteObjects1});
gdjs.mainCode.mapOfGDgdjs_9546mainCode_9546GDNewSpriteObjects1Objects = Hashtable.newFrom({"NewSprite": gdjs.mainCode.GDNewSpriteObjects1});
gdjs.mainCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.mainCode.GDNewSpriteObjects1);
{for(var i = 0, len = gdjs.mainCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("Effect", false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.mainCode.GDNewSpriteObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.mainCode.mapOfGDgdjs_9546mainCode_9546GDNewSpriteObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.mainCode.GDNewSpriteObjects1 */
{for(var i = 0, len = gdjs.mainCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("Effect", true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.mainCode.GDNewSpriteObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.mainCode.mapOfGDgdjs_9546mainCode_9546GDNewSpriteObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13509204);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "level1", false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Any_Button_pressed.func(runtimeScene, 1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13509796);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "level1", false);
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.mainCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.mainCode.GDNewSpriteObjects1.length = 0;
gdjs.mainCode.GDNewSpriteObjects2.length = 0;
gdjs.mainCode.GDNewSprite2Objects1.length = 0;
gdjs.mainCode.GDNewSprite2Objects2.length = 0;

gdjs.mainCode.eventsList0(runtimeScene);
gdjs.mainCode.GDNewSpriteObjects1.length = 0;
gdjs.mainCode.GDNewSpriteObjects2.length = 0;
gdjs.mainCode.GDNewSprite2Objects1.length = 0;
gdjs.mainCode.GDNewSprite2Objects2.length = 0;


return;

}

gdjs['mainCode'] = gdjs.mainCode;
