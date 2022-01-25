<template>
	<div id="wallet_make" class="wallet">
		<div class="wallet_list">
			<div class="top">
				<h2>총 보유 금액</h2>
				<div>
					<div>
						<span>WT</span>
						<p>54,000,500</p>
						<a href="javascript:"><img src="../assets/common/ico-16-refresh-w.svg" alt="새로고침" /></a>
					</div>
					<p>KRW 54,000,500</p>
				</div>
			</div>
		</div>

		<div class="contents_wrap">
			<form>
				<div class="input_wrap">
					<div class="col">
						<label for="input_01">지갑 이름</label>
						<input id="input_01" type="text" value="여행가자!" />
					</div>
					<div class="col">
						<label for="input_02">연결 지갑주소</label>
						<input id="input_02" type="text" value="3Ddfex34tDF33ddjTc" />
					</div>
				</div>
				<div class="input_wrap">
					<p>지갑 연결 계좌 정보</p>
					<div class="col">
						<label for="input_03">금융계좌 선택</label>
						<select id="input_03">
							<option>NH 은행</option>
						</select>
					</div>
					<div class="col">
						<label for="input_04">예금주</label>
						<input id="input_04" type="text" value="홍길동" />
					</div>
					<div class="col">
						<label for="input_05">계좌번호</label>
						<input id="input_05" type="text" value="312-8837-1234-21" />
					</div>
					<div class="btn_wrap"><input type="submit" value="인증 요청" ></div>
				</div>
			</form>
		</div>
	</div>
</template>