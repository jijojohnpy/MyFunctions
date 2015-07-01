$( document ).ready(function(){
     $.ajax({
         url: "http://jsonplaceholder.typicode.com/todos",
         success: function(result){
             localStorage.setItem("result", JSON.stringify(result));
             console.log("success");
         }
     });
     
     function displayTable(){
         var data=localStorage.getItem("result");
         var obj=JSON.parse(data);
         var tr=[];
        for(var i=0;i<obj.length;i++){
            tr.push('<tr>')
            tr.push("<td>"+obj[i].userId+"</td>");
            tr.push("<td>"+obj[i].id+"</td>");
            tr.push("<td>"+obj[i].title+"</td>");
			tr.push("<td>"+obj[i].completed+"</td>");
        }
        $('table').append($(tr.join('')));
     }
     $('#more1').click(function(){
         displayTable();
     });
         function displayData(k){
               var data=localStorage.getItem("result");
               var obj=JSON.parse(data);
            var tr=[];
            for(var i =0; i < 10 ; i++){
                tr.push('<tr>')
                tr.push("<td>"+obj[(k*10)+i].userId+"</td>");
                tr.push("<td>"+obj[(k*10)+i].id+"</td>");
                 tr.push("<td>"+obj[(k*10)+i].title+"</td>");
				 tr.push("<td>"+obj[(k*10)+i].completed+"</td>");
            }
            $('table').append($(tr.join('')));
            
        }
		var $rows = $('#table tr');
		$('#btnFilter').click(function(){
			$('#table tr').show();
			if($('#filter').val==userId){
				$('#table tr').filter(function(){
					return displayData($('#filter').val);
				}).hide();
			}
		});
     
});
