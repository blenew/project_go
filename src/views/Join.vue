<template>
	<div id="join" class="wallet">
		<div class="contents_wrap">
			<form>
				<div class="input_wrap">
					<div class="col">
						<label for="input_01">아이디(이메일)</label>
						<input id="input_01" type="mail" placeholder="메일주소를 입력하세요." />
						<span>입력하신 메일로 인증링크를 보내드립니다.</span>
					</div>
					<div class="col">
						<label for="input_02">비밀번호 6자리 설정</label>
						<div class="password">
							<span></span><span></span><span></span><span></span><span></span><span></span>
							<input id="input_02" type="password" maxlength="6" />
						</div>
					</div>
					<div class="btn_wrap">
						<input class="btn_reverse" type="button" value="본인 인증하기" >
						<input type="submit" value="회원가입하기" >
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
			} else {
				document.querySelector('.password span:nth-child('+(event.target.value.length)+')').classList.add('active');
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