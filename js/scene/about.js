/**
 * About scene
 *
 * @author Sergey Volkov
 * @class Scene_About
 * @extends Scene
 */

Scene_About = (function (Scene) {

    var Scene_About = function(){
        this.construct.apply(this, arguments);
    };

    $.extend(true, Scene_About.prototype, Scene.prototype, {

        init: function () {
            console.log("About init");
        },

        create: function(){
            return $('#scene-about');
        },

        render: function () {
            console.log('render about scene');
        },

        activate: function(){
            console.log('activate about scene');
            // Focus.to()
        },

        /**
         * @inheritdoc Scene#onReturn
         */
        onReturn: function ($el) {
            Router.goBack();
        }

    });

    return Scene_About;

})(Scene);