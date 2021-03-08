<template>
<div v-if="show_BottomBar" class="footer">
    		<v-btn class="button" id="test1">
    			<v-icon>
    			mdi-format-list-bulleted-square
    			</v-icon>
    		</v-btn>
    		<v-btn class="button" id="test2">
    			<v-icon>
    			 mdi-qrcode-scan
    			</v-icon>
    		</v-btn>
    	</div>
</template>

<script>
export default {
    name: "BottomBar",
    data: () => ({
      show_BottomBar: true,
      
    //
  })
  }
</script>

<style>


#test1{
	background-color: red;
	color: white;
	border-radius: 0px;
}

#test2{
	background-color: black;
	color: white;
	border-radius: 0px;
}
.button{
	text-align: center;
	width:50%;
	
}

.footer{
	position: sticky;
	bottom:0;
}

</style>
 
