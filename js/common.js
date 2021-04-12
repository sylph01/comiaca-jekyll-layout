function writeHeader(){
	    $.ajax({
	        url: "/header.html", //パスはcommon.jsが読み込まれたHTMLファイルが基準になります
	        cache: false, //キャッシュを利用するか（お好みで）
	        async: false, //非同期で読み込むか（お好みで）
		dataType: "text",
	        success: function(data,status,xhr){
			data = data.replace(/\{\$root\}/g, "/");
			document.write(data);
	        },
		error: function(data,status,xhr){
		      document.write("読み込みエラー。Ajaxが有効かチェックしてください");
		}
	    });
}

function writeFooter(){
	    $.ajax({
	        url: "/footer.html", //パスはcommon.jsが読み込まれたHTMLファイルが基準になります
	        cache: false, //キャッシュを利用するか（お好みで）
	        async: false, //非同期で読み込むか（お好みで）
		dataType: "text",
	        success: function(data,status,xhr){
			data = data.replace(/\{\$root\}/g, "/");
			document.write(data);
	        },
	    });
	 
}
