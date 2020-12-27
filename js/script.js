function showPreview(){
    var htmlCode = document.getElementById("HtmlCode").value;
    var cssCode = "<style>"+document.getElementById("CssCode").value+"</style>";
    var jsCode = "<scri"+"pt>"+document.getElementById("JsCode").value+"</scri"+"pt>";
    var frame = document.getElementById("preview-window").contentWindow.document;
    frame.open();
    frame.write(htmlCode+cssCode+jsCode);
    frame.close();
}