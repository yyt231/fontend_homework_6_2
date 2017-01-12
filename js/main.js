/**
 * Created by Tony on 16/11/14.
 */
function changeThemeColor(color) {

        var menu = document.getElementById("menu-container");
        var i = 0;
        var children = menu.childNodes;
        for (i = 0; i < children.length; i++) {
            if (children[i].nodeType === 1) {
                children[i].style.backgroundColor = color;
            }
        }

        var setmainpage = document.getElementById("setmainpage");
        setmainpage.style.backgroundColor = color;

        var mainmenu = document.getElementById("main-website");
        for (var j = 0; j < mainmenu.children.length; j++) {
            var a=mainmenu.children[j];
            for(var x=0;x<a.children.length;x++){
                if(x>0){
                    a.children[x].style.color=color;
                }
            }
            // mainmenu.children[j].children[1].style.color = red;
        }
        localStorage.setItem("themeColor",color);

}

function saveTheme() {
    var themeColor=localStorage.getItem("themeColor");
    if(themeColor!=undefined){
        changeThemeColor(themeColor);
    }
}