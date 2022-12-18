let popup = document.getElementById("popup");
let back = parent.document.getElementById("back");
let loichuc = parent.document.getElementById("loichuc1");
function Show(){
    loichuc.remove()
    var htmsl = '<iframe id="loichuc2" style="position:fixed; top:0; left:0; bottom:0; right:0; width:100%; height:100%; border:none; margin:0; padding:0; overflow:hidden; z-index:999999;" src="../html/loichuc2.html" ></iframe>'
    back.insertAdjacentHTML('afterend',htmsl)
}