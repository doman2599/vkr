 $(document).ready(function(){
                $('#form').submit(function(event){
                    $.post("http://localhost:8000/cgi-bin/100videos.py",
                    {
                    	dataType: 'text',
                    	data:$("#in1").val()},
                    	onResponse);
                    return false;
                })
                function onResponse(data){
                	$("#in2").text(data);
                    console.log(data);
                    window.open("http://localhost:8000/"+data+"/"+data+".html", '_blank');
                }
            })