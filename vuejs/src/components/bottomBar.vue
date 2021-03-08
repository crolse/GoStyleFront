<template>
<div class="footer">
    		<v-btn class="button" id="leftB">
    			<v-icon>
    			mdi-format-list-bulleted-square
    			</v-icon>
    		</v-btn>
    		<v-btn class="button" id="rightB">
    			<v-icon>
    			 mdi-qrcode-scan
    			</v-icon>
    		</v-btn>
    	</div>
</template>

<script>
export default {
    name: "BottomBar"
  }
</script>

<style>


#leftB{
	background-color: red;
	color: white;
	border-radius: 0px;
}

#rightB{
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
 
