<template>
	<div id="pin" class="wallet">
		<div class="contents_wrap">
			<form>
				<div class="input_wrap">
					<div class="col">
						<label for="input_01">핀번호</label>
						<div class="password">
							<span></span><span></span><span></span><span></span><span></span><span></span>
							<input id="input_01" type="password" maxlength="6" />
						</div>
					</div>
					<div class="btn_wrap">
						<input type="submit" value="핀번호 확인" >
						<a href="javascript:">비밀번호 찾기</a>
					</div>
				</div>
			</form>
		</div>
	</div>
</template>

<script>
export default {
	mounted() {
		const password = document.querySelector('input[type="password"]');
		password.addEventListener('focus', (event) => {
			if (event.target.value.length<6) {
				document.querySelector('.password span:nth-child('+(event.target.value.length+1)+')').classList.add('active');
			}
		});
		password.addEventListener('focusout', (event) => {
			for (var i=1;i<=6;i++){
				document.querySelector('.password span:nth-child('+i+')').classList.remove('active');
			}
		});		
		password.addEventListener('input', updateValue);
		function updateValue(e) {
			var value = e.target.value.length;
			for (var i=1;i<=6;i++){
				document.querySelector('.password span:nth-child('+i+')').classList.remove('active');
			}
			if (value>0) {
				document.querySelector('.password span:nth-child('+value+')').classList.add('filled');
			}
			if (value<6) {
				document.querySelector('.password span:nth-child('+(value+1)+')').classList.add('active');			
				document.querySelector('.password span:nth-child('+(value+1)+')').classList.remove('filled');
			} else {
				document.querySelector('.password span:nth-child('+value+')').classList.add('active');	
			}
		}
	}
}
</script>