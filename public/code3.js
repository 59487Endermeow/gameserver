gdjs.rankingCode = {};
gdjs.rankingCode.localVariables = [];
gdjs.rankingCode.GDNewSpriteObjects1= [];
gdjs.rankingCode.GDNewSpriteObjects2= [];
gdjs.rankingCode.GDNewSprite2Objects1= [];
gdjs.rankingCode.GDNewSprite2Objects2= [];
gdjs.rankingCode.GDtimeObjects1= [];
gdjs.rankingCode.GDtimeObjects2= [];
gdjs.rankingCode.GDNewSprite3Objects1= [];
gdjs.rankingCode.GDNewSprite3Objects2= [];
gdjs.rankingCode.GDtime2Objects1= [];
gdjs.rankingCode.GDtime2Objects2= [];
gdjs.rankingCode.GDtime3Objects1= [];
gdjs.rankingCode.GDtime3Objects2= [];


gdjs.rankingCode.mapOfGDgdjs_9546rankingCode_9546GDNewSprite2Objects1Objects = Hashtable.newFrom({"NewSprite2": gdjs.rankingCode.GDNewSprite2Objects1});
gdjs.rankingCode.mapOfGDgdjs_9546rankingCode_9546GDNewSprite2Objects1Objects = Hashtable.newFrom({"NewSprite2": gdjs.rankingCode.GDNewSprite2Objects1});
gdjs.rankingCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("time"), gdjs.rankingCode.GDtimeObjects1);
gdjs.copyArray(runtimeScene.getObjects("time2"), gdjs.rankingCode.GDtime2Objects1);
gdjs.copyArray(runtimeScene.getObjects("time3"), gdjs.rankingCode.GDtime3Objects1);
{for(var i = 0, len = gdjs.rankingCode.GDtimeObjects1.length ;i < len;++i) {
    gdjs.rankingCode.GDtimeObjects1[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(runtimeScene.getGame().getVariables().getFromIndex(4).getChild(0).getChild("time").getAsNumber()));
}
}{for(var i = 0, len = gdjs.rankingCode.GDtime2Objects1.length ;i < len;++i) {
    gdjs.rankingCode.GDtime2Objects1[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(runtimeScene.getGame().getVariables().getFromIndex(4).getChild(1).getChild("time").getAsNumber()));
}
}{for(var i = 0, len = gdjs.rankingCode.GDtime3Objects1.length ;i < len;++i) {
    gdjs.rankingCode.GDtime3Objects1[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(runtimeScene.getGame().getVariables().getFromIndex(4).getChild(2).getChild("time").getAsNumber()));
}
}}

}


{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.rankingCode.GDNewSprite2Objects1);
{for(var i = 0, len = gdjs.rankingCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.rankingCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("Effect", false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.rankingCode.GDNewSprite2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.rankingCode.mapOfGDgdjs_9546rankingCode_9546GDNewSprite2Objects1Objects, runtimeScene, true, false);
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "end", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.rankingCode.GDNewSprite2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.rankingCode.mapOfGDgdjs_9546rankingCode_9546GDNewSprite2Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.rankingCode.GDNewSprite2Objects1 */
{for(var i = 0, len = gdjs.rankingCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.rankingCode.GDNewSprite2Objects1[i].getBehavior("Effect").enableEffect("Effect", true);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "n");
if (isConditionTrue_0) {
}

}


};

gdjs.rankingCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.rankingCode.GDNewSpriteObjects1.length = 0;
gdjs.rankingCode.GDNewSpriteObjects2.length = 0;
gdjs.rankingCode.GDNewSprite2Objects1.length = 0;
gdjs.rankingCode.GDNewSprite2Objects2.length = 0;
gdjs.rankingCode.GDtimeObjects1.length = 0;
gdjs.rankingCode.GDtimeObjects2.length = 0;
gdjs.rankingCode.GDNewSprite3Objects1.length = 0;
gdjs.rankingCode.GDNewSprite3Objects2.length = 0;
gdjs.rankingCode.GDtime2Objects1.length = 0;
gdjs.rankingCode.GDtime2Objects2.length = 0;
gdjs.rankingCode.GDtime3Objects1.length = 0;
gdjs.rankingCode.GDtime3Objects2.length = 0;

gdjs.rankingCode.eventsList0(runtimeScene);
gdjs.rankingCode.GDNewSpriteObjects1.length = 0;
gdjs.rankingCode.GDNewSpriteObjects2.length = 0;
gdjs.rankingCode.GDNewSprite2Objects1.length = 0;
gdjs.rankingCode.GDNewSprite2Objects2.length = 0;
gdjs.rankingCode.GDtimeObjects1.length = 0;
gdjs.rankingCode.GDtimeObjects2.length = 0;
gdjs.rankingCode.GDNewSprite3Objects1.length = 0;
gdjs.rankingCode.GDNewSprite3Objects2.length = 0;
gdjs.rankingCode.GDtime2Objects1.length = 0;
gdjs.rankingCode.GDtime2Objects2.length = 0;
gdjs.rankingCode.GDtime3Objects1.length = 0;
gdjs.rankingCode.GDtime3Objects2.length = 0;


return;

}

gdjs['rankingCode'] = gdjs.rankingCode;
