<template>
	<div id="wallet_viewitem" class="wallet">
		<div class="contents_wrap">
			<form>
				<div class="input_wrap">
					<div class="col">
						<label for="input_01">지갑 이름</label>
						<p>
							<input id="input_01" type="text" value="여행가자!" />
							<span><input id="checkbox_01" type="checkbox" checked /><label for="checkbox_01"></label></span>
						</p>
					</div>
					<div class="col">
						<label for="input_02">연결 계좌</label>
						<p>
							<input id="input_02" type="text" value="신한 : 123-234" />
							<span><input id="checkbox_02" type="checkbox" /><label for="checkbox_02"></label></span>
						</p>
					</div>
					<div class="col">
						<label for="input_03">연결 지갑주소</label>
						<p>
							<input id="input_03" type="text" value="3Ddfex34tDF33ddjTc" />
							<span><input id="checkbox_03" type="checkbox" /><label for="checkbox_03"></label></span>
						</p>
					</div>
					<div class="col">
						<label for="input_04">표시 금액</label>
						<p>
							<select id="input_04">
								<option>WONT + KRW</option>
							</select>
							<span><input id="checkbox_04" type="checkbox" checked /><label for="checkbox_04"></label></span>
						</p>
					</div>
					<div class="btn_wrap"><input type="submit" value="확인" ></div>
				</div>
			</form>
		</div>
	</div>
</template>