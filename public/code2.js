gdjs.endCode = {};
gdjs.endCode.localVariables = [];
gdjs.endCode.GDNewSpriteObjects1= [];
gdjs.endCode.GDNewSpriteObjects2= [];
gdjs.endCode.GDNewSpriteObjects3= [];
gdjs.endCode.GDNewSprite2Objects1= [];
gdjs.endCode.GDNewSprite2Objects2= [];
gdjs.endCode.GDNewSprite2Objects3= [];
gdjs.endCode.GDNewSprite3Objects1= [];
gdjs.endCode.GDNewSprite3Objects2= [];
gdjs.endCode.GDNewSprite3Objects3= [];
gdjs.endCode.GDNewSprite4Objects1= [];
gdjs.endCode.GDNewSprite4Objects2= [];
gdjs.endCode.GDNewSprite4Objects3= [];
gdjs.endCode.GDtimeObjects1= [];
gdjs.endCode.GDtimeObjects2= [];
gdjs.endCode.GDtimeObjects3= [];
gdjs.endCode.GDrank2Objects1= [];
gdjs.endCode.GDrank2Objects2= [];
gdjs.endCode.GDrank2Objects3= [];
gdjs.endCode.GDimputnameObjects1= [];
gdjs.endCode.GDimputnameObjects2= [];
gdjs.endCode.GDimputnameObjects3= [];


gdjs.endCode.mapOfGDgdjs_9546endCode_9546GDNewSprite3Objects1Objects = Hashtable.newFrom({"NewSprite3": gdjs.endCode.GDNewSprite3Objects1});
gdjs.endCode.mapOfGDgdjs_9546endCode_9546GDNewSprite3Objects1Objects = Hashtable.newFrom({"NewSprite3": gdjs.endCode.GDNewSprite3Objects1});
gdjs.endCode.mapOfGDgdjs_9546endCode_9546GDNewSprite4Objects1Objects = Hashtable.newFrom({"NewSprite4": gdjs.endCode.GDNewSprite4Objects1});
gdjs.endCode.mapOfGDgdjs_9546endCode_9546GDNewSprite4Objects1Objects = Hashtable.newFrom({"NewSprite4": gdjs.endCode.GDNewSprite4Objects1});
gdjs.endCode.mapOfGDgdjs_9546endCode_9546GDrank2Objects1Objects = Hashtable.newFrom({"rank2": gdjs.endCode.GDrank2Objects1});
gdjs.endCode.eventsList0 = function(runtimeScene, asyncObjectsList) {

{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.network.jsonToVariableStructure(runtimeScene.getScene().getVariables().getFromIndex(1).getAsString(), runtimeScene.getGame().getVariables().getFromIndex(4));
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "ranking", false);
}}

}


};gdjs.endCode.asyncCallback10514900 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.endCode.localVariables);

{ //Subevents
gdjs.endCode.eventsList0(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.endCode.localVariables.length = 0;
}
gdjs.endCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.endCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.network.sendAwaitableAsyncRequest("/postscore", gdjs.evtTools.network.variableStructureToJSON(runtimeScene.getGame().getVariables().getFromIndex(3)), "POST", "application/json", runtimeScene.getScene().getVariables().getFromIndex(1), gdjs.VariablesContainer.badVariable), (runtimeScene) => (gdjs.endCode.asyncCallback10514900(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.endCode.mapOfGDgdjs_9546endCode_9546GDrank2Objects1Objects = Hashtable.newFrom({"rank2": gdjs.endCode.GDrank2Objects1});
gdjs.endCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs.endCode.GDNewSprite3Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs.endCode.GDNewSprite4Objects1);
gdjs.copyArray(runtimeScene.getObjects("rank2"), gdjs.endCode.GDrank2Objects1);
{for(var i = 0, len = gdjs.endCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.endCode.GDNewSprite3Objects1[i].getBehavior("Effect").enableEffect("Effect", false);
}
}{for(var i = 0, len = gdjs.endCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.endCode.GDNewSprite4Objects1[i].getBehavior("Effect").enableEffect("Effect", false);
}
}{for(var i = 0, len = gdjs.endCode.GDrank2Objects1.length ;i < len;++i) {
    gdjs.endCode.GDrank2Objects1[i].getBehavior("Effect").enableEffect("Effect", false);
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
    gdjs.endCode.GDtimeObjects1[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(runtimeScene.getGame().getVariables().getFromIndex(3).getChild("time").getAsNumber()));
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


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "k");
if (isConditionTrue_0) {
{gdjs.evtTools.window.openURL("https://www.youtube.com/watch?v=dQw4w9WgXcQ", runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("rank2"), gdjs.endCode.GDrank2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.endCode.mapOfGDgdjs_9546endCode_9546GDrank2Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14066468);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("imputname"), gdjs.endCode.GDimputnameObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(3).getChild("name").setString((( gdjs.endCode.GDimputnameObjects1.length === 0 ) ? "" :gdjs.endCode.GDimputnameObjects1[0].getBehavior("Text").getText()));
}{runtimeScene.getGame().getVariables().getFromIndex(3).getChild("time").setNumber(runtimeScene.getGame().getVariables().getFromIndex(3).getChild("time").getAsNumber());
}
{ //Subevents
gdjs.endCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("rank2"), gdjs.endCode.GDrank2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.endCode.mapOfGDgdjs_9546endCode_9546GDrank2Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.endCode.GDrank2Objects1 */
{for(var i = 0, len = gdjs.endCode.GDrank2Objects1.length ;i < len;++i) {
    gdjs.endCode.GDrank2Objects1[i].getBehavior("Effect").enableEffect("Effect", true);
}
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.endCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.endCode.GDNewSpriteObjects1.length = 0;
gdjs.endCode.GDNewSpriteObjects2.length = 0;
gdjs.endCode.GDNewSpriteObjects3.length = 0;
gdjs.endCode.GDNewSprite2Objects1.length = 0;
gdjs.endCode.GDNewSprite2Objects2.length = 0;
gdjs.endCode.GDNewSprite2Objects3.length = 0;
gdjs.endCode.GDNewSprite3Objects1.length = 0;
gdjs.endCode.GDNewSprite3Objects2.length = 0;
gdjs.endCode.GDNewSprite3Objects3.length = 0;
gdjs.endCode.GDNewSprite4Objects1.length = 0;
gdjs.endCode.GDNewSprite4Objects2.length = 0;
gdjs.endCode.GDNewSprite4Objects3.length = 0;
gdjs.endCode.GDtimeObjects1.length = 0;
gdjs.endCode.GDtimeObjects2.length = 0;
gdjs.endCode.GDtimeObjects3.length = 0;
gdjs.endCode.GDrank2Objects1.length = 0;
gdjs.endCode.GDrank2Objects2.length = 0;
gdjs.endCode.GDrank2Objects3.length = 0;
gdjs.endCode.GDimputnameObjects1.length = 0;
gdjs.endCode.GDimputnameObjects2.length = 0;
gdjs.endCode.GDimputnameObjects3.length = 0;

gdjs.endCode.eventsList2(runtimeScene);
gdjs.endCode.GDNewSpriteObjects1.length = 0;
gdjs.endCode.GDNewSpriteObjects2.length = 0;
gdjs.endCode.GDNewSpriteObjects3.length = 0;
gdjs.endCode.GDNewSprite2Objects1.length = 0;
gdjs.endCode.GDNewSprite2Objects2.length = 0;
gdjs.endCode.GDNewSprite2Objects3.length = 0;
gdjs.endCode.GDNewSprite3Objects1.length = 0;
gdjs.endCode.GDNewSprite3Objects2.length = 0;
gdjs.endCode.GDNewSprite3Objects3.length = 0;
gdjs.endCode.GDNewSprite4Objects1.length = 0;
gdjs.endCode.GDNewSprite4Objects2.length = 0;
gdjs.endCode.GDNewSprite4Objects3.length = 0;
gdjs.endCode.GDtimeObjects1.length = 0;
gdjs.endCode.GDtimeObjects2.length = 0;
gdjs.endCode.GDtimeObjects3.length = 0;
gdjs.endCode.GDrank2Objects1.length = 0;
gdjs.endCode.GDrank2Objects2.length = 0;
gdjs.endCode.GDrank2Objects3.length = 0;
gdjs.endCode.GDimputnameObjects1.length = 0;
gdjs.endCode.GDimputnameObjects2.length = 0;
gdjs.endCode.GDimputnameObjects3.length = 0;


return;

}

gdjs['endCode'] = gdjs.endCode;
