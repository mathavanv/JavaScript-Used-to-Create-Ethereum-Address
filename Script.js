<script>
$(document).ready(function(){
   var data = {
                "jsonrpc": "2.0",
                "method": "personal_newAccount",
                "params": [
                    "pass"
                    ],
                "id": 1
                }
                $.ajax({
                    type : "POST",
                    url : "http://localhost:8545",
                    dataType : "json",
                    contentType: "application/json; charset=utf-8",
                    data : JSON.stringify(data),
                    success : function(d) {
                        console.log(d);
                        patient_addr = d.result;
                        alert(patient_addr);
                    },
                    error : function(error) {
                        console.log(error);
                    }
                });
                
});
</script>